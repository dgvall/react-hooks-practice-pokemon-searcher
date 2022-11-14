import React from "react";

function Search({setFilterBy}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
        onChange={(e) => setFilterBy(e.target.value)}
        className="prompt"
        />
        <i
        className="search icon"
        />
      </div>
    </div>
  );
}

export default Search;
