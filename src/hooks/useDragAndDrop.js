// src/hooks/useDragAndDrop.js
import { useState } from "react";
import { parseDate } from "../utils/dateUtils"; // Named import

const useDragAndDrop = (initialEvents = []) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);
    const [events, setEvents] = useState(initialEvents);

    // Sürükleme başlat
    const startDrag = (resourceId, date) => {
        setIsDragging(true);
        setDragStart({ resourceId, date });
        setDragEnd({ resourceId, date });
    };

    // Sürükleme hareketi
    const updateDrag = (resourceId, date) => {
        if (!isDragging) return;
        setDragEnd({ resourceId, date });
    };

    // Sürükleme bitişi
    const endDrag = (dates) => {
        if (!isDragging || !dragStart || !dragEnd) return;
        if (dragStart.resourceId !== dragEnd.resourceId) {
            resetDrag();
            return;
        }

        const startDateIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).toDateString() === parseDate(dragStart.date.fullDate).toDateString()
        );
        const endDateIndex = dates.findIndex(
            (d) => parseDate(d.fullDate).toDateString() === parseDate(dragEnd.date.fullDate).toDateString()
        );

        if (startDateIndex === -1 || endDateIndex === -1) {
            resetDrag();
            return;
        }

        const sortedStartIndex = Math.min(startDateIndex, endDateIndex);
        const sortedEndIndex = Math.max(startDateIndex, endDateIndex);
        const startDate = dates[sortedStartIndex].fullDate;
        const endDate = dates[sortedEndIndex].fullDate;

        const newEvent = {
            id: Date.now(),
            title: "Yeni Etkinlik",
            resourceId: dragStart.resourceId,
            startDate: startDate,
            endDate: endDate,
            color: "#ff7f50",
        };

        setEvents((prev) => [...prev, newEvent]);
        resetDrag();
    };

    const resetDrag = () => {
        setIsDragging(false);
        setDragStart(null);
        setDragEnd(null);
    };

    return {
        events,
        isDragging,
        dragStart,
        dragEnd,
        startDrag,
        updateDrag,
        endDrag,
        setEvents,
    };
};

export default useDragAndDrop;
