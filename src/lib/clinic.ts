export const CLINIC = {
  name: "Dr. Semiha Tad",
  title: "Diş Hekimi",
  phone: "(0312) 319 01 00",
  phoneHref: "tel:+903123190100",
  phone2: "+90 505 236 72 63",
  phone2Href: "tel:+905052367263",
  phone3: "0 537 654 48 44",
  phone3Href: "tel:+905376544844",
  email: "semiha.tad@hotmail.com",
  whatsapp: "https://wa.me/905333001780?text=" + encodeURIComponent("Merhaba, randevu almak istiyorum."),
  instagram: "https://www.instagram.com/dt.semihatad/?utm_source=ig_web_button_share_sheet",
  googleBusiness: "https://www.google.com/search?q=Dt+Semiha+Tad&sourceid=chrome&ie=UTF-8",
  address: "Cemal Gürsel Cad. No:109/1 (Kat:1), Ankaray Dikimevi Durağı Çıkışı, Cebeci - Ankara",
  hours: "7/24 Açık",
  openHour: 0,
  closeHour: 24,
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Cemal Gürsel Cad. No:109/1, Cebeci, Ankara") +
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
