import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/InteractiveText.module.css';

const InteractiveText = ({ text }) => {
  const [activeImage, setActiveImage] = useState(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleLetterHover = (letter, event) => {
    console.log('Hover en letra:', letter);
    // No necesitamos calcular posición con posicionamiento relativo
    setImagePosition({ x: 0, y: 0 });

    switch (letter.toLowerCase()) {
      case 'd':
        console.log('Activando imagen D: /images/down.png');
        setActiveImage('/images/down.png');
        break;
      case 'v':
        console.log('Activando imagen V: /images/vene.png');
        setActiveImage('/images/vene.png');
        break;
      case 'n':
        console.log('Activando imagen N: /images/N.png');
        setActiveImage('/images/N.png');
        break;
      default:
        setActiveImage(null);
    }
    console.log('Estado activeImage después del switch:', activeImage);
  };

  const handleLetterLeave = () => {
    setActiveImage(null);
  };

  const renderInteractiveText = (text) => {
    console.log('Texto recibido:', text);
    console.log('¿Incluye "Me gusta que nos riamos"?', text.includes('Me gusta que nos riamos'));
    
    // Buscar exactamente el texto que tenemos en los datos
    if (text === '😄 Me gusta que nos riamos los D, V y N') {
      return (
        <span>
          😄 Me gusta que nos riamos los{' '}
          <span
            className={styles.interactiveLetter}
            onMouseEnter={(e) => handleLetterHover('d', e)}
            onMouseLeave={handleLetterLeave}
          >
            D
            {activeImage === '/images/down.png' && (
              <div className={styles.floatingImage}>
                <Image
                  src="/images/down.png"
                  alt="Interactive image D"
                  width={60}
                  height={60}
                  className={styles.image}
                />
              </div>
            )}
          </span>
          ,{' '}
          <span
            className={styles.interactiveLetter}
            onMouseEnter={(e) => handleLetterHover('v', e)}
            onMouseLeave={handleLetterLeave}
          >
            V
            {activeImage === '/images/vene.png' && (
              <div className={styles.floatingImage}>
                <Image
                  src="/images/vene.png"
                  alt="Interactive image V"
                  width={60}
                  height={60}
                  className={styles.image}
                />
              </div>
            )}
          </span>
          {' '}y{' '}
          <span
            className={styles.interactiveLetter}
            onMouseEnter={(e) => handleLetterHover('n', e)}
            onMouseLeave={handleLetterLeave}
          >
            N
            {activeImage === '/images/N.png' && (
              <div className={styles.floatingImage}>
                <Image
                  src="/images/N.png"
                  alt="Interactive image N"
                  width={60}
                  height={60}
                  className={styles.image}
                />
              </div>
            )}
          </span>
        </span>
      );
    }
    
    return text;
  };

  return (
    <div className={styles.container}>
      {renderInteractiveText(text)}
    </div>
  );
};

export default InteractiveText;