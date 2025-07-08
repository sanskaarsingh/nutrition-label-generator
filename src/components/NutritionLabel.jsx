import React from 'react';
import './NutritionLabel.css';

const NutritionLabel = ({ nutritionData }) => {
  if (!nutritionData || nutritionData.length === 0) return null;

  const totals = nutritionData.reduce((acc, item) => {
    Object.keys(item).forEach(key => {
      if (typeof item[key] === 'number') {
        acc[key] = (acc[key] || 0) + item[key];
      }
    });
    return acc;
  }, {});

  return (
    <div className="nutrition-label" id="nutrition-label">
      <div className="nutrition-label-header">
        <h2>Nutrition Facts</h2>
        <p>Serving Size: Combined Items</p>
      </div>
      <div className="nutrition-label-divider"></div>
      <div className="nutrition-label-body">
        <div className="nutrition-row">
          <span className="nutrition-title">Amount Per Serving</span>
        </div>
        <div className="nutrition-row main-info">
          <span className="nutrition-title">Calories</span>
          <span className="nutrition-value">{Math.round(totals.calories)}</span>
        </div>
        <div className="nutrition-label-divider thick"></div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Total Fat</span>
          <span className="nutrition-value">{Math.round(totals.fat_total_g)}g</span>
        </div>
        <div className="nutrition-row sub-row">
          <span className="nutrition-title">Saturated Fat</span>
          <span className="nutrition-value">{Math.round(totals.fat_saturated_g)}g</span>
        </div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Cholesterol</span>
          <span className="nutrition-value">{Math.round(totals.cholesterol_mg)}mg</span>
        </div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Sodium</span>
          <span className="nutrition-value">{Math.round(totals.sodium_mg)}mg</span>
        </div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Total Carbohydrate</span>
          <span className="nutrition-value">{Math.round(totals.carbohydrates_total_g)}g</span>
        </div>
        <div className="nutrition-row sub-row">
          <span className="nutrition-title">Dietary Fiber</span>
          <span className="nutrition-value">{Math.round(totals.fiber_g)}g</span>
        </div>
        <div className="nutrition-row sub-row">
          <span className="nutrition-title">Total Sugars</span>
          <span className="nutrition-value">{Math.round(totals.sugar_g)}g</span>
        </div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Protein</span>
          <span className="nutrition-value">{Math.round(totals.protein_g)}g</span>
        </div>
        
        <div className="nutrition-label-divider"></div>
        
        <div className="nutrition-row">
          <span className="nutrition-title">Vitamin D</span>
          <span className="nutrition-value">{Math.round(totals.vitamin_d_mcg || 0)}mcg</span>
        </div>
        <div className="nutrition-row">
          <span className="nutrition-title">Calcium</span>
          <span className="nutrition-value">{Math.round(totals.calcium_mg || 0)}mg</span>
        </div>
        <div className="nutrition-row">
          <span className="nutrition-title">Iron</span>
          <span className="nutrition-value">{Math.round(totals.iron_mg || 0)}mg</span>
        </div>
        <div className="nutrition-row">
          <span className="nutrition-title">Potassium</span>
          <span className="nutrition-value">{Math.round(totals.potassium_mg || 0)}mg</span>
        </div>
      </div>
    </div>
  );
};

export default NutritionLabel;