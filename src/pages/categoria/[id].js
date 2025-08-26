import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingImages from '../../components/FloatingImages';
import ReasonCard from '../../components/ReasonCard';
import SpecialGif from '../../components/SpecialGif';
import { categories } from '../../data/categorizedReasons';
import { useVisitedCategories } from '../../hooks/useVisitedCategories';
import styles from '../../styles/Home.module.css';
import categoryStyles from '../../styles/Category.module.css';

const CategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showSpecialGif, setShowSpecialGif] = useState(false);
  const { markCategoryVisited } = useVisitedCategories();
  
  const category = categories.find(cat => cat.id === id);
  
  useEffect(() => {
    if (category) {
      // Marcar como visitada después de 2 segundos
      const visitTimer = setTimeout(() => {
        markCategoryVisited(category.id);
      }, 2000);

      // Mostrar GIF especial para "lo-que-hacemos"
      if (category.id === 'lo-que-hacemos') {
        const gifTimer = setTimeout(() => {
          setShowSpecialGif(true);
        }, 300);
        
        return () => {
          clearTimeout(visitTimer);
          clearTimeout(gifTimer);
        };
      }
      
      return () => clearTimeout(visitTimer);
    }
  }, [category, markCategoryVisited]);
  
  if (!category) {
    return <div>Categoría no encontrada</div>;
  }

  return (
    <div className={styles.container}>
      <SpecialGif categoryId={category.id} show={showSpecialGif} />
      <FloatingImages />
      <Header />
      <main className={styles.main}>
        <Link href="/" className={categoryStyles.backButton}>
          ← Volver a las categorías
        </Link>
        
        <div className={categoryStyles.categoryHeader}>
          <span className={categoryStyles.categoryEmoji}>{category.emoji}</span>
          <h1 className={styles.title} style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            {category.title}
          </h1>
          <p className={categoryStyles.categoryDescription}>
            {category.description}
          </p>
        </div>
        
        <div className={styles.reasonList}>
          {category.reasons.map((reason, index) => (
            <ReasonCard 
              key={index} 
              reason={`${category.emoji} ${reason}`} 
              index={index}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;