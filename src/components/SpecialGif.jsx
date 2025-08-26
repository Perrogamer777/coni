import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/SpecialGif.module.css';

const SpecialGif = ({ categoryId, show }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show && categoryId === 'lo-que-hacemos') {
      setIsVisible(true);
      
      // Ocultar después de 6 segundos
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [show, categoryId]);

  if (!isVisible || categoryId !== 'lo-que-hacemos') {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.gifContainer}>
        <Image
          src="/images/perlayif.gif"
          alt="Gif especial"
          width={400}
          height={400}
          className={styles.gif}
          priority
        />
        <div className={styles.message}>
          😰😰😰 aiii cuidao 😰😰😰
        </div>
      </div>
    </div>
  );
};

export default SpecialGif;