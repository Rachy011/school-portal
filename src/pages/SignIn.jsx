import React from 'react'
import {  Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    //  useNavigate
    const navigate = useNavigate();
    const handleSubmit =() => {


      navigate("/Dashboard")
    };
  return (
    <>
      <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "#f2f4f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "32px",
          width: "100%",
          maxWidth: "340px",
          borderRadius: "10px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ margin: "0 0 20px", textAlign: "center", color: "#222" }}>
          Sign In
        </h2>

        <label
          htmlFor="ID"
          style={{ display: "block", marginBottom: "6px", fontSize: "14px", color: "#444" }}
        >
          Staff/Student ID
        </label>
        <input
          type="ID"
          id="ID"
          name="ID"
          required
          placeholder="Staff/Student ID"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <label
          htmlFor="password"
          style={{ display: "block", marginBottom: "6px", fontSize: "14px", color: "#444" }}
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Your password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#00044a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
        <p style={{display:'flex' }}> <Link to="/signup" style={{ color: "#00044a", textDecoration: "none" }}>
            Forget password
          </Link></p>
          
      
      </form>
    </div>
        </>
        )
}

        export default SignIn