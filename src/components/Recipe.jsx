import React, { Component } from "react";

export default class Recipe extends Component {
     
  render() {
   
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id
    } = this.props.recipe;
    const {handleDetails}=this.props;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              className="img-card-top"
              style={{ height: "14rem" }}
              alt="recipe"
            />
            <div className="card-body text-capitalize">
              <h1> {title} </h1>
              <h6 className="text-warning text-slanted">
                {" "}
                Provided by {publisher}{" "}
              </h6>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary text-capitalize"
              onClick={handleDetails}
              >
                Details{" "}
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 text-capetalize"
                target="blank"
              >
                Recipe URL{" "}
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
