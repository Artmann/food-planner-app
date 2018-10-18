import React, { Component } from 'react';
import RecipeSlider from '../components/recipe-slider';
import './recipes.css';

export default class Recipes extends Component {
  render() {
    const { recipes } = this.props;

    const tags = ['Kött', 'Pasta', 'Fisk'];

    return (<div className="recipes">
      { tags.map((tag, key) => <RecipeSlider tag={tag} recipes={recipes} key={key} />) }
    </div>);
  }
};