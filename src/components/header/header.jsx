"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from '../../../public/header/hamburgermenuicon.svg';
import logo from '../../../public/header/sametmathsicon.svg';
import home from '../../../public/header/homeicon.svg';
import about from '../../../public/header/abouticon.svg';
import book from '../../../public/header/bookicon.svg';
import bookopen from '../../../public/header/bookopenicon.svg';
import bookclosed from '../../../public/header/bookclosedicon.svg';
import university from '../../../public/header/universtyicon.svg';
import kpss from '../../../public/header/kpssicon.svg';
import phone from '../../../public/header/phoneicon.svg';
import styles from './header.module.scss';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(null); // To track which submenu is open
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setSubMenuOpen(null); // Close all submenus when the main menu is toggled
    };

    const toggleSubMenu = (index, event) => {
        event.preventDefault(); // Prevent the default link behavior
        setSubMenuOpen(subMenuOpen === index ? null : index); // Toggle the specific submenu
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setMenuOpen(false);
                setSubMenuOpen(null); // Close all submenus when clicking outside
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={styles.header} ref={headerRef}>
            <Image src={logo} width={200} height={200} alt="Site Logo" />
            <button className={styles.hamburger} onClick={toggleMenu}>
                <Image src={hamburger} width={48} height={48} alt="Menu" />
            </button>
            <ul className={`${styles.link} ${menuOpen ? styles.open : ''}`}>
                <li><Link className={styles.headerlink} href="/"><Image src={home} width={24} height={24} alt="home" />Anasayfa</Link></li>
                <li><Link className={styles.headerlink} href="/about"><Image src={about} width={24} height={24} alt="home" />Biz Kimiz ?</Link></li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(1, e)}
                    >
                        <Image src={book} width={24} height={24} alt="home" />İlkokul
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 1 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/services/university1">1.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">2.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">3.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">4.Sınıf</Link></li>
                    </ul>
                </li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(2, e)}
                    >
                        <Image src={bookclosed} width={24} height={24} alt="home" />Ortaokul
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 2 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/services/university1">5.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">6.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">7.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">8.Sınıf</Link></li>
                    </ul>
                </li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(3, e)}
                    >
                        <Image src={bookopen} width={24} height={24} alt="home" />Lise
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 3 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/services/university1">9.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">10.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">11.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university1">12.Sınıf</Link></li>
                    </ul>
                </li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(4, e)}
                    >
                        <Image src={university} width={24} height={24} alt="home" />YKS
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 4 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/services/university1">TYT</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">AYT</Link></li>
                    </ul>
                </li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(5, e)}
                    >
                        <Image src={kpss} width={24} height={24} alt="home" />KPSS & ALES
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 5 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/services/university1">KPSS</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">ALES</Link></li>
                        <li><Link className={styles.subMenuLink} href="/services/university2">DGS</Link></li>
                    </ul>
                </li>

                <li><Link className={styles.headerlink} href="/contact"><Image src={phone} width={24} height={24} alt="home" />İletişim</Link></li>
            </ul>
        </header>
    );
}
