import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import CategoryChart from "./components/CategoryChart/CategoryChart";
import MonthlyChart from "./components/MonthlyChart/MonthlyChart";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Callback to add new expense
  const handleAddExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const [filters, setFilters] = useState({
    category: "All",
    startDate: "",
    endDate: "",
  });

  // Filter expenses based on filters state
  const filteredExpenses = expenses.filter((expense) => {
    // Category filter
    if (filters.category !== "All" && expense.category !== filters.category) {
      return false;
    }

    // Date filters
    const expenseDate = new Date(expense.date);
    if (filters.startDate) {
      const startDate = new Date(filters.startDate);
      if (expenseDate < startDate) return false;
    }
    if (filters.endDate) {
      const endDate = new Date(filters.endDate);
      if (expenseDate > endDate) return false;
    }

    return true;
  });

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="main-content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <FilterPanel filters={filters} setFilters={setFilters} />
        <p style={{ textAlign: "center" }}>
          Showing {filteredExpenses.length} of {expenses.length} expenses.
        </p>
        <ExpenseList expenses={filteredExpenses} onDelete={handleDeleteExpense} />

        <CategoryChart expenses={filteredExpenses} />
        <MonthlyChart expenses={filteredExpenses} />


        {/* Later, ExpenseList will receive filteredExpenses */}
      </main>

    </div>
  );
}
