
import styles from "./page.module.scss";
import MainSection from "@/components/mainsection/mainsection";
import MainTable from "@/components/maintable/maintable";


export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <MainTable />
    </main>
  );
}
