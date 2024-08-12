import Image from "next/image";
import styles from "./page.module.scss";
import MainSection from "@/components/mainsection/mainsection";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
    </main>
  );
}
