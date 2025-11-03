let currentLang = 'es';

        const translations = {
            es: {
                // Nuevos enlaces de navegación
                navEmpresa: 'Empresa',
                navORC: 'Tecnología ORC',
                navProyectos: 'Proyectos',
                navServicios: 'Servicios',
                navContacto: 'Contacto',
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
            // Nuevos enlaces
            if (get('nav-empresa')) get('nav-empresa').textContent = t.navEmpresa;
            if (get('nav-orc')) get('nav-orc').textContent = t.navORC;
            if (get('nav-proyectos')) get('nav-proyectos').textContent = t.navProyectos;
            if (get('nav-servicios')) get('nav-servicios').textContent = t.navServicios;
            if (get('nav-contacto')) get('nav-contacto').textContent = t.navContacto;
            
            // Texto de Construcción
            if (get('main-title')) get('main-title').textContent = t.mainTitle;
            if (get('main-text')) get('main-text').textContent = t.mainText;
            
            // Footer
            if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
            // Solo actualiza el texto, no el nombre del director
            if (get('sales-director')) {
                get('sales-director').textContent = t.salesDirector;
                // Asume que el HTML mantiene el nombre del director después del strong
                // <p><strong id="sales-director">Director de ventas:</strong> Nico Timm</p>
            } 
            if (get('rights')) get('rights').textContent = `© 2025 Corp Instrelec Group. ${t.rights}`; 

            // Gestión de la clase 'active' para los nuevos botones de idioma
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
        // Exponer la nueva función globalmente
        window.setLanguage = setLanguage;
        
        // Control del menú móvil
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