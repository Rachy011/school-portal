import React, { useState } from "react";

const data = [
  {
    id: 1,
    category: "Exams",
    title: "Second semester exam timetable released",
    date: "2026-09-28",
    body: "The timetable is now available. Check your course dates and report any clash to your department by Friday.",
  },
  {
    id: 2,
    category: "Fees",
    title: "Deadline for school fees payment",
    date: "2026-09-25",
    body: "All outstanding fees must be paid before 15 October. Students with unpaid fees will not be able to view results.",
  },
  {
    id: 3,
    category: "General",
    title: "Library opening hours extended",
    date: "2026-09-20",
    body: "The main library will now open from 8am to 10pm, Monday to Saturday, during the exam period.",
  },
  {
    id: 4,
    category: "Courses",
    title: "Late course registration opens",
    date: "2026-09-15",
    body: "Late registration is open for one week. A late fee applies. Register from the Courses page.",
  },
];

const categories = ["All", "Exams", "Fees", "Courses", "General"];

const Announcements = () => {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);

  const visible = data.filter((a) => filter === "All" || a.category === filter);

  return (
    <>
      <h1 style={{ margin: "0 0 24px", fontSize: "26px", color: "#222" }}>Announcements</h1>
      <div style={{ marginBottom: "16px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{ padding: "6px 12px", border: "1px solid #00044a", borderRadius: "6px", fontSize: "13px", cursor: "pointer", background: filter === c ? "#00044a" : "transparent", color: filter === c ? "#fff" : "#00044a" }}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 && (
        <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>No announcements in this category yet.</div>
      )}

      {visible.map((a) => (
        <div key={a.id} style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <h3 style={{ margin: "0 0 4px", color: "#222", fontSize: "17px" }}>{a.title}</h3>
              <span style={{ fontSize: "13px", color: "#777" }}>
                {a.category} • {a.date}
              </span>
            </div>
            <button
              onClick={() => setOpenId(openId === a.id ? null : a.id)}
              style={{ padding: "6px 12px", background: "transparent", color: "#00044a", border: "1px solid #00044a", borderRadius: "6px", fontSize: "13px", cursor: "pointer", alignSelf: "flex-start", whiteSpace: "nowrap" }}
            >
              {openId === a.id ? "Hide" : "Read"}
            </button>
          </div>
          {openId === a.id && (
            <p style={{ margin: "14px 0 0", color: "#444", lineHeight: 1.6, fontSize: "14px" }}>
              {a.body}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default Announcements;
