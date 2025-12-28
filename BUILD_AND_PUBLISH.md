# Build ve Publish Rehberi

## Build Alma

NPM'e publish etmeden önce mutlaka build alınmalıdır!

### 1. Build Komutu

```powershell
npm run build
```

Bu komut:
- Webpack ile production build alır
- `dist/` klasörüne build edilmiş dosyaları oluşturur
- `Timeline.js` dosyasını oluşturur

### 2. Build Kontrolü

Build'den sonra `dist/` klasörünün oluştuğunu kontrol edin:

```powershell
# dist klasörünü kontrol et
dir dist
```

## Publish Öncesi Kontrol Listesi

- [ ] `npm run build` komutu çalıştırıldı
- [ ] `dist/` klasörü oluşturuldu
- [ ] `dist/Timeline.js` dosyası var
- [ ] NPM access token oluşturuldu ve ayarlandı
- [ ] `npm whoami` komutu çalışıyor
- [ ] `package.json` versiyonu güncel (1.1.1)

## Tam Publish Süreci

```powershell
# 1. Build al
npm run build

# 2. Build'i kontrol et
dir dist

# 3. NPM token'ı ayarla (eğer yapmadıysanız)
npm config set //registry.npmjs.org/:_authToken "npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 4. Publish et
npm publish
```

## Build Hataları

Eğer build sırasında hata alırsanız:

1. **Node modules'ü yeniden yükleyin:**
   ```powershell
   npm install
   ```

2. **Cache'i temizleyin:**
   ```powershell
   npm cache clean --force
   ```

3. **Tekrar build alın:**
   ```powershell
   npm run build
   ```

## Package.json Yapılandırması

- **main:** `dist/Timeline.js` - CommonJS için
- **module:** `dist/Timeline.js` - ES6 modules için
- **files:** Publish edilecek dosyalar (dist, src, README.md, CHANGELOG.md)

## .npmignore

`.npmignore` dosyası şunları exclude eder:
- `build/` klasörü (demo build)
- `public/` klasörü
- Geliştirme dosyaları
- Test dosyaları

**Önemli:** `dist/` ve `src/` klasörleri publish edilir!

