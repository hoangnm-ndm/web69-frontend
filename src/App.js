import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllCategories from "./pages/admin/category/AllCategories";
import AllProducts from "./pages/admin/product/AllProducts";

function App() {
  return (
    <div className="App">
      <h1>DEMO PROJECT!</h1>
      <Router>
        <ul>
          <li>
            <Link to="/login">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
          <li>
            <Link to="/categories">Danh mục</Link>
          </li>
          <li>
            <Link to="/products">Sản phẩm</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
