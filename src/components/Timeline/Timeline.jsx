import React, { useState, useEffect, useRef, useCallback } from "react";
import MasterHeader from "./MasterHeader.jsx";
import ResourcesHeader from "./ResourcesHeader.jsx";
import Resources from "./Resources.jsx";
import TimelineHeader from "./TimelineHeader.jsx";
import TimelineContent from "./TimelineContent.jsx";
import "./Timeline.css";
import EventTooltip from "./EventTooltip.jsx";
import EventDetailModal from "./EventDetailModal.jsx";
import DailyView from "./DailyView.jsx";
import { generateTimelineData } from "../../utils/timelineUtils";
import { useTouchGestures } from "../../hooks/useTouchGestures";
import useKeyboardShortcuts from "../../hooks/useKeyboardShortcuts";
import useEventManagement from "../../hooks/useEventManagement";

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
  dropInfo: externalDropInfo,
  setDropInfo: externalSetDropInfo,

  masterHeaderView = true,          
  resourceHeaderContent = "Akfa Timeline", // String veya React component olabilir
  
  // MasterHeader özelleştirme
  showDefaultHeaderButtons = true, // Varsayılan butonları göster/gizle
  customHeaderButtons = [], // Özel butonlar: [{ id, label, onClick, icon?, disabled?, className? }]
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

  dayRange = 30,
  setDayRange,
  themeType = "light", // Tema bilgisi varsayılan olarak light

  // Zoom özelliği
  zoomLevel = 1.0, // Zoom seviyesi (0.5 = %50, 1.0 = %100, 2.0 = %200)
  setZoomLevel, // Zoom seviyesini değiştiren fonksiyon
  zoomOn = true, // Zoom özelliğini aç/kapa
  minZoomLevel = 0.5, // Minimum zoom seviyesi
  maxZoomLevel = 3.0, // Maksimum zoom seviyesi
  zoomStep = 0.25, // Her zoom adımında değişecek miktar

  eventTooltipOn = true,
  tooltipComponent: TooltipComponent, // Özelleştirilebilir Tooltip bileşeni
  tempEventStyle = {},
  eventStyleResolver = () => ({}),
  indicatorDate = new Date(),
    onToday,
  onAdvance,
  onRetreat,
  onMonthAdvance,
  onMonthRetreat,
  
  // Event Alignment Mode
  eventAlignmentMode = "center", // "center" | "full" - center: gün ortasından başlar, full: gün başından başlar
  
  // Past Date Protection
  preventPastEvents = false, // Geçmiş tarihlere rezervasyon oluşturmayı engelle
  preventPastEventsDate = null, // Geçmiş tarih koruması için minimum tarih (programDate ve indicatorDate'ten bağımsız)
  
  // Weekend Highlighting
  highlightWeekends = false, // Hafta sonlarını farklı renkte göster
  
  // Cell Tooltip
  cellTooltipOn = false, // Cell tooltip'lerini aktif et
  cellTooltipResolver = null, // (resource, date) => tooltip content döndüren fonksiyon

  // Cell Context Menu
  cellContextMenuOn = false, // Cell context menu'yu aç/kapa
  cellContextMenuItems = [], // Context menu öğeleri: [{ id, label, icon, onClick, disabled, separator, danger, shortcut, tooltip, hidden }]
  onCellContextMenu = null, // Context menu açıldığında çağrılacak callback: (resource, date, event) => {}
  
  // Daily View
  dailyViewOn = true, // Daily view özelliğini aç/kapa
  
  // Event Icons & Badges
  eventIconsOn = false, // Event ikonlarını göster/gizle
  eventIconResolver = null, // (event) => icon type döndüren fonksiyon
  eventBadgesOn = false, // Event badge'lerini göster/gizle
  eventBadgeResolver = null, // (event) => { text, type, position } döndüren fonksiyon
  
  // Loading State
  isLoading = false, // Timeline yükleniyor mu?
  loadingType = 'spinner', // 'spinner', 'dots', 'pulse'
  
  // Event Management
  eventManagementOn = false, // Event yönetimi özelliklerini aktif et
  onEventDelete = null, // Event silme callback
  onEventUpdate = null, // Event güncelleme callback
  onEventCopy = null, // Event kopyalama callback
  onEventPaste = null, // Event yapıştırma callback
  
  // Keyboard Shortcuts
  keyboardShortcutsOn = false, // Keyboard shortcuts'ları aktif et
  keyboardShortcutsConfig = {
    onNavigateLeft: null,
    onNavigateRight: null,
    onNavigateUp: null,
    onNavigateDown: null,
    onDelete: null,
    onUndo: null,
    onRedo: null,
    onCopy: null,
    onPaste: null,
  },
  keyboardShortcutsKeyMap = {}, // Özelleştirilebilir tuş haritası
  
  // Disable Dates
  disableDates = null, // { mode: 'exclude' | 'include', dates: [], ranges: [] }
  // mode: 'exclude' = belirtilen tarihler disabled, 'include' = belirtilen tarihler enabled (diğerleri disabled)
  // dates: ['2025-01-15', '2025-01-20', ...] veya [Date, Date, ...] - Tekil tarihler
  // ranges: [{ start: '2025-01-15', end: '2025-01-20' }, ...] veya [{ start: Date, end: Date }, ...] - Tarih aralıkları
  
  // Auto Select Enabled Range
  autoSelectEnabledRange = false, // true = belirtilen range'lere tıklandığında otomatik olarak tüm range'i seç
  autoSelectRanges = null, // [{ start: '2025-12-31', end: '2026-01-05' }, ...] - Auto-select için range'ler (disableDates'ten bağımsız)
  // autoSelectRanges tanımlı olduğunda, tıklanan tarih bu range'lerden birinin içindeyse otomatik olarak tüm range seçilir
  // autoSelectRanges: null ise ve disableDates mode: 'include' ise, disableDates.ranges kullanılır (geriye dönük uyumluluk)
}) => {
  // ---------------------------------------------------------
  // 1) timelineData oluştur (dates, monthHeaders vs.)
  // ---------------------------------------------------------
  const timelineData = generateTimelineData(2020, 2030); // 10 yıllık veri
  const { dates, monthHeaders } = timelineData;
  const [selectedDate, setSelectedDate] = useState(() => {
    const date = programDate ? new Date(programDate) : new Date();
    date.setDate(date.getDate() - 3); // Program tarihinden 3 gün öncesini al
    return date;
  });
  
  // programDate prop'u değiştiğinde selectedDate'i güncelle
  useEffect(() => {
    if (programDate) {
      const date = new Date(programDate);
      date.setDate(date.getDate() - 3); // Program tarihinden 3 gün öncesini al
      setSelectedDate(date);
    }
  }, [programDate]);
  
  // onToday prop'u değiştiğinde (tarih string'i ise) selectedDate'i güncelle
  // Bu, customHeaderButtons'un onClick'inde tarih geçildiğinde kullanılır
  useEffect(() => {
    // onToday bir string (tarih) ise, o tarihe git
    if (onToday && typeof onToday === 'string') {
      const date = new Date(onToday);
      if (!isNaN(date.getTime())) {
        date.setDate(date.getDate() - 3); // Tarihten 3 gün öncesini al
        setSelectedDate(date);
      }
    }
  }, [onToday]);
  
  // ---------------------------------------------------------
  // 2) local state
  // ---------------------------------------------------------
  const [collapsedGroups, setCollapsedGroups] = useState({});
  
  // Internal zoom state - eğer setZoomLevel prop'u yoksa kullanılır
  const [internalZoomLevel, setInternalZoomLevel] = useState(zoomLevel);
  
  // Effective zoom level - prop varsa prop'u kullan, yoksa internal state'i kullan
  const effectiveZoomLevel = setZoomLevel ? zoomLevel : internalZoomLevel;
  const effectiveSetZoomLevel = setZoomLevel || setInternalZoomLevel;

  // Event Management
  const eventManagement = useEventManagement(
    events,
    (newEvents) => {
      setLocalEvents(newEvents);
      if (onEventUpdate) {
        onEventUpdate(newEvents);
      }
    }
  );

  const [localEvents, setLocalEvents] = useState(events);
  
  // setDropInfo - eğer external yoksa no-op fonksiyon kullan
  // Not: internalDropInfo state'i kaldırıldı çünkü dropInfo hiçbir yerde okunmuyor
  const setDropInfo = externalSetDropInfo || (() => {
    // No-op: Eğer parent'tan setDropInfo gelmezse, hiçbir şey yapma
    console.warn('[Timeline] setDropInfo called but no external handler provided');
  });
  
  // Update local events when events prop changes
  useEffect(() => {
    setLocalEvents(events);
  }, [events]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tooltipPosition] = useState({ top: 0, left: 0 });
  const [editingEvent, setEditingEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Daily View State
  const [dailyView, setDailyView] = useState({
    isOpen: false,
    resource: null,
    date: null,
  });

  // dayRange = ekranda göstermeyi istediğimiz gün/hücre sayısı (ör. 30 gün)

  const [isDarkMode, setIsDarkMode] = useState(themeType === "dark");

  useEffect(() => {
    if (themeType !== undefined) {
      setIsDarkMode(themeType === "dark");
    }
  }, [themeType]);

  // toggleDarkMode removed - not used
  // ---------------------------------------------------------
  // 3) Zoom seviyesine göre hücre genişliği
  //    Container genişliği = dayRange * cellWidth
  // ---------------------------------------------------------
  const baseCellWidth = 56.95; // Temel hücre genişliği (zoom = 1.0 için)
  const cellWidth = baseCellWidth * effectiveZoomLevel; // Zoom seviyesine göre hücre genişliği
  const containerWidth = dayRange * cellWidth;
  
  // Internal zoom state'i prop'tan gelen zoomLevel ile senkronize et
  useEffect(() => {
    if (setZoomLevel) {
      // Prop'tan gelen zoomLevel kullanılıyor, internal state'i güncelle
      setInternalZoomLevel(zoomLevel);
    }
  }, [zoomLevel, setZoomLevel]);
  
  // ---------------------------------------------------------
  // 4) Touch Gestures (Mobil desteği)
  // ---------------------------------------------------------
  const timelineContainerRef = useRef(null);
  const touchGestures = useTouchGestures({
    onSwipeLeft: () => {
      if (onAdvance) onAdvance();
    },
    onSwipeRight: () => {
      if (onRetreat) onRetreat();
    },
    enabled: true,
  });
  // örneğin dayRange=30 => containerWidth=30*56.95=1708.5 px

  // ---------------------------------------------------------
  // 4) Event Tooltip logic
  // ---------------------------------------------------------
  // handleEventClick removed - handled in TimelineContent

  const handleCloseTooltip = () => {
    setSelectedEvent(null);
  };

  // Event Management Handlers
  const handleEventDoubleClick = (event) => {
    if (eventManagementOn) {
      setEditingEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleEventRightClickInternal = (event, e) => {
    if (eventManagementOn) {
      e.preventDefault();
      eventManagement.selectEvent(event.id, false);
    }
    if (onEventRightClick) {
      onEventRightClick(event, e);
    }
  };

  const handleEventSave = (updatedEvent) => {
    if (eventManagementOn) {
      const newEvents = localEvents.map((ev) =>
        ev.id === updatedEvent.id ? updatedEvent : ev
      );
      eventManagement.setEvents(newEvents, true);
      if (onEventUpdate) {
        onEventUpdate(newEvents);
      }
    }
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleEventDelete = (eventId) => {
    if (eventManagementOn) {
      const newEvents = localEvents.filter((ev) => ev.id !== eventId);
      eventManagement.setEvents(newEvents, true);
      if (onEventDelete) {
        onEventDelete([eventId]);
      }
    }
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  // ---------------------------------------------------------
  // 5) Tarih filtreleme => filteredDates
  // ---------------------------------------------------------
  const startIndex = dates.findIndex((d) => d.fullDate >= selectedDate);
  const endIndex = startIndex + dayRange;
  const filteredDates =
    startIndex !== -1 ? dates.slice(startIndex, Math.min(endIndex, dates.length)) : [];

    const today = programDate ? new Date(programDate) : new Date();
    today.setDate(today.getDate() - 3);
    

    
    // Indicator için tarih index'ini bul
    const todayIndex = indicatorDate 
      ? filteredDates.findIndex((d) => {
          const dateStr = new Date(d.fullDate).toDateString();
          const indicatorStr = new Date(indicatorDate).toDateString();
          return dateStr === indicatorStr;
        })
      : -1;
    

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
  // ---------------------------------------------------------  const { dates, monthHeaders } = timelineData;



  const handleDateChange = (newDate) => {
    setSelectedDate(new Date(newDate));
  };
  
  // CustomHeaderButtons için tarih değiştirme fonksiyonu
  // Bu fonksiyon customHeaderButtons'un onClick'inde kullanılabilir
  const handleCustomDateChange = useCallback((dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        date.setDate(date.getDate() - 3); // Tarihten 3 gün öncesini al
        setSelectedDate(date);
      }
    }
  }, []);

  const handleToday = () => {
    // Bugünün tarihini al
    const today = new Date();
    today.setDate(today.getDate() - 3); // Bugünden 3 gün öncesini ayarla
    setSelectedDate(today);
    
    // onToday callback'i bir fonksiyon ise çağır
    // Eğer onToday bir string (tarih) ise veya başka bir değer ise, sadece setSelectedDate yeterli
    if (typeof onToday === 'function') {
      onToday();
    }
  };
  

  const handleAdvance = () => {
    setSelectedDate((prev) => new Date(prev.getTime() + 5 * 24 * 60 * 60 * 1000));
    // App.js'teki callback'i de çağır
    if (onAdvance) onAdvance();
  };

  const handleRetreat = () => {
    setSelectedDate((prev) => new Date(prev.getTime() - 5 * 24 * 60 * 60 * 1000));
    // App.js'teki callback'i de çağır
    if (onRetreat) onRetreat();
  };

  const handleMonthAdvance = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
    // App.js'teki callback'i de çağır
    if (onMonthAdvance) onMonthAdvance();
  };

  const handleMonthRetreat = () => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
    // App.js'teki callback'i de çağır
    if (onMonthRetreat) onMonthRetreat();
  };

  // ---------------------------------------------------------
  // 8) Dark Mode
  // ---------------------------------------------------------


  // ---------------------------------------------------------
  // 8.5) Zoom handlers
  // ---------------------------------------------------------
  const handleZoomIn = useCallback(() => {
    if (zoomOn) {
      effectiveSetZoomLevel((prev) => Math.min(maxZoomLevel, prev + zoomStep));
    }
  }, [zoomOn, maxZoomLevel, zoomStep, effectiveSetZoomLevel]);

  const handleZoomOut = useCallback(() => {
    if (zoomOn) {
      effectiveSetZoomLevel((prev) => Math.max(minZoomLevel, prev - zoomStep));
    }
  }, [zoomOn, minZoomLevel, zoomStep, effectiveSetZoomLevel]);

  // ---------------------------------------------------------
  // 8.6) Keyboard Shortcuts
  // ---------------------------------------------------------
  useKeyboardShortcuts({
    enabled: keyboardShortcutsOn,
    onNavigateLeft: keyboardShortcutsConfig.onNavigateLeft || onRetreat,
    onNavigateRight: keyboardShortcutsConfig.onNavigateRight || onAdvance,
    onNavigateUp: keyboardShortcutsConfig.onNavigateUp || (() => console.log("Navigate Up")),
    onNavigateDown: keyboardShortcutsConfig.onNavigateDown || (() => console.log("Navigate Down")),
    onDelete: keyboardShortcutsConfig.onDelete || (eventManagementOn ? eventManagement.deleteSelectedEvents : null),
    onUndo: keyboardShortcutsConfig.onUndo || (eventManagementOn ? eventManagement.undo : null),
    onRedo: keyboardShortcutsConfig.onRedo || (eventManagementOn ? eventManagement.redo : null),
    onCopy: keyboardShortcutsConfig.onCopy || (eventManagementOn ? eventManagement.copySelectedEvents : null),
    onPaste: keyboardShortcutsConfig.onPaste || null,
    onZoomIn: keyboardShortcutsConfig.onZoomIn || (zoomOn ? handleZoomIn : null),
    onZoomOut: keyboardShortcutsConfig.onZoomOut || (zoomOn ? handleZoomOut : null),
    keyMap: keyboardShortcutsKeyMap,
  });

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
    <div 
      className={`timeline-container ${isDarkMode ? "dark-mode" : ""}`}
      ref={timelineContainerRef}
      {...touchGestures}
    >
      {/* Üst kısım: MasterHeader */}
      {masterHeaderView && (
      <div className="timeline-master-header">
        <MasterHeader
          selectedDate={selectedDate} // Seçili tarihi gönder
          onDateSelect={handleDateChange}
          onToday={handleToday}
          onAdvance={handleAdvance}
          onRetreat={handleRetreat}
          onMonthAdvance={handleMonthAdvance}
          onMonthRetreat={handleMonthRetreat}
          dayRange={dayRange}
          setDayRange={setDayRange}
          zoomLevel={effectiveZoomLevel}
          setZoomLevel={effectiveSetZoomLevel}
          zoomOn={zoomOn}
          minZoomLevel={minZoomLevel}
          maxZoomLevel={maxZoomLevel}
          zoomStep={zoomStep}
          showDefaultHeaderButtons={showDefaultHeaderButtons}
          customButtons={customHeaderButtons}
          onCustomButtonClick={handleCustomDateChange}
        />
      </div>
)}
      {/* Body: Sol kısım => Resources, Sağ kısım => timeline */}
      <div className="timeline-body">
        <div className="timeline-resources-container"
        style={{ overflow: "hidden"}}>
        <ResourcesHeader content={resourceHeaderContent} />
        <Resources
            groupedResources={resources}
            toggleGroupCollapse={toggleGroupCollapse}
            collapsedGroups={collapsedGroups}
            resourceSettings={resourceSettings}
          />
        </div>


        <div
          className="timeline-scrollable-container"
          style={{
            overflowX: horizontalScrollOn ? "auto" : "hidden",
          }}
        >

          <div
            className="timeline-header-content-wrapper"
            style={{
              width: horizontalScrollOn ? `${containerWidth}px` : "100%",
            }}
          >
            <TimelineHeader
              dates={filteredDates}
              monthHeaders={filteredMonthHeaders}
              highlightWeekends={highlightWeekends}
            />

<TimelineContent
              groupedResources={resources}
              dates={filteredDates}
              collapsedGroups={collapsedGroups}
              events={localEvents}
              setEvents={setLocalEvents}
              onEventClick={onEventClick}
              onEventDoubleClick={eventManagementOn ? handleEventDoubleClick : null}
              onEventRightClick={eventManagementOn ? handleEventRightClickInternal : onEventRightClick}
              selectedEvents={eventManagementOn ? eventManagement.selectedEvents : []}
              onEventSelect={eventManagementOn ? eventManagement.selectEvent : null}
              todayIndex={todayIndex}
              indicatorOn={indicatorOn}
              resourceSettings={resourceSettings}
              toggleGroupCollapse={toggleGroupCollapse}
              setDropInfo={setDropInfo}
              eventsDragOn={eventsDragOn}
              eventsExtendOn={eventsExtendOn}
              createNewEventOn={createNewEventOn}
              onDragInfo={onDragInfo}
              onExtendInfo={onExtendInfo}
              onCreateEventInfo={onCreateEventInfo}
              eventTooltipOn={eventTooltipOn} // Tooltip kontrolü
              tooltipComponent={TooltipComponent} // Özelleştirilebilir Tooltip bileşeni
              tempEventStyle = {tempEventStyle}
              eventStyleResolver={eventStyleResolver}
              eventAlignmentMode={eventAlignmentMode}
              preventPastEvents={preventPastEvents}
              preventPastEventsDate={preventPastEventsDate || (preventPastEvents ? new Date().toISOString().split('T')[0] : null)}
              highlightWeekends={highlightWeekends}
              cellTooltipOn={cellTooltipOn}
              cellTooltipResolver={cellTooltipResolver}
              cellContextMenuOn={cellContextMenuOn}
              cellContextMenuItems={cellContextMenuItems.map(item => {
                // Daily timeline item'ını özel handle et
                if (item.id === 'daily-timeline' && dailyViewOn) {
                  return {
                    ...item,
                    onClick: (resource, date) => {
                      setDailyView({
                        isOpen: true,
                        resource,
                        date,
                      });
                      if (item.onClick) {
                        item.onClick(resource, date);
                      }
                    },
                  };
                }
                return item;
              })}
              onCellContextMenu={onCellContextMenu}
              eventIconsOn={eventIconsOn}
              eventIconResolver={eventIconResolver}
              eventBadgesOn={eventBadgesOn}
              eventBadgeResolver={eventBadgeResolver}
              isLoading={isLoading}
              loadingType={loadingType}
              disableDates={disableDates}
              autoSelectEnabledRange={autoSelectEnabledRange}
              autoSelectRanges={autoSelectRanges}

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
      
      {/* Event Detail Modal */}
      {eventManagementOn && (
        <EventDetailModal
          event={editingEvent}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingEvent(null);
          }}
          onSave={handleEventSave}
          onDelete={handleEventDelete}
          resources={resources.flatMap((group) => group.resources || [])}
        />
      )}
      
      {/* Daily View */}
      {dailyViewOn && (
        <DailyView
          isOpen={dailyView.isOpen}
          onClose={() => setDailyView({ isOpen: false, resource: null, date: null })}
          resource={dailyView.resource}
          date={dailyView.date}
          events={localEvents}
          onEventCreate={(newEvent) => {
            const updatedEvents = [...localEvents, newEvent];
            setLocalEvents(updatedEvents);
            if (onEventUpdate) {
              onEventUpdate(updatedEvents);
            }
          }}
          onEventUpdate={(updatedEvent) => {
            const updatedEvents = localEvents.map(e => 
              e.id === updatedEvent.id ? updatedEvent : e
            );
            setLocalEvents(updatedEvents);
            if (onEventUpdate) {
              onEventUpdate(updatedEvents);
            }
          }}
          onEventDelete={(eventId) => {
            const updatedEvents = localEvents.filter(e => e.id !== eventId);
            setLocalEvents(updatedEvents);
            if (onEventUpdate) {
              onEventUpdate(updatedEvents);
            }
          }}
          themeType={themeType}
        />
      )}
    </div>
  );
};

export default Timeline;

