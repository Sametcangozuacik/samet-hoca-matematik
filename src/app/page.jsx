
import styles from "./page.module.scss";
import MainSection from "@/components/mainsection/mainsection";
import MainTable from "@/components/maintable/maintable";
import FrequentlyAsked from "@/components/frequentlyAsked/frequentlyasked";
import DemoLesson from "@/components/demolesson/demolesson";


export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <MainTable />
      <DemoLesson />
      <FrequentlyAsked/>
    </main>
  );
}
