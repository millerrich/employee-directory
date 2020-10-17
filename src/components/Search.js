import React from "react";

function SearchForm(props) {
  return (
    <div className="container">
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employee by first name"
          id="search"
        />
      </div>
    </form>
    </div>
  );
}

export default SearchForm;