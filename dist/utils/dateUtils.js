// src/utils/dateUtils.js

/**
 * "dd/mm/yyyy" formatındaki bir tarih string'ini Date objesine dönüştürür.
 * Eğer dateInput bir string değilse, direkt Date objesini döndürür.
 * @param {string | Object | Date} dateInput - "dd/mm/yyyy" formatında tarih stringi veya {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {Date} - Date objesi.
 */
export const parseDate = (dateInput) => {
  if (dateInput instanceof Date) {
    return dateInput;
  }
  if (typeof dateInput === 'string') {
    const [day, month, year] = dateInput.split("/").map(Number);
    return new Date(year, month - 1, day);
  } else if (typeof dateInput === 'object' && dateInput.fullDate instanceof Date) {
    return new Date(dateInput.fullDate.getTime() + dateInput.fullDate.getTimezoneOffset() * 60000);
  } else {
    console.error("parseDate received invalid input:", dateInput);
    return new Date(); // veya hata fırlat
  }
};

/**
 * Bir tarihin belirli bir aralık içinde olup olmadığını kontrol eder.
 * @param {string | Object | Date} date - "dd/mm/yyyy" formatında tarih stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} startDate - "dd/mm/yyyy" formatında başlangıç tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @param {string | Object | Date} endDate - "dd/mm/yyyy" formatında bitiş tarihi stringi, {fullDate: Date, display: string} objesi veya Date objesi.
 * @returns {boolean} - Tarih aralık içinde ise true, değilse false.
 */
export const isDateInRange = (date, startDate, endDate) => {
  const d = parseDate(date);
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  return d >= start && d <= end;
};

/**
 * Bir tarihin disabled olup olmadığını kontrol eder.
 * @param {string | Object | Date} date - Kontrol edilecek tarih
 * @param {Object} disableDates - { mode: 'exclude' | 'include', dates: [], ranges: [] }
 * @returns {boolean} - Tarih disabled ise true, değilse false
 */
export const isDateDisabled = (date, disableDates) => {
  if (!disableDates || !disableDates.mode) {
    return false; // DisableDates yoksa veya mode yoksa disabled değil
  }

  const dateObj = parseDate(date);
  // Sadece tarih kısmını karşılaştırmak için (saat bilgisi olmadan)
  const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  
  const { mode, dates = [], ranges = [] } = disableDates;
  
  // Tarihin listede veya aralıkta olup olmadığını kontrol et
  let isInList = false;
  
  // Tekil tarihleri kontrol et
  if (dates && dates.length > 0) {
    isInList = dates.some((d) => {
      const dObj = parseDate(d);
      const dOnly = new Date(dObj.getFullYear(), dObj.getMonth(), dObj.getDate());
      return dOnly.getTime() === dateOnly.getTime();
    });
  }
  
  // Tarih aralıklarını kontrol et
  if (!isInList && ranges && ranges.length > 0) {
    isInList = ranges.some((range) => {
      const start = parseDate(range.start);
      const end = parseDate(range.end);
      const startOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const endOnly = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      return dateOnly >= startOnly && dateOnly <= endOnly;
    });
  }
  
  // Mode'a göre döndür
  if (mode === 'exclude') {
    // exclude modu: listede olan tarihler disabled
    return isInList;
  } else if (mode === 'include') {
    // include modu: listede olmayan tarihler disabled
    return !isInList;
  }
  
  return false;
};
