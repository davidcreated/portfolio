// Single source of truth for SEO absolute URLs and structured data.
// NOTE: if the custom domain ever changes, update SITE_URL here AND the two
// static crawler files that hardcode it: public/robots.txt and public/sitemap.xml.
export const SITE_URL = "https://mobilebydavid.dev";

export const SEO = {
  name: "David-Paul Folorunsho-Roberts",
  title: "David-Paul Folorunsho-Roberts · Software Engineer",
  description:
    "Software Engineer · Mobile & Backend. 6+ years shipping production apps across fintech, health tech, e-commerce, and energy/IoT.",
  image: `${SITE_URL}/og-image.png`,
  imageAlt: "David-Paul Folorunsho-Roberts — Software Engineer, Mobile & Backend",
};

// JSON-LD Person schema for Google rich results / knowledge graph.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David-Paul Folorunsho-Roberts",
  jobTitle: "Software Engineer",
  description: SEO.description,
  url: SITE_URL,
  image: SEO.image,
  email: "mailto:timifroberts@gmail.com",
  sameAs: [
    "https://github.com/davidcreated",
    "https://www.linkedin.com/in/david-paul-f-198650214",
  ],
  knowsAbout: [
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "Go",
    "TypeScript",
    "Mobile Engineering",
    "Backend Engineering",
    "Clean Architecture",
  ],
};
