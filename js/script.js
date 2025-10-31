
        let currentLang = 'es';

        const translations = {
            es: {
                navInicio: 'Inicio',
                navAbout: 'Nosotros',
                navContacto: 'Contacto',
                mainTitle: 'Sitio en Construcción',
                mainText: 'Estamos trabajando para ofrecerte la mejor experiencia. Pronto estaremos contigo.',
                footerTitle: 'OFICINAS',
                salesDirector: 'Director de ventas:',
                rights: 'Todos los derechos reservados.'
            },
            en: {
                navInicio: 'Home',
                navAbout: 'About',
                navContacto: 'Contact',
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
            if (get('nav-inicio')) get('nav-inicio').textContent = t.navInicio;
            if (get('nav-about')) get('nav-about').textContent = t.navAbout;
            if (get('nav-contacto')) get('nav-contacto').textContent = t.navContacto;
            if (get('main-title')) get('main-title').textContent = t.mainTitle;
            if (get('main-text')) get('main-text').textContent = t.mainText;
            if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
            if (get('sales-director')) get('sales-director').textContent = t.salesDirector;
            if (get('rights')) get('rights').textContent = t.rights;

            const langBtn = get('lang-btn');
            if (langBtn) langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';

            document.documentElement.lang = currentLang;
        }

        // Alterna el idioma y aplica traducciones
        function toggleLanguage() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            applyTranslations();
        }

        // Detectar idioma del navegador al cargar y aplicar traducción
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

                // Cerrar menú al hacer clic fuera
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

        // Persist language when toggling
        const originalToggle = toggleLanguage;
        function toggleLanguageAndPersist() {
            originalToggle();
            try {
                localStorage.setItem('instrelecLang', currentLang);
            } catch (e) {
                // ignore storage errors
            }
        }
        // Replace global toggle with persisting version
        window.toggleLanguage = toggleLanguageAndPersist;
