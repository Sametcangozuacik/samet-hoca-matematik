import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

// Metadata API (Next.js 13+)
export const metadata = {
  title: "Lokasyon Matematik | Ankara Özel Ders",
  description:
    "Ankara’da birebir matematik özel dersiyle başarıya ulaşın. Hemen ücretsiz deneme dersi alın!",
  keywords:
    "matematik özel ders, Ankara özel ders, LGS, AYT, TYT, KPSS, birebir ders",
  openGraph: {
    title: "Lokasyon Matematik",
    description:
      "Başarıya giden yolda seninleyiz. Lokasyon Matematik ile hedefe ulaş!",
    url: "https://lokasyonmatematik.com.tr",
    type: "website",
    images: [
      {
        url: "https://lokasyonmatematik.com.tr/header/sametmathsicon.png", // PNG önerilir
        width: 1200,
        height: 630,
        alt: "Lokasyon Matematik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasyon Matematik",
    description:
      "Başarıya giden yolda seninleyiz. Lokasyon Matematik ile hedefe ulaş!",
    images: ["https://lokasyonmatematik.com.tr/header/sametmathsicon.png"],
  },
  icons: {
    icon: "/Titleicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={styles.root}>
      <head>
        {/* Canonical */}
        <link rel="canonical" href="https://lokasyonmatematik.com.tr" />

        {/* JSON-LD Schema (Google için) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Lokasyon Matematik",
              url: "https://lokasyonmatematik.com.tr",
              logo: "https://lokasyonmatematik.com.tr/header/sametmathsicon.png",
              description:
                "Ankara’da birebir matematik özel dersiyle başarıya ulaşın. Hemen ücretsiz deneme dersi alın!",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ankara",
                addressCountry: "TR",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
