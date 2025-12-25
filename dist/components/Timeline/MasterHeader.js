import React from "react";
import "./Timeline.css";

const MasterHeader = ({
  selectedDate,
  onDateSelect,
  onToday,
  onAdvance,
  onRetreat,
  onMonthAdvance,
  onMonthRetreat,
  dayRange,
  setDayRange,
}) => {
  const formattedDate = new Date(
    selectedDate.getTime() + 24 * 60 * 60 * 1000 - selectedDate.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0]; // YYYY-MM-DD formatı

  return (
    <div className="master-header-container">
      <div className="master-header-buttons">
        <button className="master-header-btn" onClick={onMonthRetreat}>
          1 Ay Geri
        </button>

        <button className="master-header-btn" onClick={onRetreat}>
          5 Gün Geri
        </button>

        <input
  type="date"
  className="master-header-date-picker"
  value={formattedDate} // Seçili tarih burada gösteriliyor
  onChange={(e) => onDateSelect(e.target.value)} // Tarih seçimi
  onKeyDown={(e) => e.preventDefault()} // Manuel girişleri engelle
/>


        <button className="master-header-btn" onClick={onAdvance}>
          5 Gün İleri
        </button>

        <button className="master-header-btn" onClick={onMonthAdvance}>
          1 Ay İleri
        </button>

        <button className="master-header-btn" onClick={onToday}>
          Bugün
        </button>
      </div>

      <select
        className="master-header-select"
        value={dayRange}
        onChange={(e) => setDayRange(parseInt(e.target.value, 10))}
      >
        <option value={30}>30 Gün</option>
        <option value={60}>60 Gün</option>
        <option value={90}>90 Gün</option>
      </select>
    </div>
  );
};

export default MasterHeader;
