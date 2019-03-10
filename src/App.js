import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import apiKey from './config';

class App extends Component {

  state = {
    recipes: [],
    url: `https://www.food2fork.com/api/search?key=${apiKey}`,
    details_id: 35382
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
    // this.getRecipes();
    this.setState({ recipes: recipes })
  }

  render() {
    // console.log(this.state.recipes);
    return (
      <div>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </div>
    );
  }
}

export default App;
