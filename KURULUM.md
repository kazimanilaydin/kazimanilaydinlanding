# Kurulum

## github.io sitesi

1. Repo kökündeki dosyaları **`kazimanilaydin/kazimanilaydin.github.io`** reposuna kopyala:
   `index.html`, `css/`, `js/`, `img/`, `fonts/`, `vendor/`, `tools/`, `.github/workflows/pages.yml`,
   `package.json`, `.gitignore`. Eski site dosyaları (Vue sürümü) git geçmişinde kalır.
   Profil README'sini de aynı yerde tutmak istersen `github-profile/` klasörünü de kopyala. Bu klasör
   ayrıca `tools/build-stats.mjs` tarafından da kullanılıyor.
2. GitHub'da **Settings → Pages → Build and deployment → Source: GitHub Actions** seçeneğini seç.
3. `main` (ya da `master`) branch'ine push et. **Deploy site** workflow'u siteyi yayınlar ve her 6
   saatte bir canlı istatistikleri (`data/stats.json`) yeniler.

> İstersen siteyi bu repodan da (`kazimanilaydinlanding`) yayınlayabilirsin. Adres
> `kazimanilaydin.github.io/kazimanilaydinlanding/` olur.

### Yerelde deneme

```bash
npm run serve        # http://localhost:8080
```

`data/stats.json` yoksa site GitHub'ın herkese açık API'sini kullanır (saatte 60 istek, tarayıcıda
1 saat önbelleklenir). Commit, PR ve issue sayıları ile katkı takvimi en doğru haliyle workflow'dan gelir.

## Özelleştirme

| Ne | Nerede |
| --- | --- |
| Metinler (daktilo satırları, roller, neofetch) | `index.html` ve `js/app.js` başındaki sabitler |
| Linkler | `js/app.js` → `LINKS` |
| Teknoloji yığını | `js/app.js` → `STACK` (yeni ikon için `tools/build-icons.mjs` → `npm run build:icons`) |
| Globe şehirleri ve yaylar | `js/globe.js` → `HOME`, `CITIES`, `CROSS` |
| Renkler | `css/style.css` → `:root` |
| Dünya dokusu | `tools/make-earth-texture.py` |

## Kaynaklar ve lisanslar

- [globe.gl](https://github.com/vasturiano/globe.gl) (three.js tabanlı), MIT: `vendor/LICENSE-globe.gl.txt`
- Dünya dokuları: NASA Blue Marble ve Black Marble (kamu malı), three-globe paketi aracılığıyla
- JetBrains Mono ve Orbitron fontları, SIL OFL 1.1: `fonts/LICENSE-*.txt`
- Marka ikonları: [simple-icons](https://simpleicons.org) (CC0). Windows ve LinkedIn ikonları
  jenerik olarak elle çizildi.
