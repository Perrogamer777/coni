import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/LoveLetter.module.css';

const LoveLetter = ({ show, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (show) {
      // Animación escalonada: primero aparece la carta cerrada
      const timer1 = setTimeout(() => setIsOpen(true), 1000);
      // Luego se abre y aparece el texto
      const timer2 = setTimeout(() => setShowText(true), 2000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.letterContainer}>
        {/* Envelope */}
        <div className={`${styles.envelope} ${isOpen ? styles.opened : ''}`}>
          <div className={styles.flap}></div>
          <div className={styles.body}></div>
        </div>
        
        {/* Letter content */}
        <div className={`${styles.letter} ${showText ? styles.visible : ''}`}>
          <div className={styles.letterHeader}>
            <h2>💕 Para la + lela</h2>
          </div>

          <div className={styles.letterContent}>
            <p>Coni,</p>
            
            <p>
              De verdad me gustas, y muxo. Me gustas por todas estas razones y más.
              Cuando estoy contigo me siento super bien y soy muy feliz aunke no lo demuestre.
              Te juro que no es que no haya estado preparado para decirte todo, pero simplemente no encontraba un buen momento.
            </p>     
            <p>
              Sé que en volá pensaste que yo estaba confundido, o que no era tan real lo que sentía por ti. 
              Pero te prometo que lo que siento es de verdad, aunque no lo pueda explicar. 
              Por eso escribí estas pocas razones que me hacen querer que estés cada vez más en mi vida, 
              para que no vuelvas a dudar de que me gustas de verdad.
            </p>
            <p>
              Suena medio básico, pero desde hace meses que te pienso todos los días. 
              Eres lo primero que pienso cuando me despierto y lo último antes de dormir.
              Cada vez que quiero ir a algún lado, pienso en invitarte o en que lo podríamos hacer juntos.
            </p>
            

            
            <p className={styles.signature}>
              tkm 🖤
            </p>
            
            <div className={styles.imageSection}>
              <img
                src="/images/18.png"
                alt="Imagen especial"
                width={120}
                height={120}
                className={styles.specialImage}
              />
            </div>

          </div>
          
          <button className={styles.closeButton} onClick={onClose}>
            Cerrar 
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;