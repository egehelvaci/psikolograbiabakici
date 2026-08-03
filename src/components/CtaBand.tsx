import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import {
  APPOINTMENT_MESSAGE,
  CTA_PRIMARY_LABEL,
  OPENING_HOURS_DISPLAY,
  PHONE,
  PHONE_DISPLAY,
  RESPONSE_TIME_DISPLAY,
  whatsappLink,
} from "@/lib/site";

/**
 * Randevu çağrısı. Birincil buton etiketi tüm sayfalarda aynıdır (PRD §16),
 * böylece kullanıcı hangi sayfada olursa olsun aynı eylemi tanır.
 */
export default function CtaBand({
  title = "Randevu talebi oluşturun",
  description,
  serviceName,
  ctaLocation = "cta_band",
}: {
  title?: string;
  description?: string;
  serviceName?: string;
  ctaLocation?: string;
}) {
  const message = serviceName
    ? `Merhaba, ${serviceName} hakkında randevu talep etmek istiyorum.`
    : APPOINTMENT_MESSAGE;

  return (
    <section className="cta-band" aria-labelledby="cta-band-baslik">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="cta-band-inner">
          <div>
            <h2 id="cta-band-baslik" className="title-3 mb-3">
              {title}
            </h2>
            <p className="max-w-xl">
              {description ??
                "Nasıl ilerlemek istediğinizden emin değilseniz, önce yalnızca ebeveyn görüşmesi planlayabiliriz. Görüşmede durumu birlikte değerlendirir ve uygun adımı belirleriz."}
            </p>
            <p className="text-sm text-ink-soft/85 mt-4">
              {RESPONSE_TIME_DISPLAY} Görüşme saatleri: {OPENING_HOURS_DISPLAY}.
            </p>
          </div>
          <div className="cta-band-actions">
            <TrackedLink
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              event="generate_lead"
              eventParams={{ method: "whatsapp", cta_location: ctaLocation, service_name: serviceName }}
            >
              {CTA_PRIMARY_LABEL}
            </TrackedLink>
            <TrackedLink
              href={`tel:${PHONE}`}
              className="btn btn-secondary"
              event="click_phone"
              eventParams={{ cta_location: ctaLocation }}
            >
              {PHONE_DISPLAY}
            </TrackedLink>
            <Link href="/iletisim" className="nav-link text-sm mt-1">
              İletişim ve konum bilgileri
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
