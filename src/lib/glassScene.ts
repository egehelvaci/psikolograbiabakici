import * as THREE from "three";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";

function glass(color: number, tint: number, thickness: number) {
  const material = new THREE.MeshPhysicalMaterial({
    color, attenuationColor: tint, attenuationDistance: 1.35,
    transmission: 0.98, thickness, ior: 1.52, roughness: 0.065,
    clearcoat: 0.34, clearcoatRoughness: 0.045,
    envMapIntensity: 0.92,
  });
  // The transmission buffer sees the wall. Trace an exit ray through a rounded
  // cross-section as well, so light outside the camera frame can enter the glass.
  material.onBeforeCompile = shader => {
    shader.fragmentShader = shader.fragmentShader.replace("#include <transmission_fragment>",
      THREE.ShaderChunk.transmission_fragment.replace("totalDiffuse = mix", `
        vec3 insideRay = refract(-v, n, 1.0 / material.ior);
        vec3 exitNormal = normalize(n - 2.0 * dot(n, insideRay) * insideRay);
        vec3 exitRay = refract(insideRay, -exitNormal, material.ior);
        vec3 studioLight = textureLod(envMap, envMapRotation * exitRay, roughnessToMip(0.055)).rgb;
        float pathLength = material.thickness * max(0.2, -dot(n, insideRay));
        vec3 absorption = volumeAttenuation(pathLength, material.attenuationColor, material.attenuationDistance);
        transmitted.rgb += studioLight * absorption * material.diffuseContribution * 0.55;
        totalDiffuse = mix`));
  };
  return material;
}

function makeSculpture() {
  const sculpture = new THREE.Group();
  const outline = new THREE.Shape();
  outline.moveTo(-1.15, 0);
  outline.lineTo(-1.15, 0.53);
  outline.absarc(0, 0.53, 1.15, Math.PI, 0, true);
  outline.lineTo(1.15, 0);
  outline.lineTo(0.59, 0);
  outline.lineTo(0.59, 0.53);
  outline.absarc(0, 0.53, 0.59, 0, Math.PI, false);
  outline.lineTo(-0.59, 0);
  outline.closePath();

  const archForm = new THREE.ExtrudeGeometry(outline, {
    depth: 0.62, bevelEnabled: true, bevelSize: 0.065, bevelThickness: 0.065,
    bevelSegments: 8, curveSegments: 48,
  });
  archForm.translate(0, 0, -0.31);
  const arch = new THREE.Mesh(toCreasedNormals(archForm), glass(0xf4f2aa, 0x99ab40, 0.92));
  arch.position.y = 0.065;

  const bar = new THREE.Mesh(new THREE.CapsuleGeometry(0.205, 2.86, 12, 64), glass(0xffcf78, 0xe78c20, 0.76));
  bar.rotation.z = -Math.PI / 2 + 0.145;
  bar.position.set(0.025, 2.025, 0);

  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.735, 80, 56), glass(0xffffbc, 0xc2cf48, 1.48));
  orb.position.set(0.06, 2.985, 0);
  const marble = new THREE.Mesh(new THREE.SphereGeometry(0.255, 48, 36), glass(0xffe5a2, 0xba670c, 0.66));
  marble.position.set(1.63, 0.255, 0.32);

  sculpture.add(arch, bar, orb, marble);
  sculpture.children.forEach(part => { part.castShadow = true; });
  return sculpture;
}

// A narrow pool of transmitted light follows the two feet and the amber marble.
function makeFloorLight() {
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { drift: { value: 0 } },
    vertexShader: `
      varying vec2 floorPoint;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        floorPoint = world.xz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      varying vec2 floorPoint;
      uniform float drift;
      float lobe(vec2 p, vec2 origin, vec2 extent) {
        vec2 q = (p - origin) / extent;
        q.y += 0.45 * q.x + 0.12 * sin(q.x * 3.0 + drift);
        float r = length(q);
        float ring = exp(-14.0 * abs(r - 0.77));
        return ring * smoothstep(-0.9, 0.7, q.x) + 0.12 * exp(-2.5 * r * r);
      }
      void main() {
        vec2 p = floorPoint;
        p.x += drift * (0.15 + 0.12 * p.y);
        float green = lobe(p, vec2(-1.25, 0.42), vec2(1.6, 0.66))
                    + lobe(p, vec2(0.31, 0.38), vec2(1.17, 0.49));
        float amber = lobe(p, vec2(1.36, 0.49), vec2(0.57, 0.30));
        gl_FragColor = vec4(vec3(0.9, 0.77, 0.21) * green + vec3(1.0, 0.56, 0.09) * amber, 0.63);
      }`,
  });
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), material);
  pool.rotation.x = -Math.PI / 2;
  pool.renderOrder = 1;
  return pool;
}

export function mountGlassScene(canvas: HTMLCanvasElement, hero: HTMLElement) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "low-power" });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.transmissionResolutionScale = 0.75;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 60);
  const sculpture = makeSculpture();
  scene.add(sculpture);

  const key = new THREE.DirectionalLight(0xffedb2, 2.3);
  key.castShadow = true;
  key.shadow.mapSize.set(512, 512);
  Object.assign(key.shadow.camera, { left: -4, right: 4, top: 5, bottom: -4, near: 0.2, far: 22 });
  key.shadow.normalBias = 0.022;
  key.shadow.radius = 3;
  scene.add(key);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(26, 26), new THREE.ShadowMaterial({ color: 0x1b1905, opacity: 0.33 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.012;
  ground.receiveShadow = true;
  scene.add(ground);
  const floorLight = makeFloorLight();
  scene.add(floorLight);

  const textures: THREE.Texture[] = [];
  let backdrop: THREE.Texture<HTMLImageElement> | undefined;
  let ready = false;
  let disposed = false;
  let lost = false;
  let visible = true;
  let frame = 0;
  let previousTime = 0;
  const target = new THREE.Vector2();
  const current = new THREE.Vector2();
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

  function schedule() {
    if (frame || !ready || disposed || lost || !visible || document.hidden) return;
    frame = requestAnimationFrame(draw);
  }

  function draw(time: number) {
    frame = 0;
    const seconds = previousTime ? Math.min((time - previousTime) / 1000, 0.1) : 1 / 60;
    previousTime = time;
    current.lerp(target, 1 - Math.exp(-9 * seconds));
    sculpture.rotation.set(0, -0.16 + current.x * 0.265, 0);
    sculpture.rotation.x = current.y * 0.035;
    scene.environmentRotation.set(-0.10 + current.y * 0.08, 0.48 + current.x * 0.31, 0);
    key.position.set(4.5 + current.x * 2.8, 5.8 - current.y * 1.1, 2.8);
    floorLight.material.uniforms.drift.value = current.x;
    renderer.render(scene, camera);
    canvas.dataset.ready = "true";
    if (current.distanceToSquared(target) > 0.000004) schedule();
    else previousTime = 0;
  }

  function resize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    const aspect = width / height;
    const mobile = window.matchMedia("(max-width: 740px)").matches;
    const viewHeight = Math.max(mobile ? 5.12 : 4.98, (mobile ? 4.12 : 7.15) / aspect);
    const distance = viewHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    const centerY = mobile ? 1.87 : 1.78;
    camera.position.set(0, centerY + distance * 0.095, distance);
    camera.lookAt(0, centerY, 0);
    camera.aspect = aspect;
    camera.setViewOffset(width, height, (0.5 - (mobile ? 0.51 : 0.715)) * width, 0, width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(1600000 / (width * height))));
    renderer.setSize(width, height, false);
    if (backdrop) {
      const imageAspect = backdrop.image.width / backdrop.image.height;
      const u = Math.min(1, aspect / imageAspect);
      const v = Math.min(1, imageAspect / aspect);
      backdrop.repeat.set(u, v);
      backdrop.offset.set((1 - u) * (mobile ? 0.81 : 0.5), (1 - v) * (mobile ? 0.52 : 0.45));
    }
    schedule();
  }

  function move(event: PointerEvent) {
    if (event.pointerType !== "mouse" || motionPreference.matches) return;
    const bounds = hero.getBoundingClientRect();
    target.set(2 * (event.clientX - bounds.left) / bounds.width - 1, 2 * (event.clientY - bounds.top) / bounds.height - 1);
    schedule();
  }
  function reset() {
    target.set(0, 0);
    if (motionPreference.matches) current.copy(target);
    schedule();
  }
  function loseContext(event: Event) {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(frame);
    frame = 0;
    canvas.removeAttribute("data-ready");
  }
  function restoreContext() {
    lost = false;
    resize();
  }
  const resizeObserver = new ResizeObserver(resize);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) schedule();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    }
  });
  resizeObserver.observe(canvas);
  visibilityObserver.observe(canvas);
  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", reset);
  motionPreference.addEventListener("change", reset);
  document.addEventListener("visibilitychange", schedule);
  canvas.addEventListener("webglcontextlost", loseContext);
  canvas.addEventListener("webglcontextrestored", restoreContext);

  function track<T extends THREE.Texture>(texture: T) {
    if (disposed) texture.dispose();
    else textures.push(texture);
    return texture;
  }
  // The empty studio plate supplies the transmitted image, the studio HDR supplies reflections.
  // Lighting: Brown Photostudio 02 (CC0), polyhaven.com/a/brown_photostudio_02.
  Promise.all([
    new THREE.TextureLoader().loadAsync("/images/cam-atolyesi.webp").then(track),
    new HDRLoader().loadAsync("/lighting/studio.hdr").then(track),
  ]).then(([plate, environment]) => {
    if (disposed) return;
    plate.colorSpace = THREE.SRGBColorSpace;
    backdrop = plate;
    scene.background = plate;
    environment.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = environment;
    ready = true;
    resize();
  }).catch(dispose);

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    canvas.removeAttribute("data-ready");
    resizeObserver.disconnect();
    visibilityObserver.disconnect();
    hero.removeEventListener("pointermove", move);
    hero.removeEventListener("pointerleave", reset);
    motionPreference.removeEventListener("change", reset);
    document.removeEventListener("visibilitychange", schedule);
    canvas.removeEventListener("webglcontextlost", loseContext);
    canvas.removeEventListener("webglcontextrestored", restoreContext);
    scene.traverse(object => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        object.material.dispose();
      }
    });
    textures.forEach(texture => texture.dispose());
    key.shadow.dispose();
    renderer.dispose();
  }
  return dispose;
}
