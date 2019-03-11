import React, { Component } from 'react';

export default class RecipeSearch extends Component {
    render() {
        const { value, handleSubmit, handleChange } = this.props;
        return(            
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className="fancy-text text-capitalize">search for recipes with <strong className="text-danger">Food2Fork</strong></h1>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <label className="text-capitalize" htmlFor="search">type recipes seperated by comma</label>
                            <div className="input-group">
                                <input onChange={handleChange} value={value} className="form-control" type="text" name="search" placeholder="chicken, onions, carrots" />
                                <div className="input-group-append">
                                    <button type="submit" className="input-group-text bg-primary text-white"><i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>        
        )
    }
}