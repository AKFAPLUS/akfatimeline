// src/components/Timeline/TimelineEvents.js
import React from "react";
import { isDateInRange, parseDate } from "../../utils/dateUtils";

const TimelineEvents = ({ date, events, resourceId, onDelete }) => {
  // Gelen tüm props'ları kontrol et
  console.log("TimelineEvents Props:", { date, events, resourceId, onDelete });

  const dateToCompare = date?.fullDate;

  if (!dateToCompare) {
    console.error("Hata: date.fullDate değeri tanımlı değil.");
    return null;
  }

  if (!Array.isArray(events)) {
    console.error("Hata: events bir dizi değil.", events);
    return null;
  }

  if (!resourceId) {
    console.error("Hata: resourceId değeri tanımlı değil.");
    return null;
  }

  // Event'leri filtrele: Tarih aralığı ve resource eşleşmesi ile
  const filteredEvents = events.filter((event) => {
    const isMatch =
      event.resourceId === resourceId &&
      isDateInRange(dateToCompare, event.startDate, event.endDate);
    console.log(
      "Event Filtering:",
      {
        event,
        dateToCompare,
        isMatch,
        resourceId,
        startDate: event.startDate,
        endDate: event.endDate,
      }
    );
    return isMatch;
  });

  console.log("Filtered Events for Resource:", { resourceId, filteredEvents });

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {filteredEvents.map((event) => {
        const eventStartDate = parseDate(event.startDate);
        const eventEndDate = parseDate(event.endDate);

        if (!eventStartDate || !eventEndDate) {
          console.error("Hata: Etkinlik başlangıç veya bitiş tarihi hatalı.", {
            event,
          });
          return null;
        }

        const durationInDays = Math.floor(
          (eventEndDate - eventStartDate) / (24 * 60 * 60 * 1000) + 1
        );

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/f6ab5e58-f27d-4ea2-afe4-56b661758331',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'TimelineEvents.js:65',message:'Event rendering with color',data:{eventId:event.id,eventTitle:event.title,eventColor:event.color,hasColor:!!event.color,willUseColor:event.color || '#8b5cf6'},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'COLOR_RENDER'})}).catch(()=>{});
        // #endregion

        return (
          <div
            key={event.id}
            onClick={(e) => {
              e.stopPropagation(); // Sürükleme işlemini engelle
              if (window.confirm(`\"${event.title}\" etkinliğini silmek istiyor musun?`)) {
                onDelete(event.id);
              }
            }}
            style={{
              position: "absolute",
              top: "5px", // Üstten biraz boşluk
              left: "5px", // Soldan biraz boşluk
              width: `calc(${durationInDays * 100}% - 10px)`, // Sağdan ve soldan 5px boşluk için 10px çıkarıldı
              height: `calc(100% - 10px)`, // Alttan ve üstten 5px boşluk için 10px çıkarıldı
              backgroundColor: event.color || '#8b5cf6',
              color: "#fff",
              fontSize: "14px",
              padding: "5px 10px",
              borderRadius: "6px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              zIndex: 10,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "1px solid #fff",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
            }}
          >
            {event.title}
          </div>
        );
      })}
    </div>
  );
};

export default TimelineEvents;
