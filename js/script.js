let currentLang = 'es';

        const translations = {
            es: {
                // Nuevos enlaces de navegación
                navEmpresa: 'Empresa',
                navORC: 'Tecnología ORC',
                navProyectos: 'Proyectos',
                navServicios: 'Servicios',
                navContacto: 'Contacto',
                // --- TRADUCCIONES HERO EMPRESA ---
                heroTitle: 'Profesionales generando futuro',
                heroSubtitle: 'Soluciones en Ingeniería, Energía y Recuperación de Calor.',
                heroParagraph: 'Expertos en ORC (Ciclo Orgánico de Rankine) — Proyectos EPC, Revamping y Servicios integrales a nivel internacional.',
                // Contenido Empresa
                empresaTitle: 'Sobre Instrelec',
                empresaText: 'Desde 2005, Instrelec ofrece soluciones de ingeniería en automatización, control y energía a nivel internacional. Especialistas en proyectos ORC, energías renovables y servicios EPC/IPCC.',
                empresaBtn: 'Conozca nuestra tecnología ORC',
                serviciosTitle: 'Nuestros servicios',
                servicio1: 'Ingeniería Conceptual y de Detalle',
                servicio2: 'Procura y Gestión',
                servicio3: 'Construcción y Revamping',
                servicio4: 'Mantenimiento y contratos a largo plazo',
                // --- TRADUCCIONES PROYECTOS ---
                proyectosTitle: 'Proyectos Destacados',
                project1Title: 'REPSOL (España)',
                project1Desc: 'Ingeniería, procura y construcción (EPC) de una planta de cogeneración ORC, recuperando calor residual de procesos industriales para generar electricidad limpia.',
                project2Title: 'Solar Park (Chile)',
                project2Desc: 'Sistema de automatización avanzado para la monitorización y control de granjas solares a escala gigavatio. Integración de la red y optimización de rendimiento.',
                project3Title: 'INDUCAL (Alemania)',
                project3Desc: 'Implementación de la tecnología INDUCAL (Waste Heat Recovery) en una fundición, transformando los gases de escape calientes en energía eléctrica para autoconsumo.',
                project4Title: 'ECOCAL (Bolivia)',
                project4Desc: 'Instalación de una unidad ECOCAL para generación combinada de calor y electricidad (CHP) usando biomasa forestal local, contribuyendo a la sostenibilidad rural.',
                proyectosBtn: 'Hable con un experto en proyectos →',
                // --- TRADUCCIONES SERVICIOS INTEGRALES ---
                serviciosIntegralesTitle: 'Servicios Integrales',
                serviceCard1Title: 'Construcción y Revamping',
                serviceCard1Desc: 'Servicios de Construcción, Montaje, puesta en marcha (Commissioning) y modernización (Revamping) de plantas y procesos industriales.',
                serviceCard2Title: 'Ingeniería y Diseño',
                serviceCard2Desc: 'Diseño de ingeniería conceptual, de detalle, y estudios de viabilidad para sistemas de energía, automatización, y proyectos ORC.',
                serviceCard3Title: 'Procura y Gestión (EPC)',
                serviceCard3Desc: 'Gestión completa de Procura, Contratación y Suministro (EPC/IPCC) para garantizar la calidad y eficiencia de su proyecto.',
                serviceCard4Title: 'Mantenimiento y Contratos',
                serviceCard4Desc: 'Servicios de mantenimiento preventivo y correctivo, y contratos a largo plazo (LTSA) para la máxima disponibilidad de sus equipos.',
                // Contenido principal de "Construcción" (se mantiene)
                mainTitle: 'Sitio en Construcción',
                mainText: 'Estamos trabajando para ofrecerte la mejor experiencia. Pronto estaremos contigo.',
                footerTitle: 'OFICINAS',
                salesDirector: 'Director de ventas:',
                rights: 'Todos los derechos reservados.'
            },
            en: {
                // Nuevos enlaces de navegación
                navEmpresa: 'Company',
                navORC: 'ORC Technology',
                navProyectos: 'Projects',
                navServicios: 'Services',
                navContacto: 'Contact',
                // --- TRADUCCIONES HERO EMPRESA ---
                heroTitle: 'Professionals shaping the future',
                heroSubtitle: 'Solutions in Engineering, Energy, and Heat Recovery.',
                heroParagraph: 'Experts in ORC (Organic Rankine Cycle) — EPC Projects, Revamping, and integral services internationally.',
                // Contenido Empresa
                empresaTitle: 'About Instrelec',
                empresaText: 'Since 2005, Instrelec offers engineering solutions in automation, control and energy internationally. Specialists in ORC projects, renewable energy and EPC/IPCC services.',
                empresaBtn: 'Learn about our ORC technology',
                serviciosTitle: 'Our services',
                servicio1: 'Conceptual and Detailed Engineering',
                servicio2: 'Procurement and Management',
                servicio3: 'Construction and Revamping',
                servicio4: 'Maintenance and long-term contracts',
                // --- TRADUCCIONES PROYECTOS ---
                proyectosTitle: 'Featured Projects',
                project1Title: 'REPSOL (Spain)',
                project1Desc: 'Engineering, Procurement, and Construction (EPC) of an ORC cogeneration plant, recovering industrial waste heat to generate clean electricity.',
                project2Title: 'Solar Park (Chile)',
                project2Desc: 'Advanced automation system for monitoring and control of gigawatt-scale solar farms. Grid integration and performance optimization.',
                project3Title: 'INDUCAL (Germany)',
                project3Desc: 'Implementation of INDUCAL (Waste Heat Recovery) technology in a foundry, transforming hot exhaust gases into electrical energy for self-consumption.',
                project4Title: 'ECOCAL (Bolivia)',
                project4Desc: 'Installation of an ECOCAL unit for Combined Heat and Power (CHP) generation using local forest biomass, contributing to rural sustainability.',
                proyectosBtn: 'Talk to a project expert →',
                // --- TRADUCCIONES SERVICIOS INTEGRALES ---
                serviciosIntegralesTitle: 'Integral Services',
                serviceCard1Title: 'Construction and Revamping',
                serviceCard1Desc: 'Construction services, Assembly, commissioning, and modernization (Revamping) of industrial plants and processes.',
                serviceCard2Title: 'Engineering and Design',
                serviceCard2Desc: 'Conceptual engineering, detailed design, and feasibility studies for energy systems, automation, and ORC projects.',
                serviceCard3Title: 'Procurement and Management (EPC)',
                serviceCard3Desc: 'Complete Procurement, Contracting, and Supply Management (EPC/IPCC) to ensure the quality and efficiency of your project.',
                serviceCard4Title: 'Maintenance and Contracts',
                serviceCard4Desc: 'Preventive and corrective maintenance services, and Long-Term Service Agreements (LTSA) for maximum equipment availability.',
                // Contenido principal de "Construcción" (se mantiene)
                mainTitle: 'Under Construction',
                mainText: 'We are working to offer you the best experience. We will be with you soon.',
                footerTitle: 'OFFICES',
                salesDirector: 'Sales Director:',
                rights: 'All rights reserved.'
            }
        };

        // Aplica las traducciones al DOM según currentLang
        function applyTranslations() {
            const t = translations[currentLang];
            if (!t) return;

            const get = id => document.getElementById(id);
            // Navegación
            if (get('nav-empresa')) get('nav-empresa').textContent = t.navEmpresa;
            if (get('nav-orc')) get('nav-orc').textContent = t.navORC;
            if (get('nav-proyectos')) get('nav-proyectos').textContent = t.navProyectos;
            if (get('nav-servicios')) get('nav-servicios').textContent = t.navServicios;
            if (get('nav-contacto')) get('nav-contacto').textContent = t.navContacto;

            // SECCIÓN ORC (Añadido previamente)
            if (get('orc-title')) get('orc-title').textContent = t.orcTitle;
            if (get('orc-intro')) get('orc-intro').innerHTML = t.orcIntro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-btn')) get('orc-btn').textContent = t.orcBtn;
            if (get('orc-geocal-title')) get('orc-geocal-title').textContent = t.orcGeocalTitle;
            if (get('orc-geocal-text')) get('orc-geocal-text').innerHTML = t.orcGeocalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-inducal-title')) get('orc-inducal-title').textContent = t.orcInducalTitle;
            if (get('orc-inducal-text')) get('orc-inducal-text').innerHTML = t.orcInducalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-ecocal-title')) get('orc-ecocal-title').textContent = t.orcEcocalTitle;
            if (get('orc-ecocal-text')) get('orc-ecocal-text').innerHTML = t.orcEcocalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            // SECCIÓN EMPRESA - HERO (Añadido previamente)
            if (get('hero-title')) get('hero-title').textContent = t.heroTitle;
            if (get('hero-subtitle')) get('hero-subtitle').textContent = t.heroSubtitle;
            if (get('hero-paragraph')) get('hero-paragraph').textContent = t.heroParagraph;
            
            // SECCIÓN EMPRESA - CONTENIDO (Añadido previamente)
            if (get('empresa-title')) get('empresa-title').textContent = t.empresaTitle;
            if (get('empresa-text')) get('empresa-text').textContent = t.empresaText;
            if (get('empresa-btn')) get('empresa-btn').textContent = t.empresaBtn;
            if (get('servicios-title')) get('servicios-title').textContent = t.serviciosTitle;
            if (get('servicio1')) get('servicio1').textContent = t.servicio1;
            if (get('servicio2')) get('servicio2').textContent = t.servicio2;
            if (get('servicio3')) get('servicio3').textContent = t.servicio3;
            if (get('servicio4')) get('servicio4').textContent = t.servicio4;

            // --- SECCIÓN PROYECTOS (NUEVO) ---
            if (get('proyectos-title')) get('proyectos-title').textContent = t.proyectosTitle;
            if (get('project1-title')) get('project1-title').textContent = t.project1Title;
            if (get('project1-desc')) get('project1-desc').textContent = t.project1Desc;
            if (get('project2-title')) get('project2-title').textContent = t.project2Title;
            if (get('project2-desc')) get('project2-desc').textContent = t.project2Desc;
            if (get('project3-title')) get('project3-title').textContent = t.project3Title;
            if (get('project3-desc')) get('project3-desc').textContent = t.project3Desc;
            if (get('project4-title')) get('project4-title').textContent = t.project4Title;
            if (get('project4-desc')) get('project4-desc').textContent = t.project4Desc;
            if (get('proyectos-btn')) get('proyectos-btn').textContent = t.proyectosBtn;

            // --- SECCIÓN SERVICIOS INTEGRALES (NUEVO) ---
            if (get('servicios-integrales-title')) get('servicios-integrales-title').textContent = t.serviciosIntegralesTitle;
            if (get('service-card1-title')) get('service-card1-title').textContent = t.serviceCard1Title;
            if (get('service-card1-desc')) get('service-card1-desc').textContent = t.serviceCard1Desc;
            if (get('service-card2-title')) get('service-card2-title').textContent = t.serviceCard2Title;
            if (get('service-card2-desc')) get('service-card2-desc').textContent = t.serviceCard2Desc;
            if (get('service-card3-title')) get('service-card3-title').textContent = t.serviceCard3Title;
            if (get('service-card3-desc')) get('service-card3-desc').textContent = t.serviceCard3Desc;
            if (get('service-card4-title')) get('service-card4-title').textContent = t.serviceCard4Title;
            if (get('service-card4-desc')) get('service-card4-desc').textContent = t.serviceCard4Desc;

            // Texto de Construcción
            if (get('main-title')) get('main-title').textContent = t.mainTitle;
            if (get('main-text')) get('main-text').textContent = t.mainText;
            
            // Footer
            if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
            const copyrightElement = document.querySelector('.copyright');
            if (copyrightElement) {
                copyrightElement.textContent = `© 2025 Corp Instrelec Group. ${t.rights}`; 
            }
            
            // Gestión de la clase 'active' para los botones de idioma
            const btnES = get('lang-btn-es');
            const btnEN = get('lang-btn-en');
            
            if (btnES) btnES.classList.toggle('active', currentLang === 'es');
            if (btnEN) btnEN.classList.toggle('active', currentLang === 'en');

            document.documentElement.lang = currentLang;
        }

        // Función para establecer el idioma y persistir 
        function setLanguage(lang) {
            if (translations[lang] && lang !== currentLang) {
                currentLang = lang;
                applyTranslations();
                try {
                    localStorage.setItem('instrelecLang', currentLang);
                } catch (e) {
                    // ignore storage errors
                }
            }
        }
        window.setLanguage = setLanguage;
        
        // Control del menú móvil (Mantenido)
        function setupMobileMenu() {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.querySelector('.nav-links');
            const overlay = document.getElementById('overlay');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    const opened = navLinks.classList.toggle('active');
                    if (overlay) overlay.classList.toggle('active', opened);
                });

                // Cerrar menú al hacer clic en un enlace
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                        if (overlay) overlay.classList.remove('active');
                    });
                });

                // Close when clicking the overlay
                if (overlay) {
                    overlay.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                        overlay.classList.remove('active');
                    });
                }

                document.addEventListener('click', (e) => {
                    if (overlay && overlay.contains(e.target)) return;
                    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                        const langGroup = document.querySelector('.lang-selector-group');
                        if (langGroup && langGroup.contains(e.target)) return;

                        navLinks.classList.remove('active');
                        if (overlay) overlay.classList.remove('active');
                    }
                });
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            try {
                        const saved = localStorage.getItem('instrelecLang');
                        if (saved && translations[saved]) {
                            currentLang = saved;
                        } else {
                            const navLang = navigator.language || navigator.userLanguage || 'es';
                            const baseLang = (navLang.split('-')[0] || 'es').toLowerCase();
                            currentLang = translations[baseLang] ? baseLang : 'es';
                        }
            } catch (e) {
                currentLang = 'es';
            }

            applyTranslations();
            setupMobileMenu();
        });