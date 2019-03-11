import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const { error, recipes, handleDetails, handleSubmit, handleChange, value } = this.props;
        return(
            <React.Fragment>
                <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="fancy-text">Recipe List</h1>
                        </div>
                    </div>
                    <div className="row">
                    {error ? <h1 className="text-danger text-center">{error}</h1> : recipes.map(recipe => {
                                return <Recipe recipe={recipe} key={recipe.recipe_id} handleDetails={handleDetails} />
                            })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}