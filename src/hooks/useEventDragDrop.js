import { useState } from "react";

const useEventDragDrop = (events, setEvents, setDropInfo, onDragInfo = null) => {
  const [draggingEvent, setDraggingEvent] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [mode, setMode] = useState(null); // "drag" veya "extend"

  const handleDragStart = (event, eventId) => {
    console.log("[useEventDragDrop] handleDragStart called:", { eventId, currentMode: mode });
    if (mode === "extend") {
      console.log("[useEventDragDrop] Extend mode active, skipping drag start");
      return; // Uzatma modundaysa taşıma işlemini başlatma
    }

    event.stopPropagation();

    const eventElement = event.target;
    const eventRect = eventElement.getBoundingClientRect();
    const offset = event.clientX - eventRect.left;

    setDraggingEvent(eventId);
    setDragOffset(offset);
    setMode("drag"); // Modu taşıma olarak ayarla

    console.log("[useEventDragDrop] Drag state set:", { eventId, offset, mode: "drag" });

    const draggedEvent = events.find((evt) => evt.id === eventId);
    if (draggedEvent) {
      console.log("[useEventDragDrop] Dragging Event Start:", draggedEvent.startDate);
      console.log("[useEventDragDrop] Dragging Event End:", draggedEvent.endDate);
    } else {
      console.warn("[useEventDragDrop] Dragged event not found:", eventId);
    }
  };

  const handleExtendStart = (event, eventId) => {
    event.stopPropagation();

    setDraggingEvent(eventId);
    setMode("extend"); // Modu uzatma olarak ayarla
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, resourceId, targetDate) => {
    event.preventDefault();
    
    // State'i önce kaydet - handleDragEnd'den önce çağrılabilir
    const currentMode = mode;
    const currentDraggingEvent = draggingEvent;
    const currentDragOffset = dragOffset;
    
    console.log("[useEventDragDrop] handleDrop called:", {
      currentMode,
      currentDraggingEvent,
      resourceId,
      targetDate,
      onDragInfo: !!onDragInfo,
      setDropInfo: !!setDropInfo,
    });
  
    if (currentMode === "drag" && currentDraggingEvent) {
      console.log("[useEventDragDrop] Drag mode detected, processing drop...");
      const draggedEvent = events.find((evt) => evt.id === currentDraggingEvent);
  
      if (draggedEvent) {
        console.log("[useEventDragDrop] Dragged event found:", draggedEvent);
        const duration = draggedEvent.endDate - draggedEvent.startDate;
        const cellWidth = event.target.offsetWidth || 30;
        const offsetDays = Math.floor(currentDragOffset / cellWidth);
        const newStartDate = new Date(targetDate.getTime() - offsetDays * 24 * 60 * 60 * 1000);
        const newEndDate = new Date(newStartDate.getTime() + duration);
  
        // Callback kontrolü ve loglama
        const dragInfo = {
          id: currentDraggingEvent,
          newResourceId: resourceId,
          newStartDate,
          newEndDate,
        };
        
        console.log("[useEventDragDrop] Drag info prepared:", dragInfo);
        
        if (setDropInfo) {
          console.log("[useEventDragDrop] Calling setDropInfo with:", dragInfo);
          setDropInfo(dragInfo);
        } else {
          console.warn("[useEventDragDrop] setDropInfo is not available");
        }
        
        // onDragInfo callback'ini çağır
        if (onDragInfo) {
          console.log("[useEventDragDrop] Calling onDragInfo callback with:", dragInfo);
          try {
            onDragInfo(dragInfo);
            console.log("[useEventDragDrop] onDragInfo callback executed successfully");
          } catch (error) {
            console.error("[useEventDragDrop] Error in onDragInfo callback:", error);
          }
        } else {
          console.warn("[useEventDragDrop] onDragInfo callback is not available");
        }
  
        // Event güncellemesi
        setEvents((prevEvents) =>
          prevEvents.map((evt) =>
            evt.id === currentDraggingEvent
              ? {
                  ...evt,
                  resourceId,
                  startDate: newStartDate,
                  endDate: newEndDate,
                }
              : evt
          )
        );
      } else {
        console.warn("[useEventDragDrop] Dragged event not found in events array");
      }
    } else {
      console.log("[useEventDragDrop] Not in drag mode or no dragging event:", {
        currentMode,
        currentDraggingEvent,
      });
    }
  
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };
  

  const handleExtend = (event, eventId, newEndDate) => {
    if (mode !== "extend" || draggingEvent !== eventId) return;

    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.id === eventId
          ? {
              ...evt,
              endDate: newEndDate,
            }
          : evt
      )
    );

    console.log("Extended Event ID:", eventId, "New End Date:", newEndDate);

    setDraggingEvent(null);
    setMode(null);
  };

  const handleDragEnd = () => {
    setDraggingEvent(null);
    setDragOffset(0);
    setMode(null);
  };

  return {
    handleDragStart,
    handleExtendStart,
    handleDragOver,
    handleDrop,
    handleExtend,
    handleDragEnd,
  };
};

export default useEventDragDrop;
