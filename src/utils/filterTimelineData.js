const filterTimelineData = (dates, startDate, dayCount) => {
    const startIndex = dates.findIndex(
      (date) => date.fullDate.toISOString().split("T")[0] === startDate
    );
  
    if (startIndex === -1) {
      console.warn("Seçilen başlangıç tarihi bulunamadı.");
      return { filteredDates: [] };
    }
  
    const filteredDates = dates.slice(startIndex, startIndex + dayCount);
  
    return {
      filteredDates,
      startIndex,
      endIndex: startIndex + dayCount - 1,
    };
  };
  
  export default filterTimelineData;
  