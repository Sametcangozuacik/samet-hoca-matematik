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
import { MapPin } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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

      {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderContent}>
            <MapPin size={64} color="#38bdf8" />
            <span className={styles.logoText}>Lokasyon Matematik</span>
          </div>
        </div>
      )}

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
