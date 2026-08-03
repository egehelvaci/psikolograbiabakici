import type { ContentSection } from "@/content/types";

/**
 * İçerik modelindeki bölümleri anlamsal başlık hiyerarşisiyle render eder.
 * Sayfada tek H1 bulunur; bu bileşen H2 ve altındaki düzeyleri üretir.
 */
export default function ContentSections({
  sections,
  headingLevel = "h2",
}: {
  sections: ContentSection[];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;

  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="prose-block">
          <Heading className={headingLevel === "h2" ? "display-3" : "title-3"}>
            {section.heading}
          </Heading>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="list-check">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
