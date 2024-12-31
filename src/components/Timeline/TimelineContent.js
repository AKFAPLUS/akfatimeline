import React, { useState, useRef, useEffect } from "react";
import { parseDate } from "../../utils/dateUtils";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useEventDragDrop from "../../hooks/useEventDragDrop";
import Indicator from "./Indicator";
import useExtendEvent from "../../hooks/useExtendEvent";
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

  // Yeni prop'lar
  eventsDragOn = true,
  eventsExtendOn = true,
  createNewEventOn = true,
  onDragInfo,
  onExtendInfo,
  onCreateEventInfo,
  onEventRightClick,
}) => {
  // ------------------- HOOKS & STATE -------------------
  const containerRef = useRef(null);

  // Drag
  const { isDragging, dragStart, dragEnd } = useDragAndDrop(events, setEvents);
  const { handleDragStart, handleDragOver, handleDrop, handleDragEnd } =
    useEventDragDrop(events, setEvents, setDropInfo);

  // Extend
  const { extendEvent } = useExtendEvent(events, setEvents);
  const [mode, setMode] = useState(null); // null | "extend"
  const [extendingEvent, setExtendingEvent] = useState(null);
  const [originalEndDate, setOriginalEndDate] = useState(null);
  const [startMouseX, setStartMouseX] = useState(null);

  // Create new event
  const [isCreating, setIsCreating] = useState(false);
  const [tempEvent, setTempEvent] = useState(null);

  // Tooltip
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const totalDays = dates.length;

  // ------------------- Tooltip Logic -------------------
  const handleEventClickInternal = (event, e) => {
    e.stopPropagation();
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

  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // ------------------- Create New Event -------------------
  const handleCellClick = (resourceId, date) => {
    if (!createNewEventOn) return; // create devrede değilse

    const startDate = parseDate(date.fullDate);
    const newEvent = {
      id: Date.now(),
      title: "1 Gece",
      startDate,
      endDate: new Date(startDate.getTime() + 24 * 60 * 60 * 1000),
      resourceId,
      // color => var(--timeline-new-event-background-color) => => Sonra inline style yerine className
      color: "", // Bunu .css’te "var(--timeline-new-event-background-color)" atayabilirsin
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
      const cell = document.elementFromPoint(e.clientX, e.clientY);
      const cellW = cell?.offsetWidth || 30;

      const startX = tempEvent.startX || e.clientX;
      const deltaX = e.clientX - startX;
      const daysToAdd = Math.max(1, Math.floor(deltaX / cellW));

      const newEndDate = new Date(tempEvent.startDate.getTime());
      newEndDate.setDate(newEndDate.getDate() + daysToAdd);

      setTempEvent({
        ...tempEvent,
        endDate: newEndDate,
        startX: startX,
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
  }, [createNewEventOn, isCreating, mode, tempEvent, events, onCreateEventInfo, setEvents]);

  // ------------------- Drag Logic -------------------
  const handleDragStartSafe = (e, eventId) => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragStart(e, eventId);
  };
  const handleDragEndSafe = (e) => {
    if (!eventsDragOn) {
      e.preventDefault();
      return;
    }
    handleDragEnd();
    // onDragInfo(...) => if needed
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

  const handleMouseMoveExtend = (e) => {
    if (mode !== "extend" || !extendingEvent) return;
    if (!eventsExtendOn) return;

    const currentMouseX = e.clientX;
    const deltaX = currentMouseX - (startMouseX ?? 0);
    const cellW = 30;
    const daysToAdd = Math.floor(deltaX / cellW);

    const newEndDate = new Date((originalEndDate ?? new Date()).getTime());
    newEndDate.setDate(newEndDate.getDate() + daysToAdd);

    console.log(">>> Extending ID:", extendingEvent.id, "=>", newEndDate);

    setEvents((prev) =>
      prev.map((evt) => (evt.id === extendingEvent.id ? { ...evt, endDate: newEndDate } : evt))
    );
  };

  const handleMouseUpExtend = () => {
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
    setMode(null);
    setExtendingEvent(null);
    setOriginalEndDate(null);
    setStartMouseX(null);
  };

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
  }, [mode, extendingEvent, eventsExtendOn, originalEndDate, startMouseX]);

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

    const leftPercentage = ((effectiveStartIndex + (isPartialStart ? 0 : 0.5)) / totalDays) * 100;
    const rightPercentage = ((effectiveEndIndex + (isPartialEnd ? 1 : 0.5)) / totalDays) * 100;
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
              {dates.map((dateObj, colIndex) => (
                <div
                  key={`group-header-${groupIndex}-${colIndex}`}
                  className="timeline-group-header-cell"
                ></div>
              ))}
            </div>
          )}

          {/* Kaynaklar */}
          {!collapsedGroups[group.groupName] &&
            group.resources.map((resource, rowIndex) => {
              const resourceEvents = events.filter((ev) => ev.resourceId === resource.id);

              return (
                <div key={resource.id} className="timeline-resource-row">
                  {/* Her resource row'u */}
                  {resourceEvents.map((event) => {
                    const { isVisible, left, width, isPartialStart, isPartialEnd } =
                      calculatePosition(event, dates);
                    if (!isVisible) return null;

                    return (
                      <div
                        key={event.id}
                        className="timeline-event"
                        draggable={mode !== "extend" && eventsDragOn}
                        onDragStart={(e) => {
                          if (mode === "extend") {
                            e.preventDefault();
                            return;
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
                        onContextMenu={(reactEvent) => handleRightClickEvent(event, reactEvent)}
                        onClick={(ev) => handleEventClickInternal(event, ev)}
                        style={{
                          left,
                          width,
                          top: "5px",
                          // color from var(--timeline-event-text-color)
                          // background from event.color or var(...) => if event.color empty, fallback in CSS
                          borderTopLeftRadius: isPartialStart ? "0px" : "20px",
                          borderBottomLeftRadius: isPartialStart ? "0px" : "20px",
                          borderTopRightRadius: isPartialEnd ? "0px" : "20px",
                          borderBottomRightRadius: isPartialEnd ? "0px" : "20px",
                          cursor: mode === "extend" ? "col-resize" : "grab",
                        }}
                      >
                        {event.title}
                        {eventsExtendOn && (
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
                        top: "5px",
                      }}
                    >
                      {tempEvent.title}
                    </div>
                  )}

                  {/* Tarih Hücreleri */}
                  {dates.map((dateObj, colIndex) => (
                    <div
                      key={`cell-${groupIndex}-${rowIndex}-${colIndex}`}
                      className={`timeline-cell ${
                        isCellSelected(resource.id, dateObj) ? "selected" : ""
                      }`}
                      data-date={JSON.stringify(dateObj)}
                      data-resource-id={resource.id}
                      onMouseDown={() => handleCellClick(resource.id, dateObj)}
                      onDragOver={(e) => handleDragOver(e)}
                      onDrop={(e) =>
                        handleDrop(e, resource.id, parseDate(dateObj.fullDate))
                      }
                    ></div>
                  ))}
                </div>
              );
            })}
        </div>
      ))}

      {/* Tooltip vb. */}
      {selectedEvent && (
        // "timeline-event-tooltip" gibi className tanımlanabilir
        // eğer custom css istenirse
        <div
          style={{
            position: "absolute",
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            // ...
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px",
            borderRadius: "4px",
            zIndex: 999,
          }}
        >
          <button onClick={() => handleCloseTooltip()}>X</button>
          {/* Content */}
          {selectedEvent.title}
        </div>
      )}
    </div>
  );
};

export default TimelineContent;
