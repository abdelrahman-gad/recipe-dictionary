import React, { Component } from "react";

export default class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange ,error } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-capital text-slanted">
                Search for recipe with{" "}
                <strong className="text-danger">food2fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label className="text-capitalize">
                  Type recipes seprated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="chicken,onion,carrots"
                    className="form-control"
                    value={value}

                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text bg-primary text-white"
                    >
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
