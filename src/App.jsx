/* eslint-disable no-unused-vars */
import "./index.css";
import { Header } from "./components/Header";
import { InputItems } from "./components/InputItems";
import { TripItems } from "./components/TripItems";
import { SortItems } from "./components/SortItems";
import { Footer } from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [items, setitems] = useState([]);

  const handleAddItems = (newItem) => {
    setitems((storedItems) => {
      return [...storedItems, newItem];
    });
  };

  const handleClearItems = () => {
    const clear = confirm("Clear the entire list?");
    if (clear === true) {
      setitems([]);
    }
  };

  return (
    <>
      <Header />
      <InputItems onAddItems={handleAddItems} />
      <TripItems />
      <SortItems onClearItems={handleClearItems} />
      <Footer />
    </>
  );
};

export default App;
