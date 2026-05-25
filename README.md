# 🅰️ Angular Simple Site

Modern ve responsive bir web sitesi projesi. Angular 20 ile geliştirilmiş, Bootstrap 5 ve TypeScript kullanılarak oluşturulmuş profesyonel bir başlangıç projesidir.

---

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Projeyi Çalıştırma](#projeyi-çalıştırma)
- [Geliştirme](#geliştirme)
- [Derleme](#derleme)
- [Testler](#testler)

---

## ✨ Özellikler

- ⚡ **Angular 20** - Son sürüm Angular framework'ü
- 🎨 **Bootstrap 5** - Responsive ve modern tasarım
- 📱 **Responsive Design** - Tüm cihazlarda uyumlu
- 🧪 **Test Altyapısı** - Karma ve Jasmine ile hazır test ortamı
- 🎯 **TypeScript** - Tip güvenli kod yazımı
- 🚀 **Yüksek Performans** - Production build optimizasyonları

---

## 🛠️ Gereksinimler

Projeyi çalıştırabilmek için bilgisayarınızda aşağıdakiler kurulu olmalıdır:

- **Node.js** (v18 veya üzeri) - [İndir](https://nodejs.org)
- **npm** (Node.js ile birlikte gelir)

Kurulu olup olmadığını kontrol etmek için:

```bash
node --version
npm --version
```

---

## 📥 Kurulum

### 1. Projeyi klonlayın veya indirin

```bash
git clone https://github.com/silaacis/angular-simple-site.git
cd angular-simple-site
```

### 2. Bağımlılıkları yükleyin

```bash
npm install
```

Bu işlem tüm gerekli paketleri indirecektir (Angular, Bootstrap, RxJS vb.)

---

## 🚀 Projeyi Çalıştırma

### Geliştirme Sunucusunu Başlatın

```bash
npm start
```

veya

```bash
ng serve
```

**Çıktı:**
```
✔ Compiled successfully.
Application bundle generation complete. [0.123 seconds]

Watch mode enabled. Watching for file changes...
Local:   http://localhost:4200/
```

Tarayıcınızı açın ve **`http://localhost:4200/`** adresine gidin.

> 💡 **İpucu:** Kod dosyalarını kaydederken sayfa otomatik olarak yenilenir!

---

## 💻 Geliştirme

### Yeni Bileşen Oluşturun

```bash
ng generate component component-adı
```

**Örnek:**
```bash
ng generate component home
ng generate component navbar
```

### Diğer Türdeki Dosyalar

```bash
# Servis oluştur
ng generate service services/api

# Direktif oluştur
ng generate directive directives/highlight

# Pipe oluştur
ng generate pipe pipes/custom-format

# Guard oluştur
ng generate guard guards/auth
```

Tüm seçenekleri görmek için:

```bash
ng generate --help
```

### Kod Formatı

Proje **Prettier** ile konfigüre edilmiştir. Kodunuz otomatik olarak formatlanır:

```bash
npx prettier --write src/
```

---

## 🏗️ Derleme

### Production İçin Derleyin

```bash
npm run build
```

veya

```bash
ng build
```

**Çıktı:** Derlenmiş dosyalar `dist/angularapp/` klasörüne kaydedilecektir.

### Geliştirme Modu (İzleme ile)

Kod değişikliklerini otomatik olarak derlemek için:

```bash
npm run watch
```

---

## 🧪 Testler

### Birim Testlerini Çalıştırın

```bash
npm test
```

veya

```bash
ng test
```

Bu komut **Karma** test runner'ı başlatacak ve tüm `*.spec.ts` dosyalarını çalıştıracaktır.

**Kod Kapsamı Raporu Oluşturun:**

```bash
ng test --code-coverage
```

Rapor `coverage/` klasöründe oluşturulacaktır.

### End-to-End Testler

E2E testing için test framework'ü seçip konfigüre etmelisiniz. Bazı seçenekler:

- [Cypress](https://cypress.io)
- [Playwright](https://playwright.dev)
- [Protractor](https://www.protractortest.org/)

---

## 📁 Proje Yapısı

```
angular-simple-site/
├── src/
│   ├── app/              # Ana uygulama bileşenleri
│   ├── assets/           # Statik dosyalar (resimler, fontlar)
│   ├── styles.css        # Global stiller
│   └── main.ts           # Uygulamanın giriş noktası
├── public/               # Herkese açık statik dosyalar
├── dist/                 # Derlenmiş production dosyaları
├── angular.json          # Angular konfigürasyonu
├── package.json          # Proje bağımlılıkları
└── tsconfig.json         # TypeScript konfigürasyonu
```

---

## 📦 Teknolojiler

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Angular | 20.3.0 | Ana framework |
| Bootstrap | 5.3.8 | CSS framework |
| TypeScript | 5.9.2 | Programlama dili |
| RxJS | 7.8.0 | Reactive programming |
| Karma | 6.4.0 | Test runner |
| Jasmine | 5.9.0 | Test framework |

---

## 🔧 Sık Kullanılan Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm start` | Geliştirme sunucusunu başlat |
| `npm run build` | Production derlemesi yap |
| `npm test` | Testleri çalıştır |
| `npm run watch` | İzleme modu ile derle |
| `ng generate component` | Yeni bileşen oluştur |

---

## 📚 Faydalı Kaynaklar

- [Angular Dokümantasyonu](https://angular.dev)
- [Angular CLI Kılavuzu](https://angular.dev/tools/cli)
- [Bootstrap Dokümantasyonu](https://getbootstrap.com/docs)
- [TypeScript Rehberi](https://www.typescriptlang.org/docs)
- [RxJS Dokümantasyonu](https://rxjs.dev)

---

## 🐛 Sorun Giderme

### Port 4200 zaten kullanılıyorsa

```bash
ng serve --port 4201
```

### npm install sırasında hata oluşuyorsa

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Bileşenler yüklenmiyorsa

Angular CLI'nin son sürümünü yüklediğinizden emin olun:

```bash
npm install -g @angular/cli@latest
```

---

## 📝 Lisans

Bu proje açık kaynak kodludur. Lütfen proje lisansını kontrol edin.

---

## 💬 Destek

Sorularınız veya önerileriniz varsa lütfen [issues](https://github.com/silaacis/angular-simple-site/issues) bölümünde bir konu açın.

---

**Mutlu kodlamalar! 🎉**
