import React from "react";
import { Link } from "react-router-dom";

const features = [
  { title: "Register courses", text: "Pick your courses each semester and drop them before the deadline." },
  { title: "Pay fees", text: "See what you owe, what you have paid, and print your receipts." },
  { title: "Check results", text: "View your scores, grades and GPA as soon as they are released." },
];

const Home = () => {
  return (
    <>
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f2f4f7", minHeight: "100vh" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          background: "#00044a",
          color: "#fff",
        }}
      >
        <strong style={{ fontSize: "20px" }}>Student Portal</strong>
        <Link
          to="/signin"
          style={{
            color: "#fff",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.6)",
            padding: "8px 16px",
            borderRadius: "6px",
          }}
        >
          Sign in
        </Link>
      </header>

      <section style={{ textAlign: "center", padding: "72px 20px 48px" }}>
        <h1 style={{ margin: "0 0 12px", fontSize: "36px", color: "#222" }}>
          Everything for your studies, in one place
        </h1>
        <p style={{ maxWidth: "520px", margin: "0 auto 28px", color: "#555", lineHeight: 1.6 }}>
          Register courses, pay fees, read announcements and check your results
          from any device.
        </p>
        <Link
          to="/signin"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#00044a",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            marginRight: "10px",
          }}
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#fff",
            color: "#00044a",
            border: "1px solid #00044a",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Create account
        </Link>
      </section>

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "0 20px 60px",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              background: "#fff",
              padding: "24px",
              width: "260px",
              borderRadius: "10px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ margin: "0 0 8px", color: "#222" }}>{f.title}</h3>
            <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: 1.5 }}>{f.text}</p>
          </div>
        ))}
      </section>
    </div>
    
    </>
  );
};

export default Home;
