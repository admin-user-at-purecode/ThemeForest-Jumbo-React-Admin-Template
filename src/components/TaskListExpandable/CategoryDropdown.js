import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { taskCategories } from "../../mock_data/tasksList";
import React from "react";

const CategoryDropdown = ({ activeCategory, onCategoryChange }) => {
  const handleChange = (e) => {
    onCategoryChange(e.target.value);
  };
  return (
    <Select value={activeCategory} onChange={handleChange} size={"small"}>
      <MenuItem value={"all"}>All Tasks</MenuItem>
      {taskCategories.map((category, index) => (
        <MenuItem key={index} value={category.slug}>
          {category.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
