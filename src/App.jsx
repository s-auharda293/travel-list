/* eslint-disable no-unused-vars */
import "./index.css";
import { Header } from "./components/Header";
import { InputItems } from "./components/InputItems";
import { TripItems } from "./components/TripItems";
import { SortItems } from "./components/SortItems";
import { Footer } from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems((storedItems) => {
      return [...storedItems, newItem];
    });
  };

  const handleClearItems = () => {
    const clear = confirm("Clear the entire list?");
    if (clear === true) {
      setItems([]);
    }
  };

  const handleCheck = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  };

  const sortBy = (value) => {
    setItems((items) => {
      const sortedItems = items.slice();

      if (value === "inputOrder") {
        sortedItems.sort((a, b) => Number(a.id) - Number(b.id));
      }
      if (value === "description") {
        sortedItems.sort((a, b) => a.description.localeCompare(b.description));
      }
      if (value === "packedStatus") {
        sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
      }
      return sortedItems;
    });
  };

  return (
    <>
      <Header />
      <InputItems onAddItems={handleAddItems} />
      <TripItems items={items} onCheck={handleCheck} />
      <SortItems onClearItems={handleClearItems} sortItemsBy={sortBy} />
      <Footer items={items} />
    </>
  );
};

export default App;
