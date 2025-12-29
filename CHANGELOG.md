# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.1] - 2025-12-29

### Fixed
- NPM publish hatası düzeltildi (versiyon çakışması)

## [2.2.0] - 2025-12-29

### Added
- **Disable Dates Feature**: Tarih aralıklarını devre dışı bırakma özelliği eklendi
  - `exclude` modu: Belirtilen tarihler disabled, diğerleri enabled
  - `include` modu: Belirtilen tarihler enabled, diğerleri disabled
  - Tekil tarih ve tarih aralığı desteği
  - YYYY-MM-DD ve dd/mm/yyyy format desteği
- **Custom Header Buttons**: Timeline header'ına özel butonlar ekleme özelliği
  - `showDefaultHeaderButtons` prop'u ile varsayılan butonları kontrol etme
  - `customHeaderButtons` prop'u ile özel butonlar ekleme
  - Her buton için icon, tooltip, disabled durumu desteği
- **Past Date Protection**: Geçmiş tarih koruması özelliği geliştirildi
  - Geçmiş tarihler disabled görünümde gösteriliyor
  - Geçmiş tarihlerde tıklama, drag&drop, event oluşturma engellendi
  - Event oluştururken geçmiş tarihlere uzaması engellendi
- **Event Alignment Mode**: Event hizalama modu iyileştirildi
  - `full` modunda son günün tamamı seçilebiliyor
  - Disabled tarihlerle uyumlu çalışıyor

### Changed
- `parseDate` fonksiyonu YYYY-MM-DD formatını destekliyor
- Geçmiş tarih koruması CSS'i disabled görünümüne güncellendi
- Event oluşturma mantığı disabled ve geçmiş tarihlerle uyumlu hale getirildi

### Fixed
- Event oluştururken disabled tarihlere uzaması engellendi
- Event oluştururken geçmiş tarihlere uzaması engellendi
- `full` modunda son enabled günün tamamı seçilebiliyor
- Disabled tarihlerde drag&drop engellendi
- Disabled tarihlerde context menu engellendi

## [2.1.0] - 2025-12-28

### Added
- Disable Dates özelliği eklendi

## [2.0.0] - 2025-12-27

### Added
- Daily View özelliği
- Saatlik rezervasyon desteği
- Event Icons & Badges
- Event Management
- Keyboard Shortcuts
- Loading State
- Cell Tooltip
- Cell Context Menu
- Weekend Highlighting
- Past Date Protection (temel)

## [1.1.1] - 2025-12-26

### Fixed
- Bug fixes ve iyileştirmeler

## [1.1.0] - 2025-12-25

### Added
- Daily View ve Saatlik Rezervasyon özellikleri eklendi

## [1.0.4] - 2025-12-24

### Added
- Indicator date özelliği eklendi

## [1.0.2] - 2025-12-23

### Initial Release
- Temel timeline özellikleri
- Drag & Drop
- Event extend
- Event create
- Light/Dark theme
- Zoom özelliği

