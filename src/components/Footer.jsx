import React from 'react';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const images = [
        '/images/caito.JPEG',
        '/images/b3878cb7-5079-426c-afe9-557383643af7.png',
        '/images/01E5F80D-975E-4FB3-9302-16F116AA2F51.png',
        '/images/8135a66e-6489-4d64-96f2-13efa2e4429a.png',
        '/images/c26f021f-7d31-4001-abdf-1642131c44d6.png',
        '/images/f3503469-0851-49c3-98ba-0926b9048ed4.png'
    ];

    return (
        <footer className="footer">
            <div className={styles.imageContainer}>
                {images.map((src, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <Image
                            src={src}
                            alt={`Recuerdo ${index + 1}`}
                            width={60}
                            height={60}
                            className={styles.footerImage}
                        />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
                <Image
                    src="/images/cara.png"
                    alt="Cara izquierda"
                    width={60}
                    height={60}
                    style={{ borderRadius: '50%', marginRight: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
                />
                <p style={{ margin: '0', fontSize: '1.1rem', fontWeight: '500' }}>
                    🖤🖤 exo con cariño parati 🖤🖤
                </p>
                <Image
                    src="/images/cara.png"
                    alt="Cara derecha"
                    width={60}
                    height={60}
                    style={{ borderRadius: '50%', marginLeft: '20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' }}
                />
            </div>
        </footer>
    );
};

export default Footer;