import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, createElement }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItems = itemsToDisplay.filter((item) => {
    if (search === "") return true;
    if (search !== "") {
      return item.name.includes(search);
    }
  });

  function onSearchChange(inputSearch) {
    setSearch(inputSearch);
  }

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={createElement}
        createElement={createElement}
      />
      <Filter
        category={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        search={search}
        setSearch={setSearch}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;