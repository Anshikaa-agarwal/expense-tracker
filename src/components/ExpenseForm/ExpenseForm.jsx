import React, { useState } from "react";
import "./ExpenseForm.css";

const categories = [
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Health",
  "Shopping",
  "Other",
];

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "Food",
    date: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!formData.amount || Number(formData.amount) <= 0)
      newErrors.amount = "Please enter a valid amount";

    if (!formData.description.trim())
      newErrors.description = "Description cannot be empty";

    if (!formData.date)
      newErrors.date = "Please select a date";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Prepare expense object with unique id
    const newExpense = {
      id: Date.now(),
      amount: parseFloat(formData.amount),
      description: formData.description.trim(),
      category: formData.category,
      date: formData.date,
    };

    onAddExpense(newExpense);

    // Reset form
    setFormData({
      amount: "",
      description: "",
      category: "Food",
      date: "",
    });

    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="e.g. 50.00"
          step="0.01"
          min="0"
        />
        {errors.amount && <small className="error">{errors.amount}</small>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="e.g. Grocery shopping"
        />
        {errors.description && (
          <small className="error">{errors.description}</small>
        )}
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <small className="error">{errors.date}</small>}
      </div>

      <button type="submit" className="submit-btn">
        Add Expense
      </button>
    </form>
  );
}
