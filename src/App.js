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
    baseUrl: `https://www.food2fork.com/api/search?key=${apiKey}`,
    details_id: 35382,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  }

  getRecipes = async () => {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0) {
        this.setState({ error: "No recipes found" })
      } else {
        this.setState({ recipes: jsonData.recipes, error: "" });
      }
    } catch(error) {
      console.log(error);
    }
  }

  // reverse comments to save api calls. Only 50/day
  componentDidMount() {
    this.getRecipes();
    // this.setState({ recipes: recipes })
  }

  displayPage = index => {
    switch(index) {
      default:
      case 1:
        return( <RecipeList
            error={this.state.error}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            recipes={this.state.recipes}
            handleDetails={this.handleDetails}
          /> );
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
    this.setState({ search: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { baseUrl, query, search } = this.state;
    await this.setState({ url: `${baseUrl}${query}${search}`, search: "" });
    await this.getRecipes();
  }

  render() {
    return (
      <div>
        { this.displayPage(this.state.pageIndex) }
      </div>
    );
  }
}

export default App;
