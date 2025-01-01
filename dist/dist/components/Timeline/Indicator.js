import React from "react";

const Indicator = ({ todayIndex, totalDays }) => {
  if (todayIndex < 0 || todayIndex >= totalDays) {
    console.log("Indicator not visible: Out of bounds");
    return null; // Bugün timeline dışında ise çizgiyi gösterme
  }

  console.log("todayIndex:", todayIndex);
  console.log("totalDays:", totalDays);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: `calc(${(todayIndex + 0.5) / totalDays} * 100%)`, // Günün ortasına yerleştirmek için +0.5
        width: "2px",
        height: "100%",
        backgroundColor: "transparent",
        zIndex: 5,
        borderStyle: "dashed", // Kesikli çizgi için
        borderWidth: "0 0 0 2px", // Sadece sol tarafa kesikli çizgi
        borderColor: "red",
      }}
    ></div>
  );
};

export default Indicator;
