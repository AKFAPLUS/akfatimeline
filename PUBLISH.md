# NPM ve GitHub'a Yükleme Rehberi

## Ön Hazırlık

1. **Git durumunu kontrol edin:**
```bash
git status
```

2. **Değişiklikleri commit edin:**
```bash
git add .
git commit -m "feat: Daily View ve Saatlik Rezervasyon özellikleri eklendi (v1.1.0)"
```

3. **GitHub'a push edin:**
```bash
git push origin main
# veya
git push origin master
```

## NPM'e Yükleme

### 1. NPM Girişi
```bash
npm login
```
Kullanıcı adı, şifre ve email adresinizi girin.

### 2. Versiyon Kontrolü
```bash
npm version patch   # 1.1.0 -> 1.1.1 (patch)
npm version minor   # 1.1.0 -> 1.2.0 (minor)
npm version major   # 1.1.0 -> 2.0.0 (major)
```

**Not:** `package.json`'da versiyon zaten `1.1.0` olarak güncellendi. Eğer tekrar güncellemek isterseniz:
```bash
npm version 1.1.0
```

### 3. NPM'e Publish
```bash
npm publish
```

**Önemli:** İlk kez publish ediyorsanız:
```bash
npm publish --access public
```

### 4. Tag Oluşturma (Opsiyonel)
```bash
git tag v1.1.0
git push origin v1.1.0
```

## GitHub Release Oluşturma

1. GitHub repository'nize gidin
2. **Releases** sekmesine tıklayın
3. **"Create a new release"** butonuna tıklayın
4. **Tag version:** `v1.1.0`
5. **Release title:** `v1.1.0 - Daily View & Hourly Reservations`
6. **Description:** CHANGELOG.md'den ilgili bölümü kopyalayın
7. **"Publish release"** butonuna tıklayın

## Hızlı Komutlar (Tüm İşlemler)

```bash
# 1. Git commit ve push
git add .
git commit -m "feat: Daily View ve Saatlik Rezervasyon özellikleri eklendi (v1.1.0)"
git push origin main

# 2. NPM publish
npm publish

# 3. Git tag (opsiyonel)
git tag v1.1.0
git push origin v1.1.0
```

## Sorun Giderme

### NPM Login Sorunu
```bash
npm whoami  # Mevcut kullanıcıyı kontrol edin
npm logout  # Çıkış yapın
npm login   # Tekrar giriş yapın
```

### Versiyon Çakışması
Eğer aynı versiyon zaten yayınlanmışsa:
```bash
npm version patch  # Versiyonu artırın
npm publish
```

### Unpublish (Sadece 72 saat içinde)
```bash
npm unpublish akfatimeline@1.1.0
```

## Kontrol Komutları

```bash
# NPM'deki mevcut versiyonu kontrol et
npm view akfatimeline version

# Tüm versiyonları listele
npm view akfatimeline versions

# Package bilgilerini görüntüle
npm view akfatimeline
```

