# Changelog
Tüm önemli değişiklikler bu dosyada belgelenir.

## [1.2.0] - 2025-01-XX

### Changed
- **Package.json Export Yapısı İyileştirildi:**
  - `main` ve `module` field'ları `src/library.js` olarak güncellendi
  - Daha detaylı `exports` field'ı eklendi
  - Her component için ayrı export path'leri eklendi:
    - `akfatimeline/Timeline` - Ana Timeline component
    - `akfatimeline/DailyView` - Daily View component
    - `akfatimeline/ContextMenu` - Context Menu component
    - `akfatimeline/EventDetailModal` - Event Detail Modal component
    - `akfatimeline/EventIcon` - Event Icon component
    - `akfatimeline/EventBadge` - Event Badge component
    - `akfatimeline/LoadingSpinner` - Loading Spinner component
    - `akfatimeline/AutocompleteSelect` - Autocomplete Select component
  - CSS import için kısayol: `akfatimeline/css`
- **Import Kolaylığı:**
  - Artık sadece `import Timeline from 'akfatimeline'` yeterli
  - CSS için: `import 'akfatimeline/css'` veya `import 'akfatimeline/components/Timeline/Timeline.css'`
  - Named exports: `import { DailyView, ContextMenu } from 'akfatimeline'`

### Fixed
- Vite ve diğer modern bundler'larla uyumluluk sorunları düzeltildi
- ES module import sorunları çözüldü
- Default export sorunları giderildi

## [1.1.1] - 2024-12-XX

### Fixed
- Build sırasındaki orphan modules uyarıları giderildi
- Webpack config optimizasyonları

## [1.1.0] - 2024-12-XX

### Added
- **Daily View Feature**: Saatlik rezervasyon görünümü eklendi
  - Sağ tık menüsünden "Günlük Timeline Görüntüsü Oluştur" seçeneği
  - 24 saatlik (0-23) detaylı timeline görünümü
  - Saat bazlı randevu oluşturma ve yönetimi
  - Animasyonlu açılış efekti (hücre büyüme animasyonu)
  - Resource adı ve tarih bilgisi gösterimi
- **Hourly Reservations**: Saatlik rezervasyon sistemi
  - Daily view'da oluşturulan saatlik rezervasyonlar
  - Ana timeline'da gruplanmış görünüm (aynı gündeki saatlik rezervasyonlar tek event olarak)
  - Özel görünüm (pembe tonları, saat ikonu)
  - Uzatılamaz ve taşınamaz özellikler
  - Sütun genişliklerini bozmayan kompakt tasarım
- **Context Menu Improvements**: 
  - Context menu pozisyon düzeltmeleri (mouse'a daha yakın)
  - Daily view entegrasyonu
- **Library Exports**: 
  - Yeni component'ler named export olarak eklendi (DailyView, ContextMenu, EventDetailModal, EventIcon, EventBadge, LoadingSpinner, AutocompleteSelect)

### Changed
- Saatlik rezervasyonlar için özel CSS stilleri
- Event rendering optimizasyonları
- Sütun genişlik kontrolü iyileştirmeleri

### Fixed
- Saatlik rezervasyonların sütun genişliklerini bozma sorunu düzeltildi
- Context menu pozisyon sorunları düzeltildi
- Event overflow ve text ellipsis sorunları düzeltildi

## [1.0.4] - 2025-01-XX
### Added
- **Event and Temporary Event Styling:**
  - `Event` ve `Geçici Event` stilleri artık `prop` olarak geçirilebiliyor. Bu sayede stil özelleştirmeleri kolaylaştırıldı.
- **Tooltip Styling:**
  - Tooltip stilleri de `prop` olarak özelleştirmeye açıldı.
- **Callback Enhancements:**
  - **`TimelineContent` Component:**
    - Drag-and-Drop işlemleri için `handleDropInfo` callback'i eklendi.
    - `onDragInfo`, `onExtendInfo`, ve `onCreateEventInfo` callback'leri destekleniyor.
    - `useEventDragDrop` hook'u yeniden yapılandırıldı; dışa dönük veri aktarımı kolaylaştırıldı.
    - Loglama ve hata ayıklama geliştirmeleri yapıldı.
  - **`useEventDragDrop` Hook:**
    - `handleDrop` fonksiyonuna yeni parametreler ve loglamalar eklendi.
    - `setDropInfo` üzerinden dışarıya bilgi aktarımı sağlandı.
  - **`MasterHeader` Component:**
    - Tarih formatlama `toISOString()` ile güncellendi.
    - `selectedDate` artık doğru zaman dilimine göre formatlanıyor.
    - Tarih seçicide manuel giriş engellendi.

### Fixed
- **Tooltip Issue:**
  - Uzatma modundayken açılan gereksiz tooltip sorunu giderildi.
- **Code Improvements:**
  - Gereksiz uyarılar temizlendi ve kod yeniden düzenlendi.
- **Performance:**
  - Drag-and-Drop ve Event Extend işlemlerinde daha verimli güncellemeler yapıldı.
  - Gereksiz render çağrıları minimize edildi.

### Removed
- **Manual Date Entry:**
  - Manuel giriş destekli `DatePicker` fonksiyonları devre dışı bırakıldı.
