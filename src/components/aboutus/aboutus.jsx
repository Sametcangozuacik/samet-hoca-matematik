import React from "react";
import styles from "./aboutus.module.scss";
import Head from "next/head";

export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>
            <Head>
                <title>Hakkımızda | Lokasyon Matematik</title>
                <meta name="description" content="Lokasyon Matematik, Gazi Üniversitesi öğrencileri tarafından geliştirilen bir eğitim projesidir. Matematik alanında bireysel ve etkili öğrenme çözümleri sunarak başarıyı artırmayı hedefliyoruz." />
                <meta name="keywords" content="Lokasyon Matematik, Gazi Üniversitesi, matematik eğitimi, özel ders, eğitim projeleri" />
            </Head>
            <h1>Hakkımızda</h1>
            <p>
                Lokasyon Matematik, Gazi Üniversitesi’nin yetenekli ve dinamik öğrencileri tarafından geliştirilen bir eğitim projesidir. Matematik alanındaki bilgi ve deneyimimizi, öğrencilerin ihtiyaçlarına en iyi şekilde cevap verebilecek bir platform oluşturmak amacıyla bir araya getirdik. Projemizin temel amacı, matematik derslerinde başarıyı artırmak, öğrencilere sağlam bir matematik temeli kazandırmak ve onların akademik hedeflerine ulaşmalarına destek olmaktır.
            </p>
            <p>
                Matematik, birçok öğrenci için zorlayıcı ve karmaşık bir ders olabilir. Ancak biz, her öğrencinin matematiği anlayabileceğine ve bu derste başarılı olabileceğine inanıyoruz. Bu inançla yola çıkarak, bireysel ihtiyaçlara uygun, esnek ve etkili öğrenme çözümleri sunuyoruz. Lokasyon Matematik olarak, her öğrencinin öğrenme hızına ve tarzına uygun ders programları oluşturuyoruz. Böylece, öğrencilerimiz derslerinde karşılaştıkları zorlukları aşarken, matematikle barışık bir ilişki kurabiliyorlar.
            </p>
            <p>
                Eğitim kadromuz, Gazi Üniversitesi’nde eğitim gören ve matematik konusunda derinlemesine bilgiye sahip öğrencilerden oluşmaktadır. Eğitmenlerimiz, öğrencilere yalnızca matematik öğretmekle kalmıyor, aynı zamanda onları motive ederek, derslerine olan ilgilerini artırıyor. Öğrencilerimizin analitik düşünme becerilerini geliştirerek, matematiksel problemlere farklı açılardan yaklaşmalarını sağlıyoruz.
            </p>
            <p>
                Lokasyon Matematik olarak, derslerin sadece sınıf ortamında kalmasını istemiyoruz. Bu nedenle, dijital araçlar ve interaktif yöntemlerle zenginleştirilmiş ders içerikleri sunuyoruz. Öğrencilerimize sunduğumuz kaynaklar ve materyaller, onların derslere aktif katılımını teşvik ederek, öğrenme sürecini daha keyifli ve verimli hale getiriyor.
            </p>
            <p>
                Matematikte başarıya giden yolda, sizlerin yanınızda olmayı hedefliyoruz. Amacımız, sadece sınavlarda yüksek notlar almanızı sağlamak değil, aynı zamanda matematiği sevmenize ve bu alanda güçlü bir özgüven kazanmanıza yardımcı olmaktır. Lokasyon Matematik olarak, matematiğin her öğrencinin hayatında bir başarı hikayesine dönüşmesi için çalışıyoruz.
            </p>
        </div>
    );
}
