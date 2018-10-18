import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from '../components/navigation';
import Recipes from './recipes';
import RecipeList from './recipe-list';
import RecipeView from './recipe-view';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.loadData();
  }
  
  async loadData() {
    const recipes = await this.loadRecipes();
    this.setState({ recipes });
  }

  async loadRecipes() {
    let recipes = [];
    
    try {
      const response = await fetch(`/recipes.json`);
      const data = await response.json();
      recipes = data.recipes;  
    } catch (error) {
      console.error(error);
    }

    return recipes;
  }

  render() {
    const { recipes } = this.state;

    return (
      <Router>
        <div className="app">
          <Navigation />

          <Route exact path="/"  render={(props) => <Recipes {...props} recipes={recipes} />} />
          <Route exact path="/recipes/:id" render={(props) => <RecipeView {...props} recipes={recipes} />} />
          <Route exact path="/recipe-list" component={RecipeList} />
        </div>
      </Router>
    );
  }
}

export default App;
