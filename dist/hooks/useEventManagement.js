import { useState, useCallback, useRef } from 'react';

/**
 * Event management hook - handles selection, undo/redo, copy/paste
 * @param {Array} initialEvents - Initial events array
 * @param {Function} onEventsChange - Callback when events change
 * @param {number} maxHistorySize - Maximum undo/redo history size
 */
const useEventManagement = (initialEvents = [], onEventsChange = null, maxHistorySize = 50) => {
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [copiedEvents, setCopiedEvents] = useState([]);
  
  // Undo/Redo history
  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const isUndoRedoRef = useRef(false);

  // Update events and add to history
  const updateEvents = useCallback((newEvents, addToHistory = true) => {
    setEvents(newEvents);
    
    if (onEventsChange) {
      onEventsChange(newEvents);
    }

    // Add to history (if not undo/redo operation)
    if (addToHistory && !isUndoRedoRef.current) {
      const history = historyRef.current;
      const historyIndex = historyIndexRef.current;
      
      // Remove any history after current index (if we're not at the end)
      const newHistory = history.slice(0, historyIndex + 1);
      
      // Add new state
      newHistory.push([...newEvents]);
      
      // Limit history size
      if (newHistory.length > maxHistorySize) {
        newHistory.shift();
      } else {
        historyIndexRef.current = newHistory.length - 1;
      }
      
      historyRef.current = newHistory;
    }
    
    isUndoRedoRef.current = false;
  }, [onEventsChange, maxHistorySize]);

  // Select event
  const selectEvent = useCallback((eventId, multiSelect = false) => {
    setSelectedEvents((prev) => {
      if (multiSelect) {
        // Toggle selection
        if (prev.includes(eventId)) {
          return prev.filter((id) => id !== eventId);
        } else {
          return [...prev, eventId];
        }
      } else {
        // Single selection
        return [eventId];
      }
    });
  }, []);

  // Clear selection
  const clearSelection = useCallback(() => {
    setSelectedEvents([]);
  }, []);

  // Delete selected events
  const deleteSelectedEvents = useCallback(() => {
    if (selectedEvents.length === 0) return;
    
    const newEvents = events.filter((event) => !selectedEvents.includes(event.id));
    updateEvents(newEvents);
    setSelectedEvents([]);
  }, [events, selectedEvents, updateEvents]);

  // Copy selected events
  const copySelectedEvents = useCallback(() => {
    if (selectedEvents.length === 0) return;
    
    const eventsToCopy = events.filter((event) => selectedEvents.includes(event.id));
    setCopiedEvents(eventsToCopy);
  }, [events, selectedEvents]);

  // Paste copied events
  const pasteEvents = useCallback((targetDate = null, targetResourceId = null) => {
    if (copiedEvents.length === 0) return;
    
    const newEvents = [...events];
    
    copiedEvents.forEach((event) => {
      const newEvent = {
        ...event,
        id: `${event.id}-copy-${Date.now()}-${Math.random()}`,
        startDate: targetDate 
          ? new Date(targetDate)
          : new Date(event.startDate),
        endDate: targetDate
          ? new Date(targetDate.getTime() + (new Date(event.endDate).getTime() - new Date(event.startDate).getTime()))
          : new Date(event.endDate),
        resourceId: targetResourceId || event.resourceId,
      };
      newEvents.push(newEvent);
    });
    
    updateEvents(newEvents);
  }, [events, copiedEvents, updateEvents]);

  // Undo
  const undo = useCallback(() => {
    const history = historyRef.current;
    const currentIndex = historyIndexRef.current;
    
    if (currentIndex > 0) {
      isUndoRedoRef.current = true;
      historyIndexRef.current = currentIndex - 1;
      const previousState = history[currentIndex - 1];
      setEvents([...previousState]);
      
      if (onEventsChange) {
        onEventsChange([...previousState]);
      }
    }
  }, [onEventsChange]);

  // Redo
  const redo = useCallback(() => {
    const history = historyRef.current;
    const currentIndex = historyIndexRef.current;
    
    if (currentIndex < history.length - 1) {
      isUndoRedoRef.current = true;
      historyIndexRef.current = currentIndex + 1;
      const nextState = history[currentIndex + 1];
      setEvents([...nextState]);
      
      if (onEventsChange) {
        onEventsChange([...nextState]);
      }
    }
  }, [onEventsChange]);

  // Initialize history
  if (historyRef.current.length === 0) {
    historyRef.current = [[...events]];
    historyIndexRef.current = 0;
  }

  return {
    events,
    setEvents: updateEvents,
    selectedEvents,
    selectEvent,
    clearSelection,
    deleteSelectedEvents,
    copySelectedEvents,
    pasteEvents,
    copiedEvents,
    undo,
    redo,
    canUndo: historyIndexRef.current > 0,
    canRedo: historyIndexRef.current < historyRef.current.length - 1,
  };
};

export default useEventManagement;

