# Plan: Hero'ya video arka plan + portre About'a

## Hedef
Hero bölümüne `clinic-video.mp4`'ü autoplay/loop/muted arka plan videosu olarak eklemek; Dr. Semiha Tad portresini About (Hakkımızda) bölümüne taşımak. Dr. portresinin nereye gideceğine sen karar vermiştin — en uygunu About olarak değerlendirildi.

## 1. Videoyu hero için optimize et (ffmpeg)
- Kaynak: `public/Images/clinic-video.mp4` (9.8 MB)
- Hero için yeniden kodla: 1280px genişlik, ~1.5–2 Mbps, H.264, sesi kaldır (zaten muted), `public/Images/clinic-video-hero.mp4` → hedef ~2–3 MB
- Orijinal dosya korunur (Galeri lightbox hâlâ onu kullanır)

## 2. Hero.tsx — video arka plan
- Sağdaki portre kolonu kaldır; grid tek kolona döner (tam genişlik)
- Arka plan: `absolute inset-0` `<video>` (muted, loop, playsInline, autoPlay, poster=gerekirse ilk kare)
- Üzerine yumuşak navy degrade overlay (`bg-primary/70` + alttan koyu gradient) — metin okunabilirliği için
- İçerik (badge, başlık, açıklama, CTA'lar, saat/açık-kapalı, adres) ortalanır, beyaz/primary-foreground renklerde
- "15+ Yıllık Deneyim" rozeti metin akışında kalır (portre üstündeki bindirmeli kart kaldırılır)

## 3. About.tsx — Dr. portresi
- Sağ kolona (mevcut klinik görselleri grid'i) Dr. Semiha portresini ekle:
  - Üstte büyük `doctor.jpg` (portre, `col-span-2`), altta clinic-1 + clinic-2 yan yana
  - Veya mevcut düzen korunup portre en üste eklenir
- Alt kısımdaki "Her gün açığız" kartı korunur

## 4. Hero görsel/alt metin detayları
- Hero CTA butonları (WhatsApp + telefon) beyaz/şeffaf varyantlara çevrilir (koyu arka plan üzerinde)
- Navbar'a göre üst boşluk `pt-28` korunur

## 5. Galeri.tsx — dokunma
- Galeri lightbox hâlâ orijinal `clinic-video.mp4` kullanır; değişiklik yok

## 6. Doğrulama
- `bun run build` (veya typecheck) yeşil
- Preview: Playwright ile hero video yüklüyor + metin okunaklı + About portresi görünür, ekran görüntüsü al
