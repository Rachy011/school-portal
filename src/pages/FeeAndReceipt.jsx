import React, { useState } from "react";

const fees = [
  { item: "Tuition", amount: 150000 },
  { item: "Faculty dues", amount: 15000 },
  { item: "Library and ICT", amount: 10000 },
  { item: "Examination", amount: 12000 },
];

const payments = [
  { ref: "RCT-1001", date: "2026-08-12", item: "Tuition (part payment)", amount: 100000 },
  { ref: "RCT-1002", date: "2026-08-30", item: "Faculty dues", amount: 15000 },
];

const naira = (n) => "₦" + n.toLocaleString("en-NG");

const FeeAndReceipt = () => {
  const [selected, setSelected] = useState(null);

  const totalFees = fees.reduce((s, f) => s + f.amount, 0);
  const totalPaid = payments.reduce((s, p) => s + p.amount, 0);
  const balance = totalFees - totalPaid;

  const summary = [
    { label: "Total fees", value: naira(totalFees), color: "#222" },
    { label: "Paid", value: naira(totalPaid), color: "#16a34a" },
    { label: "Balance", value: naira(balance), color: balance > 0 ? "#dc2626" : "#16a34a" },
  ];

  return (
    <>
      <h1 style={{ margin: "0 0 24px", fontSize: "26px", color: "#222" }}>Fees and receipts</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
        {summary.map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", flex: "1 1 180px", marginBottom: 0 }}>
            <div style={{ fontSize: "13px", color: "#777", marginBottom: "6px" }}>{s.label}</div>
            <div style={{ fontSize: "24px", fontWeight: 700, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px", color: "#222" }}>Fee breakdown</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Item</th>
              <th style={{ padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600, textAlign: "right" }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f) => (
              <tr key={f.item}>
                <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{f.item}</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222", textAlign: "right" }}>{naira(f.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {balance > 0 && (
          <button style={{ padding: "10px 16px", background: "#00044a", color: "#fff", border: "none", borderRadius: "6px", fontSize: "14px", cursor: "pointer", marginTop: "16px" }}>Pay {naira(balance)}</button>
        )}
      </div>

      <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
        <h3 style={{ margin: "0 0 12px", color: "#222" }}>Payment history</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Reference</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>Date</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}>For</th>
                <th style={{ padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600, textAlign: "right" }}>Amount</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #e5e7eb", color: "#555", fontWeight: 600 }}></th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.ref}>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{p.ref}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{p.date}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222" }}>{p.item}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222", textAlign: "right" }}>{naira(p.amount)}</td>
                  <td style={{ padding: "10px", borderBottom: "1px solid #eee", color: "#222", textAlign: "right" }}>
                    <button onClick={() => setSelected(p)} style={{ padding: "6px 12px", background: "transparent", color: "#00044a", border: "1px solid #00044a", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}>
                      View receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div style={{ background: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", marginBottom: "20px", maxWidth: "420px", border: "1px dashed #999" }}>
          <h3 style={{ margin: "0 0 4px", color: "#222" }}>Payment receipt</h3>
          <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#777" }}>{selected.ref}</p>
          <p style={{ margin: "0 0 6px", fontSize: "14px" }}>Date: {selected.date}</p>
          <p style={{ margin: "0 0 6px", fontSize: "14px" }}>For: {selected.item}</p>
          <p style={{ margin: "0 0 16px", fontSize: "18px", fontWeight: 700 }}>
            Amount paid: {naira(selected.amount)}
          </p>
          <button onClick={() => window.print()} style={{ padding: "10px 16px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "6px", fontSize: "14px", cursor: "pointer" }}>
            Print receipt
          </button>{" "}
          <button onClick={() => setSelected(null)} style={{ padding: "6px 12px", background: "transparent", color: "#2563eb", border: "1px solid #2563eb", borderRadius: "6px", fontSize: "13px", cursor: "pointer" }}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default FeeAndReceipt;
