// src/components/Timeline/MasterHeader.js
import React from "react";
import "./Timeline.css"; // veya MasterHeader.css, eğer ayrı dosyaya koyacaksan

const MasterHeader = ({
  onToday,
  onAdvance,
  onRetreat,
  onMonthAdvance,
  onMonthRetreat,
  dayRange,
  setDayRange,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="master-header-container">
      <button className="master-header-btn" onClick={onToday}>
        Today
      </button>

      <button className="master-header-btn" onClick={onMonthRetreat}>
        1 Ay Geri
      </button>

      <button className="master-header-btn" onClick={onRetreat}>
        5 Gün Geri
      </button>

      <button className="master-header-btn" onClick={onAdvance}>
        5 Gün İleri
      </button>

      <button className="master-header-btn" onClick={onMonthAdvance}>
        1 Ay İleri
      </button>

      <select
        className="master-header-select"
        value={dayRange}
        onChange={(e) => setDayRange(parseInt(e.target.value))}
      >
        <option value={30}>30 Gün</option>
        <option value={60}>60 Gün</option>
        <option value={90}>90 Gün</option>
      </select>

      <button className="master-header-btn" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default MasterHeader;
