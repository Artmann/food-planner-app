import React, { Component } from 'react';
import './recipe-view.css';

export default class RecipeView extends Component {
  render() {
    const { match, recipes } = this.props;
    const recipe = recipes.find(r => r.id == match.params.id);
    
    if (!recipe) {
      return <div className="recipe-view"></div>;
    }
    
    const { imageUrl, title } = recipe;

    return (<div className="recipe-view">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="recipe-view__header-image"></div>
      <div className="recipe-view__details">
        <h1 className="recipe-view__title">{ title }</h1>
      </div>
    </div>);
  }
}