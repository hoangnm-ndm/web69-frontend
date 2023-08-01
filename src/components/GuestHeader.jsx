import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function GuestHeader() {
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
      <h2>Guest Header</h2>
      {/* Các liên kết và menu cho trang dành cho khách */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Box>
  );
}

export default GuestHeader;
