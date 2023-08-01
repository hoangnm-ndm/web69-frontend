import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function AdminHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Admin Header</h2>
      {/* Các liên kết và menu cho trang admin */}
      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/users">Users</Link>
      {/* Thêm các nút logout, settings, v.v. */}
    </Box>
  );
}

export default AdminHeader;
