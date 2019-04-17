import React, { Component } from "react";
import { recipe } from "../tempDetails";
export default class RecipeDetails extends Component {
  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=ca8008a084d309c5039eabab61d3ed7a
    
    &rId=${id}`;
    // const url = `https://www.food2fork.com/api/search?key=ca8008a084d309c5039eabab61d3ed7a&rId=${id}`;
    console.log(url);

    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);
      this.setState(
        (state, props) => {
          return {
            recipe: jsonData.recipe
          };
        },
        () => {}
      );
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    //console.log(this.state.recipe);
    const { handleIndex } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-5">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize "
                onClick={() => handleIndex(1)}
              >
                Back to recipes list{" "}
              </button>
              <img
                src={image_url}
                className="d-block w-100"
                alt="recipe details image"
              />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-5">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                {" "}
                provided bt {publisher}{" "}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-capitalize text-white"
              >
                {" "}
                Publisher Webpage{" "}
              </a>
              <a
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success text-capitalize mx-3 text-white"
              >
                {" "}
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4"> Ingredients </h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
