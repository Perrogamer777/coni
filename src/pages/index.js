import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import FloatingImages from '../components/FloatingImages';
import { categories } from '../data/categorizedReasons';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <FloatingImages />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>🖤 Razones por las que me gustas 🖤</h1>
        <div className={styles.reasonList}>
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;