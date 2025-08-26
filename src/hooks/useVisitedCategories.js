import { useState, useEffect } from 'react';

export const useVisitedCategories = () => {
  const [visitedCategories, setVisitedCategories] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('visitedCategories');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const markCategoryVisited = (categoryId) => {
    setVisitedCategories(prev => {
      if (!prev.includes(categoryId)) {
        const newVisited = [...prev, categoryId];
        if (typeof window !== 'undefined') {
          localStorage.setItem('visitedCategories', JSON.stringify(newVisited));
        }
        return newVisited;
      }
      return prev;
    });
  };

  const hasVisitedAll = (totalCategories) => {
    return visitedCategories.length >= totalCategories;
  };

  const resetProgress = () => {
    setVisitedCategories([]);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('visitedCategories');
    }
  };

  return {
    visitedCategories,
    markCategoryVisited,
    hasVisitedAll,
    resetProgress
  };
};