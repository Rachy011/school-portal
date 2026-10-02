import React, { useState } from "react";

const available = [
  { code: "CSC201", title: "Data Structures", units: 3 },
  { code: "CSC205", title: "Operating Systems", units: 3 },
  { code: "MTH203", title: "Linear Algebra", units: 2 },
  { code: "STA201", title: "Probability", units: 2 },
  { code: "GST211", title: "Entrepreneurship", units: 2 },
  { code: "CSC209", title: "Database Systems", units: 3 },
];

const MAX_UNITS = 15;

const CourseManagement = () => {
  const [registered, setRegistered] = useState([available[0], available[2]]);
  const [message, setMessage] = useState("");

  const totalUnits = registered.reduce((sum, c) => sum + c.units, 0);
  const isRegistered = (code) => registered.some((c) => c.code === code);

  const register = (course) => {
    if (totalUnits + course.units > MAX_UNITS) {
      setMessage(`You can register up to ${MAX_UNITS} units. Drop a course to add ${course.code}.`);
      return;
    }
    setRegistered([...registered, course]);
    setMessage(`${course.code} registered.`);
  };

  const drop = (code) => {
    setRegistered(registered.filter((c) => c.code !== code));
    setMessage(`${code} dropped.`);
  };

  return (
    <>
      <h1 style={{ margin: "0 0 24px", fontSize: "26px", color: "#222" }}>Course management</h1>
      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <h3 style={{ margin: 0, color: "#222" }}>My registered courses</h3>
          <strong style={{ color: totalUnits > MAX_UNITS ? "#dc2626" : "#00044a" }}>
            {totalUnits} / {MAX_UNITS} units
          </strong>
        </div>

        {message && (
          <p style={{ margin: "12px 0 0", fontSize: "14px", color: "#444" }} role="status">
            {message}
          </p>
        )}

        <div style={{ overflowX: "auto", marginTop: "12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Code</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Title</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Units</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}></th>
              </tr>
            </thead>
            <tbody>
              {registered.length === 0 && (
                <tr>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }} colSpan={4}>
                    You have not registered any course. Add one from the list below.
                  </td>
                </tr>
              )}
              {registered.map((c) => (
                <tr key={c.code}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.code}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.title}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.units}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222", textAlign: "right" }}>
                    <button onClick={() => drop(c.code)} style={{ padding: "6px 12px", background: "transparent", color: "#00044a", border: "1px solid #00044a", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}>
                      Drop
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px", color: "#222" }}>Available courses</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Code</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Title</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Units</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}></th>
              </tr>
            </thead>
            <tbody>
              {available.map((c) => (
                <tr key={c.code}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.code}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.title}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{c.units}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222", textAlign: "right" }}>
                    {isRegistered(c.code) ? (
                      <span style={{ color: "#16a34a", fontSize: "13px" }}>Registered</span>
                    ) : (
                      <button onClick={() => register(c)} style={{ padding: "10px 16px", background: "#00044a", color: "#fff", border: "none", borderRadius: "6px", fontSize: "14px", cursor: "pointer" }}>
                        Register
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CourseManagement;
