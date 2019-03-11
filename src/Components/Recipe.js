import React, { Component } from 'react';

export default class Recipe extends Component {
    render() {
        const { image_url, title, source_url, publisher, recipe_id } = this.props.recipe;
        const { handleDetails } = this.props;
        return(
            <React.Fragment>
               <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img style={{height: "14rem"}} className="img-card-top" src={image_url} alt="recipe" />
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning fancy-text">Provided by {publisher}</h6>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => handleDetails(0, recipe_id)} className="btn btn-primary text-capitalize" type="button">details</button>
                            <a href={source_url} target="blank" className="btn btn-success mx-2 text-capitalize">recipe url</a>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}