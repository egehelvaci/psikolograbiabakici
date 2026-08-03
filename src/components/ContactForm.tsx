"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { RESPONSE_TIME_DISPLAY, whatsappLink } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "topic" | "consent", string>>;

const TOPICS = [
  "Çocuk psikolojisi desteği",
  "Ergen psikolojisi desteği",
  "Oyun terapisi",
  "Psikolojik değerlendirme",
  "Kaygı desteği",
  "Davranış problemleri",
  "Aile ve ebeveyn danışmanlığı",
  "Sosyal beceri desteği",
  "Hangisi uygun, emin değilim",
];

/**
 * Randevu talep formu.
 *
 * Form verisi sunucuya gönderilmez ve saklanmaz: girdiler yalnızca bir
 * WhatsApp mesaj metni oluşturmak için kullanılır. Böylece sağlıkla ilgili
 * serbest metin hiçbir veri tabanına ya da günlüğe yazılmaz ve kullanıcı
 * mesajı göndermeden önce içeriği görüp değiştirebilir (PRD §16, §21).
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const startedRef = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  function onFirstInput() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("form_start", { cta_location: "contact_form" });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const childAge = String(data.get("childAge") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Lütfen adınızı yazın.";
    if (phone.replace(/\D/g, "").length < 10)
      nextErrors.phone = "Lütfen size ulaşabileceğimiz bir telefon numarası yazın.";
    if (!topic) nextErrors.topic = "Lütfen bir konu seçin.";
    if (!consent)
      nextErrors.consent = "Devam etmek için bilgilendirmeyi onaylamanız gerekir.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      summaryRef.current?.focus();
      return;
    }

    const lines = [
      "Merhaba, randevu talep etmek istiyorum.",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      `Konu: ${topic}`,
      childAge ? `Çocuğun yaşı: ${childAge}` : "",
      message ? `Not: ${message}` : "",
    ].filter(Boolean);

    trackEvent("form_submit", { cta_location: "contact_form", service_name: topic });
    trackEvent("generate_lead", {
      method: "whatsapp_form",
      cta_location: "contact_form",
      service_name: topic,
    });

    setSubmitted(true);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className="card p-7 sm:p-9" role="status" aria-live="polite">
        <h3 className="title-3 mb-4">WhatsApp penceresi açıldı</h3>
        <p className="mb-4">
          Hazırladığınız mesajı WhatsApp üzerinde görüyorsunuz. Göndermeden önce
          içeriği düzenleyebilirsiniz. {RESPONSE_TIME_DISPLAY}
        </p>
        <p className="mb-6 text-sm text-ink-soft/85">
          Pencere açılmadıysa tarayıcınız açılır pencereleri engellemiş olabilir;
          bu durumda WhatsApp bağlantısını doğrudan kullanabilirsiniz.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            WhatsApp&apos;ı aç
          </a>
          <button type="button" className="btn btn-secondary" onClick={() => setSubmitted(false)}>
            Formu yeniden doldur
          </button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form className="card p-7 sm:p-9" onSubmit={handleSubmit} noValidate>
      <h3 className="title-3 mb-2">Randevu talep formu</h3>
      <p className="text-sm text-ink-soft/90 mb-6">
        Formu doldurduğunuzda bilgileriniz bir WhatsApp mesajına dönüştürülür.
        Mesajı göndermeden önce görüp düzenleyebilirsiniz.
      </p>

      <div
        ref={summaryRef}
        tabIndex={-1}
        role={errorList.length > 0 ? "alert" : undefined}
        aria-live="assertive"
        className={errorList.length > 0 ? "form-errors" : "sr-only"}
      >
        {errorList.length > 0 ? (
          <>
            <p className="font-medium">Formu gönderebilmek için şunları düzeltin:</p>
            <ul>
              {errorList.map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-2">
        <div>
          <label htmlFor="name" className="field-label">
            Ad Soyad <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="input"
            required
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            onInput={onFirstInput}
          />
          {errors.name ? (
            <p id="name-error" className="field-error">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Telefon <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="input"
            placeholder="05XX XXX XX XX"
            required
            aria-required="true"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onInput={onFirstInput}
          />
          {errors.phone ? (
            <p id="phone-error" className="field-error">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="topic" className="field-label">
            Konu <span aria-hidden="true">*</span>
          </label>
          <select
            id="topic"
            name="topic"
            className="input"
            required
            aria-required="true"
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={errors.topic ? "topic-error" : undefined}
            defaultValue=""
            onInput={onFirstInput}
          >
            <option value="" disabled>
              Seçiniz
            </option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
          {errors.topic ? (
            <p id="topic-error" className="field-error">
              {errors.topic}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="childAge" className="field-label">
            Çocuğun yaşı
          </label>
          <input
            id="childAge"
            name="childAge"
            type="text"
            inputMode="numeric"
            className="input"
            placeholder="Örn. 7"
            onInput={onFirstInput}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="field-label">
          Kısa not
        </label>
        <textarea
          id="message"
          name="message"
          className="input h-28 resize-none"
          placeholder="Uygun görüşme saatiniz ya da kısaca başvuru nedeniniz"
          aria-describedby="message-hint"
          onInput={onFirstInput}
        />
        <p id="message-hint" className="field-hint">
          Ayrıntılı sağlık bilgilerini burada paylaşmanıza gerek yok; bunları
          görüşmede ele alırız.
        </p>
      </div>

      <div className="consent-row mt-6">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="consent-box"
          required
          aria-required="true"
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : "consent-hint"}
          onInput={onFirstInput}
        />
        <label htmlFor="consent" className="consent-label">
          Bilgilerimin randevu talebimi iletmek amacıyla WhatsApp mesajına
          dönüştürülmesini ve bu kapsamda işlenmesini kabul ediyorum.{" "}
          <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>&apos;nı okudum.
        </label>
      </div>
      {errors.consent ? (
        <p id="consent-error" className="field-error">
          {errors.consent}
        </p>
      ) : (
        <p id="consent-hint" className="field-hint">
          Girdiğiniz bilgiler bu sitede saklanmaz ve analiz araçlarına gönderilmez.
        </p>
      )}

      <button type="submit" className="btn btn-primary w-full mt-7">
        WhatsApp mesajını hazırla
      </button>
      <p className="field-hint mt-4">{RESPONSE_TIME_DISPLAY}</p>
    </form>
  );
}
