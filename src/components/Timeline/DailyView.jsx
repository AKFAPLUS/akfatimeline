import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Timeline.css';

/**
 * Daily View Component
 * Seçili resource ve tarih için günlük saat bazlı timeline görünümü
 */
const DailyView = ({
  isOpen,
  onClose,
  resource,
  date,
  events = [],
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  themeType = 'light',
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [tempEvent, setTempEvent] = useState(null);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  // Saatleri oluştur (0-23)
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // O güne ait event'leri filtrele
  const dayEvents = events.filter(event => {
    if (!event.startDate || !date) return false;
    const eventDate = new Date(event.startDate);
    const selectedDate = new Date(date.fullDate || date);
    return (
      eventDate.getFullYear() === selectedDate.getFullYear() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getDate() === selectedDate.getDate() &&
      event.resourceId === resource?.id
    );
  });

  // Saat bazlı event pozisyonu hesapla
  const getEventPosition = (event) => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const startHour = startDate.getHours() + startDate.getMinutes() / 60;
    const endHour = endDate.getHours() + endDate.getMinutes() / 60;
    const duration = endHour - startHour;

    return {
      top: `${(startHour / 24) * 100}%`,
      height: `${(duration / 24) * 100}%`,
    };
  };

  // Timeline'a tıklandığında
  const handleTimelineClick = (e) => {
    if (!onEventCreate || !timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const clickedY = e.clientY - rect.top;
    const timelineHeight = rect.height;
    const totalMinutes = Math.max(0, Math.min((clickedY / timelineHeight) * (24 * 60), 24 * 60));
    
    const startHour = Math.floor(totalMinutes / 60);
    const startMinutes = Math.floor(totalMinutes % 60);
    
    const startDate = new Date(date.fullDate || date);
    startDate.setHours(startHour, startMinutes, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setTime(startDate.getTime() + 30 * 60 * 1000); // Varsayılan 30 dakika
    
    setIsCreating(true);
    setTempEvent({
      startDate,
      endDate,
    });
  };

  // Mouse hareketi ile event oluşturma
  const handleMouseMove = useCallback((e) => {
    if (!isCreating || !tempEvent || !timelineRef.current) return;
    
    const rect = timelineRef.current.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    const timelineHeight = rect.height;
    const totalMinutes = Math.max(0, Math.min((mouseY / timelineHeight) * (24 * 60), 24 * 60));
    
    const endHour = Math.floor(totalMinutes / 60);
    const endMinutes = Math.floor(totalMinutes % 60);
    
    const newEndDate = new Date(tempEvent.startDate);
    newEndDate.setHours(endHour, endMinutes, 0, 0);
    
    // Bitiş saati başlangıçtan önce olamaz
    if (newEndDate <= tempEvent.startDate) {
      newEndDate.setTime(tempEvent.startDate.getTime() + 15 * 60 * 1000); // En az 15 dakika
    }
    
    setTempEvent(prev => ({
      ...prev,
      endDate: newEndDate,
    }));
  }, [isCreating, tempEvent]);

  // Mouse bırakıldığında event oluştur
  const handleMouseUp = useCallback(() => {
    if (!isCreating || !tempEvent || !onEventCreate) return;
    
    // Minimum süre kontrolü (en az 15 dakika)
    const duration = tempEvent.endDate.getTime() - tempEvent.startDate.getTime();
    if (duration < 15 * 60 * 1000) {
      setIsCreating(false);
      setTempEvent(null);
      return; // Çok kısa, event oluşturma
    }
    
    const newEvent = {
      id: `daily-${Date.now()}`,
      title: 'Yeni Randevu',
      startDate: tempEvent.startDate,
      endDate: tempEvent.endDate,
      resourceId: resource?.id,
      isHourly: true, // Saatlik rezervasyon flag'i
    };
    
    onEventCreate(newEvent);
    setIsCreating(false);
    setTempEvent(null);
  }, [isCreating, tempEvent, onEventCreate, resource]);

  // Global mouse event listener'ları
  useEffect(() => {
    if (!isCreating) return;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isCreating, handleMouseMove, handleMouseUp]);

  // Tarih formatı
  const formatDate = (dateObj) => {
    if (!dateObj) return '';
    const d = new Date(dateObj.fullDate || dateObj);
    return d.toLocaleDateString('tr-TR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Saat formatı
  const formatHour = (hour) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  };

  if (!isOpen || !resource || !date) return null;

  return (
    <div 
      className={`daily-view-overlay ${themeType === 'dark' ? 'dark-mode' : ''}`}
      onClick={onClose}
    >
      <div 
        ref={containerRef}
        className="daily-view-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="daily-view-header">
          <div className="daily-view-header-content">
            <h2 className="daily-view-title">{resource.name || resource.id}</h2>
            <p className="daily-view-date">{formatDate(date)}</p>
          </div>
          <button className="daily-view-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Timeline Body */}
        <div className="daily-view-body">
          {/* Saatler (Sol Taraf) */}
          <div className="daily-view-hours">
            {hours.map(hour => (
              <div key={hour} className="daily-view-hour-label">
                {formatHour(hour)}
              </div>
            ))}
          </div>

          {/* Timeline Content */}
          <div 
            ref={timelineRef}
            className="daily-view-timeline"
            onClick={handleTimelineClick}
          >
            {/* Saat hücreleri */}
            {hours.map(hour => (
              <div
                key={hour}
                className="daily-view-hour-cell"
              />
            ))}
            
            {/* Event'ler (timeline üzerinde absolute position) */}
            {dayEvents.map(event => {
              const position = getEventPosition(event);
              return (
                <div
                  key={event.id}
                  className="daily-view-event"
                  style={position}
                  onClick={(e) => {
                    e.stopPropagation();
                    // Event detayları göster
                  }}
                >
                  <span className="daily-view-event-title">{event.title}</span>
                  <span className="daily-view-event-time">
                    {new Date(event.startDate).toLocaleTimeString('tr-TR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })} - {new Date(event.endDate).toLocaleTimeString('tr-TR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              );
            })}
            
            {/* Geçici event (oluşturuluyor) */}
            {isCreating && tempEvent && (
              <div
                className="daily-view-temp-event"
                style={getEventPosition({
                  startDate: tempEvent.startDate,
                  endDate: tempEvent.endDate,
                })}
              >
                Yeni Randevu
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyView;

