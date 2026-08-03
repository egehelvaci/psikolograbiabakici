"use client";

import { trackEvent } from "@/lib/analytics";
import type { Faq } from "@/content/types";

/**
 * SSS listesi.
 *
 * `details`/`summary` kullanılır: yanıt metni JavaScript çalışmadan da
 * HTML içinde bulunur, bu hem erişilebilirlik hem de FAQPage yapısal
 * verisinin "yanıt sayfada görünür olmalı" koşulu için gereklidir.
 */
export default function FaqList({
  faqs,
  headingLevel = "h3",
}: {
  faqs: Faq[];
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;

  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="faq-item"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open) {
              trackEvent("faq_open");
            }
          }}
        >
          <summary>
            <Heading className="faq-question">{faq.question}</Heading>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
