import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./globals.module.scss";

const inter = Inter({ subsets: ["latin"] });

const defaultMetadata = {
  // ... metadata aynı
};

const mergeMetadata = (customMetadata = {}) => ({
  ...defaultMetadata,
  ...customMetadata,
  openGraph: { ...defaultMetadata.openGraph, ...customMetadata.openGraph },
  twitter: { ...defaultMetadata.twitter, ...customMetadata.twitter },
});

export default function RootLayout({ children, pageMetadata = {} }) {
  const metadata = mergeMetadata(pageMetadata);

  return (
    <html lang="tr" className={styles.root}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.openGraph.url} />

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="google11e5491cd3f09394"
        />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Favicon */}
        <link rel="icon" href="/Titleicon.ico" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </Head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
