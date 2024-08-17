import React from "react";
import styles from "./lightingPage.module.scss";



export default function LightingPage() {
    return (
        <div className={styles.lightingPage}>
        <h2>AYDINLATMA METNİ</h2>
        <p>1. Aydınlatma metni, kişisel verilerin işlenmesi hakkında kişileri bilgilendirmek amacıyla hazırlanmıştır. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat uyarınca, kişisel verilerin işlenmesi hakkında bilgi vermek amacıyla hazırlanmıştır.
        Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri çerçevesinde saklanacaktır. Saklama süresi sona erdiğinde, kişisel verileriniz güvenli bir şekilde imha edilecektir.
        </p>
        </div>
    );
}
