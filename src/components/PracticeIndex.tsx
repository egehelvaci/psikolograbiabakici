"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProtectedImage from "./ProtectedImage";
import TrackedInternalLink from "./TrackedInternalLink";

type Field = { slug: string; navLabel: string; summary: string; photo: string; photoAlt: string };

export default function PracticeIndex({ fields }: { fields: Field[] }) {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const active = fields[selected];
  if (!active) return null;

  return (
    <section className="field-section" id="hizmetler" aria-labelledby="hizmetler-baslik">
      <div className="container">
        <div className="chapter-heading">
          <h2 id="hizmetler-baslik">Çalışma alanlarım.</h2>
          <Link className="index-link" href="/hizmetler">Tüm hizmetler <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <ul className="practice-discs">
          {fields.map((field, i) => (
            <li key={field.slug}>
              <button type="button" aria-label={field.navLabel} aria-pressed={selected === i} aria-controls="alan-detay" onClick={() => setSelected(i)}>
                <motion.span className="disc-photo" initial={false}
                  whileInView={reduced ? undefined : { clipPath: ["circle(39%)", "circle(50%)"] }}
                  transition={{ duration: .65, delay: i * .055 }} viewport={{ once: true }}>
                  <ProtectedImage src={field.photo} alt={field.photoAlt} fill sizes="(max-width: 740px) 36vw, 20vw" />
                </motion.span>
                <span className="disc-label">{field.navLabel}</span>
              </button>
            </li>
          ))}
        </ul>
        <div id="alan-detay" className="practice-description" aria-live="polite">
          <p><strong>{active.navLabel}</strong><span>{active.summary}</span></p>
          <TrackedInternalLink className="index-link" href={`/hizmetler/${active.slug}`} event="select_service"
            eventParams={{ page_type: "home", service_name: active.slug, cta_location: "home_services" }}>
            Hizmeti incele <ArrowRight size={17} aria-hidden="true" />
          </TrackedInternalLink>
        </div>
      </div>
    </section>
  );
}
