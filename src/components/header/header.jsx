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
import costumer from '../../../public/header/customericon.svg';
import styles from './header.module.scss';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(null); // To track which submenu is open
    const [windowWidth, setWindowWidth] = useState(0); // To track window width
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

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={styles.header} ref={headerRef}>
            <Image className={styles.headerLogo} src={logo} alt="Site Logo" />
            {windowWidth <= 600 && (
                <div className={styles.phoneLink}>
                    <Link href="tel:+905073195505">
                        <Image src={costumer} width={24} height={24} alt="phone" />
                    </Link>
                </div>
            )}
            <button className={styles.hamburger} onClick={toggleMenu}>
                <Image src={hamburger} width={48} height={48} alt="Menu" />
            </button>
            <ul className={`${styles.link} ${menuOpen ? styles.open : ''}`}>
                <li><Link className={styles.headerlink} href="/"><Image src={home} width={24} height={24} alt="home" />Anasayfa</Link></li>
                <li><Link className={styles.headerlink} href="/ours"><Image src={about} width={24} height={24} alt="home" />Biz Kimiz ?</Link></li>

                <li className={styles.subMenuParent}>
                    <Link
                        className={styles.headerlink}
                        href="/services/university"
                        onClick={(e) => toggleSubMenu(1, e)}
                    >
                        <Image src={book} width={24} height={24} alt="home" />İlkokul
                    </Link>
                    <ul className={`${styles.subMenu} ${subMenuOpen === 1 ? styles.subMenuOpen : ''}`}>
                        <li><Link className={styles.subMenuLink} href="/primaryschool/firstclass">1.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/primaryschool/secondclass">2.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/primaryschool/thirdclass">3.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/primaryschool/fourclass">4.Sınıf</Link></li>
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
                        <li><Link className={styles.subMenuLink} href="/middleschool/fifthgrade">5.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/middleschool/sixthgrade">6.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/middleschool/seventhgrade">7.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/middleschool/eighthgrade">8.Sınıf</Link></li>
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
                        <li><Link className={styles.subMenuLink} href="/highschool/ninthgrade">9.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/highschool/tenthgrade">10.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/highschool/eleventhgrade">11.Sınıf</Link></li>
                        <li><Link className={styles.subMenuLink} href="/highschool/twelfthgrade">12.Sınıf</Link></li>
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
                        <li><Link className={styles.subMenuLink} href="/preparationforuniversity/corecompetency">TYT</Link></li>
                        <li><Link className={styles.subMenuLink} href="/preparationforuniversity/fieldexam">AYT</Link></li>
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
                        <li><Link className={styles.subMenuLink} href="/postuniversity/publicpersonnelexam">KPSS</Link></li>
                        <li><Link className={styles.subMenuLink} href="/postuniversity/alesexam">ALES</Link></li>
                    </ul>
                </li>

                <li><Link className={styles.headerlink} href="/communication"><Image src={phone} width={24} height={24} alt="home" />İletişim</Link></li>
            </ul>
        </header>
    );
}
