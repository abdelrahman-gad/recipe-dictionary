import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";
export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch />
        {/* title */}
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto md-6 text-center text-upppercase mb-3" />
            <h1 className="text-slanted">recipe list</h1>
          </div>
        </div>
        {/* end of title */}
        <div className="row justify-content-center">
          {recipes.map(recipe => {
            return <Recipe key={recipe.recipe_id}  recipe={recipe} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}
