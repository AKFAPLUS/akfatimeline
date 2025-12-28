// src/utils/timeUtils.js

/**
 * Saat bazlı time slot'ları oluşturur
 * @param {number} startHour - Başlangıç saati (0-23)
 * @param {number} endHour - Bitiş saati (0-24)
 * @param {number} intervalMinutes - Slot aralığı (dakika cinsinden)
 * @returns {Array} - Time slot array [{hour, minute, display, totalMinutes}]
 */
export const generateTimeSlots = (startHour = 0, endHour = 24, intervalMinutes = 60) => {
  const slots = [];
  const totalMinutes = (endHour - startHour) * 60;
  const slotCount = Math.floor(totalMinutes / intervalMinutes);

  for (let i = 0; i <= slotCount; i++) {
    const totalMinutesFromStart = i * intervalMinutes;
    const hour = Math.floor(totalMinutesFromStart / 60) + startHour;
    const minute = totalMinutesFromStart % 60;
    
    // 24:00'ı 00:00 olarak göster
    const displayHour = hour >= 24 ? 0 : hour;
    const displayMinute = minute === 0 ? '00' : minute.toString().padStart(2, '0');
    
    slots.push({
      hour: displayHour,
      minute,
      display: `${displayHour.toString().padStart(2, '0')}:${displayMinute}`,
      totalMinutes: totalMinutesFromStart,
      rawHour: hour,
    });
  }

  return slots;
};

/**
 * Bir Date objesinden saat ve dakikayı alır
 * @param {Date} date - Date objesi
 * @returns {Object} - {hour, minute, totalMinutes}
 */
export const getTimeFromDate = (date) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const hour = date.getHours();
  const minute = date.getMinutes();
  return {
    hour,
    minute,
    totalMinutes: hour * 60 + minute,
  };
};

/**
 * Saat ve dakikadan toplam dakikayı hesaplar
 * @param {number} hour - Saat (0-23)
 * @param {number} minute - Dakika (0-59)
 * @returns {number} - Toplam dakika
 */
export const timeToMinutes = (hour, minute = 0) => {
  return hour * 60 + minute;
};

/**
 * Toplam dakikayı saat ve dakikaya çevirir
 * @param {number} totalMinutes - Toplam dakika
 * @returns {Object} - {hour, minute}
 */
export const minutesToTime = (totalMinutes) => {
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  return { hour, minute };
};

/**
 * Bir event'in saat bazlı pozisyonunu hesaplar
 * @param {Date} startDate - Başlangıç tarihi ve saati
 * @param {Date} endDate - Bitiş tarihi ve saati
 * @param {Date} dayStart - Günün başlangıcı (00:00)
 * @param {number} startHour - Timeline başlangıç saati
 * @param {number} endHour - Timeline bitiş saati
 * @param {number} intervalMinutes - Slot aralığı
 * @returns {Object} - {top, height, isVisible, startMinutes, endMinutes}
 */
export const calculateTimePosition = (
  startDate,
  endDate,
  dayStart,
  startHour = 0,
  endHour = 24,
  intervalMinutes = 60
) => {
  // Günün başlangıç ve bitiş zamanlarını oluştur
  const dayStartTime = new Date(dayStart);
  dayStartTime.setHours(startHour, 0, 0, 0);
  
  const dayEndTime = new Date(dayStart);
  if (endHour === 24) {
    dayEndTime.setHours(23, 59, 59, 999);
  } else {
    dayEndTime.setHours(endHour, 0, 0, 0);
  }
  
  // Event başlangıç ve bitiş zamanları
  const eventStart = new Date(startDate);
  const eventEnd = new Date(endDate);
  
  // Event bu gün içinde mi kontrol et
  const dayDateStr = dayStartTime.toDateString();
  const eventStartDateStr = eventStart.toDateString();
  const eventEndDateStr = eventEnd.toDateString();
  
  // Event bu günü kapsamıyorsa görünmez
  if (eventEndDateStr < dayDateStr || eventStartDateStr > dayDateStr) {
    return { isVisible: false, top: 0, height: 0, startMinutes: 0, endMinutes: 0 };
  }
  
  // Gün içindeki dakika aralığını hesapla
  const dayStartMinutes = startHour * 60;
  const dayEndMinutes = endHour === 24 ? 24 * 60 : endHour * 60;
  const dayTotalMinutes = dayEndMinutes - dayStartMinutes;
  
  // Event'in gün içindeki başlangıç ve bitiş dakikaları
  let eventStartMinutes = 0;
  let eventEndMinutes = 0;
  
  if (eventStartDateStr === dayDateStr) {
    // Event bugün başlıyor
    const time = getTimeFromDate(eventStart);
    eventStartMinutes = time.totalMinutes;
  } else {
    // Event daha önce başlamış, günün başından itibaren göster
    eventStartMinutes = dayStartMinutes;
  }
  
  if (eventEndDateStr === dayDateStr) {
    // Event bugün bitiyor
    const time = getTimeFromDate(eventEnd);
    eventEndMinutes = time.totalMinutes;
  } else {
    // Event daha sonra bitiyor, günün sonuna kadar göster
    eventEndMinutes = dayEndMinutes;
  }
  
  // Timeline sınırlarına göre ayarla
  const effectiveStartMinutes = Math.max(eventStartMinutes, dayStartMinutes);
  const effectiveEndMinutes = Math.min(eventEndMinutes, dayEndMinutes);
  
  // Eğer etkili süre yoksa görünmez
  if (effectiveEndMinutes <= effectiveStartMinutes) {
    return { isVisible: false, top: 0, height: 0, startMinutes: 0, endMinutes: 0 };
  }
  
  // Pozisyon hesaplama (yüzde olarak)
  const topPercentage = ((effectiveStartMinutes - dayStartMinutes) / dayTotalMinutes) * 100;
  const heightPercentage = ((effectiveEndMinutes - effectiveStartMinutes) / dayTotalMinutes) * 100;
  
  return {
    isVisible: true,
    top: `${Math.max(0, topPercentage)}%`,
    height: `${Math.min(100, heightPercentage)}%`,
    startMinutes: effectiveStartMinutes,
    endMinutes: effectiveEndMinutes,
  };
};

/**
 * Bir tarih ve saati birleştirir
 * @param {Date} date - Tarih
 * @param {number} hour - Saat
 * @param {number} minute - Dakika
 * @returns {Date} - Birleştirilmiş Date objesi
 */
export const combineDateAndTime = (date, hour, minute = 0) => {
  const newDate = new Date(date);
  newDate.setHours(hour, minute, 0, 0);
  return newDate;
};

