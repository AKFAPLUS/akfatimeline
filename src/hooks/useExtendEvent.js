import { useCallback } from "react";

const useExtendEvent = (events, setEvents) => {
  /**
   * Etkinliği uzatmak veya kısaltmak için kullanılan işlev.
   * @param {number} eventId - Güncellenmesi gereken etkinliğin ID'si.
   * @param {Date} newEndDate - Etkinliğin yeni bitiş tarihi.
   */
  const extendEvent = useCallback(
    (eventId, newEndDate) => {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId
            ? {
                ...event,
                endDate: newEndDate, // Yeni bitiş tarihini günceller
              }
            : event // Diğer etkinlikler aynı kalır
        )
      );
    },
    [setEvents]
  );

  return { extendEvent };
};

export default useExtendEvent;
