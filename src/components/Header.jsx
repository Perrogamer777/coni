import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <span className={styles.heart}>💖</span>
                    <h2 className={styles.logoText}>Para Coni</h2>
                    <span className={styles.heart}>💖</span>
                </div>
                <p className={styles.subtitle}>
                    ola cmo tas
                </p>
            </div>
        </header>
    );
};
 
export default Header;