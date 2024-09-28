import { Inter } from "next/font/google";
import Head from "next/head";
import Inform from "@/components/inform/inform";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lokasyon Matematik | Ankara Özel Ders ile Başarıyı Yakalayın",
  description: "Ankara'da birebir matematik dersleri ile sınav başarılarını artırın. Lokasyon Matematik ile uzman öğretmenlerden kişisel matematik dersleri alın.",
  openGraph: {
    title: "Lokasyon Matematik | Ankara'da Birebir Özel Matematik Dersleri",
    description: "Lokasyon Matematik, Ankara'da birebir özel derslerle matematikte başarıya ulaşmanızı sağlar. Öğrenciye özel ders planı ve tam destek sunuyoruz.",
    image: "/header/sametmathsicon.svg",  
    url: "https://www.lokasyonmatematik.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasyon Matematik | Ankara Özel Matematik Dersleri",
    description: "Ankara'da uzman eğitmenlerden birebir özel matematik dersleri. Öğrencilerin başarılarını artırmak için Lokasyon Matematik ile doğru adreste olun.",
    image: "/header/sametmathsicon.svg",  
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Lokasyon Matematik",
    "description": "Ankara'da birebir özel matematik dersleri.",
    "url": "https://www.lokasyonmatematik.com",
    "logo": "/header/sametmathsicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-312-555-1234",
      "contactType": "Customer Service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={styles.root}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="google-site-verification" content="Fto9EkJwwrCnn1rAn7M_d0mjpdKPb4AZKFkk-2tdPog" />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/Tittleicon.ico" />
        <link rel="canonical" href={metadata.openGraph.url} />
        <script type="application/ld+json">
          {JSON.stringify(metadata.schema)}
        </script>
      </Head>
      <body className={inter.className}>
        <Inform />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
