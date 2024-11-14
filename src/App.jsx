import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productName" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
