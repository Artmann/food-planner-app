import React from 'react';
import RecipeSliderItem from './recipe-slider-item';
import handleViewport from 'react-in-viewport';
import './recipe-slider.css';

const RecipeSlider = ({ recipes, tag }) => {
  const recipesForThisTag = recipes.filter(recipe => recipe.tags.includes(tag)); 
  const ItemInViewport = handleViewport(RecipeSliderItem);

  return (<div className="recipe-slider">
    <h2>{ tag }</h2>
    <div className="recipe-slider__container">
      { recipesForThisTag.map((recipe, key) => <ItemInViewport key={key} recipe={recipe} />) }    
    </div>
  </div>);
};

export default RecipeSlider;