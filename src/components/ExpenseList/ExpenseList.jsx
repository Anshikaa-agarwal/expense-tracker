import React, { useState } from "react";
import "./ExpenseList.css";

export default function ExpenseList({ expenses, onDelete }) {
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });

  // Sorting logic
  const sortedExpenses = [...expenses].sort((a, b) => {
    if (sortConfig.key === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return sortConfig.direction === "asc" ? -1 : 1;
      if (dateA > dateB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    } else if (sortConfig.key === "amount") {
      if (a.amount < b.amount) return sortConfig.direction === "asc" ? -1 : 1;
      if (a.amount > b.amount) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  // Toggle sorting config
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Helper to show sort arrows
  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  return (
    <div className="expense-list-container">
      {sortedExpenses.length === 0 ? (
        <p className="no-expenses">No expenses found.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Description</th>
              <th
                className="sortable"
                onClick={() => requestSort("amount")}
                title="Sort by amount"
              >
                Amount {getSortArrow("amount")}
              </th>
              <th>Category</th>
              <th
                className="sortable"
                onClick={() => requestSort("date")}
                title="Sort by date"
              >
                Date {getSortArrow("date")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>₹ {expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(expense.id)}
                    aria-label={`Delete expense ${expense.description}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
