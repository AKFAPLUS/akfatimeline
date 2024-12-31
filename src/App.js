// Gerekli kütüphaneleri import ediyoruz
import React, { useState } from "react";
// Timeline bileşenini import ediyoruz
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  // Timeline başlangıç tarihi (zorunlu, format: "YYYY-MM-DD")
  const programDate = "2025-01-02";

  // Timeline için etkinliklerin veri listesi
  const events = [
    {
      id: "lux-101-1", // Benzersiz etkinlik kimliği (zorunlu)
      title: "Room 101 Event", // Etkinlik adı (zorunlu)
      startDate: new Date("2025-01-01"), // Başlangıç tarihi (zorunlu, JS Date formatı)
      endDate: new Date("2025-01-08"), // Bitiş tarihi (zorunlu, JS Date formatı)
      resourceId: "lux-101", // Hangi kaynağa ait olduğunu belirten ID (zorunlu)
      color: "#ff5733", // Etkinlik için özel renk (isteğe bağlı)
      totalAmount: 500, // Ek alan: Toplam borç (isteğe bağlı)
      amountPaid: 200, // Ek alan: Ödenen miktar (isteğe bağlı)
      status: "Confirmed", // Ek alan: Rezervasyon durumu (isteğe bağlı)
      note: "Misafirler özel talep olarak ekstra yastık istediler.", // Not (isteğe bağlı)
    },
    {
      id: "lux-102-1",
      title: "Room 102 Event",
      startDate: new Date("2025-01-02"),
      endDate: new Date("2025-01-04"),
      resourceId: "lux-102",
      color: "#33a1ff",
    },
    {
      id: "lux-103-1",
      title: "Room 103 Event",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-02"),
      resourceId: "lux-103",
      color: "#33ff57",
    },
    {
      id: "fam-201-1",
      title: "Suite 201 Event",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-02"),
      resourceId: "fam-201",
      color: "#ff33a1",
    },
    {
      id: "fam-202-1",
      title: "Suite 202 Event",
      startDate: new Date("2025-01-03"),
      endDate: new Date("2025-01-05"),
      resourceId: "fam-202",
      color: "#a1ff33",
    },
    {
      id: "bus-301-1",
      title: "Room 301 Event",
      startDate: new Date("2025-01-02"),
      endDate: new Date("2025-01-04"),
      resourceId: "bus-301",
      color: "#ff9a00",
    },
    {
      id: "vip-401-1",
      title: "VIP 401 Event",
      startDate: new Date("2025-01-04"),
      endDate: new Date("2025-01-06"),
      resourceId: "vip-401",
      color: "#800080",
    },
    {
      id: "vip-402-1",
      title: "VIP 402 Event",
      startDate: new Date("2025-01-05"),
      endDate: new Date("2025-01-06"),
      resourceId: "vip-402",
      color: "#008080",
    },
    // Diğer etkinlikler...
  ];

  // Kaynakların listesi (zorunlu, grup ve kaynak bilgisi içermeli)
  const resources = [
    {
      groupName: "Luxury Rooms", // Grup adı (zorunlu)
      resources: [
        { id: "lux-101", name: "Room 101" }, // Kaynak ID ve adı (zorunlu)
        { id: "lux-102", name: "Room 102" },
        { id: "lux-103", name: "Room 103" },
        { id: "lux-104", name: "Room 104" },
            ],
    },
    {
      groupName: "Family Suites",
      resources: [
        { id: "fam-201", name: "Suite 201" },
        { id: "fam-202", name: "Suite 202" },
        { id: "fam-203", name: "Suite 203" },
        { id: "fam-204", name: "Suite 204" },
      ],
    },
    {
      groupName: "Business Class",
      resources: [
        { id: "bus-301", name: "Room 301" },
        { id: "bus-302", name: "Room 302" },
        { id: "bus-303", name: "Room 303" },
        { id: "bus-304", name: "Room 304" },
      ],
    },
    {
      groupName: "VIP Exclusive",
      resources: [
        { id: "vip-401", name: "VIP 401" },
        { id: "vip-402", name: "VIP 402" },
        { id: "vip-403", name: "VIP 403" },
        { id: "vip-404", name: "VIP 404" },

      ],
    },
  ];

  // Kaynak ayarları (isteğe bağlı, varsayılan ayarlar mevcut)
  const resourceSettings = {
    showIdAsName: false, // true: Kaynak ID gösterir, false: Kaynak adı gösterir
    isGrouped: true, // true: Kaynakları gruplar halinde gösterir
    isCollapsible: true, // true: Gruplar açılıp kapatılabilir
  };

  // Drag-and-drop işlemleri için gerekli callback ve state'ler
  const [dropInfo, setDropInfo] = useState(null); // Sürükle-bırak sonrası bilgi saklar
  const handleDragInfo = (dragData) => {
    console.log("Dragged Event Info:", dragData);
  };

  // Etkinlik genişletme (extend) işlemi callback'i
  const handleExtendInfo = (extendData) => {
    console.log("Extended Event Info:", extendData);
  };

  // Yeni etkinlik oluşturma işlemi callback'i
  const handleCreateEventInfo = (newEventData) => {
    console.log("New Event Created:", newEventData);
  };

  // Etkinlik tıklama işlemi callback'i
  const handleEventClick = (evt, ev) => {
    console.log("Event clicked:", evt);
  };

  // Etkinlik sağ tıklama işlemi callback'i
  const handleEventRightClick = (evt, ev) => {
    ev.preventDefault(); // Varsayılan sağ tık menüsünü engeller
    console.log("Event right-clicked:", evt);
  };

  // Diğer özellikler ve kontrol mekanizmaları
  const eventsDragOn = true; // true: Etkinlik sürükle-bırak özelliği aktif
  const eventsExtendOn = true; // true: Etkinlik genişletme özelliği aktif
  const createNewEventOn = true; // true: Yeni etkinlik oluşturma özelliği aktif
  const horizontalScrollOn = true; // true: Yatay kaydırma özelliği aktif
  const [masterHeaderView, setMasterHeaderView] = useState(true); // true: Master Header gösterilir
  const [resourceHeaderContent, setResourceHeaderContent] = useState("Akfa Timeline"); // Resources başlık içeriği

  return (
    <Timeline
      // Kaynak verileri (zorunlu)
      resources={resources}
      // Kaynak ayarları (isteğe bağlı)
      resourceSettings={resourceSettings}
      // Timeline başlangıç tarihi (zorunlu)
      programDate={programDate}
      // Etkinlik verileri (zorunlu)
      events={events}
      externalEvents={events}
      // Drop bilgisi için callback ve state
      setDropInfo={setDropInfo}
      dropInfo={dropInfo}
      // Bugün göstergesi (isteğe bağlı)
      indicatorOn={true}
      // Sürükle-bırak ve genişletme özellikleri (isteğe bağlı)
      eventsDragOn={eventsDragOn}
      eventsExtendOn={eventsExtendOn}
      createNewEventOn={createNewEventOn}
      // Callback'ler
      onDragInfo={handleDragInfo}
      onExtendInfo={handleExtendInfo}
      onCreateEventInfo={handleCreateEventInfo}
      onEventClick={handleEventClick}
      onEventRightClick={handleEventRightClick}
      // Yatay kaydırma özelliği (isteğe bağlı)
      horizontalScrollOn={horizontalScrollOn}
      // Master Header görünürlüğü ve Resources başlığı içeriği
      masterHeaderView={masterHeaderView}
      resourceHeaderContent={resourceHeaderContent}
    />
  );
};

export default App;
