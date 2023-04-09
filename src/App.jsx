import "./App.css";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import About from "./content/about";
import Contact from "./content/contact";
import Main from "./content/main";
import Portfolio from "./content/portfolio";
import Testimonial from "./content/testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
