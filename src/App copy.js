import React, { useState } from "react";
import Timeline from "./components/Timeline/Timeline";


const App = () => {
  const programDate = "2025-01-02"; 
  const [dropInfo, setDropInfo] = useState(null); 

  const events = [
    {
      id: "lux-101-1",
      title: "Room 101 Event",
      startDate: new Date("2025-01-01"), // Giriş tarihi
      endDate: new Date("2025-01-08"),   // Çıkış tarihi
      resourceId: "lux-101",             // Kaynak ID
      color: "#ff5733",                  // Renk
      totalAmount: 500,                    // Toplam borç
      amountPaid: 200,                     // Ödenen miktar
      status: "Confirmed",                 // Rezervasyon durumu
      note: "Misafirler özel talep olarak ekstra yastık istediler." // Rezervasyon notu
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
  ];

  const resources = [
    {
      groupName: "Luxury Rooms",
      resources: [
        { id: "lux-101", name: "Room 101" },
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

  const resourceSettings = {
    showIdAsName: false,
    isGrouped: true,
    isCollapsible: true,
  };

  // Yeni prop'lar (boolean veya callback) örnekleri:
  const eventsDragOn = true;        // Etkinlikleri sürükle-bırak aktif mi?
  const eventsExtendOn = true;      // Etkinliği sağ kenarından uzatma aktif mi?
  const createNewEventOn = true;    // Yeni event oluşturma aktif mi?
  // Callback örnekleri:
  const handleDragInfo = (dragData) => {
    console.log("Dragged Event Info:", dragData);
    // Kullanıcı bu veriyi yakalayıp kendi API'sine kaydedebilir
  };

  const [masterHeaderView, setMasterHeaderView] = useState(true);
  const [resourceHeaderContent, setResourceHeaderContent] = useState("Akfa Timeline");
  
  const handleExtendInfo = (extendData) => {
    console.log("Extended Event Info:", extendData);
  };

  const handleCreateEventInfo = (newEventData) => {
    console.log("New Event Created:", newEventData);
  };

  const handleEventClick = (evt, ev) => {
    console.log("Event clicked:", evt);
    // evt: event objesi, ev: orijinal mouse event 
  };

  const handleEventRightClick = (evt, ev) => {
    ev.preventDefault(); // Sağ tık menüsü kapatmak istersen
    console.log("Event right-clicked:", evt);
  };

  return (
    <Timeline
      resources={resources}
      resourceSettings={resourceSettings}
      programDate={programDate}
      externalEvents={events}
      indicatorOn={true}
      events={events}
      setDropInfo={setDropInfo}

      eventsDragOn={eventsDragOn}
      eventsExtendOn={eventsExtendOn}
      createNewEventOn={createNewEventOn}

      onDragInfo={handleDragInfo}
      onExtendInfo={handleExtendInfo}
      onCreateEventInfo={handleCreateEventInfo}
      onEventClick={handleEventClick}
      onEventRightClick={handleEventRightClick}

      horizontalScrollOn={true} // => Yatay kaydırma aktifleştirilir

      masterHeaderView={masterHeaderView}
      resourceHeaderContent={resourceHeaderContent}
    />
  );
};

export default App;
