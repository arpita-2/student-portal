import React from "react";

export default function Search({ setSearchFilter }) {
  const handleSearch = (event) => {
    setSearchFilter(event.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search Here"
        onChange={handleSearch}
      />
    </div>
  );
}
