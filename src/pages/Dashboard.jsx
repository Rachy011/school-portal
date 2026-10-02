import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Search, BookOpenCheck, CircleDollarSign, Download, UserCircle,
  PenSquare, IdCard, Building2, Building, FileText, ScanSearch,
  UserCheck, GraduationCap, Layers, CalendarDays, CalendarRange,
} from "lucide-react";

const NAVY = "#00044a";

const quickActions = [
  { label: "Check Results", to: "/results", icon: Search, bg: "#6ea8dc" },
  { label: "Course Registration", to: "/courses", icon: BookOpenCheck, bg: "#c39bd9" },
  { label: "Pay School Fees", to: "/fees", icon: CircleDollarSign, bg: "#85c880" },
  { label: "Download Receipts", to: "/fees", icon: Download, bg: "#e5c298" },
  { label: "View Profile", to: "/profile", icon: UserCircle, bg: "#6ea8dc" },
];

const Field = ({ icon: Icon, color, label, children }) => (
  <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flex: "1 1 240px", minHeight: 70 }}>
    <Icon size={36} color={color} style={{ flexShrink: 0 }} />
    <div>
      <div style={{ fontFamily: "Roboto, Arial, sans-serif", fontSize: 18, color: "#666" }}>{label}</div>
      <div style={{ fontWeight: 700, fontSize: 18, color: "#111", marginTop: 2 }}>{children}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const { student } = useOutletContext();

  return (
    <>
      <h1 style={{ margin: "0 0 16px 4px", fontWeight: 400, fontSize: 30, color: "#111" }}>
        Welcome to your student Dashboard,{" "}
        <strong style={{ fontSize: 36 }}>{student.firstName}</strong>
      </h1>

      <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "flex-start" }}>
        {/* Profile card */}
        <section style={{ flex: "3 1 560px", border: "1px solid #ddd", borderRadius: 16, padding: 24, display: "flex", gap: 30, flexWrap: "wrap", background: "#fff" }}>
          <img
            src={student.photo}
            alt={student.name}
            style={{ width: 311, maxWidth: "100%", height: 475, objectFit: "cover", borderRadius: 14, background: "#e5e7eb" }}
          />

          <div style={{ flex: "1 1 340px", minWidth: 0 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 24px" }}>
              <Field icon={PenSquare} color={NAVY} label="Full Name:">{student.name}</Field>
              <Field icon={IdCard} color="#f08a24" label="Matriculation Number:">{student.matric}</Field>
              <Field icon={Building2} color="#5aa64b" label="Faculty:">{student.faculty}</Field>
              <Field icon={Building} color="#8e44ad" label="Department:">{student.department}</Field>
              <Field icon={FileText} color="#3b82f6" label="Programme:">{student.programme}</Field>
              <Field icon={ScanSearch} color="#c2410c" label="Specialization:">{student.specialization}</Field>
              <Field icon={UserCheck} color="#d4a017" label="Mode:">{student.mode}</Field>
              <Field icon={GraduationCap} color="#6b7280" label="Status:">
                <span style={{ display: "inline-block", background: "#4caf50", color: "#fff", fontWeight: 400, fontSize: 13, padding: "4px 12px", borderRadius: 999 }}>
                  {student.status}
                  
                </span>
              </Field>
            </div>
            
            <div style={{ borderTop: "1px solid #ddd", marginTop: 24, paddingTop: 24, display: "flex", flexWrap: "wrap", gap: "20px 24px" }}>
              <Field icon={Layers} color="#111" label="Level:">{student.level}</Field>
              <Field icon={CalendarDays} color={NAVY} label="Session:">{student.session}</Field>
              <Field icon={CalendarRange} color={NAVY} label="Semester:">{student.semester}</Field>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <aside style={{ flex: "1 1 300px", maxWidth: 380, border: "1px solid #ddd", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
          <div style={{ background: NAVY, color: "#fff", padding: "18px 20px", fontSize: 26, fontWeight: 700, fontFamily: "Roboto, Arial, sans-serif" }}>
            Quick Actions
          </div>
          <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 20 }}>
            {quickActions.map(({ label, to, icon: Icon, bg }) => (
              <Link
                key={label}
                to={to}
                style={{ background: bg, color: "#111", textDecoration: "none", height: 65, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, fontSize: 18 }}
              >
                <Icon size={22} />
                {label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;