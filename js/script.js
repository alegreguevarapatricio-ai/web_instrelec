let currentLang = 'es';

const translations = {
    es: {
        // Navegación
        navinicio: 'inicio',
        navORC: 'Tecnología ORC',
        navProyectos: 'Proyectos',
        navServicios: 'Servicios',
        navContacto: 'Contacto',
        
        // Hero inicio
        heroTitle: 'Profesionales generando futuro',
        heroSubtitle: 'Soluciones en Ingeniería, Energía y Recuperación de Calor.',
        heroParagraph: 'Expertos en ORC (Ciclo Orgánico de Rankine) — Proyectos EPC, Revamping y Servicios integrales a nivel internacional.',
        
        // Contenido inicio
        inicioTitle: 'Sobre Instrelec',
        inicioText: 'Desde 2005, Instrelec ofrece soluciones de ingeniería en automatización, control y energía a nivel internacional. Especialistas en proyectos ORC, energías renovables y servicios EPC/IPCC.',
        inicioBtn: 'Conozca nuestra tecnología ORC',
        serviciosTitle: 'Nuestros servicios',
        servicio1: 'Ingeniería Conceptual y de Detalle',
        servicio2: 'Procura y Gestión',
        servicio3: 'Construcción y Revamping',
        servicio4: 'Mantenimiento y contratos a largo plazo',
        
        // Sección ORC
        orcTitle: 'Tecnología ORC: Convierta el Calor en Energía',
        orcIntro: 'Instrelec Group, como representante de INTEC GMK en España, ofrece soluciones avanzadas basadas en el **Ciclo Orgánico de Rankine (ORC)**, ideal para transformar fuentes de calor de bajas temperaturas y potencia térmica reducida en electricidad limpia.',
        orcBtn: 'Ver Casos Prácticos ORC →',
        orcGeocalTitle: 'GEOCAL',
        orcGeocalText: 'Potencia ORC a partir del **calor geotérmico**. Sistemas totalmente automatizados con máxima eficiencia en carga parcial.',
        orcInducalTitle: 'INDUCAL',
        orcInducalText: 'Recuperación de **energía a partir del calor residual** industrial (Waste Heat). Soluciones para gases calientes o agua a baja presión.',
        orcEcocalTitle: 'ECOCAL',
        orcEcocalText: 'Generación de energía y calor (CHP) a partir de la **biomasa** a pequeña escala. Alta eficiencia y fácil manejo sin agua de reposición.',
        
        // Proyectos
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
        
        // Servicios Integrales
        serviciosIntegralesTitle: 'Servicios Integrales',
        serviceCard1Title: 'Construcción y Revamping',
        serviceCard1Desc: 'Servicios de Construcción, Montaje, puesta en marcha (Commissioning) y modernización (Revamping) de plantas y procesos industriales.',
        serviceCard2Title: 'Ingeniería y Diseño',
        serviceCard2Desc: 'Diseño de ingeniería conceptual, de detalle, y estudios de viabilidad para sistemas de energía, automatización, y proyectos ORC.',
        serviceCard3Title: 'Procura y Gestión (EPC)',
        serviceCard3Desc: 'Gestión completa de Procura, Contratación y Suministro (EPC/IPCC) para garantizar la calidad y eficiencia de su proyecto.',
        serviceCard4Title: 'Mantenimiento y Contratos',
        serviceCard4Desc: 'Servicios de mantenimiento preventivo y correctivo, y contratos a largo plazo (LTSA) para la máxima disponibilidad de sus equipos.',
        
        // Construcción
        mainTitle: 'Sitio en Construcción',
        mainText: 'Estamos trabajando para ofrecerte la mejor experiencia. Pronto estaremos contigo.',
        
        // Footer
        footerTitle: 'OFICINAS',
        footerRepresentante: 'REPRESENTANTE EN ESPAÑA DE:',
        footerCEO: 'CEO:',
        footerCFO: 'CFO:',
        footerDirector: 'Director de ventas:',
        rights: 'Todos los derechos reservados.'
    },
    en: {
        // Navigation
        navinicio: 'Company',
        navORC: 'ORC Technology',
        navProyectos: 'Projects',
        navServicios: 'Services',
        navContacto: 'Contact',
        
        // Hero Company
        heroTitle: 'Professionals shaping the future',
        heroSubtitle: 'Solutions in Engineering, Energy, and Heat Recovery.',
        heroParagraph: 'Experts in ORC (Organic Rankine Cycle) — EPC Projects, Revamping, and integral services internationally.',
        
        // Company Content
        inicioTitle: 'About Instrelec',
        inicioText: 'Since 2005, Instrelec offers engineering solutions in automation, control and energy internationally. Specialists in ORC projects, renewable energy and EPC/IPCC services.',
        inicioBtn: 'Learn about our ORC technology',
        serviciosTitle: 'Our services',
        servicio1: 'Conceptual and Detailed Engineering',
        servicio2: 'Procurement and Management',
        servicio3: 'Construction and Revamping',
        servicio4: 'Maintenance and long-term contracts',
        
        // ORC Section
        orcTitle: 'ORC Technology: Turn Heat into Energy',
        orcIntro: 'Instrelec Group, as representative of INTEC GMK in Spain, offers advanced solutions based on the **Organic Rankine Cycle (ORC)**, ideal for transforming low-temperature heat sources and reduced thermal power into clean electricity.',
        orcBtn: 'See ORC Practical Cases →',
        orcGeocalTitle: 'GEOCAL',
        orcGeocalText: 'ORC power from **geothermal heat**. Fully automated systems with maximum efficiency at partial load.',
        orcInducalTitle: 'INDUCAL',
        orcInducalText: 'Recovery of **energy from industrial waste heat**. Solutions for hot gases or low-pressure water.',
        orcEcocalTitle: 'ECOCAL',
        orcEcocalText: 'Energy and heat generation (CHP) from **biomass** on a small scale. High efficiency and easy handling without makeup water.',
        
        // Projects
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
        
        // Integral Services
        serviciosIntegralesTitle: 'Integral Services',
        serviceCard1Title: 'Construction and Revamping',
        serviceCard1Desc: 'Construction services, Assembly, commissioning, and modernization (Revamping) of industrial plants and processes.',
        serviceCard2Title: 'Engineering and Design',
        serviceCard2Desc: 'Conceptual engineering, detailed design, and feasibility studies for energy systems, automation, and ORC projects.',
        serviceCard3Title: 'Procurement and Management (EPC)',
        serviceCard3Desc: 'Complete Procurement, Contracting, and Supply Management (EPC/IPCC) to ensure the quality and efficiency of your project.',
        serviceCard4Title: 'Maintenance and Contracts',
        serviceCard4Desc: 'Preventive and corrective maintenance services, and Long-Term Service Agreements (LTSA) for maximum equipment availability.',
        
        // Construction
        mainTitle: 'Under Construction',
        mainText: 'We are working to offer you the best experience. We will be with you soon.',
        
        // Footer
        footerTitle: 'OFFICES',
        footerRepresentante: 'REPRESENTATIVE IN SPAIN OF:',
        footerCEO: 'CEO:',
        footerCFO: 'CFO:',
        footerDirector: 'Sales Director:',
        rights: 'All rights reserved.'
    }
};

// Aplica las traducciones al DOM según currentLang
function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;

    const get = id => document.getElementById(id);
    
    // ... (todo el resto de tu código de traducciones se mantiene igual) ...

    // Footer
    if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
    
    // Footer GMK Box - VERSIÓN CORREGIDA
    const gmkBox = document.querySelector('.gmk-box');
    if (gmkBox) {
        const firstParagraph = gmkBox.querySelector('p');
        if (firstParagraph) {
            firstParagraph.innerHTML = `<strong>${t.footerRepresentante}</strong>`;
        }
    }
    
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

// Control del menú móvil - REEMPLAZAR esta función completa
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const opened = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active', opened);
            if (overlay) overlay.classList.toggle('active', opened);
            
            // Prevenir scroll del body cuando el menú está abierto
            document.body.style.overflow = opened ? 'hidden' : '';
        });

        // Cerrar menú al hacer clic en un enlace (solo los <a>, no los botones)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                // No prevenir el comportamiento por defecto para permitir la navegación
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            });
        });

        // Cerrar al hacer clic en el overlay
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
            });
        }

        // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 780) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = ''; // Restaurar scroll
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