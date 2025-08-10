import React, { useState } from "react";
import "./FilterPanel.css";

const categories = [
  "All",
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Health",
  "Shopping",
  "Other",
];

export default function FilterPanel({ filters, setFilters }) {
  // handlers for updating filters via setFilters prop
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleStartDateChange = (e) => {
    setFilters((prev) => ({ ...prev, startDate: e.target.value }));
  };

  const handleEndDateChange = (e) => {
    setFilters((prev) => ({ ...prev, endDate: e.target.value }));
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>Category</label>
        <select value={filters.category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Start Date</label>
        <input
          type="date"
          value={filters.startDate}
          onChange={handleStartDateChange}
        />
      </div>

      <div className="filter-group">
        <label>End Date</label>
        <input
          type="date"
          value={filters.endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
}
