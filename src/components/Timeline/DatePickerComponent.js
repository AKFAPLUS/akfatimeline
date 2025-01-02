import React, { useRef, useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_green.css"; // Tema

const DatePickerComponent = ({ onDateSelect }) => {
  const pickerRef = useRef();

  useEffect(() => {
    flatpickr(pickerRef.current, {
      onChange: ([selectedDate]) => onDateSelect(selectedDate),
    });
  }, []);

  return <input type="text" ref={pickerRef} />;
};

export default DatePickerComponent;
