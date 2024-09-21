import "./index.css";
import { Header } from "./components/Header";
import { InputItems } from "./components/InputItems";
import { TripItems } from "./components/TripItems";
import { SortItems } from "./components/SortItems";
import { Footer } from "./components/Footer";

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

export default App;
