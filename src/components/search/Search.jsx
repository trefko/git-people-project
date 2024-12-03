import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <form className="col s12">
      <div className="input-field col s12">
        <i className="material-icons prefix" id="search">
          search
        </i>
        <input
          value={search}
          onInput={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
          id="search"
          type="search"
          className="validate"
          placeholder="Search users"
        />
      </div>
    </form>
  );
};

export default Search;
