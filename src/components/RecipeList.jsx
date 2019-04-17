import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
export default class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      handleSubmit,
      handleChange,
      value,
      error
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {/* title */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-10 mx-auto md-6 text-center text-upppercase mb-3" />
            <h1 className="text-slanted text-center">recipe list</h1>
          </div>
        </div>
        {/* end of title */}
        <div className="row justify-content-center">
          {error ? (
            <h1 className="text-center text-danger"> {error} </h1>
          ) : (
            recipes.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={() => handleDetails(0, recipe.recipe_id)}
                />
              );
            })
          )}
        </div>
      </React.Fragment>
    );
  }
}
