// src/hooks/useEventSelection.js

import { useState, useCallback } from 'react';

/**
 * Event seçimi için hook
 * @param {Array} events - Event listesi
 * @returns {Object} - {selectedEvents, selectEvent, deselectEvent, toggleSelection, clearSelection, isSelected}
 */
export const useEventSelection = (events = []) => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const selectEvent = useCallback((eventId) => {
    setSelectedEvents(prev => {
      if (prev.includes(eventId)) {
        return prev;
      }
      return [...prev, eventId];
    });
  }, []);

  const deselectEvent = useCallback((eventId) => {
    setSelectedEvents(prev => prev.filter(id => id !== eventId));
  }, []);

  const toggleSelection = useCallback((eventId) => {
    setSelectedEvents(prev => {
      if (prev.includes(eventId)) {
        return prev.filter(id => id !== eventId);
      }
      return [...prev, eventId];
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedEvents([]);
  }, []);

  const selectRange = useCallback((startEventId, endEventId) => {
    const startIndex = events.findIndex(e => e.id === startEventId);
    const endIndex = events.findIndex(e => e.id === endEventId);
    
    if (startIndex === -1 || endIndex === -1) {
      return;
    }
    
    const minIndex = Math.min(startIndex, endIndex);
    const maxIndex = Math.max(startIndex, endIndex);
    const rangeEvents = events.slice(minIndex, maxIndex + 1).map(e => e.id);
    
    setSelectedEvents(prev => {
      const newSelection = [...prev];
      rangeEvents.forEach(id => {
        if (!newSelection.includes(id)) {
          newSelection.push(id);
        }
      });
      return newSelection;
    });
  }, [events]);

  const isSelected = useCallback((eventId) => {
    return selectedEvents.includes(eventId);
  }, [selectedEvents]);

  const selectAll = useCallback(() => {
    setSelectedEvents(events.map(e => e.id));
  }, [events]);

  return {
    selectedEvents,
    selectEvent,
    deselectEvent,
    toggleSelection,
    clearSelection,
    selectRange,
    isSelected,
    selectAll,
    selectedCount: selectedEvents.length,
  };
};

