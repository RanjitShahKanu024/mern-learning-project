import React, { useState } from "react";

// Optional: you can replace inline styles with CSS module for cleaner code
const formStyle = {
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const fieldStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: 500,
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const Navbar = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Optionally, reset the form
    setFormData({ name: "", address: "", email: "", phone: "" });
  };

  return (
    <nav style={{ padding: "20px", textAlign: "center" }}>
      <h1>🙋🏻‍♀️ 🙋🏻‍♂️ Welcome to My MERN App 🙋🏻‍♂️🙋🏻‍♀️</h1>

      <form style={formStyle} onSubmit={handleSubmit}>
        {["name", "address", "email", "phone"].map((field) => (
          <div key={field} style={fieldStyle}>
            <label style={labelStyle} htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              id={field}
              name={field}
              type={
                field === "email" ? "email" : field === "phone" ? "tel" : "text"
              }
              value={formData[field]}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        ))}

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
