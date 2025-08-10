import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export default function CategoryChart({ expenses }) {
  // Calculate total amount per category
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
          "#8e44ad",
        ],
        hoverOffset: 30,
      },
    ],
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h3 style={{ textAlign: "center", color: "var(--text-color)" }}>
        Expenses by Category
      </h3>
      {expenses.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-muted)" }}>
          No expenses to display.
        </p>
      ) : (
        <Doughnut data={data} />
      )}
    </div>
  );
}
