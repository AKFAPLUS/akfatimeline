import React, { useState } from "react";
import Timeline from "./components/Timeline/Timeline";
import EventTooltip from "./components/Timeline/EventTooltip"; // Tooltip bileşenini import ediyoruz
import AutocompleteSelect from "./components/Timeline/AutocompleteSelect"; // AutocompleteSelect bileşenini import ediyoruz

const App = () => {
  // Bugünün tarihini al ve programDate olarak kullan
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  // Timeline'ın gösterileceği tarih state'i
  // Test için 31 Aralık 2025 civarına ayarladık (disable dates testi için)
  const [programDate, setProgramDate] = useState(() => {
    // Test için 31 Aralık 2025'ten 3 gün öncesinden başla (28 Aralık)
    return '2025-12-28'; // YYYY-MM-DD formatı
  });
  
  // Geçmiş tarih koruması için minimum tarih (programDate ve indicatorDate'ten bağımsız)
  // Örnek: Bugünden 5 gün sonrasına kadar geçmiş tarih koruması yok
  // const preventPastEventsDateForProtection = new Date();
  // preventPastEventsDateForProtection.setDate(preventPastEventsDateForProtection.getDate() + 5);
  // const preventPastEventsDateString = preventPastEventsDateForProtection.toISOString().split('T')[0];
  
  // Veya sadece bugünün tarihi (varsayılan):
  const preventPastEventsDateString = new Date().toISOString().split('T')[0];

  const [dayRange, setDayRange] = useState(30);
  const [themeType, setThemeType] = useState("dark");
  const [eventAlignmentMode, setEventAlignmentMode] = useState("center"); // "center" | "full"
  const [zoomLevel, setZoomLevel] = useState(1.0); // Zoom seviyesi (1.0 = %100)
  const [selectedResource, setSelectedResource] = useState(null); // Autocomplete için seçili değer
  const [cellContextMenuOn] = useState(true); // Cell context menu açık/kapalı
  
  // Event Management ve Keyboard Shortcuts
  const [eventManagementOn, setEventManagementOn] = useState(true);
  const [keyboardShortcutsOn, setKeyboardShortcutsOn] = useState(true);
  
  // Event Icons & Badges
  const [eventIconsOn, setEventIconsOn] = useState(true);
  const [eventBadgesOn, setEventBadgesOn] = useState(true);
  
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  
  // Disable Dates - Test için: 31 Aralık - 5 Ocak arası açık, geri kalan her yer disabled
  // mode: 'include' = belirtilen tarihler ve aralıklar enabled (diğerleri disabled)
  const disableDates = {
    mode: 'include', // Belirtilen tarihler ve aralıklar enabled, diğerleri disabled
    dates: [], // Tekil tarihler (şimdilik boş)
    ranges: [
      {
        start: '2025-12-31', // 31 Aralık 2025
        end: '2026-01-05',    // 5 Ocak 2026
      },
    ],
  };
  
  // Auto Select Enabled Range - Belirtilen range'lere tıklandığında otomatik olarak tüm range'i seç
  const [autoSelectEnabledRange, setAutoSelectEnabledRange] = useState(true); // true = aktif, false = pasif
  
  // Auto Select Ranges - Auto-select için range'ler (disableDates'ten bağımsız)
  // Bu range'lere tıklandığında otomatik olarak tüm range seçilir
  const autoSelectRanges = [
    {
      start: '2025-12-31', // 31 Aralık 2025
      end: '2026-01-05',    // 5 Ocak 2026
    },
    // İstediğiniz kadar range ekleyebilirsiniz
    // {
    //   start: '2026-02-01',
    //   end: '2026-02-10',
    // },
  ];
  
  // Cell Tooltip için örnek fiyat verisi
  // Her gün için farklı fiyatlar tanımlanabilir
  const getCellTooltipContent = (resource, dateObj) => {
    const date = new Date(dateObj.fullDate);
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD formatı
    
    // Örnek: Her resource ve tarih için farklı fiyatlar
    // Bu veri API'den, state'ten veya başka bir kaynaktan gelebilir
    const priceMap = {
      // Resource ID'ye göre fiyatlar
      "lux-101": {
        // Tarih bazlı fiyatlar (opsiyonel - yoksa default kullanılır)
        "2025-12-15": 250,
        "2025-12-16": 280,
        "2025-12-17": 300,
        // Varsayılan fiyatlar
        base: 150,
        weekend: 200,
      },
      "lux-102": {
        "2025-01-15": 240,
        "2025-01-16": 270,
        base: 150,
        weekend: 200,
      },
      "deluxe-201": {
        "2025-01-15": 180,
        "2025-01-16": 200,
        base: 100,
        weekend: 150,
      },
      "deluxe-202": {
        base: 100,
        weekend: 150,
      },
    };
    
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    // Fiyat hesaplama: Önce tarih bazlı fiyat, yoksa hafta sonu/base fiyat
    const resourcePrices = priceMap[resource.id] || { base: 80, weekend: 120 };
    let price = resourcePrices[dateString]; // Tarih bazlı fiyat var mı?
    
    if (price === undefined) {
      // Tarih bazlı fiyat yoksa, hafta sonu/base fiyatı kullan
      price = isWeekend ? resourcePrices.weekend : resourcePrices.base;
    }
    
    return (
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {resource.name}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          {dateObj.display}
        </div>
        <div style={{ marginTop: '4px', fontSize: '14px', fontWeight: '600' }}>
          Fiyat: {price}₺
        </div>
        {isWeekend && !resourcePrices[dateString] && (
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
            (Hafta Sonu)
          </div>
        )}
        {resourcePrices[dateString] && (
          <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
            (Özel Fiyat)
          </div>
        )}
      </div>
    );
  };
  
  // Event tarihlerini bugünden itibaren oluştur
  const events = [
    {
      id: "lux-101-1",
      title: "Room 101 Cleaning",
      startDate: new Date(todayDate.getTime()),
      endDate: new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000), // +2 gün
      resourceId: "lux-101",
      status: "Completed", // Tamamlanmış
      balanceWarning: false, // Bakiye uyarısı yok (bakiye = 0)
      balance: 0, // Bakiye: 0 TL
      hasImportantNote: true, // Önemli not var
      note: "Özel temizlik talimatları: Halılar özel şampuan ile temizlenecek",
    },
    {
      id: "lux-101-2",
      title: "Room 101 Maintenance",
      startDate: new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000), // +2 gün
      endDate: new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000), // +4 gün
      resourceId: "lux-101",
      status: "In-progress", // Devam Ediyor
      balanceWarning: true, // Bakiye uyarısı var (bakiye > 0)
      balance: 1500, // Kalan bakiye: 1500 TL
      paymentPending: true, // Ödeme bekliyor
      isUrgent: true, // Acil
      note: "Acil bakım gerekiyor - Klima arızası",
    },
    {
      id: "lux-101-3",
      title: "Room 101 Inspection",
      startDate: new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000), // +4 gün
      endDate: new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000), // +6 gün
      resourceId: "lux-101",
      status: "Cancelled", // İptal
      balanceWarning: false, // Bakiye uyarısı yok
      balance: 0, // Bakiye: 0 TL
      hasImportantNote: false, // Not yok
    },
    {
      id: "lux-102-1",
      title: "Room 102 Cleaning",
      startDate: new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000), // +6 gün
      endDate: new Date(todayDate.getTime() + 9 * 24 * 60 * 60 * 1000), // +9 gün
      resourceId: "lux-102",
      status: "Completed",
      isNew: true, // Yeni event
      balanceWarning: false, // Bakiye uyarısı yok
      balance: 0, // Bakiye: 0 TL
      hasImportantNote: false, // Not yok
    },
    {
      id: "lux-102-2",
      title: "Room 102 Maintenance",
      startDate: new Date(todayDate.getTime() + 9 * 24 * 60 * 60 * 1000), // +9 gün
      endDate: new Date(todayDate.getTime() + 14 * 24 * 60 * 60 * 1000), // +14 gün
      resourceId: "lux-102",
      status: "In-progress",
      isImportant: true, // Önemli event
      balanceWarning: true, // Bakiye uyarısı var
      balance: 2500, // Kalan bakiye: 2500 TL
      hasImportantNote: true, // Önemli not var
      note: "VIP müşteri - Özel istekler: Yatak odası çiçeklerle süslenecek",
    },
  ];

const resources = [
  {
      groupName: "Luxury Rooms",
      resources: [
          { id: "lux-101", name: "Room 101" },
          { id: "lux-102", name: "Room 102" },
          { id: "lux-103", name: "Room 103" },
          { id: "lux-104", name: "Room 104" },
          { id: "lux-105", name: "Room 105" },
          { id: "lux-106", name: "Room 106" },
          { id: "lux-107", name: "Room 107" },
          { id: "lux-108", name: "Room 108" },
          { id: "lux-109", name: "Room 109" },
          { id: "lux-110", name: "Room 110" },
      ],
  },
  {
      groupName: "Deluxe Rooms",
      resources: [
          { id: "deluxe-201", name: "Room 201" },
          { id: "deluxe-202", name: "Room 202" },
          { id: "deluxe-203", name: "Room 203" },
          { id: "deluxe-204", name: "Room 204" },
          { id: "deluxe-205", name: "Room 205" },
          { id: "deluxe-206", name: "Room 206" },
          { id: "deluxe-207", name: "Room 207" },
          { id: "deluxe-208", name: "Room 208" },
          { id: "deluxe-209", name: "Room 209" },
          { id: "deluxe-210", name: "Room 210" },
      ],
  },
];


  const resourceSettings = {
    showIdAsName: false,
    isGrouped: true,
    isCollapsible: true,
  };

  const eventStyleResolver = (event) => {
    switch (event.status) {
      case "Completed":
        return {
          backgroundColor: "#28a745",
          color: "#fff",
          border: "1px solid #28a745",
        };
      case "In-progress":
        return {
          backgroundColor: "#ffc107",
          color: "#000",
          border: "1px solid #ffc107",
        };
      case "Cancelled":
        return {
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "1px solid #dc3545",
        };
      default:
        return {
          backgroundColor: "#ccc",
          color: "#000",
          border: "1px solid #ccc",
        };
    }
  };
  
  // Event Icon Resolver - Event'e göre ikon tipi döndürür
  const eventIconResolver = (event) => {
    // Öncelik sırası: Bakiye uyarısı > Önemli not > Ödeme bekliyor > Durum
    
    // Bakiye kontrolü - Eğer balanceWarning true ise veya balance > 0 ise
    if (event.balanceWarning || (event.balance && event.balance > 0)) {
      return 'balance-warning';
    }
    
    // Önemli not kontrolü
    if (event.hasImportantNote || event.note) {
      return 'important-note';
    }
    
    // Ödeme bekliyor
    if (event.paymentPending) {
      return 'payment-pending';
    }
    
    // Durum bazlı ikonlar
    switch (event.status) {
      case "Completed":
        return 'completed';
      case "In-progress":
        return 'in-progress';
      case "Cancelled":
        return 'cancelled';
      case "Pending":
        return 'pending';
      default:
        return null;
    }
  };

  // Event Badge Resolver - Event'e göre badge bilgisi döndürür
  const eventBadgeResolver = (event) => {
    // Öncelik sırası: Acil > Önemli > Yeni > Özel badge
    
    // Acil event için badge
    if (event.isUrgent) {
      return {
        text: 'ACİL',
        type: 'urgent',
        position: 'top-right',
      };
    }
    
    // Önemli event için badge
    if (event.isImportant) {
      return {
        text: 'ÖNEMLİ',
        type: 'important',
        position: 'top-right',
      };
    }
    
    // Yeni event için badge
    if (event.isNew) {
      return {
        text: 'YENİ',
        type: 'new',
        position: 'top-left',
      };
    }
    
    // Özel badge
    if (event.badge) {
      return {
        text: event.badge.text,
        type: event.badge.type || 'custom',
        position: event.badge.position || 'top-right',
        style: event.badge.style,
      };
    }
    
    return null;
  };

  const toggleTheme = () => {
    setThemeType((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleToday = () => {
    // Program tarihini bugüne getir (3 gün öncesinden başla)
    const today = new Date();
    today.setDate(today.getDate() - 3);
    setProgramDate(today.toISOString().split('T')[0]);
  };

  const handleAdvance = () => {
    // 5 gün ileri git
    const currentDate = new Date(programDate);
    currentDate.setDate(currentDate.getDate() + 5);
    setProgramDate(currentDate.toISOString().split('T')[0]);
  };

  const handleRetreat = () => {
    // 5 gün geri git
    const currentDate = new Date(programDate);
    currentDate.setDate(currentDate.getDate() - 5);
    setProgramDate(currentDate.toISOString().split('T')[0]);
  };

  const handleMonthAdvance = () => {
    // 1 ay ileri git
    const currentDate = new Date(programDate);
    currentDate.setMonth(currentDate.getMonth() + 1);
    setProgramDate(currentDate.toISOString().split('T')[0]);
  };

  const handleMonthRetreat = () => {
    // 1 ay geri git
    const currentDate = new Date(programDate);
    currentDate.setMonth(currentDate.getMonth() - 1);
    setProgramDate(currentDate.toISOString().split('T')[0]);
  };
  
  // handleDateSelect kaldırıldı - Timeline'ın kendi handleDateChange'i kullanılıyor

  const handleDropInfo = (dropInfo) => {
    console.log("Event dropped with info:", dropInfo);
  };
  
  
  const handleExtendInfo = (extendedEventInfo) => {
    console.log("Uzatılan etkinlik bilgisi:", extendedEventInfo);
  };
  
  const handleCreateEventInfo = (newEvent) => {
    console.log("Oluşturulan yeni etkinlik bilgisi:", newEvent);
  };
  
  // Özel Header Butonları - İstediğiniz tarih aralıklarına hızlı gitmek için
  const customHeaderButtons = [
    {
      id: 'goto-dec-26-30',
      label: '26-30 Aralık',
      icon: '📅',
      onClick: () => {
        setProgramDate('2025-12-26');
      },
      tooltip: '26-30 Aralık 2025 tarihine git',
    },
    {
      id: 'goto-jan-6-10',
      label: '6-10 Ocak',
      icon: '📅',
      onClick: () => {
        setProgramDate('2026-01-06');
      },
      tooltip: '6-10 Ocak 2026 tarihine git',
    },
    // Daha fazla özel buton ekleyebilirsiniz
    // {
    //   id: 'custom-button',
    //   label: 'Özel Buton',
    //   icon: '⭐',
    //   onClick: () => {
    //     console.log('Özel buton tıklandı');
    //   },
    // },
  ];
  
  return (
    <div>
      <button onClick={toggleTheme}>
        Temayı Değiştir ({themeType === "dark" ? "Karanlık" : "Aydınlık"})
      </button>
      <div style={{ margin: "20px 0", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => setEventAlignmentMode(eventAlignmentMode === "center" ? "full" : "center")}>
          Hizalama: {eventAlignmentMode === "center" ? "Gün Ortası" : "Tam Gün"}
        </button>
        <button onClick={() => setEventManagementOn(!eventManagementOn)}>
          Event Yönetimi: {eventManagementOn ? "Açık" : "Kapalı"}
        </button>
        <button onClick={() => setKeyboardShortcutsOn(!keyboardShortcutsOn)}>
          Klavye Kısayolları: {keyboardShortcutsOn ? "Açık" : "Kapalı"}
        </button>
        <button onClick={() => setEventIconsOn(!eventIconsOn)}>
          Event İkonları: {eventIconsOn ? "Açık" : "Kapalı"}
        </button>
        <button onClick={() => setEventBadgesOn(!eventBadgesOn)}>
          Event Badge'leri: {eventBadgesOn ? "Açık" : "Kapalı"}
        </button>
        <button onClick={() => setIsLoading(!isLoading)}>
          Loading: {isLoading ? "Açık" : "Kapalı"}
        </button>
        <button onClick={() => setAutoSelectEnabledRange(!autoSelectEnabledRange)}>
          Auto Select Enabled Range: {autoSelectEnabledRange ? "Açık" : "Kapalı"}
        </button>
        <button onClick={handleToday}>Bugüne Git</button>
        <button onClick={handleRetreat}>5 Gün Geri</button>
        <button onClick={handleAdvance}>5 Gün İleri</button>
        <button onClick={handleMonthRetreat}>1 Ay Geri</button>
        <button onClick={handleMonthAdvance}>1 Ay İleri</button>
      </div>
      <Timeline
        resources={resources}
        resourceSettings={resourceSettings}
        programDate={programDate}
        events={events}
        indicatorOn={true}
        horizontalScrollOn={true}
        dayRange={dayRange}
        setDayRange={setDayRange}
        themeType={themeType} // Tema türü prop olarak geçiliyor
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
        zoomOn={true}
        minZoomLevel={0.5}
        maxZoomLevel={3.0}
        zoomStep={0.25}
        onToday={handleToday}
        onAdvance={handleAdvance}
        onRetreat={handleRetreat}
        onMonthAdvance={handleMonthAdvance}
        onMonthRetreat={handleMonthRetreat}
        showDefaultHeaderButtons={true} // Varsayılan butonları göster (false yaparak gizleyebilirsiniz)
        customHeaderButtons={customHeaderButtons} // Özel butonlar
        eventTooltipOn={true} // Tooltip'i aktif hale getiriyoruz
        tooltipComponent={EventTooltip} // Tooltip bileşenini belirtiyoruz
        tempEventStyle={{
          backgroundColor: "rgba(235, 0, 235, 0.8)", // Örnek stil
          color: "#fff",
          borderRadius: "40px",
          padding: "5px",
        }}
        eventStyleResolver={eventStyleResolver}
        setDropInfo={handleDropInfo} // Callback'i buradan bağlıyoruz
        onExtendInfo={handleExtendInfo} // Uzatma bilgisi
        onCreateEventInfo={handleCreateEventInfo} // Yeni etkinlik bilgisi
        indicatorDate={programDate} // Timeline'ın gösterileceği tarih (programDate state'i)
        eventAlignmentMode={eventAlignmentMode}
        preventPastEvents={true} // Geçmiş tarihlere rezervasyon oluşturmayı engelle
        preventPastEventsDate={programDate} // Geçmiş tarih koruması için minimum tarih (programDate ve indicatorDate'ten bağımsız)
        highlightWeekends={true} // Hafta sonlarını farklı renkte göster
        cellTooltipOn={true} // Cell tooltip'lerini aktif et
        cellTooltipResolver={getCellTooltipContent} // Fiyat bilgisi göster
        eventIconsOn={eventIconsOn} // Event ikonlarını aktif et
        eventIconResolver={eventIconResolver} // İkon resolver
        eventBadgesOn={eventBadgesOn} // Event badge'lerini aktif et
        eventBadgeResolver={eventBadgeResolver} // Badge resolver
        isLoading={isLoading} // Loading state
        loadingType="spinner" // Loading tipi
        cellContextMenuOn={cellContextMenuOn} // Cell context menu aktif
        cellContextMenuItems={[
          {
            id: 'daily-timeline',
            label: 'Günlük Timeline Görüntüsü Oluştur',
            icon: '📊',
            onClick: (resource, date) => {
              // Timeline.js'te handle edilecek
              console.log('Daily Timeline:', { resource, date });
            },
            tooltip: 'Seçili resource ve tarih için günlük timeline görüntüsü oluştur',
          },
          {
            id: 'separator-1',
            separator: true,
          },
          {
            id: 'view-details',
            label: 'Detayları Görüntüle',
            icon: '👁️',
            onClick: (resource, date) => {
              console.log('View Details:', { resource, date });
            },
          },
          {
            id: 'create-event',
            label: 'Yeni Rezervasyon Oluştur',
            icon: '➕',
            onClick: (resource, date) => {
              const dateObj = new Date(date.fullDate);
              alert(`"${resource.name || resource.id}" için ${dateObj.toLocaleDateString('tr-TR')} tarihinde yeni rezervasyon oluşturulacak.`);
            },
          },
        ]}
        onCellContextMenu={(resource, date, event) => {
          console.log('Context menu opened:', { resource, date, event });
        }}
        resourceHeaderContent={
          <AutocompleteSelect
            options={[
              { id: 1, name: "Luxury Rooms", group: "Luxury" },
              { id: 2, name: "Deluxe Rooms", group: "Deluxe" },
              { id: 3, name: "Standard Rooms", group: "Standard" },
              { id: 4, name: "Suite Rooms", group: "Suite" },
              { id: 5, name: "Penthouse", group: "Luxury" },
            ]}
            value={selectedResource}
            onChange={(value, option) => {
              setSelectedResource(value);
              console.log("Seçilen:", option);
            }}
            placeholder="Oda grubu seçiniz..."
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
          />
        }
        disableDates={disableDates}
        autoSelectEnabledRange={autoSelectEnabledRange}
        autoSelectRanges={autoSelectRanges}

      />
    </div>
  );
};

export default App;
