import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import styles from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

// ✅ Metadata API (Next.js 13+)
export const metadata = {
  title: "Lokasyon Matematik | Ankara Matematik Özel Ders",
  description:
    "Ankara’da birebir matematik özel dersiyle başarıya ulaşın. TYT, AYT, LGS ve KPSS için deneyimli öğretmenlerle özel ders fırsatı.",
  keywords:
    "matematik özel ders, Ankara özel ders, LGS, AYT, TYT, KPSS, birebir ders, özel matematik dersi",
  openGraph: {
    title: "Lokasyon Matematik | Matematik Özel Ders Ankara",
    description:
      "Başarıya giden yolda seninleyiz. Lokasyon Matematik ile hedefe ulaş!",
    url: "https://lokasyonmatematik.com",
    type: "website",
    images: [
      {
        url: "https://lokasyonmatematik.com/header/sametmathsicon.png", // PNG olmalı!
        width: 1200,
        height: 630,
        alt: "Lokasyon Matematik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasyon Matematik | Ankara Özel Matematik Dersi",
    description:
      "Başarıya giden yolda seninleyiz. Lokasyon Matematik ile hedefe ulaş!",
    images: ["https://lokasyonmatematik.com/header/sametmathsicon.png"],
  },
  icons: {
    icon: "/Titleicon.ico",
  },
  alternates: {
    canonical: "https://lokasyonmatematik.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={styles.root}>
      <head>
        <title>Lokasyon Matematik | Ankara Özel Matematik Dersi</title>
      </head>
      <body className={inter.className}>
        {/* ✅ JSON-LD Schema (Google için) */}
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Lokasyon Matematik",
              url: "https://lokasyonmatematik.com",
              logo: "https://lokasyonmatematik.com/header/sametmathsicon.png",
              description:
                "Ankara’da birebir matematik özel dersiyle başarıya ulaşın. TYT, AYT, LGS ve KPSS için deneyimli öğretmenlerle özel ders fırsatı.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ankara",
                addressCountry: "TR",
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
