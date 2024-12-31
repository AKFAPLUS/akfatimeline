import React, { useState, useRef, useEffect } from "react";
import { parseDate } from "../../utils/dateUtils";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useEventDragDrop from "../../hooks/useEventDragDrop";
import EventTooltip from "./EventTooltip";
import Indicator from "./Indicator";

const TimelineContent = ({ groupedResources, dates, collapsedGroups, events, setEvents,   onEventClick, todayIndex,   indicatorOn,   resourceSettings, 

}) => {
    
    const containerRef = useRef(null);
    const { isDragging, dragStart, dragEnd } = useDragAndDrop(events, setEvents);
    const totalDays = dates.length; // Toplam gün sayısı hesaplandı
    const { handleDragStart, handleDragOver, handleDrop, handleDragEnd } = useEventDragDrop(events, setEvents);

    console.log("events content:", events);
    console.log("Event Resource ID:", events.resourceId);
console.log("Current Resource ID:", groupedResources);

    // Tooltip için state
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
// Yeni Event oluşturma durumu ve geçici event
const [isCreating, setIsCreating] = useState(false);
const [tempEvent, setTempEvent] = useState(null);


const handleEventClick = (event, e) => {
    e.stopPropagation();
    const eventElement = e.currentTarget;
    if (eventElement) {
      const rect = eventElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,
      });
      setSelectedEvent(event); // Seçilen event'i state'e kaydediyoruz
    }
  };
  

// Mouse hareketiyle geçici event'in bitiş tarihini güncelle
const handleMouseMove = (e) => {
    if (isCreating && tempEvent) {
        const cell = document.elementFromPoint(e.clientX, e.clientY);

        // Hücre genişliğini dinamik olarak hesapla
        const cellWidth = cell?.offsetWidth || 30;

        const startX = tempEvent.startX || e.clientX; // İlk tıklamanın X pozisyonu
        const deltaX = e.clientX - startX; // Hareket edilen mesafe
        const daysToAdd = Math.max(1, Math.floor(deltaX / cellWidth)); // Gün hesaplama (en az 1 gün)

        // EndDate'i güncelle
        const newEndDate = new Date(tempEvent.startDate.getTime());
        newEndDate.setDate(newEndDate.getDate() + daysToAdd);

        // TempEvent'i güncelle ve yeni başlığı ayarla
        setTempEvent({
            ...tempEvent,
            endDate: newEndDate,
            startX: startX,
            title: `${daysToAdd} Gece`, // Gün sayısını ve "Gece" kelimesini başlığa ekle
        });

        console.log("Mouse X Delta:", deltaX);
        console.log("Days to Add:", daysToAdd);
        console.log("New End Date:", newEndDate);
        console.log("Cell Width:", cellWidth);
    }
};





// Mouse bırakıldığında geçici event'i kaydet
const handleMouseUp = () => {
    if (isCreating && tempEvent) {
        setEvents([...events, tempEvent]); // Geçici event kalıcı hale gelir
        setTempEvent(null);               // Geçici eventi sıfırla
        setIsCreating(false);             // Event oluşturmayı kapat
    }
};

    // Yeni event oluşturma fonksiyonu

const handleCellClick = (resourceId, date) => {
    const startDate = parseDate(date.fullDate);
    const newEvent = {
        id: Date.now(),
        title: "1 Gece",
        startDate,
        endDate: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
        resourceId,
        color: "#ff5722",
    };
    setTempEvent(newEvent); // Geçici event state'e ekle
    setIsCreating(true);    // Yeni bir event oluşturuldu
};

    // Event silme fonksiyonu
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter((event) => event.id !== eventId));
    };


    useEffect(() => {
        if (isCreating) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, );
    

    // Sürükleme sırasında seçilen hücreleri vurgulamak için fonksiyon
    const isCellSelected = (resourceId, date) => {
        if (!dragStart || !dragEnd) return false;
        if (resourceId !== dragStart.resourceId) return false;

        const startIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).getTime() === parseDate(dragStart.date).getTime()
        );
        const endIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).getTime() === parseDate(dragEnd.date).getTime()
        );
        const currentIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).getTime() === parseDate(date.fullDate).getTime()
        );

        if (startIndex === -1 || endIndex === -1 || currentIndex === -1) return false;

        return (
            currentIndex >= Math.min(startIndex, endIndex) &&
            currentIndex <= Math.max(startIndex, endIndex)
        );
    };

    const calculatePosition = (event, dates) => {
        const startDate = parseDate(event.startDate);
        const endDate = parseDate(event.endDate);
    
        const startIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).toDateString() === startDate.toDateString()
        );
        const endIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).toDateString() === endDate.toDateString()
        );
    
        const totalDays = dates.length;
    
        console.log("Total Days:", totalDays);
        // Eğer başlangıç ve bitiş timeline'ın tamamen dışında ise, görünmez olarak işaretle
        if (startIndex < 0 && endIndex < 0) {
            // Eğer hem başlangıç hem de bitiş timeline'ın sol tarafında ise, tamamen görünmez
            console.log("Event completely out of bounds on the left:", event.title);
            return {
                isVisible: false,
                left: 0,
                width: 0,
                isPartialStart: false,
                isPartialEnd: false,
            };
        }
        
        if (startIndex >= totalDays && endIndex >= totalDays) {
            // Eğer hem başlangıç hem de bitiş timeline'ın sağ tarafında ise, tamamen görünmez
            console.log("Event completely out of bounds on the right:", event.title);
            return {
                isVisible: false,
                left: 0,
                width: 0,
                isPartialStart: false,
                isPartialEnd: false,
            };
        }
        
    
        // Etkin Başlangıç ve Bitiş İndeksleri
        const effectiveStartIndex = Math.max(startIndex, 0); // Başlangıç en az 0 olmalı
        const effectiveEndIndex = Math.min(endIndex, totalDays - 1); // Bitiş en fazla toplam gün sayısı - 1 olmalı
    
        // Kesik başlangıç veya bitiş kontrolü
        const isPartialStart = startIndex < 0; // Başlangıç timeline dışında mı?
        const isPartialEnd = endIndex >= totalDays; // Bitiş timeline dışında mı?
    
        // Sol tarafın ekran dışında kalması durumu
        if (isPartialStart) {
            console.log("Event partially visible on the left:", event.title);
        }
    
        // Sağ tarafın ekran dışında kalması durumu
        if (isPartialEnd) {
            console.log("Event partially visible on the right:", event.title);
        }
    
        // Başlangıç ve bitiş pozisyonlarını ayrı ayrı hesapla
        const leftPercentage = ((effectiveStartIndex + (isPartialStart ? 0 : 0.5)) / totalDays) * 100;
        const rightPercentage = ((effectiveEndIndex + (isPartialEnd ? 1 : 0.5)) / totalDays) * 100;
    
        // Genişlik hesaplama
        const widthPercentage = rightPercentage - leftPercentage;
    
        // Sonuçları döndür
        return {
            isVisible: true,
            left: `${leftPercentage}%`,
            width: `${widthPercentage}%`,
            isPartialStart,
            isPartialEnd,
        };
    };
    
    
    
    
    
    
    

    useEffect(() => {
        if (isCreating) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
    
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, );
    



    const handleCloseTooltip = () => {
        setSelectedEvent(null);
    };

    const handleDelete = (eventId) => {
        handleDeleteEvent(eventId);
        handleCloseTooltip();
    };

    return (
        <div
            ref={containerRef}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                userSelect: isDragging ? "none" : "auto",
                position: "relative",
            }}
        >

{indicatorOn && <Indicator todayIndex={todayIndex} totalDays={totalDays} />}


{groupedResources.map((group, groupIndex) => (
  <div key={groupIndex} style={{ marginBottom: "0px" }}>
    {/* Grup Başlığı */}
    {resourceSettings.isGrouped && (
      <div style={{ display: "flex", marginTop: "-0.08rem" }}>
        {dates.map((dateObj, colIndex) => (
          <div
            key={`group-header-${groupIndex}-${colIndex}`}
            style={{
              flex: 1,
              height: "2.58rem",
              backgroundColor: "#4b5563",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
        ))}
      </div>
    )}

    {/* Kaynaklar */}
    {!collapsedGroups[group.groupName] &&
      group.resources.map((resource, rowIndex) => {
        const resourceEvents = events.filter(
          (event) => event.resourceId === resource.id
        );

        return (
          <div
            key={resource.id}
            style={{
              display: "flex",
              boxSizing: "border-box",
              position: "relative",
              height: "40px",
              border: "1px solid #ccc",
            }}
          >
            {/* Event'leri Render Et */}
            {resourceEvents.map((event) => {
              const { isVisible, left, width, isPartialStart, isPartialEnd } =
                calculatePosition(event, dates);

              if (!isVisible) return null;

              return (
                <div
                  key={event.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, event.id)} // Sürükleme başlat
                  onDragEnd={() => handleDragEnd()} // Sürükleme bitir
                  onClick={(e) => handleEventClick(event, e)} // Tıklama olayını burada tetikliyoruz
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: left,
                    width: width,
                    height: "80%",
                    backgroundColor: event.color || "#ff7f50",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "5px",
                    borderTopLeftRadius: isPartialStart ? "0px" : "20px",
                    borderBottomLeftRadius: isPartialStart ? "0px" : "20px",
                    borderTopRightRadius: isPartialEnd ? "0px" : "20px",
                    borderBottomRightRadius: isPartialEnd ? "0px" : "20px",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    zIndex: 10,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    border: "1px solid #fff",
                    cursor: "grab", // Sürükleme ikonu
                  }}
                >
                  {event.title}
                </div>
              );
            })}

{tempEvent && tempEvent.resourceId === resource.id && (
              <div
                style={{
                  position: "absolute",
                  ...calculatePosition(tempEvent, dates),
                  top: "5px",
                  height: "80%",
                  backgroundColor: tempEvent.color,
                  opacity: 0.7,
                  borderRadius: "20px",
                  zIndex: 9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                {tempEvent.title}
              </div>
            )}
            
            {/* Tarih Hücreleri */}
            {dates.map((dateObj, colIndex) => (
              <div
                key={`cell-${groupIndex}-${rowIndex}-${colIndex}`}
                data-date={JSON.stringify(dateObj)}
                data-resource-id={resource.id}
                onMouseDown={() => handleCellClick(resource.id, dateObj)}
                onDragOver={(e) => handleDragOver(e)} // Hücre üzerine sürükleme
                onDrop={(e) =>
                  handleDrop(e, resource.id, parseDate(dateObj.fullDate)) // `dateObj.fullDate`'yi doğru şekilde geçiyoruz
                } // Bırakma olayı
                style={{
                  flex: 1,
                  height: "100%",
                  position: "relative",
                  borderLeft: colIndex === 0 ? "1px solid #ccc" : "none",
                  borderRight: "1px solid #ccc",
                  backgroundColor: isCellSelected(resource.id, dateObj)
                    ? "rgba(59, 130, 246, 0.3)"
                    : "transparent",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        );
      })}
  </div>
))}





            {selectedEvent && (
                <EventTooltip
                    event={selectedEvent}
                    position={tooltipPosition}
                    onClose={handleCloseTooltip}
                    onDelete={() => handleDelete(selectedEvent.id)}
                />
            )}
        </div>
    );
};

export default TimelineContent;
