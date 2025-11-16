let currentLang = 'es';

const translations = {
    es: {
        // NavegaciÃ³n
        navinicio: 'Inicio',
        navORC: 'TecnologÃ­a ORC',
        navProyectos: 'Proyectos',
        navServicios: 'Servicios',
        navContacto: 'Contacto',
        
        // Hero inicio
        heroTitle: 'Profesionales generando futuro',
        heroSubtitle: 'Soluciones en IngenierÃ­a, EnergÃ­a y RecuperaciÃ³n de Calor.',
        heroParagraph: 'Expertos en ORC (Ciclo OrgÃ¡nico de Rankine) â€“ Proyectos EPC, Revamping y Servicios integrales a nivel internacional.',
        
        // Contenido inicio
        inicioTitle: 'Sobre Instrelec',
        inicioText: 'Desde 2005, Instrelec ofrece soluciones de ingenierÃ­a en automatizaciÃ³n, control y energÃ­a a nivel internacional. Especialistas en proyectos ORC, energÃ­as renovables y servicios EPC/IPCC.',
        inicioBtn: 'Conozca nuestra tecnologÃ­a ORC',
        serviciosTitle: 'Nuestros servicios',
        servicio1: 'IngenierÃ­a Conceptual y de Detalle',
        servicio2: 'Procura y GestiÃ³n',
        servicio3: 'ConstrucciÃ³n y Revamping',
        servicio4: 'Mantenimiento y contratos a largo plazo',
        
        // SecciÃ³n ORC
        orcTitle: 'TecnologÃ­a ORC: Convierta el Calor en EnergÃ­a',
        orcIntro: 'Instrelec Group, como representante de INTEC GMK en EspaÃ±a, ofrece soluciones avanzadas basadas en el Ciclo OrgÃ¡nico de Rankine (ORC), ideal para transformar fuentes de calor de bajas temperaturas y potencia tÃ©rmica reducida en electricidad limpia.',
        orcBtn: 'Ver Aplicaciones ORC â†’',
        orcGeocalTitle: 'GEOCAL',
        orcGeocalText: 'Potencia ORC a partir del calor geotÃ©rmico. Sistemas totalmente automatizados con mÃ¡xima eficiencia en carga parcial.',
        orcInducalTitle: 'INDUCAL',
        orcInducalText: 'RecuperaciÃ³n de energÃ­a a partir del calor residual industrial (Waste Heat). Soluciones para gases calientes o agua a baja presiÃ³n.',
        orcEcocalTitle: 'ECOCAL',
        orcEcocalText: 'GeneraciÃ³n de energÃ­a y calor (CHP) a partir de la biomasa a pequeÃ±a escala. Alta eficiencia y fÃ¡cil manejo sin agua de reposiciÃ³n.',
        // Modal ORC
        modalTitle: 'Nuestras Soluciones ORC',
        tabBtnEcocal: 'ECOCAL (Biomasa)',
        tabBtnInducal: 'INDUCAL (Calor Residual)',
        tabBtnGeocal: 'GEOCAL (Geotermia)',

        // ECOCAL
        modalEcocalTitle: 'ECOCAL (Biomasa)',
        modalEcocalIntro: 'GeneraciÃ³n de energÃ­a para la industria maderera (CHP) y centrales tÃ©rmicas. Ideal para aserraderos, plantas de pellets y plantas de procesamiento de madera.',
        modalEcocalSourcesTitle: 'Fuentes de Calor Compatibles:',
        modalEcocalSource1: 'Astillas de madera',
        modalEcocalSource2: 'Pellets',
        modalEcocalSource3: 'Residuos de madera',
        modalEcocalFeaturesTitle: 'CaracterÃ­sticas del MÃ³dulo:',
        modalEcocalFeature1: 'Utiliza unidades ORC de baja temperatura.',
        modalEcocalFeature2: 'DiseÃ±o montado en bastidor (fÃ¡cil de instalar in situ).',
        modalEcocalFeature3: 'Potencia de salida de hasta 500 kW por mÃ³dulo.',
        modalEcocalToggle: 'Ver mÃ¡s',
        modalEcocalToggleLess: 'Ver menos',

        // INDUCAL
        modalInducalTitle: 'INDUCAL (Calor Residual)',
        modalInducalIntro: 'RecuperaciÃ³n de energÃ­a a partir de mÃºltiples fuentes de calor residual industrial.',
        modalInducalAppsTitle: 'Aplicaciones Principales:',
        modalInducalApp1: 'Agua Caliente y Vapor (Baja PresiÃ³n): Aprovecha el calor residual de motores de biogÃ¡s, vapor industrial (siderÃºrgicas, refinerÃ­as) y quemadoras de madera.',
        modalInducalApp2: 'Gases Calientes: Utiliza los gases de escape de generadores y motores, y de procesos industriales (acero, cemento, vidrio, cerÃ¡mica).',
        modalInducalFeaturesTitle: 'CaracterÃ­sticas Destacadas:',
        modalInducalFeature1: 'Potencia de salida de 0.3 a 4 MW por mÃ³dulo.',
        modalInducalFeature2: 'MÃ¡xima eficiencia gracias a mÃ¡quinas fabricadas a medida.',
        modalInducalFeature3: 'Condensador refrigerado por aire (ruido ultra-bajo) disponible.',
        modalInducalFeature4: 'Posibilidad de modo CHP (CogeneraciÃ³n) o mÃ¡xima potencia.',
        modalInducalToggle: 'Ver mÃ¡s',
        modalInducalToggleLess: 'Ver menos',

        // GEOCAL
        modalGeocalTitle: 'GEOCAL (Geotermia)',
        modalGeocalIntro: 'Aprovechamiento de energÃ­a de alta eficiencia procedente de fuentes geotÃ©rmicas. AdaptaciÃ³n perfecta a las necesidades especÃ­ficas de la fuente geotÃ©rmica.',
        modalGeocalSourcesTitle: 'Fuentes de Calor Compatibles:',
        modalGeocalSource1: 'Salmuera Caliente: Para acuÃ­feros con temperaturas entre 90Â°C y 180Â°C.',
        modalGeocalSource2: 'Drenaje RÃ¡pido (Flash): Utiliza la fracciÃ³n de agua lÃ­quida no aprovechada en centrales de vapor flash.',
        modalGeocalSource3: 'Vapor GeotÃ©rmico: Ideal para fuentes de vapor a baja presiÃ³n.',
        modalGeocalFeaturesTitle: 'CaracterÃ­stica del MÃ³dulo:',
        modalGeocalFeature1: 'Alta eficiencia incluso a carga parcial.',
        modalGeocalToggle: 'Ver mÃ¡s',
        modalGeocalToggleLess: 'Ver menos',
        // Proyectos
        proyectosTitle: 'Proyectos Destacados',
        project1Title: 'REPSOL (EspaÃ±a)',
        project1Desc: 'IngenierÃ­a, procura y construcciÃ³n (EPC) de una planta de cogeneraciÃ³n ORC, recuperando calor residual de procesos industriales para generar electricidad limpia.',
        project2Title: 'Solar Park (Chile)',
        project2Desc: 'Sistema de automatizaciÃ³n avanzado para la monitorizaciÃ³n y control de granjas solares a escala gigavatio. IntegraciÃ³n de la red y optimizaciÃ³n de rendimiento.',
        project3Title: 'INDUCAL (Alemania)',
        project3Desc: 'ImplementaciÃ³n de la tecnologÃ­a INDUCAL (Waste Heat Recovery) en una fundiciÃ³n, transformando los gases de escape calientes en energÃ­a elÃ©ctrica para autoconsumo.',
        project4Title: 'ECOCAL (Bolivia)',
        project4Desc: 'InstalaciÃ³n de una unidad ECOCAL para generaciÃ³n combinada de calor y electricidad (CHP) usando biomasa forestal local, contribuyendo a la sostenibilidad rural.',
        proyectosBtn: 'Hable con un experto en proyectos â†’',
        
        // Servicios Integrales
        serviciosIntegralesTitle: 'Servicios Integrales',
        serviceCard1Title: 'ConstrucciÃ³n y Revamping',
        serviceCard1Desc: 'Servicios de ConstrucciÃ³n, Montaje, puesta en marcha (Commissioning) y modernizaciÃ³n (Revamping) de plantas y procesos industriales.',
        serviceCard2Title: 'IngenierÃ­a y DiseÃ±o',
        serviceCard2Desc: 'DiseÃ±o de ingenierÃ­a conceptual, de detalle, y estudios de viabilidad para sistemas de energÃ­a, automatizaciÃ³n, y proyectos ORC.',
        serviceCard3Title: 'Procura y GestiÃ³n (EPC)',
        serviceCard3Desc: 'GestiÃ³n completa de Procura, ContrataciÃ³n y Suministro (EPC/IPCC) para garantizar la calidad y eficiencia de su proyecto.',
        serviceCard4Title: 'Mantenimiento y Contratos',
        serviceCard4Desc: 'Servicios de mantenimiento preventivo y correctivo, y contratos a largo plazo (LTSA) para la mÃ¡xima disponibilidad de sus equipos.',
        
        // ConstrucciÃ³n
        mainTitle: 'Sitio en ConstrucciÃ³n',
        mainText: 'Estamos trabajando para ofrecerte la mejor experiencia. Pronto estaremos contigo.',
        
        // Footer
        footerTitle: 'OFICINAS',
        footerRepresentante: 'REPRESENTANTE EN ESPAÃ‘A DE:',
        footerCEO: 'CEO:',
        footerCFO: 'CFO:',
        footerDirector: 'Director de ventas:',
        countrySpain: 'ESPAÃ‘A',
        countryGermany: 'ALEMANIA',
        countryUSA: 'EEUU',
        countryVenezuela: 'Venezuela',
        countryPeru: 'PerÃº',
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
        heroParagraph: 'Experts in ORC (Organic Rankine Cycle) â€“ EPC Projects, Revamping, and integral services internationally.',
        
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
        orcBtn: 'See ORC Applications â†’',
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
        modalGeocalSource1: 'Hot Brine: For aquifers with temperatures between 90Â°C and 180Â°C.',
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
        proyectosBtn: 'Talk to a project expert â†’',
        
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






// Aplica las traducciones al DOM segÃºn currentLang
function applyTranslations() {
    const t = translations[currentLang];
    if (!t) return;

    const get = id => document.getElementById(id);
    
    // NavegaciÃ³n
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
    
    // SecciÃ³n ORC
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
    
    // ConstrucciÃ³n
    if (get('main-title')) get('main-title').textContent = t.mainTitle;
    if (get('main-text')) get('main-text').textContent = t.mainText;

    // Footer
    if (get('footer-title')) get('footer-title').textContent = t.footerTitle;
    // PaÃ­ses del footer
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
        // *** CAMBIO AQUÃ: Usamos backticks (`) en lugar de comillas dobles (") ***
        paragraphs[0].innerHTML = `<strong>${t.footerRepresentante}</strong>`;
    }
}
    
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = "Â© 2025 Corp Instrelec Group.";
    }
    
    // GestiÃ³n de la clase 'active' para los botones de idioma
    const btnES = get('lang-btn-es');
    const btnEN = get('lang-btn-en');
    
    if (btnES) btnES.classList.toggle('active', currentLang === 'es');
    if (btnEN) btnEN.classList.toggle('active', currentLang === 'en');
    
    // AÃ±adir gestiÃ³n para los botones de escritorio (si existen)
    const btnESDesktop = get('lang-btn-es-desktop');
    const btnENDesktop = get('lang-btn-en-desktop');
    
    if (btnESDesktop) btnESDesktop.classList.toggle('active', currentLang === 'es');
    if (btnENDesktop) btnENDesktop.classList.toggle('active', currentLang === 'en');

    document.documentElement.lang = currentLang;
}

// FunciÃ³n para establecer el idioma y persistir
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

// Control del menÃº mÃ³vil
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
            
            // Prevenir scroll del body cuando el menÃº estÃ¡ abierto
            document.body.style.overflow = opened ? 'hidden' : '';
        });

        // Cerrar menÃº al hacer clic en un enlace (solo los <a>, no los botones)
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

        // Cerrar menÃº al redimensionar la ventana (si se cambia a desktop)
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
// ===== FUNCIÃ“N MODAL ORC ======
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
        // ===== FUNCIONALIDAD MÃ“VIL: BOTONES "VER MÃS" =====
    const toggleBtns = modalContainer.querySelectorAll('.modal-toggle-btn');
    
    toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const cardBody = btn.closest('.modal-card-body');
        const expandableContent = cardBody.querySelector('.modal-expandable-content');
        const toggleText = btn.querySelector('.modal-toggle-text');
        
        const isExpanded = expandableContent.classList.toggle('expanded');
        btn.classList.toggle('expanded', isExpanded);
        
        // Obtener el target del botÃ³n para saber quÃ© traducciÃ³n usar
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
    
    


// InicializaciÃ³n
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