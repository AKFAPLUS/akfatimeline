import React, { useState, useRef, useEffect, useCallback } from "react";
import { parseDate, isDateDisabled } from "../../utils/dateUtils";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useEventDragDrop from "../../hooks/useEventDragDrop";
import Indicator from "./Indicator.jsx";
import EventIcon from "./EventIcon.jsx";
import EventBadge from "./EventBadge.jsx";
import ContextMenu from "./ContextMenu.jsx";
// import "./Timeline.css"; // varsayalım "Timeline.css" globalde import ediliyor

const TimelineContent = ({
  groupedResources,
  dates,
  collapsedGroups,
  events,
  setEvents,
  onEventClick,
  todayIndex,
  indicatorOn,
  resourceSettings,
  setDropInfo,

  
  eventsDragOn = true,
  eventsExtendOn = true,
  createNewEventOn = true,

  onDragInfo,
  onExtendInfo,
  onCreateEventInfo,
  onEventRightClick,
  onEventDoubleClick = null,
  selectedEvents = [],
  onEventSelect = null,

  eventTooltipOn = true, 
  tooltipComponent: TooltipComponent,
  tempEventStyle = {},

  eventStyleResolver = () => ({}),
  
  // Event Alignment Mode
  eventAlignmentMode = "center", // "center" | "full"
  
  // Past Date Protection
  preventPastEvents = false,
  minDate = null,
  
  // Weekend Highlighting
  highlightWeekends = false,
  
  // Cell Tooltip
  cellTooltipOn = false,
  cellTooltipResolver = null,
  
  // Event Icons & Badges
  eventIconsOn = false, // İkonları göster/gizle
  eventIconResolver = null, // (event) => icon type döndüren fonksiyon
  eventBadgesOn = false, // Badge'leri göster/gizle
  eventBadgeResolver = null, // (event) => { text, type, position } döndüren fonksiyon
  
  // Loading State
  isLoading = false,
  loadingType = 'spinner', // 'spinner', 'dots', 'pulse'

  // Context Menu
  cellContextMenuOn = false, // Cell context menu'yu aç/kapa
  cellContextMenuItems = [], // Context menu öğeleri
  onCellContextMenu = null, // Context menu açıldığında çağrılacak callback
  
  // Disable Dates
  disableDates = null, // { mode: 'exclude' | 'include', dates: [], ranges: [] }
}) => {
  // ------------------- HOOKS & STATE -------------------
  const containerRef = useRef(null);

  // Drag
  const { dragStart, dragEnd } = useDragAndDrop(events, setEvents);
  const { handleDragStart, handleDragOver, handleDrop, handleDragEnd } = useEventDragDrop(
    events,
    setEvents,
    setDropInfo, // Doğrudan setDropInfo'yu geçiriyoruz
    onDragInfo // onDragInfo callback'ini de geçiriyoruz
  );
  



  // Extend
  // extendEvent removed - not used (extend logic handled manually)
  const [mode, setMode] = useState(null); // null | "extend"
  const [extendingEvent, setExtendingEvent] = useState(null);
  const [originalEndDate, setOriginalEndDate] = useState(null);
  const [startMouseX, setStartMouseX] = useState(null);

  // Create new event
  const [isCreating, setIsCreating] = useState(false);
  const [tempEvent, setTempEvent] = useState(null);
  
  // Cell Tooltip State
  const [cellTooltip, setCellTooltip] = useState(null);
  const [cellTooltipPosition, setCellTooltipPosition] = useState({ top: 0, left: 0 });
  
  // Context Menu State
  const [contextMenu, setContextMenu] = useState({
    isOpen: false,
    position: null,
    resource: null,
    date: null,
  });

  // Tooltip
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const totalDays = dates.length;

  // ------------------- Tooltip Logic -------------------
  const handleEventClickInternal = (event, e) => {
    e.stopPropagation();
    // Eğer mod "extend" ise tooltip'i açma
    if (mode === "extend") {
      return;
    }
  
    // Multi-select için Ctrl+Click kontrolü
    if (onEventSelect && e.ctrlKey) {
      onEventSelect(event.id, true); // multiSelect = true
      return;
    }
  
    // Harici callback
    if (onEventClick) onEventClick(event, e);
  
    // Tooltip göstermek
    const eventElement = e.currentTarget;
    if (eventElement) {
      const rect = eventElement.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,
      });
      setSelectedEvent(event);
    }
  };

  const handleEventDoubleClickInternal = (event, e) => {
    e.stopPropagation();
    if (onEventDoubleClick) {
      onEventDoubleClick(event);
    }
  };
  

  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ------------------- Context Menu -------------------
  const handleCellContextMenu = useCallback((e, resource, dateObj) => {
    if (!cellContextMenuOn) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Resource'u bul
    const resourceObj = groupedResources
      .flatMap(group => group.resources || [])
      .find(r => r.id === resource.id || resource === r.id);
    
    // Mouse pozisyonunu doğrudan kullan (scroll offset'i dahil etme)
    setContextMenu({
      isOpen: true,
      position: { 
        x: e.clientX, 
        y: e.clientY 
      },
      resource: resourceObj || resource,
      date: dateObj,
    });
    
    if (onCellContextMenu) {
      onCellContextMenu(resourceObj || resource, dateObj, e);
    }
  }, [cellContextMenuOn, groupedResources, onCellContextMenu]);

  const handleCloseContextMenu = useCallback(() => {
    setContextMenu({
      isOpen: false,
      position: null,
      resource: null,
      date: null,
    });
  }, []);

  // ------------------- Create New Event -------------------
  const handleCellClick = (resourceId, date, e) => {
    if (!createNewEventOn) return; // create devrede değilse
    
    // Sağ tıklamayı engelle (button 2 = sağ tık, button 0 = sol tık)
    if (e.button === 2 || e.which === 3) {
      return;
    }

    const startDate = parseDate(date.fullDate);
    
    // Disabled tarih kontrolü - disabled hücrelerde event oluşturmayı engelle
    if (disableDates && isDateDisabled(startDate, disableDates)) {
      return;
    }
    
    // Geçmiş tarih kontrolü
    if (preventPastEvents && minDate) {
      const minDateObj = parseDate(minDate);
      // Sadece tarih karşılaştırması (saat bilgisi olmadan)
      const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
      
      if (startDateOnly < minDateOnly) {
        // Geçmiş tarihe tıklama engellendi
        return;
      }
    }

    const newEvent = {
      id: Date.now(),
      title: "1 Gece",
      startDate,
      endDate: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      resourceId,
      // Mouse başlangıç pozisyonunu kaydet
      startX: e?.clientX || 0,
      startCellIndex: dates.findIndex((d) => parseDate(d.fullDate).toDateString() === startDate.toDateString()),
      // color => var(--timeline-new-event-background-color) => => Sonra inline style yerine className
      color: "", // Bunu .css'te "var(--timeline-new-event-background-color)" atayabilirsin
    };
    setTempEvent(newEvent);
    setIsCreating(true);
  };

  useEffect(() => {
    if (!createNewEventOn) return;
    if (!isCreating) return;
    if (mode === "extend") {
      console.log(">>> 'extend' mode, skip new event creation");
      return;
    }

    const handleMouseMove = (e) => {
      if (!isCreating || !tempEvent) return;
      
      // Timeline container'ı bul
      const timelineContainer = containerRef.current?.closest('.timeline-scrollable-container');
      if (!timelineContainer) return;
      
      // Container'ın sol pozisyonunu al
      const containerRect = timelineContainer.getBoundingClientRect();
      const scrollLeft = timelineContainer.scrollLeft;
      
      // Mouse'un container içindeki pozisyonunu hesapla
      const mouseX = e.clientX - containerRect.left + scrollLeft;
      
      // Gerçek cell genişliğini hesapla (container genişliği / toplam gün sayısı)
      const containerWidth = timelineContainer.scrollWidth;
      const cellWidth = containerWidth / totalDays;
      
      // Hangi cell'in üzerinde olduğumuzu hesapla
      let currentCellIndex = Math.floor(mouseX / cellWidth);
      currentCellIndex = Math.max(0, Math.min(currentCellIndex, totalDays - 1)); // Sınırları kontrol et
      
      // Başlangıç cell index'ini al
      const startCellIndex = tempEvent.startCellIndex ?? 0;
      
      // Geçmiş tarih kontrolü - eğer aktifse, minimum tarihten önceki cell'lere gitmeyi engelle
      if (preventPastEvents && minDate && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const minDateObj = parseDate(minDate);
        const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
        
        // Eğer geçmiş tarihe gidiyorsak, minimum tarihe sabitle
        if (currentDateOnly < minDateOnly) {
          // Minimum tarihin cell index'ini bul
          const minDateIndex = dates.findIndex((d) => {
            const dDate = parseDate(d.fullDate);
            const dDateOnly = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
            return dDateOnly.getTime() === minDateOnly.getTime();
          });
          if (minDateIndex !== -1) {
            currentCellIndex = Math.max(startCellIndex, minDateIndex);
          } else {
            currentCellIndex = startCellIndex; // Minimum tarih bulunamazsa başlangıç pozisyonuna dön
          }
        }
      }
      
      // Disabled tarih kontrolü - disabled hücrelere event uzamasını engelle
      if (disableDates && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const isCurrentDisabled = isDateDisabled(currentDate, disableDates);
        
        if (isCurrentDisabled) {
          // Disabled hücreye geldiysek, son enabled hücreye kadar geri git
          // Başlangıçtan itibaren tarayarak son enabled hücreyi bul
          let lastEnabledIndex = startCellIndex;
          
          if (currentCellIndex > startCellIndex) {
            // İleri doğru gidiyorsak, başlangıçtan currentCellIndex'e kadar tarayalım
            for (let i = startCellIndex; i < currentCellIndex; i++) {
              if (dates[i]) {
                const checkDate = parseDate(dates[i].fullDate);
                if (!isDateDisabled(checkDate, disableDates)) {
                  lastEnabledIndex = i;
                } else {
                  // Disabled hücreye geldik, döngüyü kır
                  break;
                }
              }
            }
          } else {
            // Geri doğru gidiyorsak, currentCellIndex'ten başlangıca kadar tarayalım
            for (let i = currentCellIndex; i < startCellIndex; i++) {
              if (dates[i]) {
                const checkDate = parseDate(dates[i].fullDate);
                if (!isDateDisabled(checkDate, disableDates)) {
                  lastEnabledIndex = i;
                }
              }
            }
          }
          
          currentCellIndex = lastEnabledIndex;
        }
      }
      
      // Geçmiş tarih kontrolü - geçmiş tarihlere event uzamasını engelle (disabled kontrolünden sonra)
      if (preventPastEvents && minDate && dates[currentCellIndex]) {
        const currentDate = parseDate(dates[currentCellIndex].fullDate);
        const minDateObj = parseDate(minDate);
        const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
        const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
        
        // Eğer geçmiş tarihe gidiyorsak, son geçerli tarihe sabitle
        if (currentDateOnly < minDateOnly) {
          // Minimum tarihin cell index'ini bul
          const minDateIndex = dates.findIndex((d) => {
            const dDate = parseDate(d.fullDate);
            const dDateOnly = new Date(dDate.getFullYear(), dDate.getMonth(), dDate.getDate());
            return dDateOnly.getTime() === minDateOnly.getTime();
          });
          if (minDateIndex !== -1) {
            // Başlangıç tarihinden önceki bir tarihe gidiyorsak, minimum tarihe sabitle
            // Ama başlangıç tarihinden sonraki bir tarihe gidiyorsak, başlangıç tarihine sabitle
            if (currentCellIndex < startCellIndex) {
              currentCellIndex = Math.max(startCellIndex, minDateIndex);
            } else {
              currentCellIndex = Math.max(startCellIndex, minDateIndex);
            }
          } else {
            currentCellIndex = startCellIndex; // Minimum tarih bulunamazsa başlangıç pozisyonuna dön
          }
        }
      }
      
      // Kaç gün ekleneceğini hesapla (daha hassas)
      const daysToAdd = Math.max(1, Math.abs(currentCellIndex - startCellIndex) + 1);
      
      // Yeni bitiş tarihini hesapla
      const newEndDate = new Date(tempEvent.startDate.getTime());
      
      // Event alignment mode'a göre bitiş tarihini ayarla
      if (eventAlignmentMode === "full") {
        // Full mode: Son günün tamamı dahil, bitiş tarihi bir sonraki günün başlangıcı
        // Örnek: 1-5 Ocak seçilirse, bitiş tarihi 6 Ocak (5 Ocak'ın sonu = 6 Ocak'ın başı)
        newEndDate.setDate(newEndDate.getDate() + daysToAdd);
      } else {
        // Center mode: Gün ortasından gün ortasına, bitiş tarihi son günün ortası
        // Örnek: 1-5 Ocak seçilirse, bitiş tarihi 5 Ocak (gün ortası)
        newEndDate.setDate(newEndDate.getDate() + daysToAdd - 1); // -1 çünkü başlangıç günü dahil
      }

      setTempEvent({
        ...tempEvent,
        endDate: newEndDate,
        title: `${daysToAdd} Gece`,
      });
    };

    const handleMouseUp = () => {
      if (isCreating && tempEvent) {
        setEvents([...events, tempEvent]);
        if (onCreateEventInfo) {
          onCreateEventInfo(tempEvent);
        }
      }
      setTempEvent(null);
      setIsCreating(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [createNewEventOn, isCreating, mode, tempEvent, events, onCreateEventInfo, setEvents, totalDays, dates, preventPastEvents, minDate, disableDates]);

  // ------------------- Drag Logic -------------------
  const handleDragStartSafe = (e, eventId) => {
    console.log("[TimelineContent] handleDragStartSafe called:", { eventId, eventsDragOn });
    if (!eventsDragOn) {
      console.log("[TimelineContent] Events drag is disabled, preventing drag start");
      e.preventDefault();
      return;
    }
    console.log("[TimelineContent] Calling handleDragStart...");
    handleDragStart(e, eventId);
  };
  const handleDragEndSafe = (e) => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragEnd();
  

  };
  
  

  // ------------------- Extend Logic -------------------
  const handleMouseDownExtend = (mouseEvent, event) => {
    if (!eventsExtendOn) return;
    mouseEvent.stopPropagation();
    console.log(">>> Extend start ID:", event.id);
    setMode("extend");
    setExtendingEvent(event);
    setOriginalEndDate(event.endDate);
    setStartMouseX(mouseEvent.clientX);
  };

  const handleMouseMoveExtend = useCallback((e) => {
    if (mode !== "extend" || !extendingEvent) return;
    if (!eventsExtendOn) return;

    const currentMouseX = e.clientX;
    const deltaX = currentMouseX - (startMouseX ?? 0);
    const cellW = 30;
    const daysToAdd = Math.floor(deltaX / cellW);

    const newEndDate = new Date((originalEndDate ?? new Date()).getTime());
    newEndDate.setDate(newEndDate.getDate() + daysToAdd);


    setEvents((prev) =>
      prev.map((evt) => (evt.id === extendingEvent.id ? { ...evt, endDate: newEndDate } : evt))
    );
  }, [mode, extendingEvent, eventsExtendOn, originalEndDate, startMouseX, setEvents]);

  const handleMouseUpExtend = useCallback(() => {
    console.log(">>> Extend finished ID:", extendingEvent?.id);
    if (onExtendInfo && extendingEvent) {
      // callback
      const updatedEvent = events.find((ev) => ev.id === extendingEvent.id);
      if (updatedEvent) {
        onExtendInfo({
          eventId: extendingEvent.id,
          newEndDate: updatedEvent.endDate,
        });
      }
    }
  
    // Tooltip açılmasını engellemek için modun null olmasını geciktiriyoruz
    setTimeout(() => {
      setMode(null);
    }, 100); // 100ms gecikme
    setExtendingEvent(null);
    setOriginalEndDate(null);
    setStartMouseX(null);
  }, [extendingEvent, onExtendInfo, events]);
  

  useEffect(() => {
    if (mode === "extend") {
      const onMove = (e) => handleMouseMoveExtend(e);
      const onUp = () => handleMouseUpExtend();
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      return () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
    }
  }, [mode, handleMouseMoveExtend, handleMouseUpExtend]);

  // ------------------- Right Click (context) -------------------
  const handleRightClickEvent = (evt, reactEvent) => {
    reactEvent.preventDefault();
    if (onEventRightClick) onEventRightClick(evt, reactEvent);
  };

  // ------------------- Helper isCellSelected -------------------
  const isCellSelected = (resourceId, date) => {
    if (!dragStart || !dragEnd) return false;
    if (resourceId !== dragStart.resourceId) return false;

    const startIndex = dates.findIndex((d) => parseDate(d.fullDate).getTime() === parseDate(dragStart.date).getTime());
    const endIndex = dates.findIndex((d) => parseDate(d.fullDate).getTime() === parseDate(dragEnd.date).getTime());
    const currentIndex = dates.findIndex((d) => parseDate(d.fullDate).getTime() === parseDate(date.fullDate).getTime());

    if (startIndex === -1 || endIndex === -1 || currentIndex === -1) return false;

    return currentIndex >= Math.min(startIndex, endIndex) && currentIndex <= Math.max(startIndex, endIndex);
  };

  // ------------------- calculatePosition -------------------
  const calculatePosition = (ev, dateArr) => {
    const startDate = parseDate(ev.startDate);
    const endDate = parseDate(ev.endDate);

    const startIndex = dateArr.findIndex((d) => parseDate(d.fullDate).toDateString() === startDate.toDateString());
    const endIndex = dateArr.findIndex((d) => parseDate(d.fullDate).toDateString() === endDate.toDateString());

    const totalDays = dateArr.length;
    if (startIndex < 0 && endIndex < 0) {
      return { isVisible: false, left: 0, width: 0, isPartialStart: false, isPartialEnd: false };
    }
    if (startIndex >= totalDays && endIndex >= totalDays) {
      return { isVisible: false, left: 0, width: 0, isPartialStart: false, isPartialEnd: false };
    }

    const effectiveStartIndex = Math.max(startIndex, 0);
    const effectiveEndIndex = Math.min(endIndex, totalDays - 1);

    const isPartialStart = startIndex < 0;
    const isPartialEnd = endIndex >= totalDays;

    // Event alignment mode'a göre pozisyon hesaplama
    let leftPercentage, rightPercentage;
    
    if (eventAlignmentMode === "full") {
      // Full mode: Gün başından başlayıp gün sonunda bitiyor
      // Bitiş tarihi hariç (exclusive) - örn: 3 Ocak bitiş tarihi ise 2 Ocak'ın sonunda biter
      leftPercentage = (effectiveStartIndex / totalDays) * 100;
      // endIndex zaten bitiş tarihini gösteriyor, bu yüzden endIndex'in başlangıcı = bir önceki günün sonu
      rightPercentage = (effectiveEndIndex / totalDays) * 100;
    } else {
      // Center mode (varsayılan): Gün ortasından başlayıp gün ortasında bitiyor
      leftPercentage = ((effectiveStartIndex + (isPartialStart ? 0 : 0.5)) / totalDays) * 100;
      rightPercentage = ((effectiveEndIndex + (isPartialEnd ? 1 : 0.5)) / totalDays) * 100;
    }
    
    const widthPercentage = rightPercentage - leftPercentage;

    return {
      isVisible: true,
      left: `${leftPercentage}%`,
      width: `${widthPercentage}%`,
      isPartialStart,
      isPartialEnd,
    };
  };


  

  
  // ------------------- RENDER -------------------
  return (
    <>
      {/* Cell Tooltip */}
      {cellTooltip && cellTooltipOn && (
        <div
          className="cell-tooltip"
          style={{
            position: 'fixed',
            top: `${cellTooltipPosition.top - 152}px`, // Mouse'un hemen altında
            left: `${cellTooltipPosition.left - 168}px`, // Mouse'un hemen sağında
            pointerEvents: 'none',
            zIndex: 10002,
          }}
        >
          <div className="cell-tooltip-content">
            {typeof cellTooltip.content === 'string' 
              ? cellTooltip.content 
              : cellTooltip.content}
          </div>
          <div className="cell-tooltip-arrow"></div>
        </div>
      )}
      
      <div
        ref={containerRef}
        className="timeline-content-container" // Yeni class, stilini timeline.css'e ekleyebilirsin
      >
      {indicatorOn && (
        <Indicator todayIndex={todayIndex} totalDays={totalDays} />
      )}

{groupedResources.map((group, groupIndex) => (
  <div key={groupIndex} className="timeline-group-container">
    {/* Grup Başlığı */}
    {resourceSettings.isGrouped && (
      <div className="timeline-group-header-row">
        {dates.map((dateObj, colIndex) => {
          // Hafta sonu kontrolü
          let isWeekend = false;
          if (highlightWeekends) {
            const cellDate = parseDate(dateObj.fullDate);
            const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
            isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          }
          
          // Geçmiş tarih kontrolü
          let isPastDate = false;
          if (preventPastEvents && minDate) {
            const cellDate = parseDate(dateObj.fullDate);
            const minDateObj = parseDate(minDate);
            const cellDateOnly = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
            const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
            isPastDate = cellDateOnly < minDateOnly;
          }
          
          // Disabled tarih kontrolü
          const isDisabled = disableDates ? isDateDisabled(dateObj.fullDate, disableDates) : false;
          
          return (
            <div
              key={`group-header-${groupIndex}-${colIndex}`}
              className={`timeline-group-header-cell ${isWeekend ? "timeline-cell-weekend" : ""} ${isPastDate ? "timeline-cell-past" : ""} ${isDisabled ? "timeline-cell-disabled" : ""}`}
            ></div>
          );
        })}
      </div>
    )}

    {/* Kaynaklar */}
    {!collapsedGroups[group.groupName] &&
      group.resources.map((resource, rowIndex) => {
        // Saatlik rezervasyonları ayrı işle
        const hourlyEvents = events.filter((ev) => ev.resourceId === resource.id && ev.isHourly === true);
        const normalEvents = events.filter((ev) => ev.resourceId === resource.id && ev.isHourly !== true);
        
        // Saatlik rezervasyonları günlere göre grupla ve tek event'e dönüştür
        const hourlyEventsGrouped = {};
        hourlyEvents.forEach(event => {
          const eventDate = new Date(event.startDate);
          const dateKey = `${eventDate.getFullYear()}-${eventDate.getMonth()}-${eventDate.getDate()}`;
          
          if (!hourlyEventsGrouped[dateKey]) {
            hourlyEventsGrouped[dateKey] = {
              events: [],
              startDate: new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()),
              endDate: new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate() + 1),
            };
          }
          hourlyEventsGrouped[dateKey].events.push(event);
        });
        
        // Gruplanmış saatlik rezervasyonları tek event'e dönüştür
        const groupedHourlyEvents = Object.values(hourlyEventsGrouped).map(group => {
          const count = group.events.length;
          const totalMinutes = group.events.reduce((sum, ev) => {
            return sum + (new Date(ev.endDate).getTime() - new Date(ev.startDate).getTime()) / (1000 * 60);
          }, 0);
          const totalHours = Math.round(totalMinutes / 60 * 10) / 10; // 1 ondalık basamak
          
          return {
            id: `hourly-group-${group.startDate.getTime()}`,
            title: count > 1 ? `${count} Saatlik Rezervasyon (${totalHours} saat)` : `${totalHours} Saatlik Rezervasyon`,
            startDate: group.startDate,
            endDate: group.endDate,
            resourceId: resource.id,
            isHourly: true,
            isGrouped: true,
            hourlyCount: count,
            hourlyTotalHours: totalHours,
          };
        });
        
        // Normal event'ler ve gruplanmış saatlik event'leri birleştir
        const resourceEvents = [...normalEvents, ...groupedHourlyEvents];

        return (
          <div key={resource.id} className="timeline-resource-row">
            {/* Her resource row'u */}
            {resourceEvents.map((event) => {
              const { isVisible, left, width, isPartialStart, isPartialEnd } =
                calculatePosition(event, dates);
              if (!isVisible) return null;

              // Kullanıcıdan gelen stil
              const eventStyle = eventStyleResolver ? eventStyleResolver(event) : {};
              
              // Icon ve Badge bilgilerini al
              const iconType = eventIconsOn && eventIconResolver ? eventIconResolver(event) : null;
              const badgeInfo = eventBadgesOn && eventBadgeResolver ? eventBadgeResolver(event) : null;
              
              // Saatlik rezervasyon kontrolü
              const isHourly = event.isHourly === true;

              // Event color'ı al (event.color varsa kullan, yoksa eventStyle'den al, yoksa varsayılan)
              const eventColor = event.color || eventStyle?.backgroundColor || '#8b5cf6';

              return (
                <div
                  key={event.id}
                  className={`timeline-event timeline-event-enter ${selectedEvents.includes(event.id) ? "selected" : ""} ${isHourly ? "timeline-event-hourly" : ""}`}
                  draggable={false}
                  onContextMenu={(reactEvent) => handleRightClickEvent(event, reactEvent)}
                  onClick={(ev) => handleEventClickInternal(event, ev)}
                  onDoubleClick={(e) => handleEventDoubleClickInternal(event, e)}
                  style={{
                    left,
                    width: width, // Hesaplanan genişliği kullan
                    maxWidth: isHourly ? width : "none", // Saatlik rezervasyonlar için max genişlik sınırlaması
                    top: "5px",
                    borderTopLeftRadius: isPartialStart ? "0px" : "20px",
                    borderBottomLeftRadius: isPartialStart ? "0px" : "20px",
                    borderTopRightRadius: isPartialEnd ? "0px" : "20px",
                    borderBottomRightRadius: isPartialEnd ? "0px" : "20px",
                    cursor: isHourly ? "default" : (mode === "extend" ? "col-resize" : "default"),
                    pointerEvents: isHourly ? "none" : "auto", // Saatlik rezervasyonlarda tıklama/etkileşim yok
                    ...eventStyle, // Kullanıcı tarafından tanımlanan stiller
                    backgroundColor: eventStyle?.backgroundColor || eventColor, // Event color'ı kullan (eventStyle.backgroundColor varsa onu kullan, yoksa eventColor)
                  }}
                >
                  {/* Event Badge */}
                  {badgeInfo && (
                    <EventBadge
                      text={badgeInfo.text}
                      type={badgeInfo.type || 'default'}
                      position={badgeInfo.position || 'top-right'}
                      style={badgeInfo.style}
                    />
                  )}
                  
                  {/* Drag Handle - Sol Taraf - Saatlik rezervasyonlarda gösterilmez */}
                  {eventsDragOn && mode !== "extend" && !isHourly && (
                    <div
                      className="timeline-event-drag-handle"
                      draggable={eventsDragOn}
                      onDragStart={(e) => {
                        if (mode === "extend") {
                          e.preventDefault();
                          return;
                        }
                        console.log("[TimelineContent] Event drag start:", event.id);
                        handleDragStart(e, event.id);
                        e.stopPropagation();
                        
                        // Tüm event elementini drag image olarak ayarla
                        const eventElement = e.currentTarget.closest('.timeline-event');
                        if (eventElement) {
                          // Mouse pozisyonunu event elementine göre hesapla
                          const eventRect = eventElement.getBoundingClientRect();
                          const handleRect = e.currentTarget.getBoundingClientRect();
                          const offsetX = handleRect.left - eventRect.left + (handleRect.width / 2);
                          const offsetY = handleRect.top - eventRect.top + (handleRect.height / 2);
                          
                          // Geçici bir görüntü oluştur
                          const dragImage = eventElement.cloneNode(true);
                          dragImage.style.position = 'absolute';
                          dragImage.style.top = '-1000px';
                          dragImage.style.left = '-1000px';
                          dragImage.style.opacity = '0.8';
                          dragImage.style.pointerEvents = 'none';
                          dragImage.style.transform = 'none';
                          dragImage.style.width = eventRect.width + 'px';
                          document.body.appendChild(dragImage);
                          
                          // Drag image'i ayarla
                          e.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
                          
                          // Geçici elementi temizle
                          setTimeout(() => {
                            if (document.body.contains(dragImage)) {
                              document.body.removeChild(dragImage);
                            }
                          }, 0);
                        }
                        
                        handleDragStartSafe(e, event.id);
                      }}
                      onDragEnd={(e) => {
                        if (mode === "extend") {
                          e.preventDefault();
                          return;
                        }
                        handleDragEndSafe(e);
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                    ></div>
                  )}
                  {/* Event Icon - Title'dan önce */}
                  {iconType && <EventIcon type={iconType} />}
                  <span className="timeline-event-title">
                    {event.title}
                  </span>
                  {/* Extend Handle - Saatlik rezervasyonlarda gösterilmez */}
                  {eventsExtendOn && !isHourly && (
                    <div
                      className="timeline-event-extend-handle"
                      onMouseDown={(mouseEvent) => {
                        mouseEvent.stopPropagation();
                        handleMouseDownExtend(mouseEvent, event);
                      }}
                    ></div>
                  )}
                </div>
              );
            })}

            {/* Geçici (yeni) event */}
            {tempEvent && tempEvent.resourceId === resource.id && (
              <div
                className="timeline-temp-event"
                style={{
                  ...calculatePosition(tempEvent, dates),
                  ...tempEventStyle, // Kullanıcının geçtiği stiller
                }}
              >
                {tempEvent.title}
              </div>
            )}

            {/* Tarih Hücreleri */}
            {dates.map((dateObj, colIndex) => {
              // Geçmiş tarih kontrolü
              let isPastDate = false;
              if (preventPastEvents && minDate) {
                const cellDate = parseDate(dateObj.fullDate);
                const minDateObj = parseDate(minDate);
                const cellDateOnly = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
                const minDateOnly = new Date(minDateObj.getFullYear(), minDateObj.getMonth(), minDateObj.getDate());
                isPastDate = cellDateOnly < minDateOnly;
              }
              
              // Hafta sonu kontrolü
              let isWeekend = false;
              if (highlightWeekends) {
                const cellDate = parseDate(dateObj.fullDate);
                const dayOfWeek = cellDate.getDay(); // 0 = Pazar, 6 = Cumartesi
                isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              }
              
              // Disabled tarih kontrolü
              const isDisabled = disableDates ? isDateDisabled(dateObj.fullDate, disableDates) : false;
              
              return (
              <div
                key={`cell-${groupIndex}-${rowIndex}-${colIndex}`}
                className={`timeline-cell ${
                  isCellSelected(resource.id, dateObj) ? "selected" : ""
                } ${isPastDate ? "timeline-cell-past" : ""} ${
                  isWeekend ? "timeline-cell-weekend" : ""
                } ${isDisabled ? "timeline-cell-disabled" : ""}`}
                data-date={JSON.stringify(dateObj)}
                data-resource-id={resource.id}
                onMouseDown={(e) => {
                  // Sağ tıklamayı engelle (sadece sol tık ile event oluştur)
                  if (e.button === 2 || e.which === 3) {
                    return;
                  }
                  // Disabled veya geçmiş tarihe tıklamayı engelle
                  if (!isPastDate && !isDisabled) {
                    handleCellClick(resource.id, dateObj, e);
                  }
                }}
                onContextMenu={(e) => {
                  // Disabled veya geçmiş tarih hücrelerde context menu'yu engelle
                  if (isDisabled || isPastDate) {
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                  }
                  e.preventDefault(); // Varsayılan context menu'yu engelle
                  e.stopPropagation(); // Event bubbling'i durdur
                  if (cellContextMenuOn) {
                    handleCellContextMenu(e, resource, dateObj);
                  }
                }}
                onMouseEnter={(e) => {
                  if (cellTooltipOn && cellTooltipResolver) {
                    const tooltipContent = cellTooltipResolver(resource, dateObj);
                    if (tooltipContent) {
                      // Mouse pozisyonunu kullan
                      setCellTooltip({
                        content: tooltipContent,
                        resource: resource,
                        date: dateObj,
                      });
                      setCellTooltipPosition({
                        top: e.clientY,
                        left: e.clientX,
                      });
                    }
                  }
                }}
                onMouseMove={(e) => {
                  if (cellTooltipOn && cellTooltip) {
                    // Mouse hareket ettikçe tooltip'i takip et
                    setCellTooltipPosition({
                      top: e.clientY,
                      left: e.clientX,
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (cellTooltipOn) {
                    setCellTooltip(null);
                  }
                }}
                onDragOver={(e) => {
                  // Disabled veya geçmiş tarih hücrelerde drag&drop'u engelle
                  if (isDisabled || isPastDate) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'none';
                    return false;
                  }
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("[TimelineContent] onDragOver called for resource:", resource.id);
                  handleDragOver(e);
                }}
                onDrop={(e) => {
                  // Disabled veya geçmiş tarih hücrelerde drop'u engelle
                  if (isDisabled || isPastDate) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'none';
                    return false;
                  }
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("[TimelineContent] onDrop called for resource:", resource.id, "date:", dateObj.fullDate);
                  handleDrop(e, resource.id, parseDate(dateObj.fullDate));
                }}
              ></div>
              );
            })}
          </div>
        );
      })}
  </div>
))}


      {/* Tooltip vb. */}
      {eventTooltipOn && selectedEvent && TooltipComponent && mode !== "extend" && (
        <TooltipComponent
          event={selectedEvent}
          position={tooltipPosition}
          onClose={handleCloseTooltip}
        />
      )}

      {/* Context Menu */}
      {cellContextMenuOn && (
        <ContextMenu
          isOpen={contextMenu.isOpen}
          position={contextMenu.position}
          onClose={handleCloseContextMenu}
          menuItems={cellContextMenuItems}
          resource={contextMenu.resource}
          date={contextMenu.date}
        />
      )}
    </div>
    </>
  );
};

export default TimelineContent;

