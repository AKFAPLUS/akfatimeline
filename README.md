# AkfaTimeline

AkfaTimeline, React uygulamaları için tamamen özelleştirilebilir bir timeline bileşenidir. Bu bileşen; kaynak gruplama, etkinlik düzenleme, dinamik tema desteği ve daha fazlasını sunar. Modern React uygulamalarında etkin zaman çizelgeleri oluşturmayı hızlı ve kolay hale getirir.

![AkfaTimeline Screenshot](https://i.hizliresim.com/pc4zva7.jpg)

---

## 🚀 Özellikler
Kaynak Gruplama ve Özelleştirme:

Kaynakları gruplar halinde yönetebilir veya düz bir liste olarak görüntüleyebilirsiniz.
Gruplar açılıp kapanabilir ve başlık içerikleri özelleştirilebilir.
Kaynak ID'si veya adı arasında seçim yaparak görüntüleme düzenini değiştirebilirsiniz.
Dinamik Etkinlik Yönetimi:

Sürükle ve Bırak: Etkinlikleri kolayca taşıyabilirsiniz.
Uzatma: Etkinlikleri sağ kenarından uzatarak tarihlerini değiştirebilirsiniz.
Yeni Etkinlik Oluşturma: Hücrelere tıklayarak yeni etkinlikler ekleyebilirsiniz.
Etkinlik Tıklama ve Sağ Tıklama: Kullanıcı etkileşimlerine özel geri bildirim sağlama.
Zaman Yönetimi ve Filtreleme:

Seçilebilir gün aralığı (dayRange) ile görüntülenen tarihleri dinamik olarak ayarlayın.
Yatay kaydırma desteği ile daha geniş tarih aralıklarını yönetebilirsiniz.
"Bugün" göstergesi ile önemli tarihleri vurgulayın.
Tema ve Özelleştirme:

Dark ve Light tema desteği ile kolay tema geçişi.
CSS değişkenleri sayesinde bileşen tasarımını kendi markanıza göre özelleştirin.
Callback Destekleri:

onDragInfo: Sürüklenen etkinlik bilgilerini yakalayın.
onExtendInfo: Uzatılan etkinliklerin güncellenmiş tarih bilgilerini alın.
onCreateEventInfo: Yeni oluşturulan etkinliklerin verilerini alın.
onEventClick ve onEventRightClick: Etkinliklere yapılan tıklamaları işleyin.
Gelişmiş Başlık ve Kaynak Yönetimi:

Master başlık görünürlüğünü (masterHeaderView) kontrol edin.
Kaynak başlığını (resourceHeaderContent) tamamen özelleştirin.
Yatay Kaydırma ve Responsive Yapı:

Dinamik hücre genişlikleri ve yatay kaydırma desteği.
Responsive tasarım ile her ekran boyutunda mükemmel görünüm.
Kolay Entegrasyon: Kullanıcı dostu API ile bileşeni dakikalar içinde entegre edin.

---

## 📦 Kurulum

Projeye eklemek için aşağıdaki komutu çalıştırın:

```bash
npm install akfatimeline


🛠️ Kullanım Şekli
AkfaTimeline'ı kullanmaya başlamak için aşağıdaki örnek kodu inceleyebilirsiniz. Bu örnek, kaynaklar, etkinlikler ve temel ayarlarla bir timeline oluşturur.

1. Bileşeni İçeri Aktarın
İlk olarak, AkfaTimeline bileşenini projenize dahil edin:

jsx

import React from "react";
import Timeline from "akfatimeline";
2. Verilerinizi Hazırlayın
Timeline için kaynaklar ve etkinlikler verisi tanımlayın:

jsx

const resources = [
  {
    groupName: "Luxury Rooms",
    resources: [
      { id: "lux-101", name: "Room 101" },
      { id: "lux-102", name: "Room 102" },
    ],
  },
  {
    groupName: "Family Suites",
    resources: [
      { id: "fam-201", name: "Suite 201" },
      { id: "fam-202", name: "Suite 202" },
    ],
  },
];

const events = [
  {
    id: "lux-101-1",
    title: "Room 101 Event",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-08"),
    resourceId: "lux-101",
    color: "#ff5733",
  },
  {
    id: "fam-201-1",
    title: "Suite 201 Event",
    startDate: new Date("2025-01-03"),
    endDate: new Date("2025-01-06"),
    resourceId: "fam-201",
    color: "#33a1ff",
  },
];
3. Timeline Bileşenini Kullanın
Timeline bileşenini kullanarak verilerinizi gösterin:

jsx

const App = () => {
  const resourceSettings = {
    showIdAsName: false,
    isGrouped: true,
    isCollapsible: true,
  };

  return (
    <Timeline
      resources={resources} // Kaynak listesi
      events={events} // Etkinlik listesi
      programDate="2025-01-01" // Timeline başlangıç tarihi
      resourceSettings={resourceSettings} // Kaynak ayarları
      indicatorOn={true} // Bugün göstergesi
      horizontalScrollOn={true} // Yatay kaydırma
    />
  );
};

export default App;
4. CSS ve Temalar
AkfaTimeline varsayılan stillerle birlikte gelir. Kendi temalarınızı uygulamak için CSS değişkenlerini kullanabilirsiniz.

css

:root {
  --background-color: #ffffff;
  --timeline-event-background-color: #ff5733;
  --timeline-event-text-color: #fff;
}
🧩 Callback Kullanımı
Etkinlikler üzerinde işlem yapmak için callback'leri kullanabilirsiniz. Örneğin:

jsx

<Timeline
  events={events}
  onEventClick={(event) => console.log("Event Clicked:", event)}
  onDragInfo={(dragData) => console.log("Dragged Event Info:", dragData)}
  onExtendInfo={(extendData) => console.log("Extended Event Info:", extendData)}
/>




Örnek App.js dosyası 


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

---

##  🎨 CSS Özelleştirme
AkfaTimeline, CSS değişkenleri ile kolayca özelleştirilebilir.

/* src/components/Timeline/Timeline.css */

/* 
  Temel: "sales sayfası" temasıyla uyumlu renkler, 
  light vs. dark tanımları 
*/

:root {
  /* Light Tema Varsayılan Renkler */
  --background-color: #f5f5f2;       /* Açık tema arka plan */
  --text-color: #666;               /* Açık tema yazı rengi */
  --border-color: #bbb;             /* Daha yumuşak border */

  /* Header */
  --header-background-color: #f5f5f2;  /* Üst header, tablo header */
  --header-text-color: #666;

  /* Resources */
  --resource-background-color: #f5f5f2;  
  --resource-text-color: #666;
  --group-header-background-color: #dadada;

  /* Timeline */
  --timeline-header-background-color: #f5f5f2;
  --timeline-cell-border-color: #ccc;
  --timeline-event-background-color: #fff;
  --timeline-event-border-color: #666;
  --timeline-event-text-color: #666;

  /* Scrollbar */
  --scrollbar-thumb-background: #aaa;
  --scrollbar-thumb-hover-background: #888;

  --resource-width: 150px;
  --cell-height: 40px;
  --header-height: 60px;
  --time-slot-height: 20px;
  --container-height: 480px;

  --timeline-new-event-background-color: #ff5722;
  --timeline-new-event-text-color: #fff;

  --timeline-event-background-color: #ff7f50; 
  --timeline-event-text-color: #fff;
  --timeline-event-border-color: #fff;

  --timeline-cell-selected-bg: rgba(25,118,210,0.2);

  user-select: none; /* Metin seçimini engelle */
}

/* Koyu Tema */
.dark-mode {
  /* Koyu tema */
  --background-color: #16202a;               /* Koyu tema arka plan */
  --text-color: #ddd;                        /* Koyu tema yazı rengi */
  --border-color: #444;

  --header-background-color: #16202a;
  --header-text-color: #bbb;

  --resource-background-color: #16202a;
  --resource-text-color: #bbb;
  --group-header-background-color: #0d141b;

  --timeline-header-background-color: #16202a;
  --timeline-cell-border-color: #444;
  --timeline-event-background-color: #2a2a2a;
  --timeline-event-border-color: #222;
  --timeline-event-text-color: #ddd;

  --scrollbar-thumb-background: #555;
  --scrollbar-thumb-hover-background: #888;

  --timeline-new-event-background-color: #a83e20;
  --timeline-new-event-text-color: #eee;

  --timeline-event-background-color: #a83e20;
  --timeline-event-text-color: #fff;
  --timeline-event-border-color: #222;

  --timeline-cell-selected-bg: rgba(76,175,80,0.2);
}

/* Genel Timeline Konteyner */
.timeline-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: var(--background-color);
  color: var(--text-color);
}

/* Master Header */
.timeline-master-header {
  width: 100%;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  border-bottom: 1px solid var(--border-color);
  z-index: 10;
  padding: 10px;
  box-sizing: border-box;
}

/* Timeline Body */
.timeline-body {
  display: flex;
  flex: 1;
}

/* Sol Kısım: Resources */
.timeline-resources-container {
  width: var(--resource-width);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  position: sticky;
  left: 0;
  top: var(--header-height);
  z-index: 2;
  background-color: var(--resource-background-color);
  overflow-y: auto;
}

/* Resources Header */
.resources-header {
  background-color: var(--header-background-color);
  color: var(--resource-text-color);
  text-align: center;
  width: var(--resource-width);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--header-height) * 2); /* Üst üste iki header yüksekliği */
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* Grup Başlığı Hücreleri */
.group-header-row {
  display: flex;
  height: var(--cell-height);
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  font-weight: bold;
}

.group-header-cell {
  flex: 1;
  border: 1px solid var(--border-color);
  text-align: center;
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Resource Grupları */
.resource-group {
  display: flex;
  flex-direction: column;
}

/* Resource Grup Header */
.resource-group-header {
  background-color: var(--group-header-background-color);
  color: var(--resource-text-color);
  font-weight: bold;
  height: var(--cell-height);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  cursor: pointer;
  border: 1px solid var(--border-color);
}

/* Resource Hücreleri */
.resource-cell {
  padding: 0;
  text-align: left;
  background-color: var(--resource-background-color);
  color: var(--resource-text-color);
  height: var(--cell-height);
  display: flex;
  align-items: center;
  border: 0.3px solid var(--border-color);
  box-sizing: border-box;
}

/* Sağ Kısım: Timeline */
.timeline-scrollable-container {
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Header ve Content Wrapper */
.timeline-header-content-wrapper {
  display: flex;
  flex-direction: column;
}

/* Timeline Header */
.timeline-header {
  display: flex;
  background-color: var(--timeline-header-background-color);
  color: var(--header-text-color);
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--header-height);
  overflow: hidden;
  box-sizing: border-box;
}

/* Timeline Content */
.timeline-content {
  display: flex;
  flex-direction: column;
}

/* Grup Container */
.group-container {
  display: flex;
  flex-direction: column;
}

/* Resource Satırları */
.resource-row {
  display: flex;
  box-sizing: border-box;
  position: relative;
  height: var(--cell-height);
  border: 1px solid var(--border-color);
  margin-top: -1px;
  overflow: hidden;
}

/* Timeline Hücreleri */
.timeline-cell {
  flex: 1;
  border: 1px solid var(--timeline-cell-border-color);
  height: 100%;
  box-sizing: border-box;
}

/* Hücre Seçili Durumu */
.timeline-cell.selected {
  background-color: rgba(25, 118, 210, 0.2); /* satır içi/hover */
}

/* Event Stilleri */
.event {
  position: absolute;
  background-color: var(--timeline-event-background-color);
  color: var(--timeline-event-text-color);
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 4px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--timeline-event-border-color);
  cursor: pointer;
}

/* Event Time Stili */
.event-time {
  font-size: 10px;
  margin-top: 2px;
}

/* Scrollbar için */
.timeline-scrollable-container::-webkit-scrollbar {
  height: 10px;
}

.timeline-scrollable-container::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-background);
  border-radius: 5px;
}

.timeline-scrollable-container::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-background);
}

.resources-header {
  background-color: var(--header-background-color);
  color: var(--resource-text-color);
  text-align: center;
  width: var(--resource-width);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* TimelineHeader Container */
.timeline-header-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Ay + Yıl satırı */
.timeline-header-month-row {
  display: flex;
  background-color: var(--header-background-color);
  color: var(--header-text-color);
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid var(--border-color);
}

/* Ay + Yıl hücreleri */
.timeline-header-month-cell {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-right => dynamic, inline style if needed */
  box-sizing: border-box;
}

/* Günlük Hücreler (tarih satırı) */
.timeline-header-day-row {
  display: flex;
  background-color: var(--timeline-header-background-color);
  color: var(--header-text-color);
  /* border-bottom: 1px solid var(--border-color); if needed */
}

/* Günlük hücre (her gün) */
.timeline-header-day-cell {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  box-sizing: border-box;
}


/* src/components/Timeline/Timeline.css */
/* Ekleme: MasterHeader stili */

/* Kapsayıcı */
.master-header-container {
  display: flex;
  align-items: center;
  padding: 10px;

  background-color: var(--header-background-color);
  color: var(--header-text-color);

  /* eğer border vs. istersen
  border-bottom: 1px solid var(--border-color);
  */
}

/* Butonlar */
.master-header-btn {
  background-color: transparent;
  color: var(--header-text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.master-header-btn:hover {
  background-color: rgba(25, 118, 210, 0.2); /* Light tema hover */
}

.dark-mode .master-header-btn:hover {
  background-color: rgba(76, 175, 80, 0.2); /* Koyu tema hover */
}

.master-header-btn:focus {
  outline: none;
}

/* Select */
.master-header-select {
  margin-left: 10px;
  background-color: transparent;
  color: var(--header-text-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
}

.master-header-select:focus {
  outline: none;
}


/* Container */
.timeline-content-container {
  position: relative;
  width: 100%;
  height: auto; /* or as needed */
  display: flex;
  flex-direction: column;
}

/* Group container */
.timeline-group-container {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
}

/* Group header row */
.timeline-group-header-row {
  display: flex;
  margin-top: -0.08rem;
}

.timeline-group-header-cell {
  flex: 1;
  height: 2.58rem;
  background-color: var(--group-header-background-color);
  border: 1px solid var(--border-color);
  
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Resource row */
.timeline-resource-row {
  display: flex;
  position: relative;
  height: var(--cell-height, 40px);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}

/* Each day cell */
.timeline-cell {
  flex: 1;
  height: 100%;
  position: relative;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  box-sizing: border-box;
  cursor: pointer;
}

/* "selected" day cell */
.timeline-cell.selected {
  background-color: var(--timeline-cell-selected-bg, rgba(25,118,210,0.2));
}

/* Event */
.timeline-event {
  position: absolute;
  background-color: var(--timeline-event-background-color, #0093ce);
  color: var(--timeline-event-text-color, #fff);
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid var(--timeline-event-border-color, #fff);
  top: 5px; /* or a variable offset if you want */
  /* "left" and "width" are inline from JS */
}

/* Extend handle */
.timeline-event-extend-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  cursor: col-resize;
  z-index: 20;
}

/* Temp event (while creating) */
.timeline-temp-event {
  position: absolute;
  background-color: var(--timeline-new-event-background-color, #0093ce);
  color: var(--timeline-new-event-text-color, #fff);
  opacity: 0.7;
  border-radius: 20px;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  /* "left"/"width" from JS: " ...calculatePosition(tempEvent, dates)" */
  top: 5px;
}


---

##  🎨 🛡 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır.


🤝 Katkıda Bulunun
Projeyi geliştirmek veya bir hata bildirmek için aşağıdaki adımları izleyebilirsiniz:

Bu projeyi forklayın.
Yeni bir dal oluşturun: git checkout -b feature-isim
Değişikliklerinizi yapın.
Değişikliklerinizi gönderin: git push origin feature-isim
Pull Request oluşturun.
📞 İletişim
Sorularınız için ahmetkursadaydogan@gmail.com adresine ulaşabilirsiniz. Daha fazla bilgi için GitHub Issues sayfasını ziyaret edin.


📚 Kaynaklar ve Referanslar
React Documentation
React-Window
NPM AkfaTimeline

