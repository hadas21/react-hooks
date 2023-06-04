import React, { useState } from "react";
import ItemList from "./List";
import { produce, pantryItems } from "../store/items";

export default function GroceryShopping() {
  //1. declare and initialize state `cart` with a value of an empty array

  const addItem = (item) => {
    //2. update the `cart` state with the value of the clicked item
    // Don’t forget to use a callback function for best practice!
  };

  const removeItem = (targetIndex) => {
    //3. delete the item from the `cart` state, use the `.filter()` method
    // Don’t forget to use a callback function for best practice!
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
