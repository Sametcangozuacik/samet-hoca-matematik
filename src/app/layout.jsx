import { Inter } from "next/font/google";
import Head from "next/head";
import Inform from "@/components/ınform/ınform";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lokasyon Matematik | Ankara Özel Ders",
  description: "Lokasyon Matematik, Ankara'da kişiye özel ve etkili matematik dersleri sunar. Öğrencilerimize bireysel eğitim ve destek sağlar.",
  openGraph: {
    title: "Lokasyon Matematik | Ankara Özel Ders",
    description: "Lokasyon Matematik, Ankara'da kişiye özel ve etkili matematik dersleri sunar. Öğrencilerimize bireysel eğitim ve destek sağlar.",
    image: "/images/og-image.jpg", // Gerçek bir resim yolu ekleyin
    url: "https://www.lokasyonmatematik.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasyon Matematik | Ankara Özel Ders",
    description: "Lokasyon Matematik, Ankara'da kişiye özel ve etkili matematik dersleri sunar. Öğrencilerimize bireysel eğitim ve destek sağlar.",
    image: "/images/twitter-image.jpg", // Gerçek bir resim yolu ekleyin
  },
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
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/Tittleicon.ico" />
        <link rel="canonical" href={metadata.openGraph.url} />
        <link rel="icon" href="/Tittleicon.ico" />
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
