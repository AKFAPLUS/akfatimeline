import React from "react";

const DatePickerComponent = ({ onDateSelect }) => {
  return (
    <input
      type="date"
      onChange={(e) => onDateSelect(new Date(e.target.value))}
      className="master-header-date-picker"
    />
  );
};

export default DatePickerComponent;
