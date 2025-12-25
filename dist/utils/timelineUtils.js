// src/utils/timelineUtils.js

export const generateTimelineData = (startYear, endYear) => {
    const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
    const monthNames = [
      "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
      "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
    ];
  
    const dates = [];
    const monthHeaders = [];
  
    for (let year = startYear; year <= endYear; year++) {
      for (let month = 1; month <= 12; month++) {
        const daysInMonth = new Date(year, month, 0).getDate();
        const startIndex = dates.length;
  
        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(year, month - 1, day);
          const dayName = dayNames[date.getDay()];
          dates.push({
            fullDate: date,
            display: `${day} ${dayName}`,
          });
        }
  
        const endIndex = dates.length - 1;
        monthHeaders.push({
          monthName: monthNames[month - 1],
          year,
          startIndex,
          endIndex,
          totalDays: endIndex - startIndex + 1,
        });
      }
    }
  
    return { dates, monthHeaders };
  };
  