import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Menu, Search, LayoutGrid, BookOpen, Megaphone, Receipt, GraduationCap,
  Download, Bell, Languages, Settings, LogOut,
} from "lucide-react";
// npm i lucide-react

const NAVY = "#00044a";

// Sample data. Replace with your real student data or backend calls.
const student = {
  name: "Khadijat Lawal",
  firstName: "Khadijat",
  matric: "22/01DL021",
  faculty: "",
  department: "Computer Science",
  programme: "B. Sc. Computer Science",
  specialization: "No Specialization",
  mode: "No Mode of Study",
  status: "Active",
  level: "300 Level",
  session: "2025/2026",
  semester: "Rain Semester",
  photo: "public/WhatsApp Image 2026-09-30 at 11.45.44 (1).jpeg", // put the photo in your public folder
};

const links = [
  { to: "/dashboard", label: "Home", icon: LayoutGrid },
  { to: "/courses", label: "Course Management", icon: BookOpen },
  { to: "/fees", label: "Fees and receipts", icon: Receipt },
  { to: "/results", label: "Results", icon: GraduationCap },
  { to: "/announcements", label: "Announcements", icon: Megaphone },
];

const headerBtn = {
  width: 60, height: 60, borderRadius: "50%", border: "none", background: "#d6d8dc",
  color: NAVY, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
};

const PortalTemplate = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");

  const shown = links.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()));
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric",
  }).replace(",", "");

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Times New Roman', Georgia, serif", background: "#fff" }}>
      {open && (
        <aside style={{ width: 300, flexShrink: 0, background: "#fcfafa", borderRight: "1px solid #eee", padding: "30px 14px", display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img src="public/logo.png" alt="University logo" style={{ width: 134, height: 150, objectFit: "contain" }} />
            <div style={{ fontWeight: 700, fontSize: 18, color: "#111", marginTop: 8 }}>UNIVERSITY OF ONDO</div>
          </div>
                         {/* Search Box */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1px solid #bbb", borderRadius: 4, padding: "0 12px", height: 68, background: "#fff", marginBottom: 12 }}>
            <Search size={20} color="#555" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search navigation..."
              aria-label="Search navigation"
              style={{ border: "none", outline: "none", flex: 1, fontSize: 16, fontFamily: "inherit", background: "transparent" }}
            />
          </div>

          <nav style={{ flex: 1 }}>
            {shown.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                display: "flex", alignItems: "center", gap: 16, padding: "0 20px", height: 60,
                marginBottom: 4, color: NAVY, textDecoration: "none", fontSize: 18,
                background: isActive ? "#c5c6de" : "transparent",
                })}
              >
                <Icon size={24} />
                {label}
              </NavLink>
            ))}
            {shown.length === 0 && <p style={{ color: "#777", padding: "0 20px" }}>No match found.</p>}
          </nav>

          <button
            onClick={() => navigate("/")}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, background: "transparent", color: NAVY, border: `1px solid ${NAVY}`, borderRadius: 6, cursor: "pointer", fontSize: 15, fontFamily: "inherit" }}
          >
            <LogOut size={18} /> Sign out
          </button>
        </aside>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <header style={{ background: NAVY, color: "#fff", padding: "20px 30px 20px 18px", borderBottomLeftRadius: 30, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}>
              <Menu size={28} />
            </button>
            <div>
              <div style={{ fontSize: 28 }}>Welcome {student.name}</div>
              <div style={{ fontSize: 17, marginTop: 4 }}>{today}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <button style={headerBtn} aria-label="Downloads"><Download size={24} /></button>
            <button style={headerBtn} aria-label="Notifications" onClick={() => navigate("/announcements")}><Bell size={24} /></button>
            <button style={headerBtn} aria-label="Language"><Languages size={24} /></button>
            <button style={headerBtn} aria-label="Settings"><Settings size={24} /></button>
          </div>
        </header>

        <main style={{ padding: "16px 28px 28px", minWidth: 0, background: "#fff" }}>
          <Outlet context={{ student }} />
        </main>
      </div>
    </div>
  );
};

export default PortalTemplate;