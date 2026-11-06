"use client";

import { useEffect, useRef } from "react";
import ProtectedImage from "@/components/ProtectedImage";

export default function GlassSculpture() {
  const surface = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = surface.current;
    const hero = canvas?.closest("section");
    if (!canvas || !hero || !window.WebGL2RenderingContext) return;

    let active = true;
    let dispose: (() => void) | undefined;
    import("@/lib/glassScene").then(({ mountGlassScene }) => {
      if (active) dispose = mountGlassScene(canvas, hero);
    }).catch(() => { canvas.removeAttribute("data-ready"); });
    return () => {
      active = false;
      dispose?.();
    };
  }, []);

  return (
    <div className="hero-plate" aria-hidden="true">
      <ProtectedImage src="/images/oyun-ve-denge.webp" alt="" fill priority sizes="100vw" />
      <canvas ref={surface} />
    </div>
  );
}
