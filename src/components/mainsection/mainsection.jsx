import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.png";
import styles from "./mainsection.module.scss";

export default function MainSection() {
    return (
        <main className={styles.mainSection}>
            <h2 className={styles.mainSectionTitle}>
             "Matematikte Başarıya Giden Yol: Online veya Yüz Yüze Eğitim Seçenekleriyle Hedeflerinize Ulaşın!"
            </h2>
            <div className={styles.mainSectionContainer}>
                <p className={styles.mainSectionDescription}>
                    Matematikte başarının kapılarını aralamaya hazır mısınız? Lokasyon Matematik olarak, Gazi Üniversitesi’nin yetiştirdiği uzman eğitmenlerimizle matematik alanındaki hedeflerinize bir adım daha yaklaşmanızı sağlıyoruz. Her öğrencinin bireysel ihtiyaçlarına özel olarak hazırlanan matematik ders programlarıyla, başarıya giden yolda yanınızdayız.

                    Matematik, sağlam bir temelle birlikte disiplin ve düzenli çalışma gerektirir. Biz, her seviyedeki öğrencinin matematik becerilerini geliştirmeyi ve eksiklerini tamamlamayı hedefliyoruz. İster temel matematik konularında desteğe ihtiyaç duyuyor olun, ister ileri düzeyde sınavlara hazırlanın, Lokasyon Matematik size en uygun öğrenme ortamını sunar.

                    Matematikte başarı, sadece formülleri bilmekle sınırlı değildir; aynı zamanda bu bilgiyi doğru şekilde uygulayabilmeyi gerektirir. Gazi Üniversitesi’nin deneyimli eğitmen kadrosu, bu uygulama becerisini kazandırarak öğrencilerimizin matematikte kendilerine güvenle ilerlemelerini sağlıyor. Güncel eğitim metodolojileriyle hazırlanan ders içeriklerimiz, her seviyedeki öğrenciye hitap eder ve matematiksel düşünme becerilerinizi en üst düzeye çıkarır.

                    Lokasyon Matematik’te, kişiye özel matematik ders planları ile eksiklerinizi tamamlıyor, zayıf yönlerinizi güçlendiriyoruz. Bu sayede matematik sınavlarınızda ve akademik yaşamınızda fark yaratmanızı sağlıyoruz. Matematikte sağlam bir temel atmak, gelecekteki başarılarınız için kritik bir adımdır.

                    Başarılı bir matematik kariyeri için en doğru eğitimle yola çıkın. Lokasyon Matematik, sizi matematikte zirveye taşıyacak en doğru adres!
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
