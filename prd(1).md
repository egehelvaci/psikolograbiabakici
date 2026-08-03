# SEO Improvement Product Requirements Document

**Website:** https://psikolograbiabakici.com  
**Document language:** English  
**Document type:** SEO implementation PRD  
**Prepared:** August 3, 2026  
**Primary market:** Başakşehir, Istanbul, Türkiye  
**Primary audience:** Parents seeking child, adolescent, play therapy, psychological assessment, and family counseling services

---

## 1. Product Summary

The website currently presents Psychologist Rabia Bakıcı as a child and adolescent psychologist in Başakşehir, Istanbul. The homepage includes service summaries, professional background, testimonials, contact details, and WhatsApp conversion links.

The main SEO limitation is that most services and search intents appear to be consolidated into one homepage. This restricts the website's ability to rank for multiple high-intent local searches such as:

- child psychologist in Başakşehir
- adolescent psychologist in Başakşehir
- play therapy in Başakşehir
- child anxiety therapy in Istanbul
- child behavioral problems psychologist
- school phobia psychologist
- family counseling in Başakşehir
- psychological assessment for children

This PRD defines the technical, content, local SEO, trust, performance, analytics, and conversion improvements required to build sustainable organic visibility.

---

## 2. Goals

### 2.1 Primary Goals

1. Increase qualified organic traffic from parents in Başakşehir and nearby Istanbul districts.
2. Rank dedicated pages for high-intent service and problem-based searches.
3. Increase appointment requests through WhatsApp, phone, and contact forms.
4. Improve Google's understanding of the psychologist, services, location, credentials, and website structure.
5. Improve trust and credibility for a health-related website.
6. Establish measurable SEO and conversion reporting.

### 2.2 Secondary Goals

1. Build topical authority around child and adolescent psychology.
2. improve visibility in Google Maps and local search results.
3. Earn citations and backlinks from relevant local and professional websites.
4. Prepare the site for future AI-search and featured-snippet visibility.
5. Reduce reliance on paid advertising over time.

---

## 3. Non-Goals

The first release will not:

- guarantee a specific Google ranking;
- use keyword stuffing or mass-generated low-quality articles;
- publish medical claims or guaranteed treatment outcomes;
- create fake reviews, fake author credentials, or misleading schema;
- target every district in Istanbul using duplicated location pages;
- replace legal, medical, or professional compliance review.

---

## 4. Current-State Findings

### 4.1 Confirmed Positive Elements

The homepage currently includes:

- a location-focused H1 mentioning Istanbul Başakşehir;
- a clear child and adolescent psychology focus;
- service summaries;
- professional education details;
- telephone, email, location, and working hours;
- WhatsApp calls to action;
- image alternative text;
- testimonials;
- an HTTPS domain;
- a clear personal brand.

### 4.2 Main SEO Risks and Gaps

#### A. Single-page search architecture

Services such as play therapy, psychological assessment, family counseling, anxiety therapy, educational counseling, and social skills development are described only briefly on the homepage.

**Impact:** Google has limited page-level content to match each service query.

#### B. Insufficient intent coverage

The site focuses strongly on broad terms such as "child psychologist," but parents often search by problem:

- anger outbursts;
- separation anxiety;
- school refusal;
- attention difficulties;
- sibling jealousy;
- social anxiety;
- peer relationship problems;
- sleep problems;
- adolescent communication problems.

**Impact:** The website misses long-tail queries that are often closer to appointment intent.

#### C. Weak local landing-page depth

The homepage mentions Başakşehir, but it does not appear to provide detailed local signals such as:

- clinic address;
- neighborhood;
- directions;
- public transportation or parking information;
- embedded map;
- nearby service areas;
- consistent business information;
- Google Business Profile integration.

#### D. Health-content trust requirements

Psychology is a high-trust and health-related topic. The site should make credentials, authorship, review practices, scope of service, privacy, and professional boundaries highly transparent.

#### E. Testimonial repetition and verification risk

The same testimonial content appears repeated in the rendered homepage text. Testimonials also need clear internal verification and explicit consent.

**Impact:** Repetition creates low-quality page signals and may reduce user trust. Unverifiable testimonials or review markup can create compliance and structured-data risks.

#### F. Limited informational content

No strong, crawlable resource or article hub was identified from the indexed homepage result.

**Impact:** The site cannot build broad topical authority or reach users during the research stage.

#### G. Measurement is not visible

Google Search Console, GA4, conversion events, call tracking, and reporting configuration could not be verified from public search results.

#### H. Technical files require validation

The availability and correctness of the following must be tested during implementation:

- `/robots.txt`
- `/sitemap.xml`
- canonical tags
- indexability
- Open Graph metadata
- structured data
- redirect behavior
- 404 handling
- image optimization
- Core Web Vitals

---

## 5. Target Users

### Persona 1 — Parent with an urgent concern

A parent notices severe anxiety, anger, behavioral change, school refusal, or social withdrawal and wants a nearby specialist quickly.

**Primary need:** Trust, relevance, location, availability, and an easy appointment path.

### Persona 2 — Parent comparing psychologists

A parent compares credentials, methods, experience, reviews, office location, and areas of expertise.

**Primary need:** Evidence, transparent qualifications, process information, and differentiation.

### Persona 3 — Parent researching a symptom

A parent searches questions such as "Why does my child not want to go to school?" before deciding whether professional support is needed.

**Primary need:** Helpful, responsible educational content with a soft conversion path.

### Persona 4 — Referring professional

A teacher, counselor, pediatrician, or another professional looks for a suitable child psychologist.

**Primary need:** Clear scope, credentials, referral process, and contact information.

---

## 6. SEO Information Architecture

Create a multi-page structure. Every page must serve a distinct search intent and provide original content.

```text
/
├── about/
├── services/
│   ├── play-therapy/
│   ├── child-psychologist/
│   ├── adolescent-psychologist/
│   ├── psychological-assessment/
│   ├── child-anxiety-therapy/
│   ├── behavioral-problems/
│   ├── family-counseling/
│   └── social-skills-support/
├── concerns/
│   ├── school-refusal/
│   ├── separation-anxiety/
│   ├── anger-outbursts/
│   ├── sibling-jealousy/
│   ├── attention-difficulties/
│   └── peer-relationship-problems/
├── resources/
│   ├── articles/
│   └── frequently-asked-questions/
├── contact/
├── privacy-policy/
├── cookie-policy/
├── terms-and-disclaimer/
└── accessibility/
```

### URL Requirements

- Use lowercase Latin characters.
- Use short, descriptive slugs.
- Do not include dates unless essential.
- Use one permanent URL per topic.
- Redirect changed URLs using HTTP 301.
- Avoid parameter-based duplicate pages.
- Use trailing slashes consistently.

---

## 7. Keyword and Search-Intent Strategy

Keyword volumes must be validated with Google Keyword Planner, Search Console, Ahrefs, Semrush, or a comparable source before final prioritization.

### 7.1 Core Commercial Queries

- çocuk psikoloğu Başakşehir
- Başakşehir çocuk psikoloğu
- ergen psikoloğu Başakşehir
- oyun terapisi Başakşehir
- çocuk terapisti Başakşehir
- çocuk psikoloğu İstanbul
- aile danışmanlığı Başakşehir
- çocuk psikolojik değerlendirme
- çocuklarda kaygı terapisi
- davranış bozukluğu çocuk psikoloğu

### 7.2 Problem-Based Queries

- çocuklarda öfke nöbeti
- çocuğum okula gitmek istemiyor
- okul fobisi psikolog
- çocuklarda ayrılık kaygısı
- çocuklarda kardeş kıskançlığı
- çocuğum arkadaş edinemiyor
- ergenle iletişim sorunları
- çocuklarda dikkat problemi
- çocuklarda sosyal kaygı

### 7.3 Informational Queries

- oyun terapisi nedir
- oyun terapisi kaç yaş için uygundur
- çocuk ne zaman psikoloğa götürülmeli
- ilk çocuk psikoloğu görüşmesinde ne olur
- çocuk psikoloğu ve pedagog farkı
- ergen terapisi nasıl olur
- ebeveyn görüşmesi nasıl yapılır
- psikolojik değerlendirme ne kadar sürer

### 7.4 Keyword Mapping Rules

1. Assign one primary query group to each page.
2. Prevent two pages from targeting the same primary intent.
3. Use natural Turkish language; do not force exact-match repetition.
4. Include related entities and questions instead of repeating one keyword.
5. Map informational queries to articles and commercial queries to service pages.
6. Review Search Console query data monthly and update mappings.

---

## 8. Page-Level Requirements

## 8.1 Homepage

### Purpose

Introduce the practice, establish trust, explain main services, prove local relevance, and route users to dedicated pages.

### Required Components

1. One clear H1:
   - Suggested direction: `Başakşehir Çocuk ve Ergen Psikoloğu`
2. Short value proposition without guaranteed outcomes.
3. Primary CTA: `WhatsApp ile Randevu Talep Et`
4. Secondary CTA: `Hizmetleri İncele`
5. Service cards linking to individual service pages.
6. Credential summary linking to the full About page.
7. "How the process works" section.
8. Common concerns section linking to problem pages.
9. Local clinic/location section.
10. FAQ section with visible answers.
11. Contact details and working hours.
12. Privacy notice near forms.
13. Footer links to legal pages.

### Homepage Metadata

**Title example:**  
`Başakşehir Çocuk ve Ergen Psikoloğu | Rabia Bakıcı`

**Meta description example:**  
`Başakşehir'de çocuk ve ergen psikolojisi, oyun terapisi, kaygı, davranış sorunları ve ebeveyn danışmanlığı hakkında bilgi alın.`

Avoid claiming guaranteed results, "the best psychologist," or unsupported superiority.

---

## 8.2 Service Page Template

Every service page must contain:

1. Unique title tag.
2. One H1.
3. Brief answer to what the service is.
4. Who may benefit.
5. Common signs or concerns.
6. How the process works.
7. Age groups served.
8. Parent involvement.
9. Session format.
10. What the service does not promise.
11. When urgent or medical support may be required.
12. Relevant credentials or training.
13. Frequently asked questions.
14. Related articles.
15. Related services.
16. Clear appointment CTA.
17. Local relevance to Başakşehir/Istanbul.
18. Reviewer and last-reviewed date where appropriate.

### Minimum Content Standard

- Normally 700–1,200 useful words.
- No filler added merely to reach a word count.
- Original content for each page.
- Clinically responsible wording.
- Scannable headings and short paragraphs.

---

## 8.3 About Page

The About page must include:

- full professional name;
- accurate professional title;
- portrait;
- education history;
- relevant certificates and training;
- work experience;
- therapeutic approach;
- age groups served;
- languages offered;
- professional memberships, if applicable;
- ethical and confidentiality approach;
- links or references that allow credential verification where permitted;
- media or professional publications, if applicable.

Do not display qualifications that cannot be substantiated.

---

## 8.4 Contact and Location Page

Include:

- full clinic address;
- neighborhood, district, city, and postal code;
- phone number;
- email;
- working hours;
- map embed;
- appointment method;
- public transport guidance;
- parking information;
- accessibility details;
- nearby landmarks;
- service area;
- emergency disclaimer;
- consent checkbox for contact forms;
- response-time expectation stated accurately.

Use the same name, address, and phone information everywhere.

---

## 8.5 Article Template

Every article must contain:

- descriptive title;
- concise introductory answer;
- author name and credentials;
- reviewer when needed;
- publication date;
- last reviewed or updated date;
- evidence-based references;
- clear headings;
- practical guidance;
- boundaries of online information;
- signs that professional help may be appropriate;
- emergency or safeguarding direction where relevant;
- links to related service pages;
- medically responsible CTA.

Avoid diagnostic claims based solely on a checklist.

---

## 9. Technical SEO Requirements

## 9.1 Crawling and Indexing

### Tasks

1. Create a valid `/robots.txt`.
2. Add the XML sitemap location to `robots.txt`.
3. Generate `/sitemap.xml` automatically.
4. Include only canonical, indexable, HTTP 200 pages.
5. Exclude admin, preview, test, parameter, and duplicate URLs.
6. Submit the sitemap to Google Search Console and Bing Webmaster Tools.
7. Inspect important URLs in Search Console.
8. Remove accidental `noindex` directives.
9. Confirm pages render meaningful HTML without requiring client-side interaction.
10. Test mobile and desktop Googlebot access.

### Acceptance Criteria

- `robots.txt` returns HTTP 200.
- `sitemap.xml` returns HTTP 200 and valid XML.
- All sitemap URLs return HTTP 200.
- No canonical URL is blocked by robots.
- Important pages are indexable.
- Staging and preview environments are not indexable.

---

## 9.2 Canonicalization and Redirects

1. Choose one preferred host:
   - `https://psikolograbiabakici.com`
   - or `https://www.psikolograbiabakici.com`
2. Redirect all alternate versions to the preferred host.
3. Redirect HTTP to HTTPS.
4. Use self-referencing canonical tags.
5. Remove duplicate slash and non-slash variants.
6. Redirect retired URLs to the closest relevant replacement.
7. Never redirect all missing pages to the homepage.
8. Create a useful custom 404 page.

### Acceptance Criteria

Only one URL variant returns HTTP 200 for each page.

---

## 9.3 Metadata

Every indexable page must have:

- a unique title;
- a unique meta description;
- a canonical link;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- Twitter card metadata;
- language declaration: `tr`;
- appropriate robots directive.

### Recommended Limits

- Title: approximately 45–60 characters where practical.
- Meta description: approximately 140–160 characters where practical.
- Avoid truncating important location or service terms.

These are presentation guidelines, not hard ranking rules.

---

## 9.4 Heading Structure

- Exactly one primary H1 per page.
- Use H2 for major sections.
- Use H3 for subsections.
- Do not use headings only for visual styling.
- Do not skip levels unnecessarily.
- Each heading should describe the following content.

---

## 9.5 Structured Data

Implement JSON-LD using only accurate, visible information.

### Recommended Types

- `Person`
- `LocalBusiness` or the most accurate applicable subtype
- `WebSite`
- `WebPage`
- `BreadcrumbList`
- `Article`
- `FAQPage`, only when questions and answers are visible and current

### Important Restrictions

1. Do not add fake ratings.
2. Do not mark first-party testimonials as Google reviews.
3. Do not use review markup unless it complies with Google's rules.
4. Do not add unsupported medical specialty claims.
5. Keep schema name, address, phone, URL, image, and opening hours consistent.
6. Validate using Google's Rich Results Test and Schema.org Validator.
7. Schema does not guarantee rich results.

### Suggested Entity Connections

Use `sameAs` for verified profiles such as:

- Instagram;
- LinkedIn;
- Google Business Profile or Maps entity;
- verified professional directory profile.

---

## 9.6 Internal Linking

1. Every service page must link to relevant concern pages.
2. Every concern page must link to the most relevant service page.
3. Every article must link to one relevant commercial page.
4. Use descriptive anchor text.
5. Add breadcrumbs to all non-homepage pages.
6. Do not overuse exact-match anchors.
7. Prevent orphan pages.
8. Include related-content modules.

### Acceptance Criteria

Every indexable page is reachable within three clicks from the homepage.

---

## 9.7 Image SEO

1. Convert photographs to AVIF or WebP where supported.
2. Provide responsive `srcset`.
3. Specify image width and height.
4. Lazy-load below-the-fold images.
5. Do not lazy-load the main above-the-fold image if it becomes the LCP element.
6. Use descriptive filenames.
7. Write concise, contextual alt text.
8. Use empty alt attributes for decorative images.
9. Remove oversized image downloads.
10. Use original and authorized images.
11. Strip unnecessary metadata where appropriate.
12. Compress without visible quality loss.

---

## 9.8 JavaScript and Rendering

1. Ensure key content is present in server-rendered or statically generated HTML.
2. Do not hide meaningful service content behind interactions that bots may not trigger.
3. Use standard anchor links for navigation.
4. Avoid excessive client-side JavaScript.
5. Split large bundles.
6. defer non-critical third-party scripts.
7. Ensure form and navigation functionality works with keyboard input.
8. Test rendered HTML with Google's URL Inspection tool.

---

## 10. Performance and Core Web Vitals

Target Google's "good" thresholds at the 75th percentile:

- **LCP:** 2.5 seconds or faster
- **INP:** 200 milliseconds or faster
- **CLS:** 0.1 or lower

### Step-by-Step Performance Work

1. Run PageSpeed Insights for the homepage and each page template.
2. Record mobile and desktop lab metrics.
3. Review field data in Search Console when enough traffic exists.
4. Identify the LCP element.
5. Compress and preload the true LCP image where appropriate.
6. Remove render-blocking CSS.
7. inline only small critical CSS.
8. Remove unused CSS and JavaScript.
9. Reduce third-party scripts.
10. Load maps only after interaction or below the fold.
11. Self-host or efficiently load fonts.
12. Use `font-display: swap`.
13. Preconnect only to essential origins.
14. Apply long-lived caching to static assets.
15. Use Brotli compression.
16. Reserve dimensions for images and embeds.
17. Avoid layout shifts caused by testimonial sliders.
18. Reduce animation work on mobile.
19. Re-test after each major change.
20. Monitor real-user metrics after release.

### Performance Budget

- Initial mobile JavaScript target: under 170 KB compressed where feasible.
- Initial CSS target: under 60 KB compressed where feasible.
- Hero image target: under 180 KB.
- Other content images: generally under 120 KB each.
- Limit third-party scripts to those with demonstrated business value.

---

## 11. Local SEO Requirements

## 11.1 Google Business Profile

1. Claim and verify the profile.
2. Use the exact real-world business name.
3. Select the most accurate primary category.
4. Add relevant secondary categories only when accurate.
5. Add the website URL with UTM parameters.
6. Use consistent appointment and contact links.
7. Add full address or valid service-area configuration.
8. Add accurate hours.
9. Add professional photographs.
10. Add service descriptions.
11. Publish periodic updates.
12. Answer questions.
13. monitor duplicate listings.
14. Respond professionally to reviews.
15. Never offer incentives for positive reviews.
16. Ask all eligible clients neutrally for honest feedback.

### UTM Example

```text
?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile
```

---

## 11.2 Local Citations

Create or correct profiles on reputable, relevant sources such as:

- professional associations;
- verified health or psychology directories;
- local business directories;
- maps platforms;
- university alumni or professional pages;
- clinic partner pages.

### Citation Rules

- Keep name, address, and phone identical.
- Prefer quality over quantity.
- Avoid spam directories.
- Remove duplicate profiles.
- Link to the most relevant website page.
- Record login details and update dates securely.

---

## 11.3 Location Relevance

The site should naturally mention:

- Başakşehir;
- the exact neighborhood;
- Istanbul;
- nearby areas actually served;
- transport and access information;
- local landmarks.

Do not create dozens of near-duplicate district pages. Create a location page only when there is a genuine office, service presence, or substantial unique local content.

---

## 12. Trust, Safety, and E-E-A-T Requirements

Because the site concerns mental health, trust must be treated as a core product requirement.

### Required Trust Signals

1. Transparent professional identity.
2. Verifiable education and qualifications.
3. Clear author profiles.
4. Review dates on health information.
5. Sources and references for clinical claims.
6. Privacy policy.
7. Cookie policy and consent where required.
8. Contact and business information.
9. Clear distinction between information and diagnosis.
10. No guaranteed results.
11. No fear-based conversion copy.
12. No unsupported "best," "leading," or "number one" claims.
13. Clear emergency limitations.
14. Data processing consent for forms.
15. Secure form handling.
16. Testimonial consent records.
17. Professional review of sensitive content.

### Emergency Disclaimer

The website should clearly state that it is not an emergency service. Emergency wording and local contact guidance must be reviewed for legal and professional accuracy before publication.

---

## 13. Testimonial Requirements

1. Remove duplicate testimonial rendering.
2. Obtain documented permission for publication.
3. Do not reveal sensitive personal or health information.
4. Use initials or anonymized labels only with consent.
5. Do not invent testimonials.
6. Do not edit feedback in a way that changes meaning.
7. Do not promise that similar results will occur.
8. Do not attach aggregate review schema unless fully compliant.
9. Consider linking to verified third-party review sources instead of duplicating claims.
10. Add an internal moderation and removal process.

---

## 14. Content Roadmap

## Phase 1 — High-Intent Core Pages

Publish first:

1. Child Psychologist in Başakşehir
2. Play Therapy
3. Adolescent Psychologist
4. Child Anxiety Support
5. Behavioral Problems
6. Psychological Assessment
7. Family and Parent Counseling
8. Contact and Location
9. About Rabia Bakıcı
10. Frequently Asked Questions

## Phase 2 — Concern Pages

Publish:

1. School refusal and school phobia
2. Separation anxiety
3. Anger outbursts
4. Sibling jealousy
5. Social skills and peer relationships
6. Adolescent-parent communication
7. Attention difficulties
8. Childhood fears
9. Adjustment after major life changes
10. When to seek professional support

## Phase 3 — Educational Articles

Initial article ideas:

1. What is play therapy?
2. At what age is play therapy used?
3. What happens during the first parent meeting?
4. How should parents prepare a child for therapy?
5. How long can child therapy take?
6. What are common signs of school refusal?
7. How can parents respond to anger outbursts?
8. When does separation anxiety need professional attention?
9. How can families support sibling relationships?
10. What is the difference between a psychologist, psychiatrist, and counselor?
11. How does adolescent therapy work?
12. What is included in a child psychological assessment?

### Editorial Frequency

- First 90 days: 2–4 high-quality pages or articles per month.
- After 90 days: at least 2 meaningful updates or publications per month.
- Refresh important articles every 6–12 months or earlier when guidance changes.

Quality is more important than volume.

---

## 15. Content Production Workflow

1. Select a validated search intent.
2. Review current Search Console data.
3. Review competing search results.
4. Define the page's user question.
5. Assign one primary page goal.
6. Create a medically responsible outline.
7. Draft in natural Turkish.
8. Add original experience and process details.
9. Verify all professional and clinical claims.
10. Add sources.
11. Complete author and reviewer fields.
12. Add internal links.
13. write metadata.
14. Add structured data.
15. Check accessibility.
16. Check legal and ethical wording.
17. Publish.
18. Request indexing where appropriate.
19. Review performance after 28, 60, and 90 days.
20. Improve based on queries and engagement.

---

## 16. Conversion Optimization Requirements

### Primary Conversions

- WhatsApp appointment click;
- phone call click;
- successful contact-form submission;
- appointment booking completion, if a booking platform is added.

### Secondary Conversions

- directions/map click;
- service-page CTA click;
- email click;
- FAQ expansion;
- article-to-service click;
- social profile click.

### UX Requirements

1. Keep one prominent CTA above the fold.
2. Use the same primary CTA label consistently.
3. Add a sticky mobile CTA without obstructing content.
4. Avoid aggressive popups.
5. Explain what happens after contact.
6. Add privacy reassurance near forms.
7. Keep forms short.
8. Validate inputs accessibly.
9. Show a clear success state.
10. Do not send sensitive health details to analytics tools.

---

## 17. Analytics and Tracking

## 17.1 Required Tools

- Google Search Console
- Google Analytics 4
- Google Tag Manager, if needed
- Bing Webmaster Tools
- PageSpeed Insights
- Microsoft Clarity or an equivalent tool, only with proper consent and privacy controls

## 17.2 GA4 Events

Implement:

```text
generate_lead
form_start
form_submit
click_whatsapp
click_phone
click_email
click_directions
view_service
select_service
faq_open
outbound_click
```

### Event Parameters

Where privacy-safe, include:

```text
page_path
page_type
service_name
cta_location
device_category
traffic_source
```

Never send:

- names;
- phone numbers;
- email addresses;
- free-text health messages;
- diagnosis information;
- identifiable session details.

## 17.3 Search Console Setup

1. Verify Domain property.
2. Submit sitemap.
3. Review Page Indexing.
4. Review Core Web Vitals.
5. monitor manual actions.
6. monitor security issues.
7. Review queries by page.
8. Track branded versus non-branded traffic.
9. Track local service queries.
10. annotate major website releases externally.

---

## 18. SEO Reporting Dashboard

Report monthly:

### Visibility

- non-branded impressions;
- non-branded clicks;
- average click-through rate;
- query groups in top 3, top 10, and top 20;
- Google Business Profile discovery views;
- map and direction actions.

### Engagement

- organic engaged sessions;
- service-page engagement;
- article-to-service click rate;
- mobile versus desktop performance;
- landing-page conversion rate.

### Leads

- WhatsApp clicks from organic;
- call clicks from organic;
- contact-form submissions from organic;
- qualified appointment requests;
- lead-to-appointment rate, if available.

### Technical Health

- indexed pages;
- excluded pages;
- crawl errors;
- Core Web Vitals pass rate;
- broken internal links;
- redirect chains;
- missing metadata;
- schema validation errors.

---

## 19. Backlink and Authority Strategy

### Recommended Actions

1. Create complete profiles on legitimate professional directories.
2. Request a profile from relevant universities or alumni pages where possible.
3. Develop referral relationships with pediatricians, schools, counselors, and clinics.
4. Publish expert commentary for reputable local publications.
5. Contribute educational content to relevant organizations.
6. Create useful parent resources that others can cite.
7. Reclaim unlinked brand mentions.
8. Fix broken links pointing to old URLs.
9. Build links to deep service or resource pages, not only the homepage.
10. Monitor backlink quality.

### Prohibited Actions

- paid link networks;
- bulk directory submissions;
- automated comment links;
- private blog networks;
- irrelevant guest-post farms;
- exact-match anchor manipulation;
- fake scholarship links;
- hidden links.

---

## 20. Accessibility Requirements

1. Meet WCAG 2.2 AA as the implementation target.
2. Ensure keyboard navigation.
3. Use visible focus states.
4. Provide form labels.
5. Announce validation errors.
6. Ensure sufficient text contrast.
7. Support zoom to 200%.
8. Use semantic landmarks.
9. Provide a skip-to-content link.
10. Avoid autoplay.
11. Respect reduced-motion preferences.
12. Add meaningful link text.
13. Ensure WhatsApp and phone controls have accessible names.
14. Test with screen-reader tools.
15. Use Turkish language declaration.

Accessibility supports users and improves crawlable semantic structure.

---

## 21. Privacy and Security Requirements

1. Use HTTPS everywhere.
2. Use secure headers.
3. Protect forms against spam and abuse.
4. Add CSRF protection where relevant.
5. Validate and sanitize all inputs.
6. Avoid exposing email addresses unnecessarily in source code.
7. Store contact requests securely.
8. Define data retention periods.
9. Restrict administrative access.
10. Use multi-factor authentication.
11. Keep dependencies updated.
12. Maintain backups.
13. Add a privacy policy compliant with applicable Turkish law and any other relevant regulations.
14. Obtain informed consent for analytics and marketing cookies where required.
15. Never record session replays on sensitive form fields.

Legal text must be reviewed by a qualified professional.

---

## 22. Implementation Plan

## Sprint 0 — Baseline and Backup

1. Back up code, content, database, and analytics settings.
2. Record current indexed URLs.
3. Export current Search Console data.
4. Export current analytics data.
5. Crawl the website.
6. Save current PageSpeed results.
7. Document all redirects.
8. Identify the technology stack.
9. Create a staging environment.
10. block staging from indexing.

**Deliverable:** Baseline audit package.

---

## Sprint 1 — Critical Technical SEO

1. Select the canonical domain.
2. enforce HTTPS and preferred-host redirects.
3. implement canonical tags.
4. create robots.txt.
5. create XML sitemap.
6. fix indexation directives.
7. add unique titles and descriptions.
8. fix heading hierarchy.
9. create custom 404 page.
10. remove redirect chains.
11. repair broken links.
12. add basic structured data.
13. verify Search Console.
14. submit sitemap.

**Deliverable:** Crawlable and indexable foundation.

---

## Sprint 2 — Trust and Legal Foundation

1. Expand About page.
2. add credential details.
3. create author component.
4. create privacy policy.
5. create cookie policy.
6. create disclaimer.
7. add form consent.
8. remove duplicate testimonials.
9. verify testimonial permissions.
10. add emergency limitation wording.
11. standardize business details.
12. add contact/location page.

**Deliverable:** Health-content trust foundation.

---

## Sprint 3 — Service Architecture

1. Build reusable service-page template.
2. publish priority service pages.
3. add breadcrumbs.
4. add internal-link modules.
5. add FAQ sections.
6. add service schema where accurate.
7. add service CTAs.
8. update homepage service cards.
9. update navigation.
10. generate sitemap entries.

**Deliverable:** Multi-page commercial search architecture.

---

## Sprint 4 — Local SEO

1. Optimize Google Business Profile.
2. add UTM-tagged website link.
3. add map and directions.
4. standardize NAP.
5. create citation inventory.
6. correct inconsistent citations.
7. add authentic professional images.
8. create review request workflow.
9. respond to existing reviews.
10. track map actions.

**Deliverable:** Improved local relevance and map visibility.

---

## Sprint 5 — Performance and UX

1. Optimize the LCP element.
2. compress images.
3. implement responsive images.
4. reduce JavaScript.
5. reduce third-party scripts.
6. optimize fonts.
7. reserve layout dimensions.
8. fix testimonial slider shifts.
9. improve mobile navigation.
10. implement accessible sticky CTA.
11. test forms.
12. validate Core Web Vitals.

**Deliverable:** Faster mobile experience.

---

## Sprint 6 — Content Expansion

1. Create concern-page template.
2. publish the first six concern pages.
3. create article template.
4. publish the first four articles.
5. add references.
6. add reviewer fields.
7. add related-content links.
8. update homepage pathways.
9. request indexing.
10. monitor query coverage.

**Deliverable:** Initial topical authority cluster.

---

## Sprint 7 — Analytics and Optimization

1. Implement GA4 conversion events.
2. validate events in DebugView.
3. configure privacy-safe parameters.
4. create Looker Studio dashboard.
5. set monthly benchmark.
6. review organic landing pages.
7. review low-CTR queries.
8. update titles and descriptions.
9. improve underperforming pages.
10. create quarterly SEO review process.

**Deliverable:** Measurable SEO operating system.

---

## 23. Priority Matrix

### P0 — Must Complete Before Scaling Content

- canonical domain and redirects;
- robots.txt;
- XML sitemap;
- Search Console;
- unique metadata;
- indexability;
- correct heading structure;
- privacy and consent;
- removal of duplicate testimonials;
- complete contact/location data;
- baseline conversion tracking.

### P1 — High Impact

- dedicated service pages;
- About and credential expansion;
- Google Business Profile optimization;
- internal linking;
- structured data;
- mobile performance;
- image optimization;
- concern pages;
- author/reviewer framework.

### P2 — Growth

- article program;
- local citations;
- backlink outreach;
- digital PR;
- content refresh process;
- Bing Webmaster Tools;
- advanced reporting.

### P3 — Optional Enhancements

- online appointment platform;
- multilingual content, only if genuinely supported;
- video explainers with transcripts;
- downloadable parent resources;
- newsletter;
- AI-search visibility monitoring.

---

## 24. Acceptance Criteria

The release is complete when:

1. All P0 items are implemented.
2. The preferred host is the only host serving indexable HTTP 200 pages.
3. `robots.txt` and `sitemap.xml` return HTTP 200.
4. Search Console receives the sitemap without critical errors.
5. Every indexable page has a unique title, description, H1, and canonical.
6. All primary service pages are accessible from the main navigation or homepage.
7. No critical pages are orphaned.
8. Structured data has no critical validation errors.
9. Contact details are consistent across website and Google Business Profile.
10. Forms collect consent and do not leak personal data to analytics.
11. Duplicate testimonials are removed.
12. Major pages meet accessibility and mobile QA checks.
13. Conversion events fire correctly.
14. No critical broken links or redirect loops exist.
15. Page templates are within the agreed performance budget.
16. A monthly reporting dashboard exists.
17. A content owner and review process are assigned.

---

## 25. 90-Day Success Indicators

Targets must be finalized after baseline data is collected.

Recommended directional objectives:

- 100% of priority pages indexed;
- zero critical technical SEO errors;
- all priority templates passing structured-data validation;
- measurable WhatsApp, phone, and form conversions;
- growth in non-branded impressions;
- first-page movement for several Başakşehir service queries;
- increased Google Business Profile actions;
- improved mobile Core Web Vitals;
- at least 8–12 high-quality dedicated pages published;
- improved organic conversion rate compared with baseline.

Do not evaluate SEO only by total traffic. Qualified local leads are the main business outcome.

---

## 26. Recommended Initial Page Briefs

### Page 1: Child Psychologist in Başakşehir

**Primary intent:** Find a nearby child psychologist.  
**Primary CTA:** Request an appointment.  
**Core sections:**

- who the service is for;
- common concerns;
- age groups;
- first meeting;
- parent involvement;
- location and access;
- credentials;
- FAQs;
- related services.

### Page 2: Play Therapy in Başakşehir

**Primary intent:** Understand and find play therapy locally.  
**Core sections:**

- what play therapy is;
- suitable ages;
- issues commonly addressed;
- how sessions work;
- parent meetings;
- expected process without guaranteed outcomes;
- practitioner training;
- FAQs;
- appointment CTA.

### Page 3: Adolescent Psychologist

**Primary intent:** Find support for an adolescent.  
**Core sections:**

- common adolescent concerns;
- confidentiality;
- parent involvement;
- first session;
- school and peer issues;
- anxiety and emotional regulation;
- urgent-risk limitations;
- FAQs.

### Page 4: Psychological Assessment

**Primary intent:** Understand assessment services.  
**Core sections:**

- what is assessed;
- who may refer;
- stages;
- parent interview;
- child sessions;
- report and feedback;
- limits of assessment;
- coordination with schools or physicians;
- FAQs.

---

## 27. Definition of Done for Every New SEO Page

A page is not complete until it has:

- validated target intent;
- original content;
- approved clinical wording;
- unique metadata;
- one H1;
- logical headings;
- author and reviewer information where needed;
- relevant source references;
- canonical tag;
- Open Graph tags;
- structured data where appropriate;
- optimized images;
- internal links in and out;
- breadcrumb;
- mobile QA;
- accessibility QA;
- conversion CTA;
- analytics tracking;
- sitemap inclusion;
- indexability validation;
- post-publication review date.

---

## 28. Implementation Notes for Developers

1. Prefer static generation or server-side rendering for SEO pages.
2. Store SEO fields in a structured CMS model:
   - title;
   - meta description;
   - canonical;
   - slug;
   - Open Graph image;
   - robots;
   - author;
   - reviewer;
   - dates;
   - schema fields.
3. Generate sitemap automatically from published canonical pages.
4. Prevent drafts from being indexed.
5. Add automated checks for duplicate titles and descriptions.
6. Add link checking to CI.
7. Add Lighthouse CI or equivalent performance regression tests.
8. Add schema validation to QA.
9. Add redirect management.
10. Preserve existing URLs whenever possible.
11. Do not place sensitive contact-form content in logs.
12. Add a content last-reviewed workflow.
13. Ensure page source contains primary content.
14. Use semantic HTML components.
15. Keep schema synchronized with visible content.

---

## 29. Risks and Mitigations

### Risk: Health claims become overly promotional

**Mitigation:** Require professional editorial review and prohibit guaranteed outcomes.

### Risk: Multiple pages compete for the same keyword

**Mitigation:** Maintain a keyword-to-URL map and review cannibalization quarterly.

### Risk: Thin location pages are created

**Mitigation:** Publish only locations with genuine, unique relevance.

### Risk: Reviews expose sensitive information

**Mitigation:** Obtain consent, anonymize appropriately, and avoid clinical detail.

### Risk: Analytics collects health or personal data

**Mitigation:** Track only event metadata and suppress form content.

### Risk: Site redesign reduces rankings

**Mitigation:** Preserve URLs, map redirects, test staging, and monitor Search Console after release.

### Risk: AI-generated content reduces trust

**Mitigation:** Require expert review, original professional insight, factual verification, and transparent authorship.

---

## 30. Reference Standards

Implementation should follow current guidance from:

- Google Search Central SEO documentation;
- Google Search Central Core Web Vitals guidance;
- Google Business Profile guidelines;
- Schema.org specifications;
- WCAG 2.2;
- applicable Turkish privacy, advertising, healthcare, and professional regulations.

All legal, ethical, and professional statements must be independently reviewed before publication.

---

## 31. Immediate Next Actions

Complete these actions in order:

1. Verify Google Search Console Domain property.
2. Export current search and index data.
3. crawl all existing URLs.
4. validate robots.txt and sitemap.xml.
5. choose the canonical host.
6. remove duplicated testimonials.
7. create a full Contact/Location page.
8. expand the About/Credentials page.
9. implement analytics conversion events.
10. publish dedicated Child Psychologist and Play Therapy pages.
11. optimize Google Business Profile.
12. improve mobile Core Web Vitals.
13. publish the first concern cluster.
14. start monthly SEO reporting.
15. review results after 90 days and reprioritize.

---

## Appendix A — Suggested Navigation

```text
Home
About
Services
  Child Psychology
  Adolescent Psychology
  Play Therapy
  Psychological Assessment
  Anxiety Support
  Behavioral Problems
  Parent and Family Counseling
Resources
  Articles
  Frequently Asked Questions
Contact
```

---

## Appendix B — Suggested Footer

```text
Psychologist Rabia Bakıcı
Child and Adolescent Psychology
Başakşehir, Istanbul

Services
About
Articles
FAQ
Contact
Privacy Policy
Cookie Policy
Disclaimer
Accessibility

Phone
Email
WhatsApp
Instagram
LinkedIn
```

---

## Appendix C — QA Checklist

### Crawlability

- [ ] robots.txt is valid
- [ ] sitemap.xml is valid
- [ ] canonical URLs are correct
- [ ] important pages are indexable
- [ ] staging is blocked
- [ ] no redirect loops
- [ ] no orphan pages

### On-Page SEO

- [ ] unique title
- [ ] unique description
- [ ] one H1
- [ ] logical H2/H3 structure
- [ ] intent satisfied
- [ ] internal links present
- [ ] alt text reviewed
- [ ] CTA present

### Trust

- [ ] author shown
- [ ] credentials verified
- [ ] sources added
- [ ] reviewed date shown
- [ ] no guaranteed outcome
- [ ] privacy language present
- [ ] testimonial permission confirmed

### Technical

- [ ] mobile rendering tested
- [ ] structured data validated
- [ ] Open Graph tested
- [ ] 404 tested
- [ ] performance budget checked
- [ ] analytics events verified
- [ ] no PII sent to analytics

### Local SEO

- [ ] name, address, and phone consistent
- [ ] Google Business Profile updated
- [ ] map and directions included
- [ ] working hours accurate
- [ ] UTM tracking added
- [ ] review workflow active
