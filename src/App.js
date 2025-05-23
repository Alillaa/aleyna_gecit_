import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Gerekli tüm ikonların import edildiğinden emin olalım:
import {
  Home, User, Code, Mail, Linkedin, Github, Twitter, Menu, X, Sun, Moon,
  ChevronsDown, ArrowUpCircle, Sparkles, Send, MapPin, CalendarDays, Globe,
  Instagram, Info, MessageSquare, BookOpen, Target, Dna, MapPinned, Mailbox,
  Cake, GraduationCap, Braces, Orbit, Terminal, Palette, FileCode as LucideFileCode,
  Wind, Play, Lightbulb, Users, Database, ShieldCheck, Brain, Layers,
  Cpu, GitBranch, Binary, FunctionSquare, Settings2, Puzzle, Phone
} from 'lucide-react';

// Dosya yapınıza göre import yolları:
import AnimatedElement from './components/AnimatedElement/AnimatedElement.js';
import { ButterflySVG as OriginalButterflySVG, FlowerSVG as OriginalFlowerSVG } from './components/SVGIcons/SVGIcons.js';

// Resim importları
import webImg from './resim/web.png';
import notDefteriImg from './resim/not_defteri.png';
import soruBankasiImg from './resim/soru_bankasi.png';
import gunlukImg from './resim/gunluk.png';
import profilResmi from './resim/aleyna-profil.jpg';


// Hero bölümü için yeni pastel teknoloji ikonu bileşeni
const PastelTechIcon = ({ icon: IconComponent, initialX, initialY, size, color, delay }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    gsap.set(el, {
      x: initialX,
      y: initialY,
      scale: 0,
      opacity: 0,
    });

    gsap.to(el, {
      scale: 1,
      opacity: gsap.utils.random(0.4, 0.8),
      duration: 1.5,
      delay: delay + gsap.utils.random(0, 1.5),
      ease: 'power2.out',
    });

    gsap.to(el, {
      x: `+=${gsap.utils.random(-30, 30)}`,
      y: `+=${gsap.utils.random(-30, 30)}`,
      rotation: `+=${gsap.utils.random(-45, 45)}`,
      duration: gsap.utils.random(25, 50),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: delay + 1.5,
    });
  }, [initialX, initialY, size, color, delay]);

  return (
      <div ref={iconRef} className="absolute -z-10 pointer-events-none" style={{ color }}>
        <IconComponent size={size} strokeWidth={1.5} />
      </div>
  );
};


const capabilitiesData = [
  { title: "Web Geliştirme (Frontend Ağırlıklı)", description: "Modern web teknolojileri (React, JavaScript, HTML, CSS) kullanarak etkileşimli, kullanıcı dostu arayüzler ve dinamik web uygulamaları geliştirme.", icon: <Layers size={36} className="text-pink-500 dark:text-pink-400 mb-4" />, color: "pink" },
  { title: "Veritabanı Tasarımı ve Yönetimi", description: "İlişkisel veritabanı (SQL) prensipleriyle veri modelleme, sorgulama ve temel veritabanı yönetimi konularında yetkinlik.", icon: <Database size={36} className="text-purple-500 dark:text-purple-400 mb-4" />, color: "purple" },
  { title: "Siber Güvenlik Yaklaşımı", description: "Yazılım geliştirme süreçlerinde güvenlik prensiplerine dikkat etme, potansiyel zafiyetler konusunda farkındalık ve güvenli kodlama pratiklerine ilgi.", icon: <ShieldCheck size={36} className="text-green-500 dark:text-green-400 mb-4" />, color: "green" },
  { title: "Algoritmik Problem Çözme", description: "Karşılaşılan mühendislik problemlerine analitik ve algoritmik düşünme becerileriyle yaklaşarak verimli ve optimize çözümler üretme.", icon: <Brain size={36} className="text-sky-500 dark:text-sky-400 mb-4" />, color: "sky" },
];

const technicalSkillsForBenKimim = [
  'C#', 'React', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Git', 'Fusion360', 'Python (PyQt5)'
];

const pastelTechIconsData = [
  { icon: Code, size: 40, color: 'rgba(251, 146, 158, 0.7)', initialX: '15vw', initialY: '25vh', delay: 0.1 },
  { icon: Cpu, size: 30, color: 'rgba(196, 181, 253, 0.7)', initialX: '80vw', initialY: '15vh', delay: 0.3 },
  { icon: GitBranch, size: 35, color: 'rgba(167, 243, 208, 0.7)', initialX: '5vw', initialY: '70vh', delay: 0.5 },
  { icon: Binary, size: 25, color: 'rgba(147, 197, 253, 0.7)', initialX: '75vw', initialY: '80vh', delay: 0.2 },
  { icon: Layers, size: 45, color: 'rgba(253, 224, 71, 0.6)', initialX: '50vw', initialY: '10vh', delay: 0.4 },
  { icon: Puzzle, size: 30, color: 'rgba(252, 165, 165, 0.7)', initialX: '30vw', initialY: '55vh', delay: 0.6 },
  { icon: Settings2, size: 35, color: 'rgba(199, 210, 254, 0.7)', initialX: '65vw', initialY: '45vh', delay: 0.1 },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fullSubtitle = "Bilgisayar Mühendisliği Öğrencisi";
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [showTypingCursor, setShowTypingCursor] = useState(true);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const heroContentRef = useRef(null);
  const heroTitleRef = useRef(null);

  const scrollToSection = (sectionId) => {
    if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (subtitleIndex < fullSubtitle.length) {
      setShowTypingCursor(true); // Yazarken imleç hep görünsün
      const timeoutId = setTimeout(() => {
        setTypedSubtitle((prev) => prev + fullSubtitle.charAt(subtitleIndex));
        setSubtitleIndex((prev) => prev + 1);
      }, 120); // Yazma hızı (milisaniye)
      return () => clearTimeout(timeoutId);
    } else {
      // Yazma bittikten sonra imleci gizle
      const cursorHideTimeout = setTimeout(() => {
        setShowTypingCursor(false);
      }, 200); // Yazı bittikten 0,2 saniye sonra imleci gizle (bu süreyi ayarlayabilirsiniz)
      return () => clearTimeout(cursorHideTimeout);
    }
  }, [subtitleIndex, fullSubtitle, fullSubtitle.length]); // fullSubtitle.length'i bağımlılığa ekledim

  useEffect(() => {
    if (heroContentRef.current) {
      const children = Array.from(heroContentRef.current.children);
      if (children.length >=3) {
        gsap.set(children, { autoAlpha: 0, y: 50 });
        gsap.to(children, {
          autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.5,
        });
      }
    }
  }, []);

  useEffect(() => {
    const heroSection = sectionRefs.home.current;
    const contentBlock = heroContentRef.current;
    if (!heroSection || !contentBlock) return;
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { offsetWidth, offsetHeight } = heroSection;
      const xPos = (clientX / offsetWidth - 0.5) * 2;
      const yPos = (clientY / offsetHeight - 0.5) * 2;
      const moveX = xPos * -15;
      const moveY = yPos * -15;
      gsap.to(contentBlock, { x: moveX, y: moveY, duration: 0.7, ease: 'power2.out' });
    };
    heroSection.addEventListener('mousemove', handleMouseMove);
    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      gsap.to(contentBlock, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
    };
  }, []);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observers = [];
    Object.keys(sectionRefs).forEach(key => {
      const ref = sectionRefs[key];
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(ref.current);
        observers.push(observer);
      }
    });
    return () => observers.forEach(observer => observer && observer.disconnect());
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { id: 'home', label: 'Ana Sayfa', icon: <Home size={18} /> },
    { id: 'about', label: 'Ben Kimim?', icon: <User size={18} /> },
    { id: 'skills', label: 'Neler Yapabilirim?', icon: <Code size={18} /> },
    { id: 'projects', label: 'Portfolyo', icon: <Sparkles size={18} /> },
    { id: 'contact', label: 'İletişim', icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/aleyna-ge%C3%A7it-727a1529a/", icon: <Linkedin />, label: "LinkedIn" },
    { href: "https://github.com/Alillaa", icon: <Github />, label: "GitHub" },
    { href: "https://x.com/aleynagecit_", icon: <Twitter />, label: "Twitter" },
    { href: "https://www.instagram.com/", icon: <Instagram />, label: "Instagram" },
    { href: "mailto:aleynagecit4550@gmail.com", icon: <Mail />, label: "E-posta" },
  ];

  const [backgroundElements, setBackgroundElements] = useState([]);
  useEffect(() => {
    const generateElements = () => {
      const numberOfElements = window.innerWidth < 768 ? 1 : 2;
      setBackgroundElements(
          Array.from({ length: numberOfElements }, (_, index) => (
              <AnimatedElement key={`anim-${index}-${Date.now()}`} type={index % 2 === 0 ? 'butterfly' : 'flower'} />
          ))
      );
    };
    generateElements();
    let resizeTimer;
    const debouncedGenerateElements = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(generateElements, 250);
    };
    window.addEventListener('resize', debouncedGenerateElements);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', debouncedGenerateElements);
    };
  }, []);

  const projectsData = [
    { title: 'Mini Soru Bankası', desc: 'Kullanıcıların çeşitli konularda sorular oluşturup pratik yapabileceği interaktif bir soru bankası platformu.', img: soruBankasiImg, tags: ['Python', 'PyQt5', 'QtDesigner'], githubLink: 'https://github.com/Alillaa/soru_bankasi', demoLink: null },
    { title: 'Kişisel Asistanım', desc: 'Çeşitli günlük aktiviteleri takip etmeye ve yönetmeye yardımcı olan kişisel asistan uygulaması.', img: gunlukImg, tags: ['Python', 'PyQt5', 'QtDesigner'], githubLink: 'https://github.com/Alillaa/kisisel_asistan', demoLink: null },
    { title: 'Not Defteri', desc: 'Kullanıcıların hızlıca notlar almasını ve düzenlemesini sağlayan, çiçek temalı bir not defteri uygulaması.', img: notDefteriImg, tags: ['Python', 'PyQt5', 'QtDesigner'], githubLink: 'https://github.com/Alillaa/not_defteri', demoLink: null },
    { title: 'Kişisel Portfolyo Sitesi', desc: 'React, Tailwind CSS ve GSAP animasyonları ile kendimi ve çalışmalarımı tanıttığım bu interaktif web sitesi.', img: webImg, tags: ['React', 'HTML', 'CSS'], githubLink: 'https://github.com/Alillaa/aleyna_gecit_', demoLink: '#' },
  ];


  return (
      <div className={`font-sans text-gray-800 dark:text-gray-200 bg-gradient-to-br from-rose-50 via-purple-50 to-green-50 dark:from-slate-900 dark:to-slate-800 min-h-screen transition-colors duration-500 overflow-x-hidden relative`}>
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          {backgroundElements}
        </div>

        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-800/90 backdrop-blur-md shadow-sm transition-colors duration-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* LOGO VE İSİM KISMI TIKLANABİLİR HALE GETİRİLDİ */}
              <button
                  onClick={() => scrollToSection('home')}
                  className="flex items-center focus:outline-none rounded-md p-1 -ml-1 group" // Odaklanma halkası sınıfları kaldırıldı
                  aria-label="Ana Sayfaya Git"
              >
                <OriginalFlowerSVG className="w-8 h-8 text-pink-500 dark:text-pink-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">Aleyna Geçit</span>
              </button>

              <nav className="hidden md:flex space-x-1">
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-all duration-300
                    ${activeSection === link.id
                            ? 'bg-pink-500 text-white dark:bg-pink-600'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-slate-700 hover:text-pink-600 dark:hover:text-pink-400'
                        }`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </button>
                ))}
              </nav>
              <div className="flex items-center">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 mr-2">
                  {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-purple-600" />}
                </button>
                <div className="md:hidden">
                  <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
              <div className="md:hidden bg-white dark:bg-slate-800 shadow-lg absolute w-full">
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navLinks.map(link => (
                      <button
                          key={link.id}
                          onClick={() => scrollToSection(link.id)}
                          className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2
                    ${activeSection === link.id
                              ? 'bg-pink-500 text-white dark:bg-pink-600'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-slate-700 hover:text-pink-600 dark:hover:text-pink-400'
                          }`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </button>
                  ))}
                </nav>
              </div>
          )}
        </header>

        <main className="pt-16 relative z-10">
          <section ref={sectionRefs.home} id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-rose-100 via-purple-100 to-green-100 dark:from-slate-800 dark:to-slate-700 p-8 overflow-hidden">
            {pastelTechIconsData.map((data, index) => (
                <PastelTechIcon
                    key={index}
                    icon={data.icon}
                    initialX={data.initialX}
                    initialY={data.initialY}
                    size={data.size}
                    color={isDarkMode ? data.color.replace(', 0.7)', ', 0.4)') : data.color}
                    delay={data.delay}
                />
            ))}

            <div ref={heroContentRef} className="text-center z-20 bg-white/70 dark:bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl relative">
              <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 opacity-0" style={{ transform: 'translateY(50px)' }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 dark:from-pink-400 dark:via-rose-400 dark:to-fuchsia-500">
                Aleyna Geçit
              </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-14 sm:h-auto opacity-0" style={{ transform: 'translateY(50px)' }}>
                {typedSubtitle}
                {showTypingCursor && <span className="typing-cursor">|</span>} {/* Sadece showTypingCursor true ise göster */}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0" style={{ transform: 'translateY(50px)' }}>
                <button onClick={() => scrollToSection('about')} className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg inline-flex items-center justify-center w-full sm:w-auto">
                  Daha Fazla Bilgi <Info size={20} className="ml-2" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg inline-flex items-center justify-center w-full sm:w-auto">
                  İletişim <MessageSquare size={20} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
              <ChevronsDown size={32} className="text-pink-500 dark:text-pink-400" />
            </div>
          </section>

          <section ref={sectionRefs.about} id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-800/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
                <span className="relative z-10">Ben Kimim?</span>
                <OriginalFlowerSVG className="w-16 h-16 text-rose-300 dark:text-rose-500/50 absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-20 -z-0" />
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt dark:from-pink-500/50 dark:to-purple-600/50"></div>
                  <img
                      src={profilResmi}
                      alt="Aleyna Geçit Profil Resmi"
                      className="rounded-lg shadow-xl w-full max-w-sm mx-auto relative z-10 object-cover h-auto md:h-auto" // max-w-sm olarak güncellendi
                      onError={(e) => {
                        console.error("Profil resmi yüklenemedi:", e);
                        e.target.alt = "Profil resmi yüklenemedi";
                        e.target.src='https://placehold.co/600x600/E9D5FF/4A044E?text=Resim+Bulunamadı';
                      }}
                  />
                  <OriginalButterflySVG className="w-12 h-12 text-purple-500 dark:text-pink-300/80 absolute bottom-4 right-4 transform rotate-12 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
                  <p>Merhaba, ben Aleyna!</p>
                  <p>Yazılım geliştirmeye, algoritmalarla düşünmeye ve yaratıcı çözümler üretmeye ilgi duyan bir bilgisayar mühendisi adayıyım. Kod yazmak benim için yalnızca teknik bir süreç değil; aynı zamanda mantıklı yapılar kurmanın ve problem çözmenin en etkili yollarından biri.</p>
                  <p>Teknolojiye duyduğum ilgi, beni yazılım dünyasının farklı alanlarını keşfetmeye yönlendirdi. Yeni araçlar, diller ve yaklaşımlar öğrenmeyi; bunları projelere yansıtarak gelişmeyi önemsiyorum. Sadece çalışan değil, aynı zamanda sürdürülebilir ve kullanıcı dostu yapılar kurmaya odaklanıyorum.</p>
                  <p>Bu portfolyoda, üzerinde çalıştığım projeleri ve öğrendiklerimi pratiğe nasıl döktüğümü görebilirsin. Her yeni proje, benim için hem gelişim hem de paylaşım fırsatı.</p>
                </div>
              </div>

              {/* "KISA BİLGİLER" BÖLÜMÜ GÜNCELLENDİ */}
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 pt-10 border-t border-gray-200 dark:border-slate-700 mb-16">
                <div className="bg-white/50 dark:bg-slate-800/60 p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-400 flex items-center">
                    <Info size={24} className="mr-2" /> Kısa Bilgiler
                  </h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p className="flex items-start">
                      <Cake size={18} className="mr-3 mt-1 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                      <strong className="font-medium mr-2">Doğum Tarihi:</strong>
                      <span className="break-words">07.01.2003</span>
                    </p>
                    <p className="flex items-start">
                      <MapPin size={18} className="mr-3 mt-1 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                      <strong className="font-medium mr-2">Doğum Yeri:</strong>
                      <span className="break-words">Malatya/Battalgazi</span>
                    </p>
                    <p className="flex items-start">
                      <Mailbox size={18} className="mr-3 mt-1 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                      <strong className="font-medium mr-2">E-posta:</strong>
                      <span className="break-words">aleynagecit4550@gmail.com</span>
                    </p>
                    <p className="flex items-start">
                      <MapPinned size={18} className="mr-3 mt-1 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                      <strong className="font-medium mr-2">Konum:</strong>
                      <span className="break-words">Balıkesir/Bigadiç, Türkiye</span>
                    </p>
                    <p className="flex items-start">
                      <Dna size={18} className="mr-3 mt-1 text-pink-500 dark:text-pink-400 flex-shrink-0" />
                      <strong className="font-medium mr-2">İlgi Alanları:</strong>
                      <span className="break-words">Siber Güvenlik, Teknoloji, Görsel Sanatlar...</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-slate-800/60 p-6 rounded-xl shadow-lg relative">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
                    <GraduationCap size={24} className="mr-2" /> Eğitim Bilgilerim
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center p-3 bg-rose-50 dark:bg-slate-700/50 rounded-md">
                      <BookOpen size={20} className="mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                      <span>Balıkesir Üniversitesi</span>
                    </li>
                    <li className="flex items-center p-3 bg-rose-50 dark:bg-slate-700/50 rounded-md">
                      <BookOpen size={20} className="mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                      <span>Mehmet Niyazi Altuğ Anadolu Lisesi, İstanbul</span>
                    </li>
                    <li className="flex items-center p-3 bg-rose-50 dark:bg-slate-700/50 rounded-md">
                      <BookOpen size={20} className="mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                      <span>Münir Nurettin Selçuk Ortaokulu, İstanbul</span>
                    </li>
                    <li className="flex items-center p-3 bg-rose-50 dark:bg-slate-700/50 rounded-md">
                      <BookOpen size={20} className="mr-3 text-purple-500 dark:text-purple-400 flex-shrink-0" />
                      <span>Nene Hatun İlkokulu, İstanbul</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-200 dark:border-slate-700">
                <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-10 text-pink-600 dark:text-pink-400">
                  Teknik Becerilerim
                </h3>
                {/* Grid yapısı korunuyor, eleman boyutları küçültülüyor */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 max-w-5xl mx-auto"> {/* max-w-6xl idi max-w-5xl, gap-y-6 yapıldı */}
                  {technicalSkillsForBenKimim.map((skill, index) => {
                    let iconComponent;
                    // İkon boyutunu küçülttük
                    const iconSize = 18; // Önceki 22 idi, şimdi 18
                    const iconBaseClasses = `mr-2 text-green-500 dark:text-green-400 transform group-hover:scale-110 transition-transform`;

                    switch (skill.toLowerCase().trim()) {
                      case 'c#':
                        iconComponent = <Braces size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'react':
                        iconComponent = <Orbit size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'java':
                        iconComponent = <LucideFileCode size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'javascript':
                        iconComponent = <Braces size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'html':
                        iconComponent = <LucideFileCode size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'css':
                        iconComponent = <Palette size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'sql':
                        iconComponent = <Database size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'git':
                        iconComponent = <GitBranch size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'fusion360':
                        iconComponent = <Layers size={iconSize} className={iconBaseClasses} />;
                        break;
                      case 'python (pyqt5)':
                        iconComponent = <Terminal size={iconSize} className={iconBaseClasses} />;
                        break;
                      default:
                        iconComponent = <Code size={iconSize} className={iconBaseClasses} />;
                    }
                    return (
                        <div
                            key={index}
                            // Kart padding'i biraz azaltıldı
                            className="flex flex-col items-center text-center text-gray-700 dark:text-gray-300 group p-2 bg-white/40 dark:bg-slate-800/60 hover:bg-pink-50 dark:hover:bg-slate-700/80 rounded-lg shadow hover:shadow-md transition-all duration-300 min-h-[90px] justify-center" // p-3 idi p-2, min-h-[100px] idi min-h-[90px]
                        >
                          {iconComponent}
                          {/* Yazı boyutu küçültüldü: text-base sm:text-lg */}
                          <span className="text-base sm:text-lg mt-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors break-words">{skill}</span> {/* mt-2 idi mt-1 */}
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section ref={sectionRefs.skills} id="skills" className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-green-50 to-rose-50 dark:from-slate-800 dark:to-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 relative">
                <span className="relative z-10">Neler Yapabilirim?</span>
              </h2>
              <div className="flex justify-center mb-16">
                <div className="w-24 h-1 bg-purple-500 dark:bg-purple-400 rounded-full"></div>
              </div>
              {capabilitiesData.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {capabilitiesData.map((capability, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-2xl group flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 hover:shadow-pink-500/30 dark:hover:shadow-pink-400/20"
                        >
                          <div className={`p-4 bg-gradient-to-br from-${capability.color}-400 to-${capability.color}-600 dark:from-${capability.color}-500 dark:to-${capability.color}-700 rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                            {React.cloneElement(capability.icon, { size: 40, className: "text-white" })}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{capability.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{capability.description}</p>
                          <OriginalFlowerSVG className={`w-12 h-12 text-${capability.color}-300 dark:text-${capability.color}-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500 absolute -bottom-4 -right-4 transform rotate-12`} />
                        </div>
                    ))}
                  </div>
              ) : (
                  <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
                    Bu bölüm yakında yeni ve heyecan verici içeriklerle güncellenecektir!
                  </p>
              )}
            </div>
          </section>

          <section ref={sectionRefs.projects} id="projects" className="py-16 sm:py-24 bg-white dark:bg-slate-800/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 relative">
                <span className="relative z-10">Portfolyo</span>
                <Sparkles size={40} className="text-yellow-400 dark:text-yellow-300/80 absolute -top-2 right-1/3 transform translate-x-1/2 opacity-70 dark:opacity-50 -z-0" />
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300 flex flex-col">
                      <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity"
                          onError={(e) => e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Resim+Yüklenemedi'}
                      />
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-400">{project.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex-grow">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                              <span key={tag} className="text-xs bg-purple-100 dark:bg-pink-700/80 text-purple-700 dark:text-pink-100 px-2 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="mt-auto flex space-x-3">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-semibold transition-colors text-sm p-2 rounded-md hover:bg-pink-50 dark:hover:bg-slate-700">
                            <Github size={18} className="mr-1.5" /> GitHub
                          </a>
                          {project.demoLink && project.demoLink !== '#' && project.demoLink !== null && (
                              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-green-500 dark:hover:text-green-400 font-semibold transition-colors text-sm p-2 rounded-md hover:bg-green-50 dark:hover:bg-slate-700">
                                <Globe size={18} className="mr-1.5" /> Canlı Demo
                              </a>
                          )}
                        </div>
                      </div>
                      <OriginalButterflySVG className="w-10 h-10 text-pink-400 dark:text-pink-500/70 absolute top-2 right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-500 transform -rotate-12" />
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={sectionRefs.contact} id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-rose-50 via-purple-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative">
                <span className="relative z-10">İletişim</span>
                <OriginalFlowerSVG className="w-20 h-20 text-green-300 dark:text-green-500/50 absolute -bottom-8 left-1/3 transform -translate-x-1/2 opacity-30 dark:opacity-20 -z-0" />
              </h2>
              <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-xl shadow-2xl">
                <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
                  Benimle çalışmak, bir proje hakkında konuşmak veya sadece merhaba demek isterseniz, aşağıdaki yöntemlerden biriyle bana ulaşabilirsiniz.
                </p>

                <div className="mb-8 text-center flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
                  <a
                      href="mailto:aleynagecit4550@gmail.com"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Mail size={20} className="mr-2" /> E-posta Gönder
                  </a>
                  <a
                      href="tel:05330123448"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105 w-full sm:w-auto"
                  >
                    <Phone size={20} className="mr-2" /> Telefonla Ulaşın
                  </a>
                </div>


                <p className="text-center text-gray-600 dark:text-gray-400 mb-2">veya iletişim formunu kullanın:</p>

                <form action="https://formspree.io/f/sizin_formspree_id_niz" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Adınız Soyadınız</label>
                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white sm:text-sm" placeholder="Aleyna Geçit" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-posta Adresiniz</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white sm:text-sm" placeholder="aleynagecit4550@gmail.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                    <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-700 dark:text-white sm:text-sm" placeholder="Merhaba Aleyna, ..."></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 dark:from-pink-500 dark:to-pink-600 dark:hover:from-pink-600 dark:hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all transform hover:scale-105">
                      Mesajı Gönder <Send size={20} className="ml-2" />
                    </button>
                  </div>
                </form>
                <div className="mt-10 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Diğer platformlardan da ulaşabilirsiniz:</p>
                  <div className="flex justify-center space-x-5 sm:space-x-6">
                    {socialLinks.map(link => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                           className="text-slate-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-pink-100 dark:hover:bg-slate-700">
                          {React.cloneElement(link.icon, { size: 36 })}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white dark:bg-slate-800/90 border-t border-gray-200 dark:border-slate-700 py-8 text-center relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">

            </div>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <OriginalFlowerSVG className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Aleyna Geçit. Tüm Hakları Saklıdır.
              </p>
              <OriginalButterflySVG className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500">Sevgi ve Kodlarla Yapıldı.</p>
          </div>
        </footer>

        {activeSection !== 'home' && (
            <button onClick={() => scrollToSection('home')} className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50" aria-label="Yukarı Çık">
              <ArrowUpCircle size={28} />
            </button>
        )}
      </div>
  );
};

export default App;