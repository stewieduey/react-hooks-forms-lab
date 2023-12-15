import React from "react";

function Filter({ category, setSelectedCategory, search, onSearchChange }) {
  function handleCategoryChange(event) {
    console.log("Inside Category Change:", event);
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    console.log("Inside Search Change");

    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={search}
      />
      <select name="filter" onChange={handleCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;