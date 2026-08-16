export const CLINIC = {
  name: "Dr. Semiha Tad",
  title: "Diş Hekimi",
  phone: "(0312) 319 01 00",
  phoneHref: "tel:+903123190100",
  whatsapp: "https://wa.me/905333001780?text=" + encodeURIComponent("Merhaba, randevu almak istiyorum."),
  instagram: "https://www.instagram.com/dt.semihatad/?utm_source=ig_web_button_share_sheet",
  googleBusiness: "https://www.google.com/search?q=Dt+Semiha+Tad&sourceid=chrome&ie=UTF-8",
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
  { id: "ekibimiz", label: "Ekibimiz" },
  { id: "galeri", label: "Galeri" },
  { id: "yorumlar", label: "Yorumlar" },
  { id: "sss", label: "SSS" },
  { id: "iletisim", label: "İletişim" },
] as const;
