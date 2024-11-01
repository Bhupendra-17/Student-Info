// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by student name"
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded mb-4 w-full"
    />
  );
};

export default SearchBar;
