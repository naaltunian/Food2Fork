import React, { Component } from 'react';
import { recipe } from "../tempDetails";
import apiKey from '../config';

export default class RecipeDetails extends Component {

    state = {
        recipe: {}
    }

    async componentDidMount() {
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=${apiKey}&rId=${id}`;
        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState({ recipe: jsonData.recipe });
            console.log(this.state.recipe)
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        const { image_url, publisher, publisher_url, source_url, title, ingredients } = this.state.recipe;
        const { handleIndex } = this.props;
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button onClick={() => handleIndex(1)} type="button" className="btn btn-warning mb-5 text-capitalize">back to recipe list</button>
                            <img src={image_url} className="d-block w-100" alt="recipe" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">{title}</h6>
                            <h6 className="text-uppercase text-warning fancy-text">{publisher}</h6>
                            <a href={publisher_url} target="blank" className="btn btn-primary mt-2" >Publisher Page</a>
                            <a href={source_url} target="blank" className="btn btn-success mt-2 mx-3" >Recipe Page</a>
                            <ul className="list-group mt-4">
                                {ingredients && ingredients.map((item, i) => {
                                    return (
                                    <li className="list-group-item fancy-text" key={i}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}