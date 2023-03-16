import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function SortBy({ onSortChange }) {
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    onSortChange(event.target.value, sortOrder);
  };

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    onSortChange(sortBy, newSortOrder);
  };

  return (
    <div>
      <FormControl variant="outlined" size="small" style={{ minWidth: 120 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortBy}
          onChange={handleSortByChange}
          label="Sort By"
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="commentCount">Comment Count</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>
      <IconButton color="primary" onClick={handleSortOrderChange}>
        {sortOrder === "asc" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </div>
  );
}

export default SortBy;
