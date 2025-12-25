# Git Repository Kurulum Rehberi

Git repository başarıyla oluşturuldu! Şimdi şu adımları takip edin:

## 1. Remote Repository Ekleme

Eğer remote yoksa:
```powershell
git remote add origin https://github.com/AKFAPLUS/akfatimeline.git
```

Eğer remote zaten varsa (kontrol etmek için):
```powershell
git remote -v
```

## 2. İlk Commit ve Push

```powershell
# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "feat: Daily View ve Saatlik Rezervasyon özellikleri eklendi (v1.1.0)"

# Remote repository'ye push et
git push -u origin master
# veya
git push -u origin main
```

**Not:** Eğer GitHub'da zaten bir repository varsa ve içinde dosyalar varsa:
```powershell
# Önce remote'dan çek
git pull origin master --allow-unrelated-histories
# veya
git pull origin main --allow-unrelated-histories

# Sonra push et
git push -u origin master
```

## 3. Sonraki Güncellemeler

```powershell
git add .
git commit -m "feat: Yeni özellik açıklaması"
git push origin master
```

## 4. Tag Oluşturma

```powershell
git tag v1.1.0
git push origin v1.1.0
```

## Sorun Giderme

### Remote zaten var hatası
```powershell
git remote remove origin
git remote add origin https://github.com/AKFAPLUS/akfatimeline.git
```

### Branch ismi farklıysa
```powershell
# Mevcut branch'i kontrol et
git branch

# Branch ismini değiştir
git branch -M main
# veya
git branch -M master
```

