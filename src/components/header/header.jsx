"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from '../../../public/header/hamburgermenuicon.svg';
import logo from '../../../public/header/sametmathsicon.svg';
import home from '../../../public/header/homeicon.svg';
import about from '../../../public/header/abouticon.svg';
import services from '../../../public/header/servicesicon.svg';
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
                <li><Link className={styles.headerlink} href="/communication"><Image src={services} width={24} height={24} alt="home" />Hizmetlerimiz</Link></li>
                <li><Link className={styles.headerlink} href="/communication"><Image src={phone} width={24} height={24} alt="home" />İletişim</Link></li>
            </ul>
        </header>
    );
}
