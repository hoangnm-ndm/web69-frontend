import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signIn } from "../services/auth";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signIn(formData);
      console.log(data);

      // Lưu thông tin người dùng và accessToken vào LocalStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.accessToken);

      alert(data.message, data.user.email);
    } catch (error) {
      console.error("Đã xảy ra lỗi khi đăng nhập:", error);
    }
  };

  return (
    <div style={loginContainerStyles}>
      <h2>Trang Đăng nhập</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Mật khẩu"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px", width: "100%" }}
        >
          Đăng nhập!
        </Button>
      </form>
    </div>
  );
}

const loginContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
};

const formStyles = {
  width: "400px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
};

export default Login;
