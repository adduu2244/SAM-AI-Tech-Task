import React from 'react';

const CategoryCard = ({ title, emoji, count, onSelect }) => {
  return (
    <div className="category-card glass-panel" onClick={onSelect}>
      <span className="category-emoji">{emoji}</span>
      <h3>{title}</h3>
      <p>{count} Items</p>
    </div>
  );
};

export default CategoryCard;