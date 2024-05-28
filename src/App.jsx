import "./index.css";
import logo from "./assets/logo.svg";

const App = () => {
  return (
    <>
      <Header />
      <InputItems />
      <TripItems />
      <SortItems />
      <Footer />
    </>
  );
};

const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="" />
      <h1>FAR AWAY</h1>
    </header>
  );
};

const InputItems = () => {
  return (
    <div className="input-container">
      <h5>What do you need for your trip? 🧳</h5>
      <select className="text-3xl px-4 py-3 rounded-full w-28 text-zinc-800">
        <option>1</option>
        <option>2</option>
        <option>3</option>
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

const TripItems = () => {
  return (
    <>
      <div className="w-full bg-lightYellow mt-9 py-9 px-20 h-96 overflow-y-auto flex flex-row flex-wrap gap-x-32 gap-y-20">
        {/* <p>h</p> */}
      </div>
    </>
  );
};

const SortItems = () => {
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
const Footer = () => {
  return (
    <div className="bg-roseTaupe text-center py-2 text-grey">
      You have 1 items on your list, and you have already packed 0 (0%)
    </div>
  );
};

export default App;
