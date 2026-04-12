import type { Metadata } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inklaro.de"),
  title: "Inklaro – Professionelle Website zum Festpreis",
  description:
    "Professionelle Website ab 799 € netto. Sieht auf allen Geräten gut aus, rechtlich sicher, blitzschnell. Erst zahlen, wenn du zufrieden bist.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Inklaro – Professionelle Website zum Festpreis",
    description:
      "Professionelle Website ab 799 € netto. Sieht auf allen Geräten gut aus, rechtlich sicher, blitzschnell. Erst zahlen, wenn du zufrieden bist.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${dmSerif.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#FFFAF5] text-[#0F2B3C]">
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="IONPZOCJ"
          strategy="afterInteractive"
        />
        <StructuredData data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Inklaro",
            url: "https://www.inklaro.de",
            logo: "https://www.inklaro.de/images/inklaro-logo.png",
            description: "Professionelle Websites zum Festpreis — responsive, DSGVO-konform, blitzschnell.",
            telephone: "+4915208709068",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dwaschweg 5",
              addressLocality: "Oldenburg",
              postalCode: "26133",
              addressCountry: "DE",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Speckmann Webdesign GmbH",
            },
            sameAs: [],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Inklaro",
            url: "https://www.inklaro.de",
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Professionelle Website erstellen lassen",
            provider: { "@type": "Organization", name: "Inklaro" },
            description: "Individuelle Website ab 799 € netto. Responsive, DSGVO-konform, SEO-optimiert. Erst zahlen bei Zufriedenheit.",
            areaServed: { "@type": "Country", name: "DE" },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "EUR",
              lowPrice: "799",
              offerCount: "1",
              offers: [
                {
                  "@type": "Offer",
                  name: "Website-Erstellung",
                  price: "799",
                  priceCurrency: "EUR",
                  description: "Einmalige Erstellung einer professionellen Website",
                },
                {
                  "@type": "Offer",
                  name: "Hosting & Wartung",
                  price: "39",
                  priceCurrency: "EUR",
                  description: "Monatliches Hosting, SSL, Domain, Wartung und Änderungen",
                },
              ],
            },
          },
        ]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#E8564A] focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
