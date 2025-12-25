import React from "react";
import "./Timeline.css"; // CSS dosyasını import etmeyi unutma
import { parseDate } from "../../utils/dateUtils";

const TimelineHeader = ({ dates, monthHeaders, highlightWeekends = false }) => {
  return (
    <div className="timeline-header-container">
      {/* Ay ve Yıl Başlıkları */}
      <div className="timeline-header-month-row">
        {monthHeaders.map((monthHeader, index) => (
          <div
            key={index}
            className="timeline-header-month-cell"
            style={{
              flex: monthHeader.endIndex - monthHeader.startIndex + 1,
              borderRight:
                index < monthHeaders.length - 1 ? "1px solid var(--border-color)" : "none",
            }}
          >
            {monthHeader.monthName} {monthHeader.year}
          </div>
        ))}
      </div>

      {/* Günlük Hücreler */}
      <div className="timeline-header-day-row">
        {dates.map((date, index) => {
          // Hafta sonu kontrolü
          let isWeekend = false;
          if (highlightWeekends) {
            const cellDate = parseDate(date.fullDate);
            const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
            isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          }
          
          return (
            <div
              key={index}
              className={`timeline-header-day-cell ${isWeekend ? "timeline-header-day-weekend" : ""}`}
              style={{
                flex: 1,
                borderRight: index < dates.length - 1 ? "1px solid var(--border-color)" : "none",
              }}
            >
              {date.display}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineHeader;
