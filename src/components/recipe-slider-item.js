import React, { Component } from 'react'
import './recipe-slider-item.css';

export default class RecipeSliderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoadedImage: false,
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    };
  }


  render() {
    const { inViewport, recipe } = this.props;
    const { id, title } = recipe;
    const { hasLoadedImage, imageUrl } = this.state;
    const url = `/recipes/${id}`;

    if (inViewport && !hasLoadedImage) {
      this.setState({
        hasLoadedImage: true, 
        imageUrl: recipe.imageUrl
      });
    }

    return (<a href={url} title={title} className="recipe-slider-item">
      <img src={imageUrl} alt={title} className="recipe-slider-item__image" />
      <h3 className="recipe-slider-item__title">
        {title}
      </h3>
    </a>);
  }
}
