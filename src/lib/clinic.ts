export const CLINIC = {
  name: "Dr. Semiha Tad",
  title: "Diş Hekimi",
  phone: "(0312) 319 01 00",
  phoneHref: "tel:+903123190100",
  whatsapp: "https://wa.me/903123190100?text=" + encodeURIComponent("Merhaba, randevu almak istiyorum."),
  address: "Cebeci, Cemal Gürsel Cad. No:109 D:11, 06570 Çankaya/Ankara",
  hours: "Her gün 09:00 - 23:00",
  openHour: 9,
  closeHour: 23,
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Cemal Gürsel Cad. No:109 D:11, 06570 Çankaya/Ankara") +
    "&output=embed",
} as const;

export const NAV_ITEMS = [
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "hizmetler", label: "Hizmetlerimiz" },
  { id: "galeri", label: "Galeri" },
  { id: "yorumlar", label: "Yorumlar" },
  { id: "sss", label: "SSS" },
  { id: "iletisim", label: "İletişim" },
] as const;
