/* eslint-disable react/prop-types */
export const SortItems = ({ onClearItems, sortItemsBy }) => {
  return (
    <div className=" mb-8 flex justify-center gap-11 py-5">
      <select
        className="text-3xl px-4 py-3 rounded-full w-92 text-zinc-800"
        onChange={(e) => {
          sortItemsBy(e.target.value);
        }}
      >
        <option value="inputOrder">SORT BY INPUT ORDER</option>
        <option value="description">SORT BY DESCRIPTION</option>
        <option value="packedStatus">SORT BY PACKED STATUS</option>
      </select>
      <button
        className="text-3xl px-4 py-3 rounded-full w-92 text-zinc-800 bg-white hover:bg-red-500"
        onClick={onClearItems}
      >
        Clear List
      </button>
    </div>
  );
};
