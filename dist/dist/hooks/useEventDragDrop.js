import { useState } from "react";

const useEventDragDrop = (events, setEvents, setDropInfo) => {
  const [draggingEvent, setDraggingEvent] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [mode, setMode] = useState(null); // "drag" veya "extend"

  const handleDragStart = (event, eventId) => {
    if (mode === "extend") return; // Uzatma modundaysa taşıma işlemini başlatma

    event.stopPropagation();

    const eventElement = event.target;
    const eventRect = eventElement.getBoundingClientRect();
    const offset = event.clientX - eventRect.left;

    setDraggingEvent(eventId);
    setDragOffset(offset);
    setMode("drag"); // Modu taşıma olarak ayarla

    const draggedEvent = events.find((evt) => evt.id === eventId);
    if (draggedEvent) {
      console.log("Dragging Event Start:", draggedEvent.startDate);
      console.log("Dragging Event End:", draggedEvent.endDate);
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

    if (mode === "drag" && draggingEvent) {
      const draggedEvent = events.find((evt) => evt.id === draggingEvent);

      if (draggedEvent) {
        const duration = draggedEvent.endDate - draggedEvent.startDate;
        const cellWidth = event.target.offsetWidth || 30;
        const offsetDays = Math.floor(dragOffset / cellWidth);
        const newStartDate = new Date(targetDate.getTime() - offsetDays * 24 * 60 * 60 * 1000);
        const newEndDate = new Date(newStartDate.getTime() + duration);

        console.log("New Start Date:", newStartDate);
        console.log("New End Date:", newEndDate);

        setEvents((prevEvents) =>
          prevEvents.map((evt) =>
            evt.id === draggingEvent
              ? {
                  ...evt,
                  resourceId,
                  startDate: newStartDate,
                  endDate: newEndDate,
                }
              : evt
          )
        );

        if (setDropInfo) {
          setDropInfo({
            id: draggingEvent,
            newResourceId: resourceId,
            newStartDate,
            newEndDate,
          });
        }
      }
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
