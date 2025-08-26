import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import FloatingImages from '../components/FloatingImages';
import LoveLetter from '../components/LoveLetter';
import { categories } from '../data/categorizedReasons';
import { useVisitedCategories } from '../hooks/useVisitedCategories';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { visitedCategories, hasVisitedAll } = useVisitedCategories();
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [letterShown, setLetterShown] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Evitar hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Ya no abrimos automáticamente la carta

  const handleOpenLetter = () => {
    setShowLoveLetter(true);
    setLetterShown(true);
  };

  const handleCloseLetter = () => {
    setShowLoveLetter(false);
  };

  return (
    <div className={styles.container}>
      <LoveLetter show={showLoveLetter} onClose={handleCloseLetter} />
      <FloatingImages />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>🖤 Razones por las que me gustas 🖤</h1>
        <div className={styles.reasonList}>
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
        
        {/* Progress indicator - Solo mostrar en cliente para evitar hydration mismatch */}
        {isClient && (
          <div className={styles.progressContainer}>
            <p className={styles.progressText}>
              Has visto {visitedCategories.length} de {categories.length} categorías
              {visitedCategories.length < categories.length && ' ✨'}
            </p>
            
            {/* Mostrar botón solo cuando haya visitado todas las categorías */}
            {hasVisitedAll(categories.length) && (
              <div className={styles.completedSection}>

                <p className={styles.completedSubtext}>
                  ya q leiste todo, ahora tienes acceso a algo confidencial...
                </p>
                <button 
                  className={styles.loveLetterButton}
                  onClick={handleOpenLetter}
                >
                  Abrir secretos del vaticano
                </button>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;