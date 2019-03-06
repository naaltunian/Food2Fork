import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import apiKey from './config';

class App extends Component {

  state = {
    recipes: [],
    url: `https://www.food2fork.com/api/search?key=${apiKey}`
  }

  getRecipes = async () => {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({ recipes: jsonData.recipes });
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <RecipeList />
        <RecipeDetails />
      </div>
    );
  }
}

export default App;
