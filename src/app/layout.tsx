import type { Metadata } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
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
  title: "Inklaro – Professionelle Website zum Festpreis",
  description:
    "Professionelle Website ab 799 € netto. Responsive, DSGVO-konform, blitzschnell. Erst zahlen, wenn Sie zufrieden sind.",
  openGraph: {
    title: "Inklaro – Professionelle Website zum Festpreis",
    description:
      "Professionelle Website ab 799 € netto. Responsive, DSGVO-konform, blitzschnell. Erst zahlen, wenn Sie zufrieden sind.",
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
        <StructuredData data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Inklaro",
            url: "https://inklaro.de",
            logo: "https://inklaro.de/images/inklaro-logo.png",
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
            sameAs: ["https://wa.me/4915208709068"],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Inklaro",
            url: "https://inklaro.de",
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
                  price: "79",
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
