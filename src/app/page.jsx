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
    }, 1500); // 1.5 saniye sonra yükleyici kapanır

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="description" content="Ankara özel ders sayfamız." />
        <meta name="keywords" content="Matematik dersleri, Özel matematik dersi, Ankara özel ders" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Şık Yükleyici */}
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContent}>
            <div className={styles.ring}></div>
            <span className={styles.logoText}>Lokasyon Matematik</span>
          </div>
        </div>
      )}

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
    </>
  );
}
