import "./App.css";
import Header from "./components/Header";
import Software from "./components/Software";
import Detail from "./components/Detail";
import Func from "./components/Func";
import Slideshowing from "./components/Interface";
import SlideshowResult from "./components/Result";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Software />
      <Detail />
      <Func />
      <Slideshowing />
      <SlideshowResult />
      <Footer/>
    </div>
  );
}

export default App;
