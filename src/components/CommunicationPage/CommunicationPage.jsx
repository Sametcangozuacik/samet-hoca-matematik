"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import whatsapp from "../../../public/ınform/wplogicon.svg";
import gmail from "../../../public/ınform/gmaillogoicon.svg";
import location from "../../../public/CommunicationPage/location.icon.svg";
import instagramicon from "../../../public/footer/instagramicon.svg";
import styles from "./CommunicationPage.module.scss";

export default function CommunicationPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (name === '' || email === '' || subject === '' || phone === '') { 
            alert('Lütfen tüm alanları doldurunuz');
            return;
        } else {
            alert('Gönderildi');
        }

        console.log(name, email, subject, phone);

        const serviceId = "service_ao71e3h";
        const templateId = "template_rhsafw4";
        const publicKey = "5LXQXhUKEv187iC2W";

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            phone: phone,
        };  // Closing brace added here

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    }

    return (
        <div className={styles.contactPageSection}>
            <h1 className={styles.contactPageH1}>Lokasyon Matematik ile tanışmaya hazır mısınız?</h1>
            <div className={styles.contactSectionPage}>
                <div className={styles.contactPage}>
                    <h2 className={styles.contactPageH2}>Hızlı İletişim Formu Doldurunuz</h2>
                    <form className={styles.contactPageForm} onSubmit={handleSubmit}>
                        <input className={styles.contactPageFormInput} value={name} onChange={handleNameChange} type="text" placeholder="Adınız ve Soyadınız" />
                        <input className={styles.contactPageFormInput} value={phone} onChange={handlePhoneChange} type="tel" placeholder="Telefon Numaranız" />
                        <input className={styles.contactPageFormInput} value={email} onChange={handleEmailChange} type="email" placeholder="E-posta Adresiniz" />
                        <input className={styles.contactPageFormInput} value={subject} onChange={handleSubjectChange} type="text" placeholder="Danışmak İstediğiniz Konu" />
                        <button className={styles.contactPageFormInputBtn} type="submit">Gönder</button>
                    </form>
                </div>
                <div className={styles.contactPage}>
                    <h2 className={styles.contactPageH2}>İletişim</h2>
                    <ul className={styles.footerBoxList}>
                        <a className={styles.ınformSectionLink} href="https://wa.me/5073195505" target="_blank" rel="noopener noreferrer">
                            <Image src={whatsapp} width={36} height={36} alt="WhatsApp" />+90 507 319 5505
                        </a>
                        <a className={styles.ınformSectionLink} href="mailto:lokasyonmatematik@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src={gmail} width={36} height={36} alt="Gmail" />lokasyonmatematik@gmail.com
                        </a>
                        <a className={styles.ınformSectionLink} href="https://www.instagram.com/lokasyonmatematik?igsh=MW10bmFnN25xODVtdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <Image src={instagramicon} width={36} height={36} alt="WhatsApp" />lokasyonmatematik
                        </a>
                        <p className={styles.ınformSectionLink}> <Image src={location} width={36} height={36} alt="Gmail" />Ankara, Türkiye</p>
                    </ul>
                </div>
            </div>
        </div>
    );
}
