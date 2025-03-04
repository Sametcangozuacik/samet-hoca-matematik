import React from 'react';
import Image from 'next/image';
import Whatsapp from '../../../public/FixedIcons/whatsapplogo.svg';
import Phone from '../../../public/FixedIcons/phonelogo.svg';
import Instagram from '../../../public/FixedIcons/instagramlogo.svg';
import styles from './FixedIcons.module.scss';

const FixedIcons = () => {
  return (
    <div className={styles.fixedIcons}>
      <a href="tel:+905073195505" target="_blank" rel="noopener noreferrer">
        <Image 
          src={Phone}
          alt="Arama" 
          className={styles.icon} 
          width={40} 
          height={40} 
        />
      </a>
      <a href="https://wa.me/905073195505" target="_blank" rel="noopener noreferrer">
        <Image 
          src={Whatsapp} 
          alt="WhatsApp" 
          className={styles.icon} 
          width={40} 
          height={40} 
        />
      </a>
      <a  href="https://www.instagram.com/lokasyonmatematik?igsh=MW10bmFnN25xODVtdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <Image 
          src={Instagram} 
          alt="Instagram" 
          className={styles.icon} 
          width={40} 
          height={40} 
        />
      </a>
    </div>
  );
};

export default FixedIcons;
