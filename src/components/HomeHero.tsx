"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import GlassSculpture from "@/components/GlassSculpture";
import TrackedLink from "@/components/TrackedLink";
import { APPOINTMENT_MESSAGE, whatsappLink } from "@/lib/site";

export default function HomeHero() {
  const reduced = useReducedMotion();
  const hero = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const firstLine = useTransform(scrollYProgress, [0, 0.7], [0, -30]);
  const secondLine = useTransform(scrollYProgress, [0, 0.7], [0, 22]);

  return (
    <section ref={hero} className="atelier-hero" aria-labelledby="hero-baslik">
      <GlassSculpture />
      <div className="hero-shade" />
      <div className="container atelier-hero-inner">
        <div className="hero-statement">
          <p className="edition-label"><span aria-hidden="true" />Çocuk ve ergen psikolojisi</p>
          <h1 id="hero-baslik">
            <motion.span className="headline-line" style={reduced ? undefined : { x: firstLine }}><motion.span initial={false} animate={reduced ? undefined : { y: ["65%", "0%"] }} transition={{ duration: .8, ease: [.16, 1, .3, 1] }}>Büyümeye</motion.span></motion.span>
            <motion.span className="headline-line" style={reduced ? undefined : { x: secondLine }}><motion.em initial={false} animate={reduced ? undefined : { y: ["70%", "0%"] }} transition={{ duration: .92, ease: [.16, 1, .3, 1] }}>alan açmak.</motion.em></motion.span>
          </h1>
          <p className="hero-lede">Ben Klinik Psikolog Rabia Bakıcı. Oyun, gözlem ve ebeveyn görüşmeleriyle çocukların ve ergenlerin duygularını ifade etmelerine eşlik ediyorum.</p>
          <div className="hero-links">
            <TrackedLink className="atelier-action" href={whatsappLink(APPOINTMENT_MESSAGE)} target="_blank" rel="noopener noreferrer"
              event="generate_lead" eventParams={{ method: "whatsapp", cta_location: "hero" }}>Randevu talep et <ArrowUpRight size={17} aria-hidden="true" /></TrackedLink>
            <Link href="#hakkimda" className="atelier-underlink">Yaklaşımım</Link>
          </div>
        </div>
        <div className="hero-foot">
          <span><MapPin size={14} strokeWidth={1.5} aria-hidden="true" />Başakşehir · Eyüpsultan, İstanbul</span>
          <a href="#hizmetler">Çalışma alanları <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
