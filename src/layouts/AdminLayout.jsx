import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import AllProducts from "../pages/admin/product/AllProducts";
import AllCategories from "../pages/admin/category/AllCategories";

function AdminLayout() {
  const { category } = useParams();

  return (
    <div>
      {/* Admin Header here */}
      <nav>
        <ul>
          <li>
            <Link to="/admin/product">Product</Link>
          </li>
          <li>
            <Link to="/admin/category">Category</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Welcome to Admin Dashboard</h2>} />
        <Route path="/product" element={<AllProducts />} />
        <Route path="/category" element={<AllCategories />} />
        {/* Add more routes for other admin pages */}
      </Routes>
    </div>
  );
}

export default AdminLayout;
