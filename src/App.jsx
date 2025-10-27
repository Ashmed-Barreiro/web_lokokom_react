import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Collections from "./pages/collections";
import Contact from "./pages/contact";
import Items from "./pages/items";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="todo">
      
          <Header />
          <h1>Web Lokokom</h1>

          <Routes>
            <Route path="/collections" element={<Collections />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;