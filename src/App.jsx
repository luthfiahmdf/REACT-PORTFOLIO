import "./App.css";
import Navbar from "./component/navbar";
import About from "./content/about";
import Main from "./content/main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
