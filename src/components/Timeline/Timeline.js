import React, { useState, useEffect } from "react";
import MasterHeader from "./MasterHeader";
import ResourcesHeader from "./ResourcesHeader";
import Resources from "./Resources";
import TimelineHeader from "./TimelineHeader";
import TimelineContent from "./TimelineContent";
import "./Timeline.css";
import EventTooltip from "./EventTooltip";
import { generateTimelineData } from "../../utils/timelineUtils";

const Timeline = ({
  resources,
  programDate = null,
  events = [],
  resourceSettings = {
    showIdAsName: false,
    isGrouped: true,
    isCollapsible: true,
  },
  indicatorOn = false,
  dropInfo,
  setDropInfo,

  masterHeaderView = true,          
  resourceHeaderContent = "Akfa Timeline",
    eventsDragOn = true,
  eventsExtendOn = true,
  createNewEventOn = true,
  onDragInfo,
  onExtendInfo,
  onCreateEventInfo,
  // İsteğe bağlı event tıklama callback'leri
  onEventClick,
  onEventRightClick,

  // Yatay scroll özelliği aç/kapa
  horizontalScrollOn = false, // Varsayılan false
}) => {
  // ---------------------------------------------------------
  // 1) timelineData oluştur (dates, monthHeaders vs.)
  // ---------------------------------------------------------
  const timelineData = generateTimelineData(2020, 2030); // 10 yıllık veri
  const { dates, monthHeaders } = timelineData;

  // ---------------------------------------------------------
  // 2) local state
  // ---------------------------------------------------------
  const [collapsedGroups, setCollapsedGroups] = useState({});
  const [selectedDate, setSelectedDate] = useState(() => {
    const date = programDate ? new Date(programDate) : new Date();
    date.setDate(date.getDate() - 3);
    return date;
  });
  const [localEvents, setLocalEvents] = useState(events);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  // dayRange = ekranda göstermeyi istediğimiz gün/hücre sayısı (ör. 30 gün)
  const [dayRange, setDayRange] = useState(30);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // ---------------------------------------------------------
  // 3) Sabit hücre genişliği (örneğin 56.95 px)
  //    Container genişliği = dayRange * cellWidth
  // ---------------------------------------------------------
  const cellWidth = 56.95; // her gün/hücre ~57 piksel
  const containerWidth = dayRange * cellWidth;
  // örneğin dayRange=30 => containerWidth=30*56.95=1708.5 px

  // ---------------------------------------------------------
  // 4) Event Tooltip logic
  // ---------------------------------------------------------
  const handleEventClick = (event, e) => {
    // Harici onEventClick callback'i varsa, önce onu tetikleyelim
    if (onEventClick) {
      onEventClick(event, e);
    }
    // Ardından tooltip göstermek istiyorsak:
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

  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ---------------------------------------------------------
  // 5) Tarih filtreleme => filteredDates
  // ---------------------------------------------------------
  const startIndex = dates.findIndex((d) => d.fullDate >= selectedDate);
  const endIndex = startIndex + dayRange;
  const filteredDates =
    startIndex !== -1 ? dates.slice(startIndex, Math.min(endIndex, dates.length)) : [];

  const today = programDate ? new Date(programDate) : new Date();
  const todayIndex = filteredDates.findIndex(
    (d) => new Date(d.fullDate).toDateString() === today.toDateString()
  );
  const totalDays = filteredDates.length;

  // ---------------------------------------------------------
  // 6) Grupları aç/kapa
  // ---------------------------------------------------------
  const toggleGroupCollapse = (groupName) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  // ---------------------------------------------------------
  // 7) Navigation fonksiyonları
  // ---------------------------------------------------------
  const handleToday = () => {
    const date = programDate ? new Date(programDate) : new Date();
    date.setDate(date.getDate() - 3);
    setSelectedDate(date);
  };

  const handleAdvance = () =>
    setSelectedDate((prev) => new Date(prev.getTime() + 5 * 24 * 60 * 60 * 1000));

  const handleRetreat = () =>
    setSelectedDate((prev) => new Date(prev.getTime() - 5 * 24 * 60 * 60 * 1000));

  const handleMonthRetreat = () =>
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });

  const handleMonthAdvance = () =>
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });

  // ---------------------------------------------------------
  // 8) Dark Mode
  // ---------------------------------------------------------
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  // ---------------------------------------------------------
  // 9) Ay başlıklarını filtrele
  // ---------------------------------------------------------
  const filteredMonthHeaders = monthHeaders
    .map((header) => {
      const adjustedStartIndex = Math.max(header.startIndex, startIndex);
      const adjustedEndIndex = Math.min(header.endIndex, endIndex - 1);
      return {
        ...header,
        startIndex: adjustedStartIndex,
        endIndex: adjustedEndIndex,
      };
    })
    .filter((header) => header.startIndex <= header.endIndex);

  // ---------------------------------------------------------
  // 10) Return
  // ---------------------------------------------------------
  return (
    <div className={`timeline-container ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Üst kısım: MasterHeader */}
      {masterHeaderView && (
      <div className="timeline-master-header">
        <MasterHeader
          onToday={handleToday}
          onAdvance={handleAdvance}
          onRetreat={handleRetreat}
          onMonthAdvance={handleMonthAdvance}
          onMonthRetreat={handleMonthRetreat}
          dayRange={dayRange}
          setDayRange={setDayRange}  // dayRange'ı burada user değiştirebilir
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
)}
      {/* Body: Sol kısım => Resources, Sağ kısım => timeline */}
      <div className="timeline-body">
        <div className="timeline-resources-container">
        <ResourcesHeader content={resourceHeaderContent} />
        <Resources
            groupedResources={resources}
            toggleGroupCollapse={toggleGroupCollapse}
            collapsedGroups={collapsedGroups}
            resourceSettings={resourceSettings}
          />
        </div>

        {/* 
          Dış kap => .timeline-scrollable-container
          horizontalScrollOn => overflow-x auto/hidden 
        */}
        <div
          className="timeline-scrollable-container"
          style={{
            overflowX: horizontalScrollOn ? "auto" : "hidden",
          }}
        >
          {/*
            İç kap => .timeline-header-content-wrapper
            Genişlik => dayRange * cellWidth px (eğer horizontalScrollOn=true)
            Yoksa 100% (scroll devre dışı)
          */}
          <div
            className="timeline-header-content-wrapper"
            style={{
              width: horizontalScrollOn ? `${containerWidth}px` : "100%",
            }}
          >
            <TimelineHeader
              dates={filteredDates}
              monthHeaders={filteredMonthHeaders}
            />

            <TimelineContent
              // Props
              groupedResources={resources}
              dates={filteredDates}
              collapsedGroups={collapsedGroups}
              events={localEvents}
              setEvents={setLocalEvents}
              onEventClick={handleEventClick}
              todayIndex={todayIndex}
              totalDays={totalDays}
              indicatorOn={indicatorOn}
              resourceSettings={resourceSettings}
              toggleGroupCollapse={toggleGroupCollapse}
              setDropInfo={setDropInfo}

              // Yeni prop'lar
              eventsDragOn={eventsDragOn}
              eventsExtendOn={eventsExtendOn}
              createNewEventOn={createNewEventOn}
              onDragInfo={onDragInfo}
              onExtendInfo={onExtendInfo}
              onCreateEventInfo={onCreateEventInfo}
              onEventRightClick={onEventRightClick}
            />

            {/* Tooltip */}
            {selectedEvent && (
              <EventTooltip
                event={selectedEvent}
                position={tooltipPosition}
                onClose={handleCloseTooltip}
                onDelete={(eventId) =>
                  setLocalEvents((prev) => prev.filter((e) => e.id !== eventId))
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
