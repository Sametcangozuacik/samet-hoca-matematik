"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

import MainSection from "@/components/mainsection/mainsection";
import MainTable from "@/components/maintable/maintable";
import DemoLesson from "@/components/demolesson/demolesson";
import FixedIcons from "@/components/FixedIcons/FixedIcons";
import Membership from "@/components/membership/membership";
import Publications from "@/components/publications/publications";
import JoinUs from "@/components/joinUs/joinus";
import WithUs from "@/components/withus/withus";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Daha kısa süre, hızlı geçiş hissi

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Lokasyon Matematik | Ankara Özel Ders</title>
        <meta
          name="description"
          content="Ankara’da birebir matematik özel dersiyle başarıya ulaşın. Hemen ücretsiz deneme dersi alın!"
        />
        <meta
          name="keywords"
          content="matematik özel ders, Ankara özel ders, LGS, AYT, TYT, KPSS, birebir ders"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Lokasyon Matematik" />
        <meta
          property="og:description"
          content="Başarıya giden yolda seninleyiz. Lokasyon Matematik ile hedefe ulaş!"
        />
        <meta property="og:image" content="/header/sametmathsicon.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={`${styles.loaderWrapper} ${!isLoading ? styles.hidden : ""}`}>
        <div className={styles.loaderContent}>
          <div className={styles.ring}></div>
          <span className={styles.logoText}>Lokasyon Matematik</span>
        </div>
      </div>

      {!isLoading && (
        <main className={styles.main}>
          <MainSection />
          <Membership />
          <MainTable />
          <DemoLesson />
          <Publications />
          <FixedIcons />
          <WithUs />
          <JoinUs />
        </main>
      )}
    </>
  );
}
