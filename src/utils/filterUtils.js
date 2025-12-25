// src/utils/filterUtils.js

import { parseDate } from './dateUtils';

/**
 * Event'leri başlığa göre filtreler
 * @param {Array} events - Event listesi
 * @param {string} searchTerm - Arama terimi
 * @returns {Array} - Filtrelenmiş event listesi
 */
export const filterByTitle = (events, searchTerm) => {
  if (!searchTerm || searchTerm.trim() === '') {
    return events;
  }
  
  const term = searchTerm.toLowerCase().trim();
  return events.filter(event => 
    event.title && event.title.toLowerCase().includes(term)
  );
};

/**
 * Event'leri tarih aralığına göre filtreler
 * @param {Array} events - Event listesi
 * @param {Date} startDate - Başlangıç tarihi
 * @param {Date} endDate - Bitiş tarihi
 * @returns {Array} - Filtrelenmiş event listesi
 */
export const filterByDateRange = (events, startDate, endDate) => {
  if (!startDate && !endDate) {
    return events;
  }
  
  return events.filter(event => {
    const eventStart = parseDate(event.startDate);
    const eventEnd = parseDate(event.endDate);
    
    if (startDate && eventEnd < startDate) {
      return false;
    }
    if (endDate && eventStart > endDate) {
      return false;
    }
    
    return true;
  });
};

/**
 * Event'leri resource'a göre filtreler
 * @param {Array} events - Event listesi
 * @param {Array} resourceIds - Resource ID listesi
 * @returns {Array} - Filtrelenmiş event listesi
 */
export const filterByResource = (events, resourceIds) => {
  if (!resourceIds || resourceIds.length === 0) {
    return events;
  }
  
  return events.filter(event => resourceIds.includes(event.resourceId));
};

/**
 * Event'leri status'a göre filtreler
 * @param {Array} events - Event listesi
 * @param {Array} statuses - Status listesi
 * @returns {Array} - Filtrelenmiş event listesi
 */
export const filterByStatus = (events, statuses) => {
  if (!statuses || statuses.length === 0) {
    return events;
  }
  
  return events.filter(event => 
    event.status && statuses.includes(event.status)
  );
};

/**
 * Tüm filtreleri uygular
 * @param {Array} events - Event listesi
 * @param {Object} filters - Filtre objesi {searchTerm, startDate, endDate, resourceIds, statuses}
 * @returns {Array} - Filtrelenmiş event listesi
 */
export const applyFilters = (events, filters) => {
  let filtered = events;
  
  if (filters.searchTerm) {
    filtered = filterByTitle(filtered, filters.searchTerm);
  }
  
  if (filters.startDate || filters.endDate) {
    filtered = filterByDateRange(filtered, filters.startDate, filters.endDate);
  }
  
  if (filters.resourceIds && filters.resourceIds.length > 0) {
    filtered = filterByResource(filtered, filters.resourceIds);
  }
  
  if (filters.statuses && filters.statuses.length > 0) {
    filtered = filterByStatus(filtered, filters.statuses);
  }
  
  return filtered;
};

