import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";

import { personJsonLd, SITE_URL } from "../src/native/seo";

/**
 * Root HTML document for the static web export. This wraps every page and lets
 * us pin the document background to the app's dark theme so overscroll/edges
 * never flash the browser's default white, and carry the static SEO tags that
 * never change (canonical, author, robots, structured data).
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="author" content="David-Paul Folorunsho-Roberts" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
        <ScrollViewStyleReset />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <style dangerouslySetInnerHTML={{ __html: rootStyle }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const rootStyle = `
html, body, #root {
  background-color: #0A0A0A;
}
body {
  overscroll-behavior: none;
}
`;
