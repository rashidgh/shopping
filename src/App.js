import "./App.css";
import Landing from "./components/landing/Landing";
import Carosel from "./components/carosel/Carosel";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carosel />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
