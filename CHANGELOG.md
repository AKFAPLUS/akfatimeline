# Changelog
Tüm önemli değişiklikler bu dosyada belgelenir.

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
