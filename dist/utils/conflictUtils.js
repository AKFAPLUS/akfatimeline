// src/utils/conflictUtils.js

import { parseDate } from './dateUtils';
import { getTimeFromDate } from './timeUtils';

/**
 * İki event'in çakışıp çakışmadığını kontrol eder (gün bazlı)
 * @param {Object} event1 - İlk event
 * @param {Object} event2 - İkinci event
 * @returns {boolean} - Çakışma varsa true
 */
export const checkDayBasedConflict = (event1, event2) => {
  if (event1.resourceId !== event2.resourceId) {
    return false; // Farklı resource'larda çakışma olmaz
  }

  const start1 = parseDate(event1.startDate);
  const end1 = parseDate(event1.endDate);
  const start2 = parseDate(event2.startDate);
  const end2 = parseDate(event2.endDate);

  // Çakışma kontrolü: bir event'in başlangıcı diğerinin içinde mi?
  return (start1 <= end2 && end1 >= start2);
};

/**
 * İki event'in saat bazlı çakışıp çakışmadığını kontrol eder
 * @param {Object} event1 - İlk event
 * @param {Object} event2 - İkinci event
 * @returns {boolean} - Çakışma varsa true
 */
export const checkTimeBasedConflict = (event1, event2) => {
  if (event1.resourceId !== event2.resourceId) {
    return false; // Farklı resource'larda çakışma olmaz
  }

  const start1 = parseDate(event1.startDate);
  const end1 = parseDate(event1.endDate);
  const start2 = parseDate(event2.startDate);
  const end2 = parseDate(event2.endDate);

  // Aynı gün mü kontrol et
  if (start1.toDateString() !== start2.toDateString()) {
    return false; // Farklı günlerde çakışma olmaz (günlük kullanım için)
  }

  // Saat bazlı çakışma kontrolü
  const time1 = getTimeFromDate(start1);
  const time1End = getTimeFromDate(end1);
  const time2 = getTimeFromDate(start2);
  const time2End = getTimeFromDate(end2);

  return (time1.totalMinutes < time2End.totalMinutes && time1End.totalMinutes > time2.totalMinutes);
};

/**
 * Bir event listesinde çakışmaları bulur
 * @param {Array} events - Event listesi
 * @param {boolean} timeMode - Saat bazlı mod aktif mi
 * @returns {Array} - Çakışma bilgileri [{event1, event2, conflictType}]
 */
export const detectConflicts = (events, timeMode = false) => {
  const conflicts = [];
  const checkConflict = timeMode ? checkTimeBasedConflict : checkDayBasedConflict;

  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (checkConflict(events[i], events[j])) {
        conflicts.push({
          event1: events[i],
          event2: events[j],
          conflictType: timeMode ? 'time' : 'day',
          resourceId: events[i].resourceId,
        });
      }
    }
  }

  return conflicts;
};

/**
 * Belirli bir resource için çakışmaları bulur
 * @param {Array} events - Event listesi
 * @param {string} resourceId - Resource ID
 * @param {boolean} timeMode - Saat bazlı mod aktif mi
 * @returns {Array} - Çakışma bilgileri
 */
export const detectResourceConflicts = (events, resourceId, timeMode = false) => {
  const resourceEvents = events.filter(e => e.resourceId === resourceId);
  return detectConflicts(resourceEvents, timeMode);
};

/**
 * Bir event'in diğer event'lerle çakışıp çakışmadığını kontrol eder
 * @param {Object} event - Kontrol edilecek event
 * @param {Array} otherEvents - Diğer event'ler
 * @param {boolean} timeMode - Saat bazlı mod aktif mi
 * @returns {Array} - Çakışan event'ler
 */
export const findEventConflicts = (event, otherEvents, timeMode = false) => {
  const checkConflict = timeMode ? checkTimeBasedConflict : checkDayBasedConflict;
  return otherEvents.filter(e => e.id !== event.id && checkConflict(event, e));
};

