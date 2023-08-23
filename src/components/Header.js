import React, { useState } from "react";

// App
// ├── Header
// └── ShoppingList
//     ├── Filter
//     ├── Item
//     ├── Item
//     └── Item

// Header
// Create a Header component by refactoring the <header> element out of the App component.
//Clicking on the <button> inside of the Header component should still toggle dark mode on and off.

// You will need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.

function Header({ onDarkModeClick, isDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    //header from app goes here
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
export default Header;
