# NPM Access Token Kurulum Rehberi (Adım Adım)

## Sorun
```
npm error 403 403 Forbidden - Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

## Çözüm: NPM Granular Access Token Oluşturma

### Adım 1: NPM Web Sitesine Gidin

1. Tarayıcınızda şu adrese gidin:
   ```
   https://www.npmjs.com/settings/[KULLANICI_ADINIZ]/tokens
   ```
   
   **Veya:**
   - https://www.npmjs.com → Sağ üstte profil ikonuna tıklayın
   - **"Access Tokens"** seçeneğine tıklayın

### Adım 2: Yeni Token Oluşturun

1. **"Generate New Token"** butonuna tıklayın
2. **Token Type:** **"Granular Access Token"** seçin (ÖNEMLİ!)
3. **Token Name:** `akfatimeline-publish` (veya istediğiniz bir isim)
4. **Expiration:** İstediğiniz süreyi seçin (örn: 90 days)
5. **Permissions (İzinler):**
   - ✅ **"Publish packages"** - İşaretleyin
   - ✅ **"Bypass two-factor authentication"** - İşaretleyin (ÇOK ÖNEMLİ!)
6. **Packages:** 
   - **"Select packages"** seçeneğini seçin
   - **"akfatimeline"** paketini seçin
7. **"Generate Token"** butonuna tıklayın

### Adım 3: Token'ı Kopyalayın

⚠️ **ÖNEMLİ:** Token'ı hemen kopyalayın! Bir daha gösterilmeyecek!

Token formatı şöyle olacak:
```
npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Adım 4: Token'ı NPM Config'e Ekleyin

PowerShell'de şu komutu çalıştırın (token'ı kendi token'ınızla değiştirin):

```powershell
npm config set //registry.npmjs.org/:_authToken "npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

**Örnek:**
```powershell
npm config set //registry.npmjs.org/:_authToken "npm_abc123def456ghi789jkl012mno345pqr678stu901vwx234yz"
```

### Adım 5: Token'ın Doğru Ayarlandığını Kontrol Edin

```powershell
npm whoami
```

Bu komut NPM kullanıcı adınızı göstermelidir.

### Adım 6: Tekrar Publish Edin

```powershell
npm publish
```

## Alternatif: .npmrc Dosyası Kullanma

Eğer token'ı config'e eklemek istemiyorsanız, proje klasöründe `.npmrc` dosyası oluşturabilirsiniz:

1. `akfatimeline` klasöründe `.npmrc` dosyası oluşturun
2. İçine şunu yazın (token'ı kendi token'ınızla değiştirin):
   ```
   //registry.npmjs.org/:_authToken=npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

**Not:** `.npmrc` dosyası zaten `.gitignore`'a eklendi, güvenli.

## Sorun Giderme

### Token çalışmıyorsa:

1. **Token'ın doğru kopyalandığından emin olun:**
   ```powershell
   npm config get //registry.npmjs.org/:_authToken
   ```

2. **Token'ı yeniden ayarlayın:**
   ```powershell
   npm config delete //registry.npmjs.org/:_authToken
   npm config set //registry.npmjs.org/:_authToken "npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

3. **Token'ın süresi dolmuş olabilir:**
   - NPM web sitesinden yeni token oluşturun

### Hala 403 hatası alıyorsanız:

1. **Token'da "Bypass two-factor authentication" seçeneğinin işaretli olduğundan emin olun**
2. **Token'ın "Publish packages" iznine sahip olduğundan emin olun**
3. **Token'ın doğru paket için oluşturulduğundan emin olun (akfatimeline)**

## Hızlı Kontrol Listesi

- [ ] NPM web sitesinde granular access token oluşturuldu
- [ ] Token'da "Publish packages" izni var
- [ ] Token'da "Bypass two-factor authentication" izni var
- [ ] Token doğru paket için oluşturuldu (akfatimeline)
- [ ] Token npm config'e eklendi
- [ ] `npm whoami` komutu çalışıyor
- [ ] `npm publish` komutu çalışıyor

