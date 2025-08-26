import React from 'react';
import Link from 'next/link';
import styles from '../styles/CategoryCard.module.css';

const CategoryCard = ({ category, index }) => {
  return (
    <Link href={`/categoria/${category.id}`} className={styles.cardLink}>
      <div 
        className={styles.card}
        style={{ 
          '--index': index,
          '--category-color': category.color,
          animationDelay: `${index * 0.2}s`
        }}
      >
        <div className={styles.cardEmoji}>
          {category.emoji}
        </div>
        <h3 className={styles.cardTitle}>
          {category.title}
        </h3>
        <p className={styles.cardDescription}>
          {category.description}
        </p>
        <div className={styles.cardCount}>
          {category.reasons.length} razones ❤️
        </div>
        <div className={styles.cardArrow}>
          →
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;