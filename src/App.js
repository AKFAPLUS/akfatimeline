import React, { useState } from "react";
import Timeline from "./components/Timeline/Timeline";
import EventTooltip from "./components/Timeline/EventTooltip"; // Tooltip bileşenini import ediyoruz

const App = () => {
  const programDate = "2025-01-08";

  const events = [
    {
      id: "lux-101-1",
      title: "Room 101 Cleaning",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-03"),
      resourceId: "lux-101",
      status: "Completed", // Tamamlanmış
    },
    {
      id: "lux-101-2",
      title: "Room 101 Maintenance",
      startDate: new Date("2025-01-03"),
      endDate: new Date("2025-01-05"),
      resourceId: "lux-101",
      status: "In-progress", // Devam Ediyor
    },
    {
      id: "lux-101-3",
      title: "Room 101 Inspection",
      startDate: new Date("2025-01-05"),
      endDate: new Date("2025-01-07"),
      resourceId: "lux-101",
      status: "Cancelled", // İptal
    },
    {
      id: "lux-102-1",
      title: "Room 102 Cleaning",
      startDate: new Date("2025-01-07"),
      endDate: new Date("2025-01-10"),
      resourceId: "lux-102",
      status: "Completed",
    },
    {
      id: "lux-102-2",
      title: "Room 102 Maintenance",
      startDate: new Date("2025-01-10"),
      endDate: new Date("2025-01-15"),
      resourceId: "lux-102",
      status: "In-progress",
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
  
  
  const [dayRange, setDayRange] = useState(30);
  const [themeType, setThemeType] = useState("dark");

  const toggleTheme = () => {
    setThemeType((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleToday = () => {
    console.log("Bugüne git");
    // Program tarihini bugüne getir
  };

  const handleAdvance = () => {
    console.log("5 gün ileri git");
  };

  const handleRetreat = () => {
    console.log("5 gün geri git");
  };

  const handleMonthAdvance = () => {
    console.log("1 ay ileri git");
  };

  const handleMonthRetreat = () => {
    console.log("1 ay geri git");
  };

  const handleDropInfo = (dropInfo) => {
    console.log("Event dropped with info:", dropInfo);
  };
  
  
  const handleExtendInfo = (extendedEventInfo) => {
    console.log("Uzatılan etkinlik bilgisi:", extendedEventInfo);
  };
  
  const handleCreateEventInfo = (newEvent) => {
    console.log("Oluşturulan yeni etkinlik bilgisi:", newEvent);
  };
  
  return (
    <div>
      <button onClick={toggleTheme}>
        Temayı Değiştir ({themeType === "dark" ? "Karanlık" : "Aydınlık"})
      </button>
      <div style={{ margin: "20px 0" }}>
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
        onToday={handleToday}
        onAdvance={handleAdvance}
        onRetreat={handleRetreat}
        onMonthAdvance={handleMonthAdvance}
        onMonthRetreat={handleMonthRetreat}
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
        indicatorDate="2025-01-09" // İstediğiniz tarihi gönderin

      />
    </div>
  );
};

export default App;
