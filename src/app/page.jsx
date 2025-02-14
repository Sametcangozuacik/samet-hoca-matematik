import Head from "next/head";
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
  return (
    <>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="description" content="Ankara özel ders sayfamız." />
        <meta name="keywords" content="Matematik dersleri, Özel matematik dersi, Ankara özel ders" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles.main}>
        <MainSection />
        <Membership />
        <MainTable />
        <DemoLesson />
        <Publications/>
        <FixedIcons />
        <WithUs />
        <JoinUs />
      </main>
    </>
  );
}
