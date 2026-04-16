import { createContext, useState, useContext, ReactNode, useEffect } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certificate": "Certificate",
    "nav.blog": "Blog & Notes",
    "nav.now": "Now",
    "nav.uses": "Uses",
    "nav.contact": "Contact",
    
    // Hero
    "hero.available": "Available for new opportunities",
    "hero.notAvailable": "Currently not available",
    "hero.role": "Full Stack Developer",
    "hero.title1": "Building digital ",
    "hero.title2": "experiences",
    "hero.title3": " with precision.",
    "hero.btn.projects": "View Projects",
    "hero.btn.blog": "Blog & Notes",
    
    // About
    "about.title": "Kutluhan",
    "about.title2": "Gül.",
    "about.p1": "Full Stack Developer in transition with 2.5+ years of experience as a Senior Selling Partner Support Associate at Amazon. In 2024, I made a deliberate career shift into software development to build strong technical foundations in modern web technologies.",
    "about.p2": "Backed by 8+ years of international professional experience, including hospitality and supervisory roles in the United States, I bring strong analytical thinking, problem-solving skills, and a disciplined work ethic to every project.",
    "about.skills": "Technical Skills",
    "about.resume": "View Online Resume",
    "about.download": "Download PDF",
    
    "about.exp": "Work Experience",
    "about.edu": "Education",
    
    "exp.1.date": "Aug 2022 — Nov 2024",
    "exp.1.company": "Amazon (Remote)",
    "exp.1.role": "Senior Selling Partner Support Associate",
    "exp.1.desc1": "Delivered multi-channel technical support (chat, email, and phone) to over 60 active sellers across European marketplaces, including the UK.",
    "exp.1.desc2": "Resolved complex issues related to product listings, catalog errors, account health, and platform policies.",
    "exp.1.desc3": "Assisted sellers with product uploads, listing optimization, inventory management, payment processes, and troubleshooting backend system errors.",
    
    "exp.2.date": "Sep 2021 — Aug 2022",
    "exp.2.company": "Crowne Plaza Istanbul Tuzla",
    "exp.2.role": "Guest Service Agent",
    "exp.2.desc": "Managed front-desk services, handling reservations, check-ins/check-outs, secure transactions, and guest inquiries to ensure a smooth and professional experience.",
    
    "exp.3.date": "May 2019 — Sep 2021",
    "exp.3.company": "Radisson Blu Hotel & Spa",
    "exp.3.role": "Guest Service Agent",
    "exp.3.desc": "Delivered front-desk operations and guest support, handling reservations, check-ins/check-outs, and payment transactions.",
    
    "exp.4.date": "2013 — 2016",
    "exp.4.company": "Hospitality (Work and Travel USA)",
    "exp.4.role": "Floor Supervisor & Inspector",
    "exp.4.desc1": "Gained hands-on experience in hospitality and retail roles in Park City, Utah (Westgate Resorts, Canyons Resort, 7-Eleven).",
    "exp.4.desc2": "Progressed to supervisory responsibilities, ensuring high standards of cleanliness, conducting inspections, and managing inventory.",
    "exp.4.desc3": "Significantly strengthened English communication skills by working directly with international guests.",
    
    "edu.1.date": "2025 — 2026",
    "edu.1.school": "IT School GoIT",
    "edu.1.program": "Full Stack Developer Program",
    
    "edu.2.date": "2022 — 2026",
    "edu.2.school": "Anadolu University",
    "edu.2.program": "Associate's Degree in Computer Programming",
    
    "edu.3.date": "2019 — 2021",
    "edu.3.school": "Anadolu University",
    "edu.3.program": "Associate's Degree in Web Coding",
    
    "edu.4.date": "2017 — 2019",
    "edu.4.school": "Atilim University",
    "edu.4.program": "Master's Degree in Tourism and Travel Services Management",
    
    "edu.5.date": "2009 — 2014",
    "edu.5.school": "Mustafa Kemal University",
    "edu.5.program": "Bachelor's Degree in Tourism and Hotel Management",

    // Certificate
    "cert.milestone": "Milestone",
    "cert.title": "Certificate",
    "cert.viewFull": "View Full",
    "cert.goit": "GoIT Fullstack Developer",
    "cert.program": "Full Stack Developer Program",
    "cert.issued": "Issued by GoIT",
    "cert.desc": "Successfully completed 700+ hours of intensive training, mastering both frontend and backend development. The curriculum included HTML5, CSS3, JavaScript (ES6+), React, Node.js, MongoDB, TypeScript, and REST APIs, focusing on real-world projects and team collaboration.",
    "cert.download": "Download PDF",
    "cert.open": "Open File"
  },
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.projects": "Projeler",
    "nav.certificate": "Sertifikalar",
    "nav.blog": "Blog & Notlar",
    "nav.now": "Şimdi",
    "nav.uses": "Araçlar",
    "nav.contact": "İletişim",
    
    // Hero
    "hero.available": "Yeni fırsatlara açık",
    "hero.notAvailable": "Şu an müsait değil",
    "hero.role": "Full Stack Geliştirici",
    "hero.title1": "Dijital ",
    "hero.title2": "deneyimleri",
    "hero.title3": " hassasiyetle inşa ediyorum.",
    "hero.btn.projects": "Projeleri İncele",
    "hero.btn.blog": "Blog & Notlar",
    
    // About
    "about.title": "Kutluhan",
    "about.title2": "Gül.",
    "about.p1": "Amazon'da Kıdemli Satıcı Destek Uzmanı olarak 2.5+ yıllık deneyimimin ardından geçiş sürecinde olan bir Tam Yığın (Full Stack) Geliştiriciyim. 2024 yılında modern web teknolojilerinde güçlü bir teknik temel oluşturmak üzere yazılım geliştirmeye yönelerek bilinçli bir kariyer değişikliği yaptım.",
    "about.p2": "Amerika Birleşik Devletleri'ndeki konaklama ve yöneticilik rollerini de kapsayan 8 yılı aşkın uluslararası profesyonel deneyimimle; her projeye güçlü analitik düşünme, problem çözme becerileri ve disiplinli bir iş ahlakı katıyorum.",
    "about.skills": "Teknik Yetenekler",
    "about.resume": "Özgeçmişi Görüntüle",
    "about.download": "PDF İndir",
    
    "about.exp": "İş Deneyimi",
    "about.edu": "Eğitim",
    
    "exp.1.date": "Ağu 2022 — Kas 2024",
    "exp.1.company": "Amazon (Uzaktan)",
    "exp.1.role": "Kıdemli Satıcı Çözüm Ortağı",
    "exp.1.desc1": "İngiltere dahil Avrupa pazaryerlerindeki 60'tan fazla aktif satıcıya çok kanallı (sohbet, e-posta ve telefon) teknik destek sağladım.",
    "exp.1.desc2": "Ürün listelemeleri, katalog hataları, hesap sağlığı ve platform politikaları ile ilgili karmaşık sorunları çözdüm.",
    "exp.1.desc3": "Ürün yüklemeleri, optimizasyon, envanter yönetimi, ödeme süreçleri ve arka uç sistem hatalarını giderme konularında satıcılara destek oldum.",
    
    "exp.2.date": "Eyl 2021 — Ağu 2022",
    "exp.2.company": "Crowne Plaza Istanbul Tuzla",
    "exp.2.role": "Misafir İlişkileri Görevlisi",
    "exp.2.desc": "Rezervasyonlar, giriş/çıkış işlemleri, güvenli işlemler ve misafir taleplerini yöneterek sorunsuz bir hizmet deneyimi sağladım.",
    
    "exp.3.date": "May 2019 — Eyl 2021",
    "exp.3.company": "Radisson Blu Hotel & Spa",
    "exp.3.role": "Misafir İlişkileri Görevlisi",
    "exp.3.desc": "Rezervasyon, kayıt, çıkış ve ödeme işlemlerini yürüterek ön büro operasyonlarını ve müşteri desteğini sağladım.",
    
    "exp.4.date": "2013 — 2016",
    "exp.4.company": "Konaklama Sektörü (Work & Travel ABD)",
    "exp.4.role": "Kat Koordinatörü & Denetmen",
    "exp.4.desc1": "Park City, Utah'ta (Westgate Resorts, Canyons Resort, 7-Eleven) otelcilik ve perakende sektöründe uygulamalı deneyim kazandım.",
    "exp.4.desc2": "Denetmenlik sorumlulukları üstlenerek temizlik standartlarını sağladım, denetimler gerçekleştirdim ve envanter yönetimini yürüttüm.",
    "exp.4.desc3": "Uluslararası misafirlerle doğrudan iletişim kurarak İngilizce becerilerimi önemli ölçüde geliştirdim.",

    "edu.1.date": "2025 — 2026",
    "edu.1.school": "IT School GoIT",
    "edu.1.program": "Full Stack Geliştirici Programı",
    
    "edu.2.date": "2022 — 2026",
    "edu.2.school": "Anadolu Üniversitesi",
    "edu.2.program": "Bilgisayar Programcılığı (Önlisans)",
    
    "edu.3.date": "2019 — 2021",
    "edu.3.school": "Anadolu Üniversitesi",
    "edu.3.program": "Web Tasarımı ve Kodlama (Önlisans)",
    
    "edu.4.date": "2017 — 2019",
    "edu.4.school": "Atılım Üniversitesi",
    "edu.4.program": "Turizm İşletmeciliği (Yüksek Lisans)",
    
    "edu.5.date": "2009 — 2014",
    "edu.5.school": "Mustafa Kemal Üniversitesi",
    "edu.5.program": "Turizm ve Otel İşletmeciliği (Lisans)",

    // Certificate
    "cert.milestone": "Kilometre Taşı",
    "cert.title": "Sertifika",
    "cert.viewFull": "Tam Görüntüle",
    "cert.goit": "GoIT Full Stack Geliştirici",
    "cert.program": "Full Stack Geliştirici Programı",
    "cert.issued": "GoIT Tarafından Verildi",
    "cert.desc": "Hem ön uç hem de arka uç geliştirme konularında uzmanlaşarak 700+ saatlik yoğun eğitimi başarıyla tamamladım. HTML5, CSS3, JavaScript (ES6+), React, Node.js, MongoDB, TypeScript ve REST API'leri kapsayan içerikle gerçek dünya projeleri ve takım işbirliğine odaklanıldı.",
    "cert.download": "PDF İndir",
    "cert.open": "Dosyayı Aç"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("ui-lang") as Language;
    if (saved === "tr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("ui-lang", newLang);
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
