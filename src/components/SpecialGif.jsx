import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/SpecialGif.module.css';

const SpecialGif = ({ categoryId, show }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show && (categoryId === 'lo-que-hacemos' || categoryId === 'garcioso')) {
      setIsVisible(true);
      
      // Ocultar después de 6 segundos
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [show, categoryId]);

  if (!isVisible || (categoryId !== 'lo-que-hacemos' && categoryId !== 'garcioso')) {
    return null;
  }

  // Determinar qué GIF y mensaje mostrar según la categoría
  const getGifContent = () => {
    if (categoryId === 'lo-que-hacemos') {
      return {
        src: '/images/perlayif.gif',
        message: '😰😰😰 aiii cuidao 😰😰😰'
      };
    } else if (categoryId === 'garcioso') {
      return {
        src: '/images/perlayif2.GIF',
        message: '😰😰😰 yapooo ten cuidao dijeeeee 😰😰😰'
      };
    }
  };

  const gifContent = getGifContent();

  return (
    <div className={styles.overlay}>
      <div className={styles.gifContainer}>
        <Image
          src={gifContent.src}
          alt="Gif especial"
          width={400}
          height={400}
          className={styles.gif}
          priority
        />
        <div className={styles.message}>
          {gifContent.message}
        </div>
      </div>
    </div>
  );
};

export default SpecialGif;