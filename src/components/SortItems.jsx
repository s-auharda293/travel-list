export const SortItems = () => {
  return (
    <div className=" mb-8 flex justify-center gap-11 py-5">
      <select className="text-3xl px-4 py-3 rounded-full w-92 text-zinc-800 ">
        <option value="">SORT BY INPUT ORDER</option>
        <option value="">SORT BY DESCRIPTION</option>
        <option value="">SORT BY PACKED STATUS</option>
      </select>
      <button className="text-3xl px-4 py-3 rounded-full w-92 text-zinc-800 bg-white hover:bg-red-500">
        Clear List
      </button>
    </div>
  );
};
