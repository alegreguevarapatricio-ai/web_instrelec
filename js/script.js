let currentLang = 'es';

        const translations = {
            es: {
                // Nuevos enlaces de navegación
                navEmpresa: 'Empresa',
                navORC: 'Tecnología ORC',
                navProyectos: 'Proyectos',
                navServicios: 'Servicios',
                navContacto: 'Contacto',
                // --- NUEVAS TRADUCCIONES ORC ---
                orcTitle: 'Tecnología ORC: Convierta el Calor en Energía',
                orcIntro: 'Instrelec Group, como representante de INTEC GMK en España, ofrece soluciones avanzadas basadas en el **Ciclo Orgánico de Rankine (ORC)**, ideal para transformar fuentes de calor de bajas temperaturas y potencia térmica reducida en electricidad limpia.',
                orcBtn: 'Ver Casos Prácticos ORC →',
                // Tarjeta 1
                orcGeocalTitle: 'GEOCAL',
                orcGeocalText: 'Potencia ORC a partir del **calor geotérmico**. Sistemas totalmente automatizados con máxima eficiencia en carga parcial.',
                // Tarjeta 2
                orcInducalTitle: 'INDUCAL',
                orcInducalText: 'Recuperación de **energía a partir del calor residual** industrial (Waste Heat). Soluciones para gases calientes o agua a baja presión.',
                // Tarjeta 3
                orcEcocalTitle: 'ECOCAL',
                orcEcocalText: 'Generación de energía y calor (CHP) a partir de la **biomasa** a pequeña escala. Alta eficiencia y fácil manejo sin agua de reposición.',
                // Contenido Empresa (Añadido para futura traducción)
                empresaTitle: 'Sobre Instrelec',
                empresaText: 'Desde 2005, Instrelec ofrece soluciones de ingeniería en automatización, control y energía a nivel internacional. Especialistas en proyectos ORC, energías renovables y servicios EPC/IPCC.',
                empresaBtn: 'Conozca nuestra tecnología ORC',
                serviciosTitle: 'Nuestros servicios',
                servicio1: 'Ingeniería Conceptual y de Detalle',
                servicio2: 'Procura y Gestión',
                servicio3: 'Construcción y Revamping',
                servicio4: 'Mantenimiento y contratos a largo plazo',
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
                // --- NUEVAS TRADUCCIONES ORC ---
                orcTitle: 'ORC Technology: Convert Heat into Energy',
                orcIntro: 'Instrelec Group, as a representative of INTEC GMK in Spain, offers advanced solutions based on the **Organic Rankine Cycle (ORC)**, ideal for transforming low-temperature heat sources and reduced thermal power into clean electricity.',
                orcBtn: 'View ORC Case Studies →',
                // Tarjeta 1
                orcGeocalTitle: 'GEOCAL',
                orcGeocalText: 'ORC power from **geothermal heat**. Fully automated systems with maximum efficiency in partial load.',
                // Tarjeta 2
                orcInducalTitle: 'INDUCAL',
                orcInducalText: 'Recovery of **energy from industrial residual heat** (Waste Heat). Solutions for hot gases or low-pressure water.',
                // Tarjeta 3
                orcEcocalTitle: 'ECOCAL',
                orcEcocalText: 'Generation of power and heat (CHP) from **biomass** on a small scale. High efficiency and easy handling without replenishment water.',
                // Contenido Empresa (Añadido para futura traducción)
                empresaTitle: 'About Instrelec',
                empresaText: 'Since 2005, Instrelec offers engineering solutions in automation, control and energy internationally. Specialists in ORC projects, renewable energy and EPC/IPCC services.',
                empresaBtn: 'Learn about our ORC technology',
                serviciosTitle: 'Our services',
                servicio1: 'Conceptual and Detailed Engineering',
                servicio2: 'Procurement and Management',
                servicio3: 'Construction and Revamping',
                servicio4: 'Maintenance and long-term contracts',
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
            
            // SECCIÓN ORC (NUEVA)
            if (get('orc-title')) get('orc-title').textContent = t.orcTitle;
            // Usa innerHTML y regex para manejar el formato **texto** en negrita (strong)
            if (get('orc-intro')) get('orc-intro').innerHTML = t.orcIntro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-btn')) get('orc-btn').textContent = t.orcBtn;
            // Tarjetas ORC
            if (get('orc-geocal-title')) get('orc-geocal-title').textContent = t.orcGeocalTitle;
            if (get('orc-geocal-text')) get('orc-geocal-text').innerHTML = t.orcGeocalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-inducal-title')) get('orc-inducal-title').textContent = t.orcInducalTitle;
            if (get('orc-inducal-text')) get('orc-inducal-text').innerHTML = t.orcInducalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            if (get('orc-ecocal-title')) get('orc-ecocal-title').textContent = t.orcEcocalTitle;
            if (get('orc-ecocal-text')) get('orc-ecocal-text').innerHTML = t.orcEcocalText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

            // SECCIÓN EMPRESA (NUEVA)
            if (get('empresa-title')) get('empresa-title').textContent = t.empresaTitle;
            if (get('empresa-text')) get('empresa-text').textContent = t.empresaText;
            if (get('empresa-btn')) get('empresa-btn').textContent = t.empresaBtn;
            if (get('servicios-title')) get('servicios-title').textContent = t.serviciosTitle;
            if (get('servicio1')) get('servicio1').textContent = t.servicio1;
            if (get('servicio2')) get('servicio2').textContent = t.servicio2;
            if (get('servicio3')) get('servicio3').textContent = t.servicio3;
            if (get('servicio4')) get('servicio4').textContent = t.servicio4;

            // Texto de Construcción
            if (get('main-title')) get('main-title').textContent = t.mainTitle;
            if (get('main-text')) get('main-text').textContent = t.mainText;
            
            // Footer
            if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
            const copyrightElement = document.querySelector('.copyright');
            if (copyrightElement) {
                copyrightElement.textContent = `© 2025 Corp Instrelec Group. ${t.rights}`; 
            }
            
            // Gestión de la clase 'active' para los nuevos botones de idioma
            const btnES = get('lang-btn-es');
            const btnEN = get('lang-btn-en');
            
            if (btnES) btnES.classList.toggle('active', currentLang === 'es');
            if (btnEN) btnEN.classList.toggle('active', currentLang === 'en');

            document.documentElement.lang = currentLang;
        }

        // Función para establecer el idioma y persistir (Mantenida la lógica del archivo original del usuario)
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
        // Exponer la nueva función globalmente
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

                // Keep the document click handler but ignore overlay clicks
                document.addEventListener('click', (e) => {
                    if (overlay && overlay.contains(e.target)) return;
                    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                        // Check if the click is not on the language selector buttons either
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
                        // First, check if the user has a saved preference
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