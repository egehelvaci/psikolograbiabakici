"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/content/testimonials";

export default function TestimonialGallery() {
  const track = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  function move(direction: -1 | 1) {
    const el = track.current;
    if (!el) return;
    const [first, second] = el.children;
    if (!first || !second) return;
    const step = second.getBoundingClientRect().left - first.getBoundingClientRect().left;
    el.scrollBy({ left: direction * step, behavior: reduceMotion ? "instant" : "smooth" });
  }

  return (
    <>
      <div ref={track} id="aile-yorumlari" className="testimonial-scroll" tabIndex={0} role="region" aria-label="Aile geri bildirimleri">
        {TESTIMONIALS.map((item) => (
          <article className="testimonial" key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <footer>{item.name}<span>{item.role}</span></footer>
          </article>
        ))}
      </div>
      <div className="gallery-controls">
        <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-controls="aile-yorumlari" aria-label="Önceki aile yorumu">
          <ArrowLeft size={19} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => move(1)} disabled={edges.end} aria-controls="aile-yorumlari" aria-label="Sonraki aile yorumu">
          <ArrowRight size={19} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
