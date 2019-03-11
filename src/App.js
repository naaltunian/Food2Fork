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
    details_id: 35382,
    pageIndex: 1,
    search: ""
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

  displayPage = index => {
    switch(index) {
      default:
      case 1:
        return( <RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} /> );
      case 0:
        return (<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} />);
    }
  }

  handleIndex = index => {
    this.setState({ pageIndex: index });
  }

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  }

  handleChange = e => {
    console.log(e);
  }

  render() {
    // console.log(this.state.recipes);
    return (
      <div>
        { this.displayPage(this.state.pageIndex) }
      </div>
    );
  }
}

export default App;
