# NPM 2FA (Two-Factor Authentication) Sorunu Çözümü

## Hata Mesajı
```
npm error 403 403 Forbidden - Two-factor authentication or granular access token with bypass 2fa enabled is required to publish packages.
```

## Çözüm 1: NPM Access Token Oluşturma (Önerilen)

### Adımlar:

1. **NPM Web Sitesine Gidin:**
   - https://www.npmjs.com/settings/[KULLANICI_ADI]/tokens
   - Veya: https://www.npmjs.com → Profile → Access Tokens

2. **Yeni Token Oluşturun:**
   - **"Generate New Token"** butonuna tıklayın
   - **Token Type:** "Granular Access Token" seçin
   - **Token Name:** "akfatimeline-publish" gibi bir isim verin
   - **Expiration:** İstediğiniz süreyi seçin (örn: 90 days)
   - **Permissions:** 
     - ✅ **"Publish packages"** seçeneğini işaretleyin
     - ✅ **"Bypass two-factor authentication"** seçeneğini işaretleyin (ÖNEMLİ!)
   - **Packages:** "akfatimeline" paketini seçin
   - **"Generate Token"** butonuna tıklayın

3. **Token'ı Kopyalayın:**
   - Token'ı hemen kopyalayın (bir daha gösterilmeyecek!)
   - Örnek format: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

4. **Token'ı NPM'e Kaydedin:**
   ```powershell
   # Windows PowerShell
   npm config set //registry.npmjs.org/:_authToken "npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

5. **Publish Edin:**
   ```powershell
   npm publish
   ```

## Çözüm 2: NPM Login ile 2FA Kodu Girmek

Eğer 2FA'yı bypass etmek istemiyorsanız:

1. **NPM Login:**
   ```powershell
   npm login
   ```

2. **2FA Kodu Girin:**
   - Kullanıcı adı, şifre, email girin
   - 2FA kodunu girin (authenticator app'ten)

3. **Publish:**
   ```powershell
   npm publish
   ```

## Çözüm 3: .npmrc Dosyası ile Token Kaydetme

1. **Proje klasöründe `.npmrc` dosyası oluşturun:**
   ```
   //registry.npmjs.org/:_authToken=npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

2. **Dikkat:** `.npmrc` dosyasını `.gitignore`'a ekleyin!

## Package.json Uyarısını Düzeltme

```powershell
npm pkg fix
```

Bu komut package.json'daki format hatalarını otomatik düzeltir.

## Hızlı Çözüm (Tüm Adımlar)

```powershell
# 1. Package.json'ı düzelt
npm pkg fix

# 2. Access token'ı ayarla (token'ı kendi token'ınızla değiştirin)
npm config set //registry.npmjs.org/:_authToken "npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 3. Publish et
npm publish
```

## Kontrol

```powershell
# Token'ın doğru ayarlandığını kontrol et
npm whoami

# Versiyonu kontrol et
npm view akfatimeline version
```

## Önemli Notlar

1. **Token Güvenliği:**
   - Token'ı asla GitHub'a commit etmeyin!
   - `.npmrc` dosyasını `.gitignore`'a ekleyin
   - Token'ı sadece kendi bilgisayarınızda kullanın

2. **Token Süresi:**
   - Token'ın expiration süresini kontrol edin
   - Süresi dolduğunda yeni token oluşturun

3. **2FA Bypass:**
   - Granular access token ile 2FA'yı bypass edebilirsiniz
   - Bu, publish işlemi için daha güvenli ve pratik bir yöntemdir

