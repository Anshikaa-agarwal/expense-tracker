import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function MonthlyChart({ expenses }) {
  // Get last 6 months labels, e.g., ["Mar", "Apr", "May", "Jun", "Jul", "Aug"]
  const months = [];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push(monthNames[d.getMonth()]);
  }

  // Sum expenses by month (last 6 months)
  const monthlyTotals = months.map((month) => {
    return expenses
      .filter((expense) => {
        const expDate = new Date(expense.date);
        return month === monthNames[expDate.getMonth()] && expDate.getFullYear() === today.getFullYear();
      })
      .reduce((sum, exp) => sum + exp.amount, 0);
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "Expenses (₹)",
        data: monthlyTotals,
        fill: false,
        backgroundColor: "var(--btn-bg)",
        borderColor: "var(--btn-bg)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", color: "var(--text-color)" }}>
        Expenses Over Last 6 Months
      </h3>
      {expenses.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
          No expenses to display.
        </p>
      ) : (
        <Line data={data} />
      )}
    </div>
  );
}
