import "./App.css";
import { Route, Routes } from "react-router-dom";

import Main from "./components/main/main";
import Header from "./components/header/header";
import Products from "./components/navElements/products";
import Resources from "./components/navElements/resources";
import Services from "./components/navElements/services";
import Locations from "./components/navElements/locations";
import Careers from "./components/navElements/careers";
import Support from "./components/navElements/support";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}

export default App;
