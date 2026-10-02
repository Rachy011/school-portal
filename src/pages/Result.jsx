import React, { useState } from "react";

const results = {
  "2025/2026 First semester": [
    { code: "CSC101", title: "Intro to Computing", units: 3, score: 78 },
    { code: "MTH101", title: "Elementary Mathematics", units: 3, score: 64 },
    { code: "PHY101", title: "General Physics", units: 3, score: 55 },
    { code: "GST101", title: "Use of English", units: 2, score: 71 },
  ],
  "2025/2026 Second semester": [
    { code: "CSC102", title: "Programming Basics", units: 3, score: 82 },
    { code: "MTH102", title: "Calculus I", units: 3, score: 48 },
    { code: "PHY102", title: "Electricity and Magnetism", units: 3, score: 60 },
    { code: "GST102", title: "Philosophy and Logic", units: 2, score: 67 },
  ],
};

// 5-point scale. Change these bands to match your school.
const gradeFor = (score) => {
  if (score >= 70) return { grade: "A", points: 5 };
  if (score >= 60) return { grade: "B", points: 4 };
  if (score >= 50) return { grade: "C", points: 3 };
  if (score >= 45) return { grade: "D", points: 2 };
  if (score >= 40) return { grade: "E", points: 1 };
  return { grade: "F", points: 0 };
};

const gpaOf = (rows) => {
  const units = rows.reduce((s, r) => s + r.units, 0);
  const weighted = rows.reduce((s, r) => s + r.units * gradeFor(r.score).points, 0);
  return units ? weighted / units : 0;
};

const Result = () => {
  const semesters = Object.keys(results);
  const [semester, setSemester] = useState(semesters[0]);

  const rows = results[semester];
  const allRows = Object.values(results).flat();
  const totalUnits = rows.reduce((s, r) => s + r.units, 0);

  return (
    <>
      <h1 style={{ margin: "0 0 24px", fontSize: "26px", color: "#222" }}>Results</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", flex: "1 1 180px", marginBottom: 0 }}>
          <div style={{ fontSize: "13px", color: "#777", marginBottom: "6px" }}>Semester GPA</div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#00044a" }}>
            {gpaOf(rows).toFixed(2)}
          </div>
        </div>
        <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", flex: "1 1 180px", marginBottom: 0 }}>
          <div style={{ fontSize: "13px", color: "#777", marginBottom: "6px" }}>Cumulative GPA</div>
          <div style={{ fontSize: "28px", fontWeight: 700, color: "#16a34a" }}>
            {gpaOf(allRows).toFixed(2)}
          </div>
        </div>
      </div>

      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box", fontSize: "14px" }}
            aria-label="Select semester"
          >
            {semesters.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button onClick={() => window.print()} style={{ padding: "6px 12px", background: "transparent", color: "#00044a", border: "1px solid #00044a", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}>
            Print result
          </button>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Code</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Title</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Units</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Score</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const { grade } = gradeFor(r.score);
                return (
                  <tr key={r.code}>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{r.code}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{r.title}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{r.units}</td>
                    <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{r.score}</td>
                    <td
                      style={{ padding: "10px", borderBottom: "1px solid #eee", fontWeight: 700, color: grade === "F" ? "#dc2626" : "#222" }}
                    >
                      {grade}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#777" }}>
          Total units this semester: {totalUnits}
        </p>
      </div>
    </>
  );
};

export default Result;
