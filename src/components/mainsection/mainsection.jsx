import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.png";
import styles from "./mainsection.module.scss";

export default function MainSection() {
    return (
        <main className={styles.mainSection}>
            <h2 className={styles.mainSectionTitle}>
                &quot;Matematikte Zirveye: Online veya Yüz Yüze Eğitimle Başarıya Ulaşın!"&quot;
            </h2>
            <div className={styles.mainSectionContainer}>
                <p className={styles.mainSectionDescription}>
                    Matematikte başarının kapılarını aralamaya hazır mısınız? Lokasyon Matematik olarak, Gazi Üniversitesi’nin yetiştirdiği uzman eğitmenlerimizle matematik alanındaki hedeflerinize bir adım daha yaklaşıyoruz. Bireysel ihtiyaçlara özel hazırlanan ders programlarıyla, başarıya giden yolda yanınızdayız. Matematik, sağlam bir temelle disiplin ve düzenli çalışma gerektirir; biz de her seviyedeki öğrencinin matematik becerilerini geliştirmeyi hedefliyoruz.

                    İster temel konularda destek arıyor olun, ister ileri düzey sınavlara hazırlanın, Lokasyon Matematik en uygun öğrenme ortamını sunar. Başarı, formülleri bilmekle kalmaz; bu bilgiyi doğru uygulayabilmeyi de gerektirir. Gazi Üniversitesi’nin deneyimli eğitmenleri, bu beceriyi kazandırarak öğrencilerimizin kendilerine güvenle ilerlemesini sağlıyor.

                    Güncel eğitim metodolojileriyle hazırlanan ders içeriklerimiz, her seviyedeki öğrenciye hitap eder ve matematiksel düşünme becerilerinizi artırır. Lokasyon Matematik’te, kişiye özel ders planları ile eksiklerinizi tamamlayarak zayıf yönlerinizi güçlendiriyoruz. Matematikte sağlam bir temel atmak, gelecekteki başarılarınız için kritik bir adımdır. Başarılı bir matematik kariyeri için en doğru eğitimle yola çıkın. Lokasyon Matematik, sizi zirveye taşıyacak en doğru adres!
                </p>
                <Image
                    className={styles.mainSectionImage}
                    src={section}
                    alt="Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları"
                    width={1200}
                    height={600}
                />
            </div>
        </main>
    );
}
