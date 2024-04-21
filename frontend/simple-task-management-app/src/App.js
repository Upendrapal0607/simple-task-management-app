import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { AllRoute } from "./Routes/Route";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Loader } from "./Components/Loader";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
