import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.png";
import whatsapp from "../../../public/Privatetuition/whatsappicon.svg"; // WhatsApp simgesi
import styles from "./mainsection.module.scss";

export default function MainSection() {
    return (
        <main className={styles.mainSection}>
            <div className={styles.mainSectionContainer}>
                <h2 className={styles.mainSectionTitle}>
                    Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları
                </h2>
                <p className={styles.mainSectionDescription}>
                    Ankara'da başarının kapılarını aralamaya hazır mısınız? Lokasyon Matematik olarak, Gazi Üniversitesi'nin yetiştirdiği alanında uzman eğitmenlerimizle hayallerinize bir adım daha yaklaşıyoruz.
                    Eğitimde mükemmeliyet hedefiyle yola çıkan Lokasyon Matematik, kişiye özel ders programlarımızla eksiklerinizi tamamlamanıza ve potansiyelinizi zirveye taşımanıza yardımcı olur. Gazi Üniversitesi'nin bilgi ve birikimiyle desteklenen eğitmenlerimiz, her öğrencinin bireysel ihtiyaçlarını göz önünde bulundurarak, etkili ve kapsamlı bir öğrenme süreci sunar.
                    Hedeflerinizi bizimle keşfedin ve sınavlarda ve akademik hayatta kendinize güvenle ilerleyin. Size özel ders planlarıyla başarıya giden yolda en iyi eğitimi, doğru zamanda ve doğru yerden almak için Lokasyon Matematik'te buluşalım. Gazi Üniversitesi'nin köklü eğitim anlayışını ve profesyonel yaklaşımını deneyimleyerek, hedeflerinize ulaşmanız için gereken tüm desteği sağlayacağız. Eğitimdeki bu önemli adımda yanınızda olmak için buradayız.
                </p>
                <a 
                    href="https://wa.me/905324000000" 
                    className={styles.mainSectionButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image 
                        src={whatsapp} 
                        width={100} 
                        height={30} 
                        alt="WhatsApp ile iletişime geç" 
                    />
                </a>
            </div>
            <Image 
                className={styles.mainSectionImage} 
                src={section} 
                alt="Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları" 
            />
        </main>
    );
}
