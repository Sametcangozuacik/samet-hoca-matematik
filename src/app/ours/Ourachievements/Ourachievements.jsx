import React from "react";
import styles from "./Ourachievements.module.scss";

export default function OurAchievements() {
    return (
        <section className={styles.achievementsSection}>
            <h1 className={styles.sectionTitle}>Başarılarımız</h1>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2019</h2>
                <p className={styles.description}>
                    Şirketimiz 2019 yılında kuruldu ve matematik eğitimine yeni bir yaklaşım getirdik.
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Arda Kılıç:</strong> İlk LGS denemesinde tam puan aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Elif Yılmaz:</strong> Matematik sınavlarında okul birincisi oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Deniz Can:</strong> Özel matematik yarışmasında dereceye girdi.
                    </li>
                </ul>
            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2020</h2>
                <p className={styles.description}>
                    İlk online eğitim programımızı başlattık ve öğrencilerimizin başarılarıyla gurur duyduk:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Ahmet Yılmaz:</strong> LGS&apos;de Türkiye genelinde ilk 1.000&apos;e girdi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Selin Kara:</strong> Matematik yarışmasında il birincisi oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Zeynep Arslan:</strong> Uluslararası matematik sınavında 2. oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Murat Demir:</strong> ALES&apos;te yüksek başarı puanı aldı.
                    </li>
                </ul>
            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2021</h2>
                <p className={styles.description}>
                    Daha fazla öğrenciye ulaşarak başarı hikayelerimizi büyüttük:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Mehmet Aksoy:</strong> Üniversite giriş sınavında Matematik testinde tam puan aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Ece Demir:</strong> Uluslararası matematik olimpiyatlarında bronz madalya kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Kaan Yalçın:</strong> KPSS&apos;de Türkiye genelinde ilk 1000&apos;a girdi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Leyla Şimşek:</strong> Üniversite sınavında ilk 2000&apos;de yer aldı.
                    </li>
                </ul>
            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2022</h2>
                <p className={styles.description}>
                    Öğrencilerimize bireysel mentorluk desteği sunmaya başladık ve dikkat çeken başarılar elde ettik:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Burak Can:</strong> Liseye Geçiş Sınavı&apos;nda il genelinde derece yaptı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Zeynep Çelik:</strong> Matematik alanında hazırladığı proje ile TÜBİTAK ödülü aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Elif Demirtaş:</strong> Uluslararası matematik olimpiyatlarında 10. oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Baran Doğan:</strong> KPSS&apos;de tüm soruları doğru yanıtladı.
                    </li>
                </ul>
            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2023</h2>
                <p className={styles.description}>
                    Dijitalde eğitim platformumuzu geliştirerek daha fazla öğrenciye ulaştık ve başarılarımızı artırdık:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Ayşe Kaya:</strong> Ulusal matematik yarışmasında altın madalya kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Emre Şahin:</strong> YKS'de Matematik alanında Türkiye 3552.’sü oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Mina Yıldız:</strong> ALES’te başarı puanıyla dikkat çekti.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Sefa Tan:</strong> KPSS’de matematik alanında en yüksek notu aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Kerem Öz:</strong> LGS’de tam puan alarak okul birincisi oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Elif Demir:</strong> TYT’de 39 net, AYT’de 40 net yaptı, Türkiye sıralamasında ilk 1800’de yer aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Burak Yılmaz:</strong> DGS’de Türkiye 215.’sü oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Zeynep Kara:</strong> Uluslararası matematik olimpiyatlarında Türkiye’yi temsil etti.
                    </li>
                </ul>

            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2024</h2>
                <p className={styles.description}>
                    Yeni projelerimiz ve genişleyen ekibimizle daha fazla öğrenciye destek olduk:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Deniz Çetin:</strong> Ulusal matematik yarışmasında birincilik kazandı ve TÜBİTAK proje yarışmasında derece aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Ömer Faruk Yılmaz:</strong> YKS’de Türkiye 1800.’sü oldu ve üniversite sınavında tam burs hakkı kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Zeynep Kılıç:</strong> ALES’te sayısal puanla 92 aldı, yüksek lisans bursu kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Furkan Demir:</strong> KPSS’de matematik alanında Türkiye genelinde ilk 140’ye girdi ve devlet memuru oldu.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Emircan Kaya:</strong> DGS’de Türkiye 295.’si oldu, sayısal testte tam puan yaptı ve yüksek başarı gösterdi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>İlayda Şahin:</strong> Türkiye sıralamasında ilk 5000’de yer aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Murat Yıldırım:</strong> LGS’de tüm soruları doğru yanıtlayarak okul birincisi oldu ve bölge derecesi aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Nazlı Güneş:</strong> KPSS 90 puan alarak en yüksek notu aldı ve atanmayı garantiledi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Batuhan Özcan:</strong> YKS’de matematik alanında Türkiye ilk 1200’de yer aldı, tam burs kazandı ve üniversitede aktif kulüp üyesi oldu.
                    </li>
                </ul>
            </div>
            <div className={styles.yearBlock}>
                <h2 className={styles.yearTitle}>2025</h2>
                <p className={styles.description}>
                    Sistemize kayıtlı 150 öğrenci ile eğitimlerimize devam ediyoruz ve başarılarımızı artırıyoruz:
                </p>
                <ul className={styles.studentList}>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>İrem Özkan:</strong> Ulusal matematik yarışmasında altın madalya kazandı, ayrıca bölge birincisi oldu ve TÜBİTAK bilim fuarında derece aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Baran Yıldırım:</strong> YKS’de Türkiye 1200.’sü oldu, TYT’de 40 net yaptı ve üniversite tercihlerinde tam burs kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Selin Karaca:</strong> ALES’te sayısal puanla 95 üstü alarak bölüm birincisi oldu, akademik makale yayınladı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Kerem Demir:</strong> KPSS’de  Türkiye genelinde ilk 189.'inci girerek en yüksek notu aldı, alanında uzmanlaşmak üzere yüksek lisans bursu kazandı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Buse Eroğlu:</strong> Uluslararası matematik olimpiyatlarında Türkiye’yi temsil etti, bronz madalya kazandı ve matematik alanında seçkin yaz kamplarına davet edildi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Mert Yalçın:</strong> DGS’de Türkiye 100.’sü oldu, hem sayısal hem sözel testlerde yüksek başarı gösterdi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Elif Demirtaş:</strong> TYT’de 39 net, AYT’de 40 net yaptı, Türkiye sıralamasında ilk 1500’de yer aldı.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Sena Karabulut:</strong> LGS’de tam puanla okul birincisi oldu, matematik alanında Türkiye genelinde ilk 50’ye girdi.
                    </li>
                    <li className={styles.studentItem}>
                        <strong className={styles.studentName}>Deniz Yılmaz:</strong> TYT’de 38 net, AYT’de 39 net yaptı, Türkiye sıralamasında ilk 2000’de yer aldı ve tam burs kazandı.
                    </li>

                </ul>
            </div>
        </section>
    );
}
