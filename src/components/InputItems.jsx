export const InputItems = () => {
  const numberofOptions = Array.from({ length: 20 }, (_, i) => {
    return i + 1;
  });

  return (
    <div className="input-container">
      <h5>What do you need for your trip? 🧳</h5>
      <select className="text-3xl px-4 py-3 rounded-full w-28 text-zinc-800">
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
      />
      <button className="rounded-full bg-khaki w-64 text-zinc-800 hover:bg-green-400 ease-in duration-300">
        Add
      </button>
    </div>
  );
};
