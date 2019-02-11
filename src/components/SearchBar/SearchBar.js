import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searc-bar container">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="videoSearch">Image Search</label>
            <input
              type="text"
              className="form-control"
              id="videoSearch"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
