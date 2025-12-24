import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.research': 'Research',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.volunteer': 'Leadership',
    'nav.publications': 'Academic Materials',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Mechanical Engineer',
    'hero.subtitle': 'Design · Research · Implementation',
    'hero.summary': 'Engineering work grounded in design, research, and testing, driven by an understanding of systems through fundamentals and structure. Projects involve mechanical behavior, materials, and system-level considerations, progressing from investigation to execution.',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact',

    // About
    'about.title': 'About',
    'about.background': 'Academic Background',
    'about.philosophy': 'Engineering Philosophy',
    'about.philosophyText': 'I believe in the synergy of theoretical rigor and practical application. My approach combines fundamental principles with modern computational tools to develop solutions that are both innovative and manufacturable.',
    'about.researchAreas': 'Research Focus Areas',
    'about.dynamics': 'Dynamics & Vibrations',
    'about.materials': 'Materials Science',
    'about.robotics': 'Robotics & Automation',
    'about.thermoFluids': 'Thermo-Fluids',
    'about.optimization': 'Design Optimization',
    'about.cae': 'CAE & Simulation',

    // Education
    'education.title': 'Education',
    'education.gpa': 'GPA',
    'education.honors': 'Honors',
    'education.coursework': 'Relevant Coursework',
    'education.transcript': 'Download Transcript',

    // Research
    'research.title': 'Research',
    'research.abstract': 'Abstract',
    'research.institution': 'Institution',
    'research.supervisor': 'Supervisor',
    'research.downloadPaper': 'Download Paper',
    'research.viewPoster': 'View Poster',
    'research.doiLink': 'DOI Link',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.industry': 'Industry',
    'experience.academic': 'Academic',
    'experience.responsibilities': 'Key Responsibilities',
    'experience.tools': 'Tools & Technologies',

    // Projects
    'projects.title': 'Projects',
    'projects.problem': 'Problem Statement',
    'projects.approach': 'Engineering Approach',
    'projects.results': 'Results & Outcomes',
    'projects.tools': 'Tools Used',
    'projects.viewGithub': 'View on GitHub',
    'projects.viewDetails': 'View Details',

    // Volunteer
    'volunteer.title': 'Volunteer Work & Leadership',
    'volunteer.organizations': 'Professional Organizations',
    'volunteer.mentoring': 'Mentoring & Outreach',
    'volunteer.conferences': 'Conferences & Workshops',

    // Publications
    'publications.title': 'Academic Materials & Downloads',
    'publications.cv': 'Curriculum Vitae',
    'publications.transcript': 'Academic Transcript',
    'publications.papers': 'Research Papers',
    'publications.posters': 'Conference Posters',
    'publications.certificates': 'Certificates',
    'publications.download': 'Download',

    // Contact
    'contact.title': 'Contact',
    'contact.getInTouch': 'Get In Touch',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.location': 'Location',
    'contact.connect': 'Connect',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.designed': 'Designed with precision.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.education': 'Formation',
    'nav.research': 'Recherche',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.volunteer': 'Leadership',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Ingénieur Mécanique',
    'hero.subtitle': 'Orienté Recherche | Systèmes & Conception',
    'hero.summary': 'Dédié à l\'avancement des solutions d\'ingénierie par la recherche rigoureuse, la conception innovante et la résolution systématique de problèmes. Spécialisé en dynamique, science des matériaux et analyse computationnelle.',
    'hero.downloadCV': 'Télécharger CV',
    'hero.viewProjects': 'Voir Projets',
    'hero.contact': 'Contact',

    // About
    'about.title': 'À propos',
    'about.background': 'Formation Académique',
    'about.philosophy': 'Philosophie d\'Ingénierie',
    'about.philosophyText': 'Je crois en la synergie de la rigueur théorique et de l\'application pratique. Mon approche combine les principes fondamentaux avec les outils computationnels modernes pour développer des solutions à la fois innovantes et manufacturables.',
    'about.researchAreas': 'Domaines de Recherche',
    'about.dynamics': 'Dynamique & Vibrations',
    'about.materials': 'Science des Matériaux',
    'about.robotics': 'Robotique & Automatisation',
    'about.thermoFluids': 'Thermo-Fluides',
    'about.optimization': 'Optimisation de Conception',
    'about.cae': 'CAO & Simulation',

    // Education
    'education.title': 'Formation',
    'education.gpa': 'Moyenne',
    'education.honors': 'Mentions',
    'education.coursework': 'Cours Pertinents',
    'education.transcript': 'Télécharger Relevé',

    // Research
    'research.title': 'Recherche',
    'research.abstract': 'Résumé',
    'research.institution': 'Institution',
    'research.supervisor': 'Directeur',
    'research.downloadPaper': 'Télécharger Article',
    'research.viewPoster': 'Voir Poster',
    'research.doiLink': 'Lien DOI',

    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.industry': 'Industrie',
    'experience.academic': 'Académique',
    'experience.responsibilities': 'Responsabilités Clés',
    'experience.tools': 'Outils & Technologies',

    // Projects
    'projects.title': 'Projets',
    'projects.problem': 'Énoncé du Problème',
    'projects.approach': 'Approche d\'Ingénierie',
    'projects.results': 'Résultats & Conclusions',
    'projects.tools': 'Outils Utilisés',
    'projects.viewGithub': 'Voir sur GitHub',
    'projects.viewDetails': 'Voir Détails',

    // Volunteer
    'volunteer.title': 'Bénévolat & Leadership',
    'volunteer.organizations': 'Organisations Professionnelles',
    'volunteer.mentoring': 'Mentorat & Sensibilisation',
    'volunteer.conferences': 'Conférences & Ateliers',

    // Publications
    'publications.title': 'Publications & Téléchargements',
    'publications.cv': 'Curriculum Vitae',
    'publications.transcript': 'Relevé de Notes',
    'publications.papers': 'Articles de Recherche',
    'publications.posters': 'Posters de Conférence',
    'publications.certificates': 'Certificats',
    'publications.download': 'Télécharger',

    // Contact
    'contact.title': 'Contact',
    'contact.getInTouch': 'Contactez-moi',
    'contact.name': 'Nom Complet',
    'contact.email': 'Adresse Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Message',
    'contact.send': 'Envoyer Message',
    'contact.location': 'Localisation',
    'contact.connect': 'Se Connecter',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.designed': 'Conçu avec précision.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.education': 'التعليم',
    'nav.research': 'البحث العلمي',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.volunteer': 'القيادة',
    'nav.publications': 'المنشورات',
    'nav.contact': 'اتصل بي',

    // Hero
    'hero.title': 'مهندس ميكانيكي',
    'hero.subtitle': 'موجه بالبحث | الأنظمة والتصميم',
    'hero.summary': 'مكرس لتطوير الحلول الهندسية من خلال البحث الدقيق والتصميم المبتكر وحل المشكلات المنهجي. متخصص في الديناميكا وعلوم المواد والتحليل الحسابي.',
    'hero.downloadCV': 'تحميل السيرة الذاتية',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.contact': 'اتصل بي',

    // About
    'about.title': 'نبذة عني',
    'about.background': 'الخلفية الأكاديمية',
    'about.philosophy': 'فلسفة الهندسة',
    'about.philosophyText': 'أؤمن بالتناغم بين الدقة النظرية والتطبيق العملي. يجمع نهجي بين المبادئ الأساسية والأدوات الحسابية الحديثة لتطوير حلول مبتكرة وقابلة للتصنيع.',
    'about.researchAreas': 'مجالات البحث',
    'about.dynamics': 'الديناميكا والاهتزازات',
    'about.materials': 'علوم المواد',
    'about.robotics': 'الروبوتات والأتمتة',
    'about.thermoFluids': 'الموائع الحرارية',
    'about.optimization': 'تحسين التصميم',
    'about.cae': 'الهندسة بمساعدة الحاسوب',

    // Education
    'education.title': 'التعليم',
    'education.gpa': 'المعدل التراكمي',
    'education.honors': 'مرتبة الشرف',
    'education.coursework': 'المقررات ذات الصلة',
    'education.transcript': 'تحميل السجل الأكاديمي',

    // Research
    'research.title': 'البحث العلمي',
    'research.abstract': 'الملخص',
    'research.institution': 'المؤسسة',
    'research.supervisor': 'المشرف',
    'research.downloadPaper': 'تحميل البحث',
    'research.viewPoster': 'عرض الملصق',
    'research.doiLink': 'رابط DOI',

    // Experience
    'experience.title': 'الخبرة المهنية',
    'experience.industry': 'صناعي',
    'experience.academic': 'أكاديمي',
    'experience.responsibilities': 'المسؤوليات الرئيسية',
    'experience.tools': 'الأدوات والتقنيات',

    // Projects
    'projects.title': 'المشاريع',
    'projects.problem': 'بيان المشكلة',
    'projects.approach': 'النهج الهندسي',
    'projects.results': 'النتائج والمخرجات',
    'projects.tools': 'الأدوات المستخدمة',
    'projects.viewGithub': 'عرض على GitHub',
    'projects.viewDetails': 'عرض التفاصيل',

    // Volunteer
    'volunteer.title': 'العمل التطوعي والقيادة',
    'volunteer.organizations': 'المنظمات المهنية',
    'volunteer.mentoring': 'الإرشاد والتوعية',
    'volunteer.conferences': 'المؤتمرات وورش العمل',

    // Publications
    'publications.title': 'المنشورات والتحميلات',
    'publications.cv': 'السيرة الذاتية',
    'publications.transcript': 'السجل الأكاديمي',
    'publications.papers': 'الأوراق البحثية',
    'publications.posters': 'ملصقات المؤتمرات',
    'publications.certificates': 'الشهادات',
    'publications.download': 'تحميل',

    // Contact
    'contact.title': 'اتصل بي',
    'contact.getInTouch': 'تواصل معي',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.location': 'الموقع',
    'contact.connect': 'تواصل',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.designed': 'صُمم بدقة.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.education': 'Educación',
    'nav.research': 'Investigación',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.volunteer': 'Liderazgo',
    'nav.publications': 'Publicaciones',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Ingeniero Mecánico',
    'hero.subtitle': 'Orientado a la Investigación | Sistemas y Diseño',
    'hero.summary': 'Dedicado a avanzar soluciones de ingeniería a través de investigación rigurosa, diseño innovador y resolución sistemática de problemas. Especializado en dinámica, ciencia de materiales y análisis computacional.',
    'hero.downloadCV': 'Descargar CV',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contacto',

    // About
    'about.title': 'Sobre mí',
    'about.background': 'Formación Académica',
    'about.philosophy': 'Filosofía de Ingeniería',
    'about.philosophyText': 'Creo en la sinergia del rigor teórico y la aplicación práctica. Mi enfoque combina principios fundamentales con herramientas computacionales modernas para desarrollar soluciones que son tanto innovadoras como manufacturables.',
    'about.researchAreas': 'Áreas de Investigación',
    'about.dynamics': 'Dinámica y Vibraciones',
    'about.materials': 'Ciencia de Materiales',
    'about.robotics': 'Robótica y Automatización',
    'about.thermoFluids': 'Termo-Fluidos',
    'about.optimization': 'Optimización de Diseño',
    'about.cae': 'CAE y Simulación',

    // Education
    'education.title': 'Educación',
    'education.gpa': 'Promedio',
    'education.honors': 'Honores',
    'education.coursework': 'Cursos Relevantes',
    'education.transcript': 'Descargar Expediente',

    // Research
    'research.title': 'Investigación',
    'research.abstract': 'Resumen',
    'research.institution': 'Institución',
    'research.supervisor': 'Director',
    'research.downloadPaper': 'Descargar Artículo',
    'research.viewPoster': 'Ver Póster',
    'research.doiLink': 'Enlace DOI',

    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.industry': 'Industria',
    'experience.academic': 'Académico',
    'experience.responsibilities': 'Responsabilidades Clave',
    'experience.tools': 'Herramientas y Tecnologías',

    // Projects
    'projects.title': 'Proyectos',
    'projects.problem': 'Planteamiento del Problema',
    'projects.approach': 'Enfoque de Ingeniería',
    'projects.results': 'Resultados y Conclusiones',
    'projects.tools': 'Herramientas Utilizadas',
    'projects.viewGithub': 'Ver en GitHub',
    'projects.viewDetails': 'Ver Detalles',

    // Volunteer
    'volunteer.title': 'Voluntariado y Liderazgo',
    'volunteer.organizations': 'Organizaciones Profesionales',
    'volunteer.mentoring': 'Mentoría y Difusión',
    'volunteer.conferences': 'Conferencias y Talleres',

    // Publications
    'publications.title': 'Publicaciones y Descargas',
    'publications.cv': 'Curriculum Vitae',
    'publications.transcript': 'Expediente Académico',
    'publications.papers': 'Artículos de Investigación',
    'publications.posters': 'Pósters de Conferencia',
    'publications.certificates': 'Certificados',
    'publications.download': 'Descargar',

    // Contact
    'contact.title': 'Contacto',
    'contact.getInTouch': 'Ponte en Contacto',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.location': 'Ubicación',
    'contact.connect': 'Conectar',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.designed': 'Diseñado con precisión.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-language') as Language | null;
    if (savedLang && ['en', 'fr', 'ar', 'es'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
