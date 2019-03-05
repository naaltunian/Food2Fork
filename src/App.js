import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import apiKey from './config';

class App extends Component {
  render() {
    return (
      <div>
        <RecipeList />
        <RecipeDetails />
      </div>
    );
  }
}

export default App;
