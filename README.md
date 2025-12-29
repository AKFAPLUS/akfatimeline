# AkfaTimeline - React Timeline Component

<div align="center">

![Version](https://img.shields.io/badge/version-2.1.0-blue.svg)
![React](https://img.shields.io/badge/react-^19.2.3-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Modern, özelleştirilebilir ve performanslı React Timeline bileşeni**

[Özellikler](#-özellikler) • [Kurulum](#-kurulum) • [Hızlı Başlangıç](#-hızlı-başlangıç) • [Dokümantasyon](#-dokümantasyon) • [Örnekler](#-örnekler)

</div>

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Kurulum](#-kurulum)
- [Hızlı Başlangıç](#-hızlı-başlangıç)
- [Dokümantasyon](#-dokümantasyon)
  - [Temel Props](#temel-props)
  - [Resources (Kaynaklar)](#resources-kaynaklar)
  - [Events (Etkinlikler)](#events-etkinlikler)
  - [Tarih Yönetimi](#tarih-yönetimi)
  - [Disable Dates (Tarih Devre Dışı Bırakma)](#disable-dates-tarih-devre-dışı-bırakma)
  - [Custom Header Buttons (Özel Header Butonları)](#custom-header-buttons-özel-header-butonları)
  - [Event Alignment Mode (Etkinlik Hizalama Modu)](#event-alignment-mode-etkinlik-hizalama-modu)
  - [Theme (Tema)](#theme-tema)
  - [Zoom (Yakınlaştırma)](#zoom-yakınlaştırma)
  - [Cell Tooltip (Hücre Tooltip)](#cell-tooltip-hücre-tooltip)
  - [Cell Context Menu (Hücre Bağlam Menüsü)](#cell-context-menu-hücre-bağlam-menüsü)
  - [Event Icons & Badges (Etkinlik İkonları ve Rozetler)](#event-icons--badges-etkinlik-ikonları-ve-rozetler)
  - [Event Management (Etkinlik Yönetimi)](#event-management-etkinlik-yönetimi)
  - [Keyboard Shortcuts (Klavye Kısayolları)](#keyboard-shortcuts-klavye-kısayolları)
  - [Loading State (Yükleme Durumu)](#loading-state-yükleme-durumu)
  - [Daily View (Günlük Görünüm)](#daily-view-günlük-görünüm)
  - [Weekend Highlighting (Hafta Sonu Vurgulama)](#weekend-highlighting-hafta-sonu-vurgulama)
  - [Past Date Protection (Geçmiş Tarih Koruması)](#past-date-protection-geçmiş-tarih-koruması)
- [Örnekler](#-örnekler)
- [API Referansı](#-api-referansı)
- [Katkıda Bulunma](#-katkıda-bulunma)

---

## ✨ Özellikler

- 🎨 **Glassmorphism Tema**: Modern, şeffaf cam efekti ile tasarım
- 🌓 **Light/Dark Mode**: Açık ve koyu tema desteği
- 📅 **Esnek Tarih Yönetimi**: Tarih formatları (Date, string, "dd/mm/yyyy", "YYYY-MM-DD")
- 🚫 **Disable Dates**: Tarih aralıklarını devre dışı bırakma (exclude/include modları)
- 🎯 **Event Yönetimi**: Drag & Drop, uzatma, oluşturma, silme, kopyalama
- 🎨 **Özelleştirilebilir Event Stilleri**: Her event için özel stil
- 🏷️ **Event Icons & Badges**: Event'lere ikon ve rozet ekleme
- 🔍 **Zoom**: Yakınlaştırma/uzaklaştırma desteği
- ⌨️ **Klavye Kısayolları**: Hızlı navigasyon ve işlemler
- 📱 **Touch Gestures**: Mobil cihazlarda swipe desteği
- 🎛️ **Custom Header Buttons**: Özel butonlar ekleme
- 📊 **Daily View**: Günlük detaylı görünüm
- 💡 **Cell Tooltips**: Hücrelerde özel tooltip'ler
- 🎪 **Context Menu**: Sağ tık menüsü
- ⚡ **Performans Optimizasyonu**: Memoization ve callback optimizasyonları

---

## 📦 Kurulum

```bash
npm install akfatimeline
```

veya

```bash
yarn add akfatimeline
```

---

## 🚀 Hızlı Başlangıç

```jsx
import React from 'react';
import Timeline from 'akfatimeline';
import 'akfatimeline/css'; // CSS'i import edin

const App = () => {
  const resources = [
    {
      groupName: "Odalar",
      resources: [
        { id: "room-101", name: "Oda 101" },
        { id: "room-102", name: "Oda 102" },
      ],
    },
  ];

  const events = [
    {
      id: "event-1",
      title: "Rezervasyon",
      startDate: new Date(2025, 0, 15),
      endDate: new Date(2025, 0, 18),
      resourceId: "room-101",
    },
  ];

  return (
    <Timeline
      resources={resources}
      events={events}
      programDate="2025-01-15"
      dayRange={30}
      themeType="dark"
    />
  );
};

export default App;
```

---

## 📚 Dokümantasyon

### Temel Props

#### `resources` (Zorunlu)
Timeline'da gösterilecek kaynaklar (odalar, araçlar, vb.).

**Format:**
```javascript
const resources = [
  {
    groupName: "Grup Adı", // Grup başlığı
    resources: [
      { id: "resource-1", name: "Kaynak 1" },
      { id: "resource-2", name: "Kaynak 2" },
    ],
  },
];
```

**Örnek:**
```javascript
const resources = [
  {
    groupName: "Luxury Rooms",
    resources: [
      { id: "lux-101", name: "Room 101" },
      { id: "lux-102", name: "Room 102" },
    ],
  },
  {
    groupName: "Deluxe Rooms",
    resources: [
      { id: "deluxe-201", name: "Room 201" },
      { id: "deluxe-202", name: "Room 202" },
    ],
  },
];
```

#### `events` (Zorunlu)
Timeline'da gösterilecek etkinlikler/rezervasyonlar.

**Format:**
```javascript
const events = [
  {
    id: "unique-id", // Benzersiz ID (zorunlu)
    title: "Event Başlığı", // Event başlığı (zorunlu)
    startDate: Date | string, // Başlangıç tarihi (zorunlu)
    endDate: Date | string, // Bitiş tarihi (zorunlu)
    resourceId: "resource-id", // Hangi kaynağa ait (zorunlu)
    // Opsiyonel alanlar:
    color: "#ff0000", // Özel renk
    description: "Açıklama",
    status: "completed" | "in-progress" | "cancelled",
    // ... diğer özel alanlar
  },
];
```

**Tarih Formatları:**
- `Date` objesi: `new Date(2025, 0, 15)`
- String (YYYY-MM-DD): `"2025-01-15"`
- String (dd/mm/yyyy): `"15/01/2025"`

**Örnek:**
```javascript
const events = [
  {
    id: "event-1",
    title: "3 Gece",
    startDate: new Date(2025, 0, 15),
    endDate: new Date(2025, 0, 18),
    resourceId: "lux-101",
    color: "#3b82f6",
  },
  {
    id: "event-2",
    title: "Rezervasyon",
    startDate: "2025-01-20",
    endDate: "2025-01-25",
    resourceId: "lux-102",
    status: "in-progress",
  },
];
```

#### `programDate` (Opsiyonel)
Timeline'ın başlangıç tarihi.

**Format:** `string` (YYYY-MM-DD) veya `Date`

**Varsayılan:** Bugünün tarihi

**Örnek:**
```javascript
programDate="2025-01-15"
// veya
programDate={new Date(2025, 0, 15)}
```

#### `dayRange` (Opsiyonel)
Ekranda gösterilecek gün sayısı.

**Format:** `number`

**Varsayılan:** `30`

**Örnek:**
```javascript
const [dayRange, setDayRange] = useState(30);

<Timeline
  dayRange={dayRange}
  setDayRange={setDayRange}
/>
```

#### `themeType` (Opsiyonel)
Tema tipi.

**Format:** `"light"` | `"dark"`

**Varsayılan:** `"light"`

**Örnek:**
```javascript
<Timeline themeType="dark" />
```

---

### Resources (Kaynaklar)

#### `resourceSettings` (Opsiyonel)
Kaynak görünüm ayarları.

**Format:**
```javascript
{
  showIdAsName: boolean, // ID'yi isim olarak göster
  isGrouped: boolean,    // Gruplu gösterim
  isCollapsible: boolean // Grupları açıp kapatma
}
```

**Varsayılan:**
```javascript
{
  showIdAsName: false,
  isGrouped: true,
  isCollapsible: true,
}
```

**Örnek:**
```javascript
<Timeline
  resourceSettings={{
    showIdAsName: false,
    isGrouped: true,
    isCollapsible: true,
  }}
/>
```

#### `resourceHeaderContent` (Opsiyonel)
Kaynak başlık içeriği. String veya React component olabilir.

**Format:** `string` | `React.Component`

**Varsayılan:** `"Akfa Timeline"`

**Örnek:**
```javascript
// String
<Timeline resourceHeaderContent="Rezervasyonlar" />

// React Component
<Timeline
  resourceHeaderContent={
    <AutocompleteSelect
      options={[...]}
      onChange={handleChange}
    />
  }
/>
```

---

### Events (Etkinlikler)

#### `eventsDragOn` (Opsiyonel)
Event'leri sürükle-bırak özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `true`

#### `eventsExtendOn` (Opsiyonel)
Event'leri uzatma özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `true`

#### `createNewEventOn` (Opsiyonel)
Yeni event oluşturma özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `true`

#### `onDragInfo` (Opsiyonel)
Event sürüklendiğinde çağrılacak callback.

**Format:** `(dragInfo) => void`

**Örnek:**
```javascript
const handleDragInfo = (dragInfo) => {
  console.log("Event sürüklendi:", dragInfo);
  // dragInfo: { eventId, newResourceId, newStartDate, newEndDate }
};

<Timeline onDragInfo={handleDragInfo} />
```

#### `onExtendInfo` (Opsiyonel)
Event uzatıldığında çağrılacak callback.

**Format:** `(extendInfo) => void`

**Örnek:**
```javascript
const handleExtendInfo = (extendInfo) => {
  console.log("Event uzatıldı:", extendInfo);
  // extendInfo: { eventId, newEndDate }
};

<Timeline onExtendInfo={handleExtendInfo} />
```

#### `onCreateEventInfo` (Opsiyonel)
Yeni event oluşturulduğunda çağrılacak callback.

**Format:** `(newEvent) => void`

**Örnek:**
```javascript
const handleCreateEventInfo = (newEvent) => {
  console.log("Yeni event:", newEvent);
  // newEvent: { id, title, startDate, endDate, resourceId }
};

<Timeline onCreateEventInfo={handleCreateEventInfo} />
```

#### `onEventClick` (Opsiyonel)
Event'e tıklandığında çağrılacak callback.

**Format:** `(event, eventObject) => void`

**Örnek:**
```javascript
const handleEventClick = (event, e) => {
  console.log("Event tıklandı:", event);
  // event: Event objesi
  // e: React event objesi
};

<Timeline onEventClick={handleEventClick} />
```

#### `onEventRightClick` (Opsiyonel)
Event'e sağ tıklandığında çağrılacak callback.

**Format:** `(event, eventObject) => void`

#### `eventStyleResolver` (Opsiyonel)
Her event için özel stil döndüren fonksiyon.

**Format:** `(event) => object`

**Örnek:**
```javascript
const eventStyleResolver = (event) => {
  switch (event.status) {
    case "completed":
      return {
        backgroundColor: "#28a745",
        color: "#fff",
        border: "1px solid #28a745",
      };
    case "in-progress":
      return {
        backgroundColor: "#ffc107",
        color: "#000",
        border: "1px solid #ffc107",
      };
    default:
      return {};
  }
};

<Timeline eventStyleResolver={eventStyleResolver} />
```

#### `tempEventStyle` (Opsiyonel)
Yeni oluşturulan event'in geçici stili.

**Format:** `object`

**Örnek:**
```javascript
<Timeline
  tempEventStyle={{
    backgroundColor: "rgba(235, 0, 235, 0.8)",
    color: "#fff",
    borderRadius: "40px",
  }}
/>
```

---

### Tarih Yönetimi

#### `onToday` (Opsiyonel)
"Bugün" butonuna tıklandığında çağrılacak callback.

**Format:** `() => void`

#### `onAdvance` (Opsiyonel)
"5 Gün İleri" butonuna tıklandığında çağrılacak callback.

**Format:** `() => void`

#### `onRetreat` (Opsiyonel)
"5 Gün Geri" butonuna tıklandığında çağrılacak callback.

**Format:** `() => void`

#### `onMonthAdvance` (Opsiyonel)
"1 Ay İleri" butonuna tıklandığında çağrılacak callback.

**Format:** `() => void`

#### `onMonthRetreat` (Opsiyonel)
"1 Ay Geri" butonuna tıklandığında çağrılacak callback.

**Format:** `() => void`

**Örnek:**
```javascript
const handleToday = () => {
  const today = new Date();
  today.setDate(today.getDate() - 3);
  setProgramDate(today.toISOString().split('T')[0]);
};

const handleAdvance = () => {
  const currentDate = new Date(programDate);
  currentDate.setDate(currentDate.getDate() + 5);
  setProgramDate(currentDate.toISOString().split('T')[0]);
};

<Timeline
  programDate={programDate}
  onToday={handleToday}
  onAdvance={handleAdvance}
  onRetreat={handleRetreat}
  onMonthAdvance={handleMonthAdvance}
  onMonthRetreat={handleMonthRetreat}
/>
```

---

### Disable Dates (Tarih Devre Dışı Bırakma)

Belirli tarihleri veya tarih aralıklarını devre dışı bırakma özelliği. İki mod destekler: `exclude` ve `include`.

#### `disableDates` (Opsiyonel)

**Format:**
```javascript
{
  mode: 'exclude' | 'include',
  dates: Array<string | Date>,      // Tekil tarihler
  ranges: Array<{                   // Tarih aralıkları
    start: string | Date,
    end: string | Date
  }>
}
```

**Modlar:**
- `exclude`: Belirtilen tarihler disabled, diğerleri enabled
- `include`: Belirtilen tarihler enabled, diğerleri disabled

**Tarih Formatları:**
- String (YYYY-MM-DD): `"2025-01-15"`
- String (dd/mm/yyyy): `"15/01/2025"`
- Date objesi: `new Date(2025, 0, 15)`

**Örnek 1: Belirli tarihleri disabled yap**
```javascript
const disableDates = {
  mode: 'exclude',
  dates: [
    '2025-01-20',
    new Date(2025, 0, 25),
  ],
  ranges: [
    { start: '2025-01-15', end: '2025-01-18' },
  ],
};

<Timeline disableDates={disableDates} />
```

**Örnek 2: Sadece belirli tarihleri enabled yap**
```javascript
const disableDates = {
  mode: 'include',
  ranges: [
    { start: '2025-12-26', end: '2025-12-30' },
    { start: '2026-01-06', end: '2026-01-10' },
  ],
};

<Timeline disableDates={disableDates} />
// Sadece 26-30 Aralık ve 6-10 Ocak enabled, diğerleri disabled
```

**Özellikler:**
- Disabled tarihler blok görünümde gösterilir
- Disabled tarihlerde tıklama engellenir
- Disabled tarihlere event taşınamaz
- Disabled tarihlerde event oluşturulamaz
- Event oluştururken disabled tarihlere uzaması engellenir

---

### Custom Header Buttons (Özel Header Butonları)

Timeline header'ına özel butonlar ekleme ve varsayılan butonları kontrol etme.

#### `showDefaultHeaderButtons` (Opsiyonel)
Varsayılan butonları göster/gizle.

**Format:** `boolean`

**Varsayılan:** `true`

#### `customHeaderButtons` (Opsiyonel)
Özel butonlar array'i.

**Format:**
```javascript
Array<{
  id: string,                    // Benzersiz ID (zorunlu)
  label: string,                 // Buton metni (zorunlu)
  onClick: () => void,           // Tıklama handler'ı (zorunlu)
  icon?: string,                 // İkon (opsiyonel)
  disabled?: boolean,            // Disabled durumu (opsiyonel)
  className?: string,            // Özel CSS class (opsiyonel)
  tooltip?: string,             // Tooltip metni (opsiyonel)
}>
```

**Örnek:**
```javascript
const customHeaderButtons = [
  {
    id: 'goto-dec-26',
    label: '26-30 Aralık',
    icon: '📅',
    onClick: () => {
      setProgramDate('2025-12-26');
    },
    tooltip: '26-30 Aralık 2025 tarihine git',
  },
  {
    id: 'goto-jan-6',
    label: '6-10 Ocak',
    icon: '📅',
    onClick: () => {
      setProgramDate('2026-01-06');
    },
  },
];

<Timeline
  showDefaultHeaderButtons={true}  // Varsayılan butonları göster
  customHeaderButtons={customHeaderButtons}  // Özel butonları ekle
/>

// Veya sadece özel butonları göster
<Timeline
  showDefaultHeaderButtons={false}  // Varsayılan butonları gizle
  customHeaderButtons={customHeaderButtons}
/>
```

---

### Event Alignment Mode (Etkinlik Hizalama Modu)

Event'lerin timeline'da nasıl hizalanacağını belirler.

#### `eventAlignmentMode` (Opsiyonel)

**Format:** `"center"` | `"full"`

**Varsayılan:** `"center"`

**Modlar:**
- `"center"`: Event'ler gün ortasından başlar ve gün ortasında biter
- `"full"`: Event'ler gün başından başlar ve gün sonunda biter

**Örnek:**
```javascript
<Timeline eventAlignmentMode="full" />
```

**Fark:**
- `center` modunda: 1-5 Ocak arası event, 1 Ocak ortasından 5 Ocak ortasına kadar uzanır
- `full` modunda: 1-5 Ocak arası event, 1 Ocak başından 5 Ocak sonuna kadar uzanır

---

### Theme (Tema)

#### `themeType` (Opsiyonel)

**Format:** `"light"` | `"dark"`

**Varsayılan:** `"light"`

**Özellikler:**
- Glassmorphism tasarım
- Şeffaf cam efekti
- Backdrop filter blur
- Light ve dark mode desteği

**Örnek:**
```javascript
const [themeType, setThemeType] = useState("dark");

<Timeline themeType={themeType} />
```

---

### Zoom (Yakınlaştırma)

#### `zoomLevel` (Opsiyonel)
Zoom seviyesi.

**Format:** `number`

**Varsayılan:** `1.0` (%100)

#### `setZoomLevel` (Opsiyonel)
Zoom seviyesini değiştiren fonksiyon.

**Format:** `(level: number) => void` veya `React.Dispatch<React.SetStateAction<number>>`

#### `zoomOn` (Opsiyonel)
Zoom özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `true`

#### `minZoomLevel` (Opsiyonel)
Minimum zoom seviyesi.

**Format:** `number`

**Varsayılan:** `0.5` (%50)

#### `maxZoomLevel` (Opsiyonel)
Maksimum zoom seviyesi.

**Format:** `number`

**Varsayılan:** `3.0` (%300)

#### `zoomStep` (Opsiyonel)
Her zoom adımında değişecek miktar.

**Format:** `number`

**Varsayılan:** `0.25`

**Örnek:**
```javascript
const [zoomLevel, setZoomLevel] = useState(1.0);

<Timeline
  zoomLevel={zoomLevel}
  setZoomLevel={setZoomLevel}
  zoomOn={true}
  minZoomLevel={0.5}
  maxZoomLevel={3.0}
  zoomStep={0.25}
/>
```

---

### Cell Tooltip (Hücre Tooltip)

Hücrelerin üzerine gelindiğinde gösterilecek özel tooltip'ler.

#### `cellTooltipOn` (Opsiyonel)
Cell tooltip'lerini aktif et.

**Format:** `boolean`

**Varsayılan:** `false`

#### `cellTooltipResolver` (Opsiyonel)
Her hücre için tooltip içeriği döndüren fonksiyon.

**Format:** `(resource, dateObj) => React.ReactNode | string | null`

**Örnek:**
```javascript
const getCellTooltipContent = (resource, dateObj) => {
  const date = new Date(dateObj.fullDate);
  const dateString = date.toISOString().split('T')[0];
  
  // Fiyat hesaplama
  const price = calculatePrice(resource.id, dateString);
  
  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>{resource.name}</div>
      <div>{dateObj.display}</div>
      <div>Fiyat: {price}₺</div>
    </div>
  );
};

<Timeline
  cellTooltipOn={true}
  cellTooltipResolver={getCellTooltipContent}
/>
```

---

### Cell Context Menu (Hücre Bağlam Menüsü)

Hücrelere sağ tıklandığında gösterilecek menü.

#### `cellContextMenuOn` (Opsiyonel)
Cell context menu'yu aç/kapa.

**Format:** `boolean`

**Varsayılan:** `false`

#### `cellContextMenuItems` (Opsiyonel)
Context menu öğeleri.

**Format:**
```javascript
Array<{
  id: string,                    // Benzersiz ID (zorunlu)
  label: string,                // Menü metni (zorunlu)
  icon?: string,                // İkon (opsiyonel)
  onClick: (resource, date) => void,  // Tıklama handler'ı (zorunlu)
  disabled?: boolean,           // Disabled durumu (opsiyonel)
  separator?: boolean,          // Ayırıcı çizgi (opsiyonel)
  danger?: boolean,            // Tehlikeli işlem (kırmızı renk) (opsiyonel)
  tooltip?: string,            // Tooltip (opsiyonel)
  hidden?: boolean,             // Gizle (opsiyonel)
}>
```

**Örnek:**
```javascript
const cellContextMenuItems = [
  {
    id: 'daily-timeline',
    label: 'Günlük Timeline Görüntüsü Oluştur',
    icon: '📊',
    onClick: (resource, date) => {
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
      alert(`"${resource.name}" için ${dateObj.toLocaleDateString('tr-TR')} tarihinde yeni rezervasyon oluşturulacak.`);
    },
  },
];

<Timeline
  cellContextMenuOn={true}
  cellContextMenuItems={cellContextMenuItems}
  onCellContextMenu={(resource, date, event) => {
    console.log('Context menu opened:', { resource, date, event });
  }}
/>
```

---

### Event Icons & Badges (Etkinlik İkonları ve Rozetler)

Event'lere ikon ve rozet ekleme özelliği.

#### `eventIconsOn` (Opsiyonel)
Event ikonlarını göster/gizle.

**Format:** `boolean`

**Varsayılan:** `false`

#### `eventIconResolver` (Opsiyonel)
Her event için ikon tipi döndüren fonksiyon.

**Format:** `(event) => string | null`

**Desteklenen İkon Tipleri:**
- `'balance-warning'`: Bakiye uyarısı
- `'important-note'`: Önemli not
- `'payment-pending'`: Ödeme bekliyor
- `'completed'`: Tamamlandı
- `'in-progress'`: Devam ediyor
- `'cancelled'`: İptal
- `'pending'`: Beklemede

**Örnek:**
```javascript
const eventIconResolver = (event) => {
  if (event.balanceWarning || (event.balance && event.balance > 0)) {
    return 'balance-warning';
  }
  if (event.hasImportantNote || event.note) {
    return 'important-note';
  }
  if (event.paymentPending) {
    return 'payment-pending';
  }
  switch (event.status) {
    case "Completed":
      return 'completed';
    case "In-progress":
      return 'in-progress';
    case "Cancelled":
      return 'cancelled';
    default:
      return null;
  }
};

<Timeline
  eventIconsOn={true}
  eventIconResolver={eventIconResolver}
/>
```

#### `eventBadgesOn` (Opsiyonel)
Event badge'lerini göster/gizle.

**Format:** `boolean`

**Varsayılan:** `false`

#### `eventBadgeResolver` (Opsiyonel)
Her event için badge bilgisi döndüren fonksiyon.

**Format:** `(event) => { text, type, position, style? } | null`

**Örnek:**
```javascript
const eventBadgeResolver = (event) => {
  if (event.isUrgent) {
    return {
      text: 'ACİL',
      type: 'urgent',
      position: 'top-right',
    };
  }
  if (event.isImportant) {
    return {
      text: 'ÖNEMLİ',
      type: 'important',
      position: 'top-right',
    };
  }
  if (event.isNew) {
    return {
      text: 'YENİ',
      type: 'new',
      position: 'top-left',
    };
  }
  return null;
};

<Timeline
  eventBadgesOn={true}
  eventBadgeResolver={eventBadgeResolver}
/>
```

---

### Event Management (Etkinlik Yönetimi)

Event'leri yönetme özellikleri (silme, güncelleme, kopyalama, yapıştırma).

#### `eventManagementOn` (Opsiyonel)
Event yönetimi özelliklerini aktif et.

**Format:** `boolean`

**Varsayılan:** `false`

#### `onEventDelete` (Opsiyonel)
Event silindiğinde çağrılacak callback.

**Format:** `(eventIds: string[]) => void`

#### `onEventUpdate` (Opsiyonel)
Event güncellendiğinde çağrılacak callback.

**Format:** `(events: Event[]) => void`

#### `onEventCopy` (Opsiyonel)
Event kopyalandığında çağrılacak callback.

**Format:** `(eventIds: string[]) => void`

#### `onEventPaste` (Opsiyonel)
Event yapıştırıldığında çağrılacak callback.

**Format:** `(events: Event[]) => void`

**Özellikler:**
- Çift tıklama ile event düzenleme modal'ı açılır
- Sağ tıklama ile event seçimi
- Ctrl+Click ile çoklu seçim
- Delete tuşu ile seçili event'leri silme
- Ctrl+C ile kopyalama
- Ctrl+V ile yapıştırma

**Örnek:**
```javascript
<Timeline
  eventManagementOn={true}
  onEventDelete={(eventIds) => {
    console.log('Silinen event\'ler:', eventIds);
  }}
  onEventUpdate={(events) => {
    console.log('Güncellenen event\'ler:', events);
  }}
  onEventCopy={(eventIds) => {
    console.log('Kopyalanan event\'ler:', eventIds);
  }}
  onEventPaste={(events) => {
    console.log('Yapıştırılan event\'ler:', events);
  }}
/>
```

---

### Keyboard Shortcuts (Klavye Kısayolları)

Klavye kısayolları ile hızlı navigasyon ve işlemler.

#### `keyboardShortcutsOn` (Opsiyonel)
Keyboard shortcuts'ları aktif et.

**Format:** `boolean`

**Varsayılan:** `false`

#### `keyboardShortcutsConfig` (Opsiyonel)
Klavye kısayolu callback'leri.

**Format:**
```javascript
{
  onNavigateLeft?: () => void,
  onNavigateRight?: () => void,
  onNavigateUp?: () => void,
  onNavigateDown?: () => void,
  onDelete?: () => void,
  onUndo?: () => void,
  onRedo?: () => void,
  onCopy?: () => void,
  onPaste?: () => void,
  onZoomIn?: () => void,
  onZoomOut?: () => void,
}
```

#### `keyboardShortcutsKeyMap` (Opsiyonel)
Özelleştirilebilir tuş haritası.

**Format:** `object`

**Örnek:**
```javascript
<Timeline
  keyboardShortcutsOn={true}
  keyboardShortcutsConfig={{
    onNavigateLeft: () => handleRetreat(),
    onNavigateRight: () => handleAdvance(),
    onDelete: () => {
      // Seçili event'leri sil
    },
  }}
/>
```

---

### Loading State (Yükleme Durumu)

Timeline yüklenirken gösterilecek loading göstergesi.

#### `isLoading` (Opsiyonel)
Timeline yükleniyor mu?

**Format:** `boolean`

**Varsayılan:** `false`

#### `loadingType` (Opsiyonel)
Loading tipi.

**Format:** `'spinner'` | `'dots'` | `'pulse'`

**Varsayılan:** `'spinner'`

**Örnek:**
```javascript
const [isLoading, setIsLoading] = useState(false);

<Timeline
  isLoading={isLoading}
  loadingType="spinner"
/>
```

---

### Daily View (Günlük Görünüm)

Belirli bir kaynak ve tarih için günlük detaylı görünüm.

#### `dailyViewOn` (Opsiyonel)
Daily view özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `true`

**Kullanım:**
Cell context menu'den "Günlük Timeline Görüntüsü Oluştur" seçeneği ile açılır.

---

### Weekend Highlighting (Hafta Sonu Vurgulama)

Hafta sonlarını farklı renkte gösterme.

#### `highlightWeekends` (Opsiyonel)
Hafta sonlarını farklı renkte göster.

**Format:** `boolean`

**Varsayılan:** `false`

**Örnek:**
```javascript
<Timeline highlightWeekends={true} />
```

---

### Past Date Protection (Geçmiş Tarih Koruması)

Geçmiş tarihlere rezervasyon oluşturmayı engelleme.

#### `preventPastEvents` (Opsiyonel)
Geçmiş tarihlere rezervasyon oluşturmayı engelle.

**Format:** `boolean`

**Varsayılan:** `false`

#### `minDate` (Opsiyonel)
Minimum tarih (eğer belirtilmezse indicatorDate kullanılır).

**Format:** `Date` | `string`

**Örnek:**
```javascript
<Timeline
  preventPastEvents={true}
  minDate={new Date()} // Bugünden önceki tarihler engellenir
/>
```

---

### Diğer Props

#### `masterHeaderView` (Opsiyonel)
Master header'ı göster/gizle.

**Format:** `boolean`

**Varsayılan:** `true`

#### `indicatorOn` (Opsiyonel)
Bugünün tarihini gösteren indicator'ı göster/gizle.

**Format:** `boolean`

**Varsayılan:** `false`

#### `indicatorDate` (Opsiyonel)
Indicator'ın gösterileceği tarih.

**Format:** `Date` | `string`

**Varsayılan:** `new Date()`

#### `horizontalScrollOn` (Opsiyonel)
Yatay scroll özelliğini aç/kapa.

**Format:** `boolean`

**Varsayılan:** `false`

#### `eventTooltipOn` (Opsiyonel)
Event tooltip'lerini göster/gizle.

**Format:** `boolean`

**Varsayılan:** `true`

#### `tooltipComponent` (Opsiyonel)
Özelleştirilebilir Tooltip bileşeni.

**Format:** `React.Component`

**Örnek:**
```javascript
import EventTooltip from 'akfatimeline/EventTooltip';

<Timeline
  eventTooltipOn={true}
  tooltipComponent={EventTooltip}
/>
```

---

## 📖 Örnekler

### Basit Kullanım

```jsx
import React from 'react';
import Timeline from 'akfatimeline';
import 'akfatimeline/css';

const App = () => {
  const resources = [
    {
      groupName: "Odalar",
      resources: [
        { id: "room-101", name: "Oda 101" },
        { id: "room-102", name: "Oda 102" },
      ],
    },
  ];

  const events = [
    {
      id: "event-1",
      title: "Rezervasyon",
      startDate: new Date(2025, 0, 15),
      endDate: new Date(2025, 0, 18),
      resourceId: "room-101",
    },
  ];

  return (
    <Timeline
      resources={resources}
      events={events}
      programDate="2025-01-15"
      dayRange={30}
      themeType="dark"
    />
  );
};

export default App;
```

### Gelişmiş Kullanım

```jsx
import React, { useState } from 'react';
import Timeline from 'akfatimeline';
import EventTooltip from 'akfatimeline/EventTooltip';
import 'akfatimeline/css';

const App = () => {
  const [programDate, setProgramDate] = useState('2025-01-15');
  const [dayRange, setDayRange] = useState(30);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [themeType, setThemeType] = useState('dark');

  const resources = [
    {
      groupName: "Luxury Rooms",
      resources: [
        { id: "lux-101", name: "Room 101" },
        { id: "lux-102", name: "Room 102" },
      ],
    },
  ];

  const events = [
    {
      id: "event-1",
      title: "3 Gece",
      startDate: new Date(2025, 0, 15),
      endDate: new Date(2025, 0, 18),
      resourceId: "lux-101",
      status: "in-progress",
    },
  ];

  const disableDates = {
    mode: 'exclude',
    ranges: [
      { start: '2025-01-20', end: '2025-01-25' },
    ],
  };

  const customHeaderButtons = [
    {
      id: 'goto-jan-15',
      label: '15 Ocak',
      icon: '📅',
      onClick: () => setProgramDate('2025-01-15'),
    },
  ];

  const eventStyleResolver = (event) => {
    switch (event.status) {
      case "completed":
        return { backgroundColor: "#28a745", color: "#fff" };
      case "in-progress":
        return { backgroundColor: "#ffc107", color: "#000" };
      default:
        return {};
    }
  };

  return (
    <Timeline
      resources={resources}
      events={events}
      programDate={programDate}
      dayRange={dayRange}
      setDayRange={setDayRange}
      themeType={themeType}
      zoomLevel={zoomLevel}
      setZoomLevel={setZoomLevel}
      disableDates={disableDates}
      showDefaultHeaderButtons={true}
      customHeaderButtons={customHeaderButtons}
      eventStyleResolver={eventStyleResolver}
      eventAlignmentMode="full"
      highlightWeekends={true}
      preventPastEvents={true}
      cellTooltipOn={true}
      cellTooltipResolver={(resource, date) => `Fiyat: 150₺`}
      eventTooltipOn={true}
      tooltipComponent={EventTooltip}
      onEventClick={(event) => console.log('Event clicked:', event)}
      onDragInfo={(info) => console.log('Event dragged:', info)}
      onExtendInfo={(info) => console.log('Event extended:', info)}
      onCreateEventInfo={(event) => console.log('Event created:', event)}
    />
  );
};

export default App;
```

---

## 📋 API Referansı

### Timeline Component Props

| Prop | Tip | Varsayılan | Açıklama |
|------|-----|------------|----------|
| `resources` | `Array` | - | Kaynaklar (zorunlu) |
| `events` | `Array` | - | Etkinlikler (zorunlu) |
| `programDate` | `string \| Date` | Bugün | Başlangıç tarihi |
| `dayRange` | `number` | `30` | Gösterilecek gün sayısı |
| `themeType` | `"light" \| "dark"` | `"light"` | Tema tipi |
| `eventAlignmentMode` | `"center" \| "full"` | `"center"` | Event hizalama modu |
| `disableDates` | `object` | `null` | Disable dates config |
| `showDefaultHeaderButtons` | `boolean` | `true` | Varsayılan butonları göster |
| `customHeaderButtons` | `Array` | `[]` | Özel header butonları |
| `zoomLevel` | `number` | `1.0` | Zoom seviyesi |
| `zoomOn` | `boolean` | `true` | Zoom özelliğini aç/kapa |
| `cellTooltipOn` | `boolean` | `false` | Cell tooltip'leri aç/kapa |
| `cellContextMenuOn` | `boolean` | `false` | Cell context menu aç/kapa |
| `eventIconsOn` | `boolean` | `false` | Event ikonlarını göster |
| `eventBadgesOn` | `boolean` | `false` | Event badge'lerini göster |
| `eventManagementOn` | `boolean` | `false` | Event yönetimi aç/kapa |
| `keyboardShortcutsOn` | `boolean` | `false` | Klavye kısayolları aç/kapa |
| `isLoading` | `boolean` | `false` | Loading durumu |
| `highlightWeekends` | `boolean` | `false` | Hafta sonu vurgulama |
| `preventPastEvents` | `boolean` | `false` | Geçmiş tarih koruması |

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen [GitHub Issues](https://github.com/AKFAPLUS/akfatimeline/issues) üzerinden geri bildirimde bulunun.

---

## 📄 Lisans

MIT License

---

## 👨‍💻 Yazar

**Ahmet Kürşad Aydoğan**

- GitHub: [@AKFAPLUS](https://github.com/AKFAPLUS)
- Repository: [akfatimeline](https://github.com/AKFAPLUS/akfatimeline)

---

## 🙏 Teşekkürler

AkfaTimeline'ı kullandığınız için teşekkür ederiz! Sorularınız için [GitHub Issues](https://github.com/AKFAPLUS/akfatimeline/issues) üzerinden iletişime geçebilirsiniz.
