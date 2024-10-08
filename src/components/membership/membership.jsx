import React from "react";
import Image from "next/image";
import Membershipone from "../../../public/membership/membershipone.png";
import Membershiptwo from "../../../public/membership/membershiptwo.png";
import Membershipthree from "../../../public/membership/membershipthree.png";
import Link from "next/link";
import styles from "./membership.module.scss";

export default function Membership() {
    return (
        <div className={styles.memberShipSection}>
            <h1 className={styles.memberShipSectionHeading}>
                Ders Alabileceğim En İyi Öğretmenlere Nasıl Ulaşabilirim?
            </h1>
            <div className={styles.memberShipSectionContent}>
                <Image
                    src={Membershipone}
                    alt="Membership"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }} // Yeni stil
                />
                <div className={styles.memberShipSectionContentText}>
                    <h6 className={styles.stepTitle}>1. Adım</h6>
                    <p className={styles.memberShipParagraph}>
                        Matematik derslerine ihtiyacın var mı? O halde doğru adrestesin! Lokasyon Matematik, ihtiyaçlarına en uygun ve konumuna en yakın matematik öğretmenini bulmanı sağlar. Matematik alanında geniş bir yelpazede; ilkokul takviyesi, sınav hazırlığı ve üniversite dersleri gibi konularda ders alabileceğin en iyi öğretmenleri, gelişmiş arama motorumuz sayesinde dakikalar içinde keşfedebilirsin.
                    </p>
                </div>
            </div>
            <div className={styles.memberShipSectionContent}>
                <div className={styles.memberShipSectionContentText}>
                    <h6 className={styles.stepTitle}>2. Adım</h6>
                    <p className={styles.memberShipParagraph}>
                        Öğretmenlerin tecrübeleri, uzmanlık alanları, ders verdiği yerler, tanıtım videoları, üniversite bilgileri ve saatlik ders ücretleri gibi bilgilere sayfamız üzerinden ulaşabilirsiniz. Birçok kritere göre karşılaştırma yaparak aradığınız matematik öğretmenini kolayca keşfedebilirsiniz! İhtiyaçlarınıza en uygun olduğunu düşündüğünüz matematik öğretmenine ders talebinizi iletin; öğretmeniniz size dönüş sağlasın, şartları konuşun ve derslere başlayın. Unutmayın, Özel Ders Alanı'nda her bütçeye uygun matematik öğretmeni bulunmaktadır. Saatlik fiyat aralığı 750 TL - 1.500 TL arasında değişmektedir.
                    </p>
                </div>
                <Image
                    src={Membershiptwo}
                    alt="Membership"
                    width={400}
                    height={400}
                    style={{ width: "80%", height: "auto" }} // Yeni stil
                />
            </div>
            <div className={styles.memberShipSectionContent}>
                <Image
                    src={Membershipthree}
                    alt="Membership"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }} // Yeni stil
                />
                <div className={styles.memberShipSectionContentText}>
                    <h6 className={styles.stepTitle}>3. Adım</h6>
                    <p className={styles.memberShipParagraph}>
                        Genel bir araştırma yapmak ve alternatif oluşturmak istiyorsanız, sizin için hazırladığımız kullanım kolaylığına sahip panelimizden tüm işlemlerinizi yönetebilirsiniz. "Genel Ders Talebi" oluşturma bölümünden sistemin sizi yönlendirdiği şekilde isteklerinizi net bir şekilde ifade ederek genel bir talep oluşturabilirsiniz. Talebinize en uygun matematik öğretmenleri ⚡ gün içerisinde sizinle iletişime geçecektir.

                        Ayrıca, öğretmenlerle doğrudan iletişim kurmak için arama ve WhatsApp arama özelliklerimizi kullanabilirsiniz. Arama özelliği sayesinde öğretmenlerin profillerine hızlıca erişebilir, ihtiyaçlarınıza uygun öğretmenlerle anında iletişime geçebilirsiniz. WhatsApp araması ile öğretmenlerle güvenli bir ortamda, hızlı bir şekilde görüşme sağlayarak ders detaylarını konuşabilir, alternatif oluşturabilir ve aradığınız matematik öğretmenini kolayca bulabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}

