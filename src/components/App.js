import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  // Define the appClass variable based on the isToggled state
  const appClass = isToggled ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Attach onClick handler to toggle the Dark Mode */}
        <button onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
