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
