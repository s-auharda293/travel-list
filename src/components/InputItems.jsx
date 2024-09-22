/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export const InputItems = ({ onAddItems }) => {
  const [description, setdescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showError, setShowError] = useState(false);

  const numberofOptions = Array.from({ length: 20 }, (_, i) => {
    return i + 1;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length > 0) {
      setShowError(false);
    } else {
      setShowError(true);
    }
    const newItem = {
      id: Date.now(),
      quantity,
      description,
      packed: false,
    };
    onAddItems(newItem);
    setdescription("");
    setQuantity(1);
  };

  return (
    <>
      <form className="input-container" onSubmit={handleSubmit}>
        <h5>What do you need for your trip? 🧳</h5>
        <select
          className="text-3xl px-4 py-3 rounded-full w-28 text-zinc-800"
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        >
          {numberofOptions.map((val) => {
            return (
              <option key={val} value={val}>
                {val}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          className="text-3xl px-6 py-3 rounded-full w-96 text-zinc-800"
          placeholder="Item"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button
          className="rounded-full bg-khaki w-64 text-zinc-800 hover:bg-green-400 ease-in duration-300"
          type="submit"
        >
          Add
        </button>
      </form>
      {showError && (
        <h2 className="text-center text-3xl text-orange-500">
          Please enter an item description before adding it.
        </h2>
      )}
    </>
  );
};
