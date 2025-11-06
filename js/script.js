let currentLang = 'es';

const translations = {
    es: {
        // Navegación
        navinicio: 'Inicio',
        navORC: 'Tecnología ORC',
        navProyectos: 'Proyectos',
        navServicios: 'Servicios',
        navContacto: 'Contacto',
        
        // Hero inicio
        heroTitle: 'Profesionales generando futuro',
        heroSubtitle: 'Soluciones en Ingeniería, Energía y Recuperación de Calor.',
        heroParagraph: 'Expertos en ORC (Ciclo Orgánico de Rankine) – Proyectos EPC, Revamping y Servicios integrales a nivel internacional.',
        
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
        orcIntro: 'Instrelec Group, como representante de INTEC GMK en España, ofrece soluciones avanzadas basadas en el Ciclo Orgánico de Rankine (ORC), ideal para transformar fuentes de calor de bajas temperaturas y potencia térmica reducida en electricidad limpia.',
        orcBtn: 'Ver Aplicaciones ORC →',
        orcGeocalTitle: 'GEOCAL',
        orcGeocalText: 'Potencia ORC a partir del calor geotérmico. Sistemas totalmente automatizados con máxima eficiencia en carga parcial.',
        orcInducalTitle: 'INDUCAL',
        orcInducalText: 'Recuperación de energía a partir del calor residual industrial (Waste Heat). Soluciones para gases calientes o agua a baja presión.',
        orcEcocalTitle: 'ECOCAL',
        orcEcocalText: 'Generación de energía y calor (CHP) a partir de la biomasa a pequeña escala. Alta eficiencia y fácil manejo sin agua de reposición.',
        // Modal ORC
        modalTitle: 'Nuestras Soluciones ORC',
        tabBtnEcocal: 'ECOCAL (Biomasa)',
        tabBtnInducal: 'INDUCAL (Calor Residual)',
        tabBtnGeocal: 'GEOCAL (Geotermia)',

        // ECOCAL
        modalEcocalTitle: 'ECOCAL (Biomasa)',
        modalEcocalIntro: 'Generación de energía para la industria maderera (CHP) y centrales térmicas. Ideal para aserraderos, plantas de pellets y plantas de procesamiento de madera.',
        modalEcocalSourcesTitle: 'Fuentes de Calor Compatibles:',
        modalEcocalSource1: 'Astillas de madera',
        modalEcocalSource2: 'Pellets',
        modalEcocalSource3: 'Residuos de madera',
        modalEcocalFeaturesTitle: 'Características del Módulo:',
        modalEcocalFeature1: 'Utiliza unidades ORC de baja temperatura.',
        modalEcocalFeature2: 'Diseño montado en bastidor (fácil de instalar in situ).',
        modalEcocalFeature3: 'Potencia de salida de hasta 500 kW por módulo.',
        modalEcocalToggle: 'Ver más',
        modalEcocalToggleLess: 'Ver menos',

        // INDUCAL
        modalInducalTitle: 'INDUCAL (Calor Residual)',
        modalInducalIntro: 'Recuperación de energía a partir de múltiples fuentes de calor residual industrial.',
        modalInducalAppsTitle: 'Aplicaciones Principales:',
        modalInducalApp1: 'Agua Caliente y Vapor (Baja Presión): Aprovecha el calor residual de motores de biogás, vapor industrial (siderúrgicas, refinerías) y quemadoras de madera.',
        modalInducalApp2: 'Gases Calientes: Utiliza los gases de escape de generadores y motores, y de procesos industriales (acero, cemento, vidrio, cerámica).',
        modalInducalFeaturesTitle: 'Características Destacadas:',
        modalInducalFeature1: 'Potencia de salida de 0.3 a 4 MW por módulo.',
        modalInducalFeature2: 'Máxima eficiencia gracias a máquinas fabricadas a medida.',
        modalInducalFeature3: 'Condensador refrigerado por aire (ruido ultra-bajo) disponible.',
        modalInducalFeature4: 'Posibilidad de modo CHP (Cogeneración) o máxima potencia.',
        modalInducalToggle: 'Ver más',
        modalInducalToggleLess: 'Ver menos',

        // GEOCAL
        modalGeocalTitle: 'GEOCAL (Geotermia)',
        modalGeocalIntro: 'Aprovechamiento de energía de alta eficiencia procedente de fuentes geotérmicas. Adaptación perfecta a las necesidades específicas de la fuente geotérmica.',
        modalGeocalSourcesTitle: 'Fuentes de Calor Compatibles:',
        modalGeocalSource1: 'Salmuera Caliente: Para acuíferos con temperaturas entre 90°C y 180°C.',
        modalGeocalSource2: 'Drenaje Rápido (Flash): Utiliza la fracción de agua líquida no aprovechada en centrales de vapor flash.',
        modalGeocalSource3: 'Vapor Geotérmico: Ideal para fuentes de vapor a baja presión.',
        modalGeocalFeaturesTitle: 'Característica del Módulo:',
        modalGeocalFeature1: 'Alta eficiencia incluso a carga parcial.',
        modalGeocalToggle: 'Ver más',
        modalGeocalToggleLess: 'Ver menos',
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
        countrySpain: 'ESPAÑA',
        countryGermany: 'ALEMANIA',
        countryUSA: 'EEUU',
        countryVenezuela: 'Venezuela',
        countryPeru: 'Perú',
        countryBolivia: 'Bolivia',
        countryMalaysia: 'Malasia',
        rights: 'Todos los derechos reservados.'
    },





    en: {
        // Navigation
        navinicio: 'Home',
        navORC: 'ORC Technology',
        navProyectos: 'Projects',
        navServicios: 'Services',
        navContacto: 'Contact',
        
        // Hero Home
        heroTitle: 'Professionals shaping the future',
        heroSubtitle: 'Solutions in Engineering, Energy, and Heat Recovery.',
        heroParagraph: 'Experts in ORC (Organic Rankine Cycle) – EPC Projects, Revamping, and integral services internationally.',
        
        // Home Content
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
        orcIntro: 'Instrelec Group, as representative of INTEC GMK in Spain, offers advanced solutions based on the Organic Rankine Cycle (ORC), ideal for transforming low-temperature heat sources and reduced thermal power into clean electricity.',
        orcBtn: 'See ORC Applications →',
        orcGeocalTitle: 'GEOCAL',
        orcGeocalText: 'ORC power from geothermal heat. Fully automated systems with maximum efficiency at partial load.',
        orcInducalTitle: 'INDUCAL',
        orcInducalText: 'Recovery of energy from industrial waste heat. Solutions for hot gases or low-pressure water.',
        orcEcocalTitle: 'ECOCAL',
        orcEcocalText: 'Energy and heat generation (CHP) from biomass on a small scale. High efficiency and easy handling without makeup water.',
        // Modal ORC
        modalTitle: 'Our ORC Solutions',
        tabBtnEcocal: 'ECOCAL (Biomass)',
        tabBtnInducal: 'INDUCAL (Waste Heat)',
        tabBtnGeocal: 'GEOCAL (Geothermal)',

        // ECOCAL
        modalEcocalTitle: 'ECOCAL (Biomass)',
        modalEcocalIntro: 'Energy generation for the wood industry (CHP) and thermal power plants. Ideal for sawmills, pellet plants and wood processing plants.',
        modalEcocalSourcesTitle: 'Compatible Heat Sources:',
        modalEcocalSource1: 'Wood chips',
        modalEcocalSource2: 'Pellets',
        modalEcocalSource3: 'Wood waste',
        modalEcocalFeaturesTitle: 'Module Features:',
        modalEcocalFeature1: 'Uses low-temperature ORC units.',
        modalEcocalFeature2: 'Skid-mounted design (easy on-site installation).',
        modalEcocalFeature3: 'Output power up to 500 kW per module.',
        modalEcocalToggle: 'See more',
        modalEcocalToggleLess: 'See less',

        // INDUCAL
        modalInducalTitle: 'INDUCAL (Waste Heat)',
        modalInducalIntro: 'Energy recovery from multiple industrial waste heat sources.',
        modalInducalAppsTitle: 'Main Applications:',
        modalInducalApp1: 'Hot Water and Steam (Low Pressure): Takes advantage of waste heat from biogas engines, industrial steam (steel mills, refineries) and wood burners.',
        modalInducalApp2: 'Hot Gases: Uses exhaust gases from generators and engines, and from industrial processes (steel, cement, glass, ceramics).',
        modalInducalFeaturesTitle: 'Key Features:',
        modalInducalFeature1: 'Output power from 0.3 to 4 MW per module.',
        modalInducalFeature2: 'Maximum efficiency thanks to custom-made machines.',
        modalInducalFeature3: 'Air-cooled condenser (ultra-low noise) available.',
        modalInducalFeature4: 'Possibility of CHP (Cogeneration) mode or maximum power.',
        modalInducalToggle: 'See more',
        modalInducalToggleLess: 'See less',

        // GEOCAL
        modalGeocalTitle: 'GEOCAL (Geothermal)',
        modalGeocalIntro: 'High-efficiency energy utilization from geothermal sources. Perfect adaptation to the specific needs of the geothermal source.',
        modalGeocalSourcesTitle: 'Compatible Heat Sources:',
        modalGeocalSource1: 'Hot Brine: For aquifers with temperatures between 90°C and 180°C.',
        modalGeocalSource2: 'Flash Drain: Uses the fraction of liquid water not used in flash steam plants.',
        modalGeocalSource3: 'Geothermal Steam: Ideal for low-pressure steam sources.',
        modalGeocalFeaturesTitle: 'Module Feature:',
        modalGeocalFeature1: 'High efficiency even at partial load.',
        modalGeocalToggle: 'See more',
        modalGeocalToggleLess: 'See less',
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
        countrySpain: 'SPAIN',
        countryGermany: 'GERMANY',
        countryUSA: 'USA',
        countryVenezuela: 'Venezuela',
        countryPeru: 'Peru',
        countryBolivia: 'Bolivia',
        countryMalaysia: 'Malaysia',
        rights: 'All rights reserved.'
    }
};






// Aplica las traducciones al DOM según currentLang
function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;

    const get = id => document.getElementById(id);
    
    // Navegación
    if (get('nav-inicio')) get('nav-inicio').textContent = t.navinicio;
    if (get('nav-orc')) get('nav-orc').textContent = t.navORC;
    if (get('nav-proyectos')) get('nav-proyectos').textContent = t.navProyectos;
    if (get('nav-servicios')) get('nav-servicios').textContent = t.navServicios;
    if (get('nav-contacto')) get('nav-contacto').textContent = t.navContacto;
    
    // Hero
    if (get('hero-title')) get('hero-title').textContent = t.heroTitle;
    if (get('hero-subtitle')) get('hero-subtitle').textContent = t.heroSubtitle;
    if (get('hero-paragraph')) get('hero-paragraph').textContent = t.heroParagraph;
    
    // Contenido inicio
    if (get('inicio-title')) get('inicio-title').textContent = t.inicioTitle;
    if (get('inicio-text')) get('inicio-text').textContent = t.inicioText;
    if (get('inicio-btn')) get('inicio-btn').textContent = t.inicioBtn;
    if (get('servicios-title')) get('servicios-title').textContent = t.serviciosTitle;
    if (get('servicio-1')) get('servicio-1').textContent = t.servicio1;
    if (get('servicio-2')) get('servicio-2').textContent = t.servicio2;
    if (get('servicio-3')) get('servicio-3').textContent = t.servicio3;
    if (get('servicio-4')) get('servicio-4').textContent = t.servicio4;
    
    // Sección ORC
    if (get('orc-title')) get('orc-title').textContent = t.orcTitle;
    if (get('orc-intro')) get('orc-intro').textContent = t.orcIntro;
    if (get('orc-btn')) get('orc-btn').textContent = t.orcBtn;
    if (get('orc-geocal-title')) get('orc-geocal-title').textContent = t.orcGeocalTitle;
    if (get('orc-geocal-text')) get('orc-geocal-text').textContent = t.orcGeocalText;
    if (get('orc-inducal-title')) get('orc-inducal-title').textContent = t.orcInducalTitle;
    if (get('orc-inducal-text')) get('orc-inducal-text').textContent = t.orcInducalText;
    if (get('orc-ecocal-title')) get('orc-ecocal-title').textContent = t.orcEcocalTitle;
    if (get('orc-ecocal-text')) get('orc-ecocal-text').textContent = t.orcEcocalText;
    // Modal ORC
    if (get('modal-title')) get('modal-title').textContent = t.modalTitle;
    if (get('tab-btn-ecocal')) get('tab-btn-ecocal').textContent = t.tabBtnEcocal;
    if (get('tab-btn-inducal')) get('tab-btn-inducal').textContent = t.tabBtnInducal;
    if (get('tab-btn-geocal')) get('tab-btn-geocal').textContent = t.tabBtnGeocal;

    // ECOCAL
    if (get('modal-ecocal-title')) get('modal-ecocal-title').textContent = t.modalEcocalTitle;
    if (get('modal-ecocal-intro')) get('modal-ecocal-intro').textContent = t.modalEcocalIntro;
    if (get('modal-ecocal-sources-title')) get('modal-ecocal-sources-title').textContent = t.modalEcocalSourcesTitle;
    if (get('modal-ecocal-source-1')) get('modal-ecocal-source-1').textContent = t.modalEcocalSource1;
    if (get('modal-ecocal-source-2')) get('modal-ecocal-source-2').textContent = t.modalEcocalSource2;
    if (get('modal-ecocal-source-3')) get('modal-ecocal-source-3').textContent = t.modalEcocalSource3;
    if (get('modal-ecocal-features-title')) get('modal-ecocal-features-title').textContent = t.modalEcocalFeaturesTitle;
    if (get('modal-ecocal-feature-1')) get('modal-ecocal-feature-1').innerHTML = t.modalEcocalFeature1;
    if (get('modal-ecocal-feature-2')) get('modal-ecocal-feature-2').textContent = t.modalEcocalFeature2;
    if (get('modal-ecocal-feature-3')) get('modal-ecocal-feature-3').innerHTML = t.modalEcocalFeature3;

    // INDUCAL
    if (get('modal-inducal-title')) get('modal-inducal-title').textContent = t.modalInducalTitle;
    if (get('modal-inducal-intro')) get('modal-inducal-intro').textContent = t.modalInducalIntro;
    if (get('modal-inducal-apps-title')) get('modal-inducal-apps-title').textContent = t.modalInducalAppsTitle;
    if (get('modal-inducal-app-1')) get('modal-inducal-app-1').innerHTML = t.modalInducalApp1;
    if (get('modal-inducal-app-2')) get('modal-inducal-app-2').innerHTML = t.modalInducalApp2;
    if (get('modal-inducal-features-title')) get('modal-inducal-features-title').textContent = t.modalInducalFeaturesTitle;
    if (get('modal-inducal-feature-1')) get('modal-inducal-feature-1').innerHTML = t.modalInducalFeature1;
    if (get('modal-inducal-feature-2')) get('modal-inducal-feature-2').textContent = t.modalInducalFeature2;
    if (get('modal-inducal-feature-3')) get('modal-inducal-feature-3').textContent = t.modalInducalFeature3;
    if (get('modal-inducal-feature-4')) get('modal-inducal-feature-4').textContent = t.modalInducalFeature4;

    // GEOCAL
    if (get('modal-geocal-title')) get('modal-geocal-title').textContent = t.modalGeocalTitle;
    if (get('modal-geocal-intro')) get('modal-geocal-intro').textContent = t.modalGeocalIntro;
    if (get('modal-geocal-sources-title')) get('modal-geocal-sources-title').textContent = t.modalGeocalSourcesTitle;
    if (get('modal-geocal-source-1')) get('modal-geocal-source-1').innerHTML = t.modalGeocalSource1;
    if (get('modal-geocal-source-2')) get('modal-geocal-source-2').innerHTML = t.modalGeocalSource2;
    if (get('modal-geocal-source-3')) get('modal-geocal-source-3').innerHTML = t.modalGeocalSource3;
    if (get('modal-geocal-features-title')) get('modal-geocal-features-title').textContent = t.modalGeocalFeaturesTitle;
    if (get('modal-geocal-feature-1')) get('modal-geocal-feature-1').textContent = t.modalGeocalFeature1;
    
    // Proyectos
    if (get('proyectos-title')) get('proyectos-title').textContent = t.proyectosTitle;
    if (get('project-1-title')) get('project-1-title').textContent = t.project1Title;
    if (get('project-1-desc')) get('project-1-desc').textContent = t.project1Desc;
    if (get('project-2-title')) get('project-2-title').textContent = t.project2Title;
    if (get('project-2-desc')) get('project-2-desc').textContent = t.project2Desc;
    if (get('project-3-title')) get('project-3-title').textContent = t.project3Title;
    if (get('project-3-desc')) get('project-3-desc').textContent = t.project3Desc;
    if (get('project-4-title')) get('project-4-title').textContent = t.project4Title;
    if (get('project-4-desc')) get('project-4-desc').textContent = t.project4Desc;
    if (get('proyectos-btn')) get('proyectos-btn').textContent = t.proyectosBtn;
    
    // Servicios Integrales
    if (get('servicios-integrales-title')) get('servicios-integrales-title').textContent = t.serviciosIntegralesTitle;
    if (get('service-card-1-title')) get('service-card-1-title').textContent = t.serviceCard1Title;
    if (get('service-card-1-desc')) get('service-card-1-desc').textContent = t.serviceCard1Desc;
    if (get('service-card-2-title')) get('service-card-2-title').textContent = t.serviceCard2Title;
    if (get('service-card-2-desc')) get('service-card-2-desc').textContent = t.serviceCard2Desc;
    if (get('service-card-3-title')) get('service-card-3-title').textContent = t.serviceCard3Title;
    if (get('service-card-3-desc')) get('service-card-3-desc').textContent = t.serviceCard3Desc;
    if (get('service-card-4-title')) get('service-card-4-title').textContent = t.serviceCard4Title;
    if (get('service-card-4-desc')) get('service-card-4-desc').textContent = t.serviceCard4Desc;
    
    // Construcción
    if (get('main-title')) get('main-title').textContent = t.mainTitle;
    if (get('main-text')) get('main-text').textContent = t.mainText;

    // Footer
    if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
    // Países del footer
    if (get('country-spain')) get('country-spain').textContent = t.countrySpain;
    if (get('country-germany')) get('country-germany').textContent = t.countryGermany;
    if (get('country-usa')) get('country-usa').textContent = t.countryUSA;
    if (get('country-venezuela')) get('country-venezuela').textContent = t.countryVenezuela;
    if (get('country-peru')) get('country-peru').textContent = t.countryPeru;
    if (get('country-bolivia')) get('country-bolivia').textContent = t.countryBolivia;
    if (get('country-malaysia')) get('country-malaysia').textContent = t.countryMalaysia;
    // Footer GMK Box
const gmkBox = document.querySelector('.gmk-box');
if (gmkBox) {
    const paragraphs = gmkBox.querySelectorAll('p');
    if (paragraphs.length > 0) {
        // *** CAMBIO AQUÍ: Usamos backticks (`) en lugar de comillas dobles (") ***
        paragraphs[0].innerHTML = `<strong>${t.footerRepresentante}</strong>`;
    }
}
    
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = "© 2025 Corp Instrelec Group.";
    }
    
    // Gestión de la clase 'active' para los botones de idioma
    const btnES = get('lang-btn-es');
    const btnEN = get('lang-btn-en');
    
    if (btnES) btnES.classList.toggle('active', currentLang === 'es');
    if (btnEN) btnEN.classList.toggle('active', currentLang === 'en');
    
    // Añadir gestión para los botones de escritorio (si existen)
    const btnESDesktop = get('lang-btn-es-desktop');
    const btnENDesktop = get('lang-btn-en-desktop');
    
    if (btnESDesktop) btnESDesktop.classList.toggle('active', currentLang === 'es');
    if (btnENDesktop) btnENDesktop.classList.toggle('active', currentLang === 'en');

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

// Control del menú móvil
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
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Cerrar al hacer clic en el overlay
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 780) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ==================================
// ===== FUNCIÓN MODAL ORC ======
// ==================================
function setupOrcModal() {
    const openBtn = document.getElementById('orc-btn');
    const modalOverlay = document.getElementById('orc-modal-overlay');
    const modalContainer = document.getElementById('orc-modal-container');
    const closeBtn = document.getElementById('orc-modal-close');
    
    if (!openBtn || !modalOverlay || !modalContainer || !closeBtn) {
        return;
    }

    const tabBtns = modalContainer.querySelectorAll('.modal-tab-btn');
    const tabContents = modalContainer.querySelectorAll('.modal-tab-content');

    const openModal = (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                
                const activeContent = modalContainer.querySelector(`[data-tab-content ="${targetTab}"]`);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            });
        });
        // ===== FUNCIONALIDAD MÓVIL: BOTONES "VER MÁS" =====
    const toggleBtns = modalContainer.querySelectorAll('.modal-toggle-btn');
    
    toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const cardBody = btn.closest('.modal-card-body');
        const expandableContent = cardBody.querySelector('.modal-expandable-content');
        const toggleText = btn.querySelector('.modal-toggle-text');
        
        const isExpanded = expandableContent.classList.toggle('expanded');
        btn.classList.toggle('expanded', isExpanded);
        
        // Obtener el target del botón para saber qué traducción usar
        const target = btn.getAttribute('data-target');
        const t = translations[currentLang];
        
        if (isExpanded) {
            if (target === 'ecocal') toggleText.textContent = t.modalEcocalToggleLess;
            if (target === 'inducal') toggleText.textContent = t.modalInducalToggleLess;
            if (target === 'geocal') toggleText.textContent = t.modalGeocalToggleLess;
        } else {
            if (target === 'ecocal') toggleText.textContent = t.modalEcocalToggle;
            if (target === 'inducal') toggleText.textContent = t.modalInducalToggle;
            if (target === 'geocal') toggleText.textContent = t.modalGeocalToggle;
        }
    });
});
}
    
    


// Inicialización
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
    setupOrcModal();
});