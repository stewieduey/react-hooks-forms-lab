import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  console.log("Name:", name);
  console.log("Category:", category);

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;