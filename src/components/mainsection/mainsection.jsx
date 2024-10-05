import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.jpeg";
import styles from "./mainsection.module.scss";

export default function MainSection() {
    return (
        <main className={styles.mainSection}>
            <div className={styles.mainSectionContainer}>
                <h2 className={styles.mainSectionTitle}>
                    Online veya Yüz Yüze: Ankara&apos;nın Alanında Uzman Eğitmenleri ile Başarıya Ulaşın!
                </h2>
                <p className={styles.mainSectionDescription}>
                    Ankara’da başarının kapılarını aralamaya hazır mısınız? Lokasyon Matematik olarak, Gazi Üniversitesi’nin yetiştirdiği alanında uzman eğitmenlerimizle hayallerinize bir adım daha yaklaşıyoruz. Her öğrencinin bireysel ihtiyaçlarını ön planda tutarak, sizi başarıya ulaştıracak özel ders programları oluşturuyoruz. Sadece bir eğitim kurumu değil, aynı zamanda geleceğinize rehberlik eden bir yol arkadaşıyız.

                    Eğitimde mükemmeliyet hedefiyle yola çıkan Lokasyon Matematik, sizlere özel olarak hazırlanan ders programlarımızla eksiklerinizi tamamlamanıza ve potansiyelinizi zirveye taşımanıza yardımcı olur. Gazi Üniversitesi’nin bilgi ve birikimiyle desteklenen eğitmenlerimiz, her öğrencinin bireysel ihtiyaçlarını göz önünde bulundurarak etkili ve kapsamlı bir öğrenme süreci sunar. Bu sayede sadece sınavlarda değil, aynı zamanda akademik hayatınızda da kendinize güvenle ilerlemenizi sağlıyoruz.

                    Her seviyedeki öğrencinin ihtiyacını karşılayacak şekilde tasarlanan ders içeriklerimiz, en güncel eğitim metodolojilerini kullanarak hazırlanmıştır. İster sınavlara hazırlanan bir öğrenci olun, ister akademik kariyerinizde bir adım öne çıkmak isteyin, Lokasyon Matematik’te sizin için en uygun öğrenme deneyimini bulacaksınız.

                    Hedeflerinizi bizimle keşfedin ve sınavlarda, akademik hayatta kendinize güvenle ilerleyin. Size özel ders planlarıyla başarıya giden yolda en iyi eğitimi, doğru zamanda ve doğru yerden almak için Lokasyon Matematik’te buluşalım. Eğitimde sadece bilgi aktarmakla kalmıyor, aynı zamanda motivasyonunuzu ve özgüveninizi artırıyoruz. Bu süreçte, her adımda yanınızda olarak, sizi hayallerinize bir adım daha yaklaştırmayı hedefliyoruz.

                    Gazi Üniversitesi’nin köklü eğitim anlayışını ve profesyonel yaklaşımını deneyimleyerek, hedeflerinize ulaşmanız için gereken tüm desteği sağlayacağız. Eğitimdeki bu önemli adımda yanınızda olmak için buradayız. Hedeflerinize giden yolda, sizi desteklemek ve potansiyelinizi en üst seviyeye çıkarmanız için Lokasyon Matematik olarak her zaman yanınızdayız.

                    Unutmayın, başarılı bir gelecek için atılacak en önemli adım, doğru eğitimle başlar. Gelin, birlikte bu yolculuğa çıkalım!
                </p>
            </div>
            <Image
                className={styles.mainSectionImage}
                src={section}
                alt="Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları"
                width={1200}
                height={600}
            />
        </main>
    );
}
