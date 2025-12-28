// src/utils/viewModeUtils.js

/**
 * View mode'a göre hücre genişliğini hesaplar
 * @param {string} viewMode - "day" | "week" | "month"
 * @param {number} containerWidth - Container genişliği
 * @param {number} dayRange - Gün aralığı
 * @returns {number} - Hücre genişliği (px)
 */
export const calculateCellWidth = (viewMode, containerWidth, dayRange) => {
  switch (viewMode) {
    case 'day':
      // Gün görünümü: Her gün için geniş hücreler
      return Math.max(containerWidth / Math.min(dayRange, 7), 150);
    case 'week':
      // Hafta görünümü: Orta genişlik
      return Math.max(containerWidth / Math.min(dayRange, 14), 80);
    case 'month':
      // Ay görünümü: Dar hücreler
      return Math.max(containerWidth / dayRange, 40);
    default:
      return 56.95; // Varsayılan
  }
};

/**
 * View mode'a göre varsayılan dayRange'i döndürür
 * @param {string} viewMode - "day" | "week" | "month"
 * @returns {number} - Varsayılan dayRange
 */
export const getDefaultDayRange = (viewMode) => {
  switch (viewMode) {
    case 'day':
      return 7; // 1 hafta
    case 'week':
      return 14; // 2 hafta
    case 'month':
      return 30; // 1 ay
    default:
      return 30;
  }
};

/**
 * View mode'a göre container genişliğini hesaplar
 * @param {string} viewMode - "day" | "week" | "month"
 * @param {number} dayRange - Gün aralığı
 * @param {number} cellWidth - Hücre genişliği
 * @returns {number} - Container genişliği (px)
 */
export const calculateContainerWidth = (viewMode, dayRange, cellWidth) => {
  return dayRange * cellWidth;
};

