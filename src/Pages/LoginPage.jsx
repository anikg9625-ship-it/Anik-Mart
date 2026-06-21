import React, { useState } from 'react';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept terms & conditions");
      return;
    }

    console.log(formData);
    alert("Signup Successful ✅");
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        
        <div 
          className="p-5 w-100" 
          style={{ 
            maxWidth: "450px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            background: "#fff"
          }}
        >
          
          <h2 className="text-center text-success mb-4 fw-bold">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label className="form-label fw-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="agree"
                className="form-check-input"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label className="form-check-label">
                I agree to Terms & Conditions
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-success w-100 fw-bold"
              style={{ borderRadius: "10px" }}
            >
              Sign Up
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;