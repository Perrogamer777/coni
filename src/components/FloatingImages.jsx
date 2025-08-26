import React from 'react';
import Image from 'next/image';
import styles from '../styles/FloatingImages.module.css';

const FloatingImages = () => {
    const images = [
        '/images/caito.JPEG',
        '/images/b3878cb7-5079-426c-afe9-557383643af7.png',
        '/images/01E5F80D-975E-4FB3-9302-16F116AA2F51.png',
        '/images/8135a66e-6489-4d64-96f2-13efa2e4429a.png',
        '/images/c26f021f-7d31-4001-abdf-1642131c44d6.png',
        '/images/f3503469-0851-49c3-98ba-0926b9048ed4.png',
        '/images/sentada.JPG',
        '/images/perrwecos.png'
    ];

    return (
        <>
            <div className={styles.floatingTop}>
                {images.concat(images).map((src, index) => (
                    <div key={`top-${index}`} className={styles.floatingImage}>
                        <Image
                            src={src}
                            alt={`Floating image ${index}`}
                            width={40}
                            height={40}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.floatingBottom}>
                {images.concat(images).map((src, index) => (
                    <div key={`bottom-${index}`} className={styles.floatingImage}>
                        <Image
                            src={src}
                            alt={`Floating image ${index}`}
                            width={30}
                            height={30}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default FloatingImages;