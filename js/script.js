// js/script.js - PARTE 1: TRADUCCIONES
let currentLang = 'es';

// Nested structured translations (ES / EN)
const translations = {
    es: {
        meta: {
            title: "Corp Instrelec Group"
        },
        nav: {
            home: "Inicio",
            orc: "Tecnología ORC",
            projects: "Proyectos",
            services: "Servicios",
            contact: "Contacto"
        },
        hero: {
            title: "Profesionales generando futuro",
            subtitle: "Soluciones en Ingeniería, Energía y Recuperación de Calor.",
            paragraph: "Expertos en ORC (Ciclo Orgánico de Rankine) — Proyectos EPC, Revamping y servicios integrales a nivel internacional."
        },
        // TIMELINE - COMPLETO
        timeline: {
            title: "Nuestra Historia y Crecimiento",
            year2005: "2005 - Origen:",
            desc2005: "Instrelec nace ofreciendo soluciones de Ingeniería en Automatización, Control y Electricidad en Venezuela.",
            year2007: "2007 - Internacionalización:",
            desc2007: "Apertura de la sede en España, iniciando la oferta de soluciones tipo <strong>IPCC (Ingeniería, Procura, Construcción y Comisionamiento).</strong>",
            year2016: "2016 - Corporación Instrelec Group:",
            desc2016: "Se crea la Corporación, integrando a empresas especialistas con más de 20 años de experiencia en el sector Oil & Gas y un grupo financiero.",
            year2022: "2022 - Expansión Global:",
            desc2022: "Firma de proyectos estratégicos con el Ministerio de Energía Renovable de IRAK para el <strong>SALADIN 60 MW Solar Park</strong> y diferentes proyectos en Emiratos Árabes Unidos."
        },
        // SECCIÓN LÍDER - COMPLETO
        lider: {
            title: "EMPRESA LÍDER EN EL SECTOR INDUSTRIAL",
            card1: {
                title: "Ingeniería Especializada",
                desc: "División de Ingenierías Conceptual, Básica y de Detalles con soluciones técnicas de vanguardia para proyectos complejos."
            },
            card2: {
                title: "Gestión y Suministro",
                desc: "División de Gestión Aprovisionamiento (Procura) con alcance global y cadena de suministro optimizada."
            },
            card3: {
                title: "Proyectos de Energía",
                desc: "Soluciones completas de ORC y Representación GMK para proyectos a gran escala con máxima eficiencia energética.",
                button: "Conoce Más"
            },
            card4: {
                title: "Sostenibilidad y Energía",
                desc: "Desarrollo e implementación de proyectos innovadores de <strong>Energías Renovables</strong> (Solar, Eólica e Hidrógeno Verde) para un futuro sostenible."
            }
        },
        experience: {
            title: "Experiencia Comprobada Proyectos Destacados"
        },
        table: {
            header: {
                client: "Cliente",
                project: "Proyecto Destacado",
                country: "País",
                investment: "Inversión Estimada"
            },
            row1: {
                client: "Ministerio de Industria",
                project: "Contrato IPC para el <strong>SALADIN 60 MW SOLAR PARK</strong>",
                country: "IRAK",
                investment: "$36 MM"
            },
            row2: {
                client: "NATIONAL WATER COMPANY",
                project: "Ingeniería, Procura y Construcción para las Reservas Estratégicas",
                country: "ARABIA SAUDITA",
                investment: "$300 M"
            },
            row3: {
                client: "AES GENER",
                project: "Proyecto IPC para el reemplazo de bombas de alimentación de caldera",
                country: "CHILE",
                investment: "$7.2 MM"
            },
            row4: {
                client: "PETRONAS",
                project: "<em>Umbrella Contract</em> para <em>Well Testing</em> y TCP",
                country: "MALASIA",
                investment: "$28 MM"
            },
            row5: {
                client: "REPSOL PERÚ",
                project: "Trabajos mecánicos de parada de planta (torre de destilación)",
                country: "PERÚ",
                investment: "$6 MM"
            }
        },
        presence: {
            title: "Presencia Internacional",
            america: {
                label: "América:",
                text: "Perú, Venezuela, Bolivia, EEUU."
            },
            europe: {
                label: "Europa:",
                text: "España."
            },
            asiaafrica: {
                label: "Asia y África:",
                text: "Malasia."
            }
        },
        carousel: {
            title: "Nuestros Principales Clientes",
            subtitle: "Confianza global en ingeniería y Construcción"
        },
        construction: {
            title: "Sitio en Construcción",
            text: "Estamos trabajando para ofrecerte la mejor experiencia. Pronto estaremos contigo."
        },
        // HERO PROYECTOS
        heroProjects: {
            title: "Ingeniería para el Futuro",
            subtitle: "Desarrollamos soluciones integrales en energías renovables, tratamiento de aguas, data centers y optimización industrial"
        },
        // PROYECTOS
        projects: {
            title: "Nuestros Proyectos Destacados",
            subtitle: "Referentes internacionales en innovación y sostenibilidad",
            eva: {
                badge: "Renovables & H2",
                title: "Proyecto \"EVA\" (Energía Verde)",
                client: "Cliente: Arquimea Group S.A.",
                desc: "Desarrollo pionero para la generación de Hidrógeno Verde mediante electrólisis para uso industrial en 5 edificios. Es la primera instalación de este tipo en Europa, integrando energía solar y almacenamiento de H2."
            },
            datacenter: {
                badge: "Data Center",
                title: "Data Center Modular Tier III",
                client: "Cliente: Evsen Group (El Cairo, Egipto)",
                desc: "Ingeniería y procura para un Data Center de 5,000 m² con 1,200 racks modulares en contenedores de 12 metros. Capacidad total de TI de 7,200 KW con integración completa de software."
            },
            solar: {
                badge: "Energía Solar",
                title: "Desarrollos Fotovoltaicos EPC",
                client: "Clientes: Engie Perú, Ujaas Energy, Sunpharma",
                desc: "Ejecución de proyectos a gran escala incluyendo la planta de 40 MW en Intipampa (Perú), 17 MWp en Susner (Australia) y 24 MWp en Baghaura (India)."
            },
            water: {
                badge: "Tratamiento Aguas",
                title: "Plantas de Tratamiento Industrial",
                client: "Cliente: Corp. Minera de Bolivia / PDVSA",
                desc: "Ingeniería y procura para plantas de aguas ácidas de mina en Colquiri y Huanuni (Bolivia), y rehabilitación de la unidad de tratamiento de efluentes en refinería Petromonagas."
            },
            optimization: {
                badge: "Optimización",
                title: "Rehabilitación de Ciclos Combinados",
                client: "Ubicación: Venezuela",
                desc: "Optimización y recuperación de la planta \"Ramón Laguna\" (700 MW) y los ciclos combinados Termozulia I y II (750 MW en total), restableciendo estándares operativos internacionales."
            }
        },
        footer: {
            title: "OFICINAS",
            offices: {
                spain: {
                    title: "España",
                    company: "Corp. Instrelec Group, S.L.",
                    line1: "Instrelec3000 y automatismos",
                    line2: "Iberia, S.E. Calle de Anabel",
                    line3: "Segura, 11 Edif. A, planta 2",
                    line4: "Oficina 2B, C.P. 28108",
                    line5: "Alcobendas (Madrid)"
                },
                venezuela: {
                    title: "Venezuela",
                    line1: "Instrelec3000 y Automatismos, C.A.",
                    line2: "Centro Empresarial",
                    line3: "COLÓN, piso 2 Oficina 18,",
                    line4: "Porlamar Edo. Anzoátegui"
                },
                bolivia: {
                    title: "Bolivia",
                    line1: "Instrelec. S.R.L.",
                    line2: "Barrio El Carmen entre radial 23, Av. Mariano Moreno",
                    line3: "y calle 3Edificio Kenia oficina 1,",
                    line4: "Santa Cruz de la Sierra – Bolivia"
                },
                germany: {
                    title: "ALEMANIA",
                    company: "INTEC GMK GMBH de Alemania",
                    line1: "Lilienthalstr.",
                    line2: "18211 Bargeshagen",
                    line3: "Alemania"
                },
                usa: {
                    title: "EEUU",
                    company: "Instrelec Group LLC",
                    line1: "7230, NW 58 St, Miami,",
                    line2: "Florida; EEUU, CP. 33166"
                },
                peru: {
                    title: "Perú",
                    line1: "Instrelec Group S.A.C.",
                    line2: "Torre Roja C2, Calle Los Sauces,",
                    line3: "Sanisidro 15073 Lima, Perú"
                },
                malaysia: {
                    title: "Malasia",
                    line1: "Lot 3A-2, 2nd Floor, Lorong",
                    line2: "Grace Square, Jalan Pantai",
                    line3: "Sembulan, 88100 Kota",
                    line4: "Kinabalu, SABAH, MALAYSIA"
                }
            },
            copyright: "© 2025 Corp Instrelec Group. Todos los derechos reservados.",
            links: {
                privacy: "Política de Privacidad",
                cookies: "Política de Cookies",
                legal: "Aviso Legal"
            }
        },
        // TECNOLOGÍA ORC - COMPLETO
        orc: {
            title: "Tecnología ORC: Convierta el Calor en Energía",
            intro: "Instrelec Group, como representante de INTEC GMK en España, ofrece soluciones avanzadas basadas en el *Ciclo Orgánico de Rankine (ORC)*, ideal para transformar fuentes de calor de bajas temperaturas y potencia térmica reducida en electricidad limpia.",
            geocal: {
                title: "GEOCAL",
                text: "Potencia ORC a partir del *calor geotérmico*. Sistemas totalmente automatizados con máxima eficiencia en carga parcial."
            },
            inducal: {
                title: "INDUCAL",
                text: "Recuperación de *energía a partir del calor residual* industrial (Waste Heat). Soluciones para gases calientes o agua a baja presión."
            },
            ecocal: {
                title: "ECOCAL",
                text: "Generación de energía y calor (CHP) a partir de la *biomasa* a pequeña escala. Alta eficiencia y fácil manejo sin agua de reposición."
            },
            button: "Ver Aplicaciones ORC →"
        },
        modal: {
            title: "Nuestras Soluciones ORC",
            tab: {
                ecocal: "ECOCAL (Biomasa)",
                inducal: "INDUCAL (Calor Residual)",
                geocal: "GEOCAL (Geotermia)"
            },
            toggle: {
                more: "Ver más",
                less: "Ver menos"
            },
            ecocal: {
                title: "ECOCAL (Biomasa)",
                intro: "Generación de energía para la industria maderera (CHP) y centrales térmicas. Ideal para aserraderos, plantas de pellets y plantas de procesamiento de madera.",
                sources: {
                    title: "Fuentes de Calor Compatibles:",
                    "1": "Astillas de madera",
                    "2": "Pellets",
                    "3": "Residuos de madera"
                },
                features: {
                    title: "Características del Módulo:",
                    "1": "Utiliza unidades ORC de baja temperatura.",
                    "2": "Diseño montado en bastidor (fácil de instalar in situ).",
                    "3": "Potencia de salida de hasta <strong>500 kW</strong> por módulo."
                }
            },
            inducal: {
                title: "INDUCAL (Calor Residual)",
                intro: "Recuperación de energía a partir de múltiples fuentes de calor residual industrial.",
                apps: {
                    title: "Aplicaciones Principales:",
                    "1": "<strong>Agua Caliente y Vapor (Baja Presión):</strong> Aprovecha el calor residual de motores de biogás, vapor industrial (siderúrgicas, refinerías) y quemadoras de madera.",
                    "2": "<strong>Gases Calientes:</strong> Utiliza los gases de escape de generadores y motores, y de procesos industriales (acero, cemento, vidrio, cerámica)."
                },
                features: {
                    title: "Características Destacadas:",
                    "1": "Potencia de salida de <strong>0.3 a 4 MW</strong> por módulo.",
                    "2": "Máxima eficiencia gracias a máquinas fabricadas a medida.",
                    "3": "Condensador refrigerado por aire (ruido ultra-bajo) disponible.",
                    "4": "Posibilidad de modo CHP (Cogeneración) o máxima potencia."
                }
            },
            geocal: {
                title: "GEOCAL (Geotermia)",
                intro: "Aprovechamiento de energía de alta eficiencia procedente de fuentes geotérmicas. Adaptación perfecta a las necesidades específicas de la fuente geotérmica.",
                sources: {
                    title: "Fuentes de Calor Compatibles:",
                    "1": "<strong>Salmuera Caliente:</strong> Para acuíferos con temperaturas entre 90°C y 180°C.",
                    "2": "<strong>Drenaje Rápido (Flash):</strong> Utiliza la fracción de agua líquida no aprovechada en centrales de vapor flash.",
                    "3": "<strong>Vapor Geotérmico:</strong> Ideal para fuentes de vapor a baja presión."
                },
                features: {
                    title: "Característica del Módulo:",
                    "1": "Alta eficiencia incluso a carga parcial."
                }
            }
        },
        // SERVICIOS - COMPLETO
        services: {
            title: "Servicios Integrales",
            card1: {
                title: "Construcción y Revamping",
                desc: "Servicios de Construcción, Montaje, puesta en marcha (Commissioning) y modernización (Revamping) de plantas y procesos industriales."
            },
            card2: {
                title: "Ingeniería y Diseño",
                desc: "Diseño de ingeniería conceptual, de detalle, y estudios de viabilidad para sistemas de energía, automatización, y proyectos ORC."
            },
            card3: {
                title: "Procura y Gestión (EPC)",
                desc: "Gestión completa de Procura, Contratación y Suministro (EPC/IPCC) para garantizar la calidad y eficiencia de su proyecto."
            },
            card4: {
                title: "Mantenimiento y Contratos",
                desc: "Servicios de mantenimiento preventivo y correctivo, y contratos a largo plazo (LTSA) para la máxima disponibilidad de sus equipos."
            }
        },
        // COOKIES - COMPLETO
        cookies: {
            banner: {
                title: "🍪 Utilizamos cookies",
                text: "Utilizamos cookies propias y de terceros para analizar nuestros servicios y mostrarte publicidad relacionada con tus preferencias. Puedes aceptar todas las cookies, rechazar las no esenciales o configurar tus preferencias.",
                moreInfo: "Más información",
                acceptAll: "Aceptar todas",
                rejectOptional: "Rechazar opcionales",
                configure: "Configurar"
            },
            modal: {
                title: "Configuración de Cookies",
                subtitle: "Elige qué tipos de cookies deseas permitir",
                essential: {
                    title: "🔒 Cookies Esenciales",
                    required: "OBLIGATORIAS",
                    description: "Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar. Incluyen cookies de sesión y de consentimiento de cookies.",
                    details: "Cookies: session_id, cookie_consent"
                },
                functional: {
                    title: "⚙️ Cookies Funcionales",
                    description: "Permiten mejorar la funcionalidad del sitio recordando tus preferencias (como el idioma seleccionado, configuraciones de visualización, etc.).",
                    details: "Cookies: user_language, user_preferences"
                },
                analytics: {
                    title: "📊 Cookies Analíticas",
                    description: "Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima sobre las páginas visitadas y el tiempo de navegación.",
                    details: "Cookies: _ga, _gid, _gat (Google Analytics)"
                },
                marketing: {
                    title: "🎯 Cookies de Marketing",
                    description: "Se utilizan para mostrar anuncios más relevantes para ti y tus intereses. También se usan para limitar el número de veces que ves un anuncio y medir la efectividad de las campañas.",
                    details: "Cookies: ads_pixel, fbp, _gcl_au (Google Ads, Facebook Pixel)"
                },
                saveSettings: "Guardar configuración",
                acceptAll: "Aceptar todas"
            },
            notification: {
                saved: "Configuración de cookies guardada correctamente",
                allAccepted: "Preferencias guardadas: Todas las cookies aceptadas",
                essentialOnly: "Preferencias guardadas: Solo cookies esenciales"
            }
        }
    },
// TRADUCCIONES EN INGLÉS
    en: {
        meta: { title: "Corp Instrelec Group" },
        nav: {
            home: "Home",
            orc: "ORC Technology",
            projects: "Projects",
            services: "Services",
            contact: "Contact"
        },
        hero: {
            title: "Professionals shaping the future",
            subtitle: "Solutions in Engineering, Energy, and Heat Recovery.",
            paragraph: "Experts in ORC (Organic Rankine Cycle) — EPC Projects, Revamping, and integral services internationally."
        },
        // TIMELINE - COMPLETO EN INGLÉS
        timeline: {
            title: "Our History and Growth",
            year2005: "2005 - Origin:",
            desc2005: "Instrelec is born offering Engineering solutions in Automation, Control and Electricity in Venezuela.",
            year2007: "2007 - Internationalization:",
            desc2007: "Opening of headquarters in Spain, initiating <strong>IPCC (Engineering, Procurement, Construction and Commissioning)</strong> solutions.",
            year2016: "2016 - Instrelec Group Corporation:",
            desc2016: "The Corporation is created, integrating specialist companies with more than 20 years of experience in the Oil & Gas sector and a financial group.",
            year2022: "2022 - Global Expansion:",
            desc2022: "Signing of strategic projects with the Ministry of Renewable Energy of IRAQ for the <strong>SALADIN 60 MW Solar Park</strong> and different projects in the United Arab Emirates."
        },
        // SECCIÓN LÍDER - COMPLETO EN INGLÉS
        lider: {
            title: "LEADING COMPANY IN THE INDUSTRIAL SECTOR",
            card1: {
                title: "Specialized Engineering",
                desc: "Division of Conceptual, Basic and Detailed Engineering with state-of-the-art technical solutions for complex projects."
            },
            card2: {
                title: "Management and Supply",
                desc: "Procurement Management Division with global reach and optimized supply chain."
            },
            card3: {
                title: "Energy Projects",
                desc: "Complete ORC solutions and GMK Representation for large-scale projects with maximum energy efficiency.",
                button: "Learn More"
            },
            card4: {
                title: "Sustainability and Energy",
                desc: "Development and implementation of innovative <strong>Renewable Energy</strong> projects (Solar, Wind and Green Hydrogen) for a sustainable future."
            }
        },
        experience: {
            title: "Proven Experience: Featured Projects"
        },
        table: {
            header: {
                client: "Client",
                project: "Featured Project",
                country: "Country",
                investment: "Estimated Investment"
            },
            row1: {
                client: "Ministry of Industry",
                project: "IPC Contract for the <strong>SALADIN 60 MW SOLAR PARK</strong>",
                country: "IRAQ",
                investment: "$36 MM"
            },
            row2: {
                client: "NATIONAL WATER COMPANY",
                project: "Engineering, Procurement and Construction for Strategic Reserves",
                country: "SAUDI ARABIA",
                investment: "$300 M"
            },
            row3: {
                client: "AES GENER",
                project: "IPC project for boiler feed pumps replacement",
                country: "CHILE",
                investment: "$7.2 MM"
            },
            row4: {
                client: "PETRONAS",
                project: "<em>Umbrella Contract</em> for <em>Well Testing</em> and TCP",
                country: "MALAYSIA",
                investment: "$28 MM"
            },
            row5: {
                client: "REPSOL PERÚ",
                project: "Mechanical plant shutdown works (distillation column)",
                country: "PERU",
                investment: "$6 MM"
            }
        },
        presence: {
            title: "International Presence",
            america: { label: "America:", text: "Peru, Venezuela, Bolivia, USA." },
            europe: { label: "Europe:", text: "Spain." },
            asiaafrica: { label: "Asia & Africa:", text: "Malaysia." }
        },
        carousel: {
            title: "Our Main Clients",
            subtitle: "Global trust in engineering and construction"
        },
        construction: {
            title: "Under Construction",
            text: "We are working to offer you the best experience. We will be with you soon."
        },
        // HERO PROYECTOS EN INGLÉS
        heroProjects: {
            title: "Engineering for the Future",
            subtitle: "We develop comprehensive solutions in renewable energy, water treatment, data centers and industrial optimization"
        },
        // PROYECTOS EN INGLÉS
        projects: {
            title: "Our Featured Projects",
            subtitle: "International leaders in innovation and sustainability",
            eva: {
                badge: "Renewable & H2",
                title: "\"EVA\" Project (Green Energy)",
                client: "Client: Arquimea Group S.A.",
                desc: "Pioneering development for Green Hydrogen generation through electrolysis for industrial use in 5 buildings. It is the first installation of its kind in Europe, integrating solar energy and H2 storage."
            },
            datacenter: {
                badge: "Data Center",
                title: "Tier III Modular Data Center",
                client: "Client: Evsen Group (Cairo, Egypt)",
                desc: "Engineering and procurement for a 5,000 m² Data Center with 1,200 modular racks in 12-meter containers. Total IT capacity of 7,200 KW with complete software integration."
            },
            solar: {
                badge: "Solar Energy",
                title: "Photovoltaic EPC Developments",
                client: "Clients: Engie Peru, Ujaas Energy, Sunpharma",
                desc: "Execution of large-scale projects including the 40 MW plant in Intipampa (Peru), 17 MWp in Susner (Australia) and 24 MWp in Baghaura (India)."
            },
            water: {
                badge: "Water Treatment",
                title: "Industrial Treatment Plants",
                client: "Client: Bolivian Mining Corp. / PDVSA",
                desc: "Engineering and procurement for acidic mine water plants in Colquiri and Huanuni (Bolivia), and rehabilitation of the effluent treatment unit at Petromonagas refinery."
            },
            optimization: {
                badge: "Optimization",
                title: "Combined Cycle Rehabilitation",
                client: "Location: Venezuela",
                desc: "Optimization and recovery of the \"Ramón Laguna\" plant (700 MW) and Termozulia I and II combined cycles (750 MW in total), restoring international operating standards."
            }
        },
        footer: {
            title: "OFFICES",
            offices: {
                spain: {
                    title: "Spain",
                    company: "Corp. Instrelec Group, S.L.",
                    line1: "Instrelec3000 and automation",
                    line2: "Iberia, S.E. Calle de Anabel",
                    line3: "Segura, 11 Edif. A, planta 2",
                    line4: "Office 2B, CP. 28108",
                    line5: "Alcobendas (Madrid)"
                },
                venezuela: {
                    title: "Venezuela",
                    line1: "Instrelec3000 y Automatismos, C.A.",
                    line2: "Centro Empresarial",
                    line3: "COLÓN, 2nd floor Office 18,",
                    line4: "Porlamar State of Anzoátegui"
                },
                bolivia: {
                    title: "Bolivia",
                    line1: "Instrelec. S.R.L.",
                    line2: "Barrio El Carmen between radial 23, Av. Mariano Moreno",
                    line3: "and calle 3Edificio Kenia oficina 1,",
                    line4: "Santa Cruz de la Sierra – Bolivia"
                },
                germany: {
                    title: "GERMANY",
                    company: "INTEC GMK GMBH of Germany",
                    line1: "Lilienthalstr.",
                    line2: "18211 Bargeshagen",
                    line3: "Germany"
                },
                usa: {
                    title: "USA",
                    company: "Instrelec Group LLC",
                    line1: "7230, NW 58 St, Miami,",
                    line2: "Florida; USA, ZIP 33166"
                },
                peru: {
                    title: "Peru",
                    line1: "Instrelec Group S.A.C.",
                    line2: "Torre Roja C2, Calle Los Sauces,",
                    line3: "Sanisidro 15073 Lima, Peru"
                },
                malaysia: {
                    title: "Malaysia",
                    line1: "Lot 3A-2, 2nd Floor, Lorong",
                    line2: "Grace Square, Jalan Pantai",
                    line3: "Sembulan, 88100 Kota",
                    line4: "Kinabalu, SABAH, MALAYSIA"
                }
            },
            copyright: "© 2025 Corp Instrelec Group. All rights reserved.",
            links: {
                privacy: "Privacy Policy",
                cookies: "Cookies Policy",
                legal: "Legal Notice"
            }
        },
        // TECNOLOGÍA ORC EN INGLÉS
        orc: {
            title: "ORC Technology: Convert Heat into Energy",
            intro: "Instrelec Group, as representative of INTEC GMK in Spain, offers advanced solutions based on the *Organic Rankine Cycle (ORC)*, ideal for transforming low-temperature heat sources and reduced thermal power into clean electricity.",
            geocal: {
                title: "GEOCAL",
                text: "ORC power from *geothermal heat*. Fully automated systems with maximum efficiency at partial load."
            },
            inducal: {
                title: "INDUCAL",
                text: "Recovery of *energy from industrial waste heat*. Solutions for hot gases or low-pressure water."
            },
            ecocal: {
                title: "ECOCAL",
                text: "Power and heat generation (CHP) from *biomass* on a small scale. High efficiency and easy handling without make-up water."
            },
            button: "View ORC Applications →"
        },
        modal: {
            title: "Our ORC Solutions",
            tab: {
                ecocal: "ECOCAL (Biomass)",
                inducal: "INDUCAL (Waste Heat)",
                geocal: "GEOCAL (Geothermal)"
            },
            toggle: {
                more: "View more",
                less: "View less"
            },
            ecocal: {
                title: "ECOCAL (Biomass)",
                intro: "Power generation for the wood industry (CHP) and thermal power plants. Ideal for sawmills, pellet plants and wood processing plants.",
                sources: {
                    title: "Compatible Heat Sources:",
                    "1": "Wood chips",
                    "2": "Pellets",
                    "3": "Wood waste"
                },
                features: {
                    title: "Module Features:",
                    "1": "Uses low temperature ORC units.",
                    "2": "Rack-mounted design (easy to install on site).",
                    "3": "Output power up to <strong>500 kW</strong> per module."
                }
            },
            inducal: {
                title: "INDUCAL (Waste Heat)",
                intro: "Energy recovery from multiple industrial waste heat sources.",
                apps: {
                    title: "Main Applications:",
                    "1": "<strong>Hot Water and Low Pressure Steam:</strong> Utilizes waste heat from biogas engines, industrial steam (steel mills, refineries) and wood burners.",
                    "2": "<strong>Hot Gases:</strong> Uses exhaust gases from generators and engines, and from industrial processes (steel, cement, glass, ceramics)."
                },
                features: {
                    title: "Key Features:",
                    "1": "Output power from <strong>0.3 to 4 MW</strong> per module.",
                    "2": "Maximum efficiency thanks to custom-made machines.",
                    "3": "Air-cooled condenser (ultra-low noise) available.",
                    "4": "Possibility of CHP (Cogeneration) mode or maximum power."
                }
            },
            geocal: {
                title: "GEOCAL (Geothermal)",
                intro: "High efficiency energy utilization from geothermal sources. Perfect adaptation to the specific needs of the geothermal source.",
                sources: {
                    title: "Compatible Heat Sources:",
                    "1": "<strong>Hot Brine:</strong> For aquifers with temperatures between 90°C and 180°C.",
                    "2": "<strong>Flash Drainage:</strong> Uses the unused liquid water fraction in flash steam plants.",
                    "3": "<strong>Geothermal Steam:</strong> Ideal for low pressure steam sources."
                },
                features: {
                    title: "Module Feature:",
                    "1": "High efficiency even at partial load."
                }
            }
        },
        // SERVICIOS EN INGLÉS
        services: {
            title: "Comprehensive Services",
            card1: {
                title: "Construction and Revamping",
                desc: "Construction, Assembly, Commissioning and modernization (Revamping) services for industrial plants and processes."
            },
            card2: {
                title: "Engineering and Design",
                desc: "Conceptual, detailed engineering design, and feasibility studies for energy systems, automation, and ORC projects."
            },
            card3: {
                title: "Procurement and Management (EPC)",
                desc: "Complete Procurement, Contracting and Supply Management (EPC/IPCC) to ensure the quality and efficiency of your project."
            },
            card4: {
                title: "Maintenance and Contracts",
                desc: "Preventive and corrective maintenance services, and long-term contracts (LTSA) for maximum equipment availability."
            }
        },
        // COOKIES EN INGLÉS
        cookies: {
            banner: {
                title: "🍪 We use cookies",
                text: "We use our own and third-party cookies to analyze our services and show you advertising related to your preferences. You can accept all cookies, reject non-essential ones or configure your preferences.",
                moreInfo: "More information",
                acceptAll: "Accept all",
                rejectOptional: "Reject optional",
                configure: "Configure"
            },
            modal: {
                title: "Cookie Settings",
                subtitle: "Choose which types of cookies you want to allow",
                essential: {
                    title: "🔒 Essential Cookies",
                    required: "REQUIRED",
                    description: "These cookies are necessary for the basic functioning of the website and cannot be disabled. They include session cookies and cookie consent.",
                    details: "Cookies: session_id, cookie_consent"
                },
                functional: {
                    title: "⚙️ Functional Cookies",
                    description: "They allow to improve the functionality of the site by remembering your preferences (such as the selected language, display settings, etc.).",
                    details: "Cookies: user_language, user_preferences"
                },
                analytics: {
                    title: "📊 Analytics Cookies",
                    description: "They help us understand how visitors interact with the website, collecting anonymous information about visited pages and browsing time.",
                    details: "Cookies: _ga, _gid, _gat (Google Analytics)"
                },
                marketing: {
                    title: "🎯 Marketing Cookies",
                    description: "They are used to show you more relevant ads for you and your interests. They are also used to limit the number of times you see an ad and measure the effectiveness of campaigns.",
                    details: "Cookies: ads_pixel, fbp, _gcl_au (Google Ads, Facebook Pixel)"
                },
                saveSettings: "Save settings",
                acceptAll: "Accept all"
            },
            notification: {
                saved: "Cookie settings saved successfully",
                allAccepted: "Preferences saved: All cookies accepted",
                essentialOnly: "Preferences saved: Essential cookies only"
            }
        }
    }
};

// FUNCIONES DE TRADUCCIÓN Y RESTO DEL CÓDIGO (sin cambios)
// ... (continúa con el resto de las funciones del script original)

// Helper: resolve nested keys like "hero.title" -> translations[currentLang].hero.title
function resolveKey(obj, path) {
    if (!obj || !path) return null;
    return path.split('.').reduce((o, k) => (o ? o[k] : null), obj);
}

function translatePage() {
    const dict = translations[currentLang];
    if (!dict) return;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = resolveKey(dict, key);
        if (text !== null && text !== undefined) {
            // If text likely contains HTML tags, use innerHTML
            if (typeof text === 'string' && (text.includes('<') || text.includes('>'))) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update active class on language buttons
    const setActive = (id, active) => {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('active', active);
    };
    setActive('lang-btn-es', currentLang === 'es');
    setActive('lang-btn-en', currentLang === 'en');
    setActive('lang-btn-es-desktop', currentLang === 'es');
    setActive('lang-btn-en-desktop', currentLang === 'en');

    // Update document title if present in translations
    const metaTitle = resolveKey(dict, 'meta.title');
    if (metaTitle) document.title = (typeof metaTitle === 'string') ? metaTitle : document.title;

    // Actualizar textos de cookies
    updateCookieTexts();
    
    // Reiniciar animaciones del título
    initAnimatedTitle();
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    translatePage();
}

// ============================================
// FUNCIONES ACTUALIZADAS PARA COOKIES CON TRADUCCIONES
// ============================================

// Función para actualizar textos de cookies cuando cambia el idioma
function updateCookieTexts() {
    const dict = translations[currentLang].cookies;
    if (!dict) return;

    // Actualizar banner de cookies
    const bannerTitle = document.querySelector('#cookieBanner h3');
    const bannerText = document.querySelector('#cookieBanner .cookie-text p');
    const bannerMoreInfo = document.querySelector('#cookieBanner .cookie-text a');
    const acceptBtn = document.querySelector('.btn-accept');
    const rejectBtn = document.querySelector('.btn-reject');
    const settingsBtn = document.querySelector('.btn-settings');

    if (bannerTitle) bannerTitle.textContent = dict.banner.title;
    if (bannerText) bannerText.textContent = dict.banner.text;
    if (bannerMoreInfo) bannerMoreInfo.textContent = dict.banner.moreInfo;
    if (acceptBtn) acceptBtn.textContent = dict.banner.acceptAll;
    if (rejectBtn) rejectBtn.textContent = dict.banner.rejectOptional;
    if (settingsBtn) settingsBtn.textContent = dict.banner.configure;

    // Actualizar modal de cookies
    const modalTitle = document.querySelector('#cookieModal .modal-header h2');
    const modalSubtitle = document.querySelector('#cookieModal .modal-header p');
    const saveBtn = document.querySelector('.modal-footer .btn-reject');
    const acceptAllModalBtn = document.querySelector('.modal-footer .btn-accept');

    if (modalTitle) modalTitle.textContent = dict.modal.title;
    if (modalSubtitle) modalSubtitle.textContent = dict.modal.subtitle;
    if (saveBtn) saveBtn.textContent = dict.modal.saveSettings;
    if (acceptAllModalBtn) acceptAllModalBtn.textContent = dict.modal.acceptAll;
}

// Configuración de cookies
const COOKIE_CONFIG = {
    essential: { enabled: true, locked: true },
    functional: { enabled: false, locked: false },
    analytics: { enabled: false, locked: false },
    marketing: { enabled: false, locked: false }
};

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    checkCookieConsent();
});

// Verificar si ya hay consentimiento
function checkCookieConsent() {
    const consent = getCookie('cookie_consent');
    
    if (!consent) {
        // Si no hay consentimiento, mostrar banner
        document.getElementById('cookieBanner').style.display = 'block';
    } else {
        // Si ya hay consentimiento, cargar las cookies configuradas
        loadCookiePreferences();
        document.getElementById('cookieSettingsBtn').style.display = 'block';
        loadCookieScripts();
    }
}

// Aceptar todas las cookies
function acceptAllCookies() {
    const preferences = {
        essential: true,
        functional: true,
        analytics: true,
        marketing: true
    };
    
    saveCookiePreferences(preferences);
    setCookie('cookie_consent', 'accepted', 365);
    
    hideBanner();
    loadCookieScripts();
    showNotification(translations[currentLang].cookies.notification.allAccepted);
}

// Rechazar cookies opcionales
function rejectAllCookies() {
    const preferences = {
        essential: true,
        functional: false,
        analytics: false,
        marketing: false
    };
    
    saveCookiePreferences(preferences);
    setCookie('cookie_consent', 'rejected', 365);
    
    hideBanner();
    showNotification(translations[currentLang].cookies.notification.essentialOnly);
}

// Abrir configuración de cookies
function openCookieSettings() {
    loadCookiePreferences();
    document.getElementById('cookieModal').style.display = 'flex';
}

// Cerrar configuración de cookies
function closeCookieSettings() {
    document.getElementById('cookieModal').style.display = 'none';
}

// Guardar configuración personalizada
function saveCustomSettings() {
    const preferences = {
        essential: true, // Siempre true
        functional: document.getElementById('functional').checked,
        analytics: document.getElementById('analytics').checked,
        marketing: document.getElementById('marketing').checked
    };
    
    saveCookiePreferences(preferences);
    setCookie('cookie_consent', 'custom', 365);
    
    closeCookieSettings();
    hideBanner();
    loadCookieScripts();
    showNotification(translations[currentLang].cookies.notification.saved);
}

// Guardar preferencias en localStorage y cookie
function saveCookiePreferences(preferences) {
    localStorage.setItem('cookie_preferences', JSON.stringify(preferences));
}

// Cargar preferencias guardadas
function loadCookiePreferences() {
    const saved = localStorage.getItem('cookie_preferences');
    
    if (saved) {
        const preferences = JSON.parse(saved);
        document.getElementById('functional').checked = preferences.functional;
        document.getElementById('analytics').checked = preferences.analytics;
        document.getElementById('marketing').checked = preferences.marketing;
    }
}

// Cargar scripts según las preferencias
function loadCookieScripts() {
    const saved = localStorage.getItem('cookie_preferences');
    
    if (!saved) return;
    
    const preferences = JSON.parse(saved);
    
    // Cargar Google Analytics si está aceptado
    if (preferences.analytics) {
        loadGoogleAnalytics();
    }
    
    // Cargar scripts de marketing si están aceptados
    if (preferences.marketing) {
        loadMarketingScripts();
    }
    
    // Cargar scripts funcionales si están aceptados
    if (preferences.functional) {
        loadFunctionalScripts();
    }
}

// Cargar Google Analytics
function loadGoogleAnalytics() {
    // Reemplaza 'G-XXXXXXXXXX' con tu ID de Google Analytics
    /*
    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    })();
    */
    console.log('Google Analytics cargado');
}

// Cargar scripts de marketing
function loadMarketingScripts() {
    // Aquí cargarías Facebook Pixel, Google Ads, etc.
    console.log('Scripts de marketing cargados');
}

// Cargar scripts funcionales
function loadFunctionalScripts() {
    // Aquí cargarías scripts para funcionalidades adicionales
    console.log('Scripts funcionales cargados');
}

// Ocultar banner
function hideBanner() {
    document.getElementById('cookieBanner').style.display = 'none';
    document.getElementById('cookieSettingsBtn').style.display = 'block';
}

// Funciones auxiliares para cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10002;
        animation: slideInRight 0.5s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Cerrar modal al hacer clic fuera
document.addEventListener('DOMContentLoaded', function() {
    const cookieModal = document.getElementById('cookieModal');
    if (cookieModal) {
        cookieModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCookieSettings();
            }
        });
    }
});

// ============================================
// MODAL ORC FUNCTIONALITY
// ============================================

// ============================================
// MODAL ORC FUNCTIONALITY - REORGANIZADO
// ============================================

function initModalORC() {
    const modalOverlay = document.getElementById('orc-modal-overlay');
    const modalClose = document.getElementById('orc-modal-close');
    const tabButtons = document.querySelectorAll('.modal-tab-btn');
    const tabContents = document.querySelectorAll('.modal-tab-content');
    const orcButton = document.getElementById('orc-btn');
    const toggleButtons = document.querySelectorAll('.modal-toggle-btn');

    // Open modal
    if (orcButton && modalOverlay) {
        orcButton.addEventListener('click', function(e) {
            e.preventDefault();
            modalOverlay.classList.add('active');
            document.body.classList.add('modal-open');
            
            // Activar GEOCAL por defecto al abrir
            activateTab('geocal');
        });
    }

    // Close modal
    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }

    // Close modal when clicking outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.classList.remove('modal-open');
            }
        });
    }

    // Tab switching (desktop)
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            activateTab(targetTab);
        });
    });

    // Toggle expandable content (mobile)
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const content = document.querySelector(`[data-tab-content="${target}"] .modal-expandable-content`);
            const toggleText = this.querySelector('.modal-toggle-text');
            const toggleIcon = this.querySelector('.modal-toggle-icon');
            
            if (content) {
                content.classList.toggle('expanded');
                
                // Update button text and icon
                if (content.classList.contains('expanded')) {
                    toggleText.textContent = currentLang === 'es' ? 'Ver menos' : 'View less';
                    toggleIcon.style.transform = 'rotate(180deg)';
                } else {
                    toggleText.textContent = currentLang === 'es' ? 'Ver más' : 'View more';
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    // Función para activar pestaña específica
    function activateTab(targetTab) {
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        if (activeButton) activeButton.classList.add('active');
        
        // Update active tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.getAttribute('data-tab-content') === targetTab) {
                content.classList.add('active');
            }
        });
    }
}

// ============================================
// INFINITE CAROUSEL FUNCTIONALITY
// ============================================

function initInfiniteCarousel() {
    const sliderTrack = document.querySelector('.logo-slider-track');
    
    if (!sliderTrack) return;

    // Duplicate the logos for seamless loop
    const logos = sliderTrack.innerHTML;
    sliderTrack.innerHTML = logos + logos;

    // Pause animation on hover for better UX
    const slider = document.querySelector('.logo-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            sliderTrack.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', () => {
            sliderTrack.style.animationPlayState = 'running';
        });
    }

    // Optimize performance
    sliderTrack.style.willChange = 'transform';
}

// ============================================
// MOBILE NAVIGATION FUNCTIONALITY
// ============================================

function initMobileNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    if (!menuToggle || !navLinks) return;

    function toggleMenu() {
        const isActive = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        if (overlay) {
            overlay.classList.toggle('active');
        }
        
        document.body.style.overflow = isActive ? '' : 'hidden';
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on overlay
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking on nav links (mobile)
    const navAnchors = navLinks.querySelectorAll('a');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            if (window.innerWidth <= 780) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize (if resizing to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 780) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// HERO VIDEO FUNCTIONALITY
// ============================================

function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const textContainer = document.getElementById('heroTextContainer');
    const audioControl = document.getElementById('audioControl');

    if (!video || !textContainer) return;

    // Mostrar texto cuando el video termina
    video.addEventListener('ended', function() {
        textContainer.classList.add('show');
    });

    // Control de audio (opcional)
    if (audioControl) {
        audioControl.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                audioControl.textContent = '🔊';
            } else {
                video.muted = true;
                audioControl.textContent = '🔇';
            }
        });
    }

    // Manejo de errores
    video.addEventListener('error', function(e) {
        console.error('Error al cargar el video:', e);
        textContainer.classList.add('show');
    });

    // Asegurar que el video se reproduce en móviles
    video.addEventListener('loadedmetadata', function() {
        video.play().catch(function(error) {
            console.log('Autoplay bloqueado:', error);
            textContainer.classList.add('show');
        });
    });
}

// ============================================
// CRAZY TIMELINE FUNCTIONALITY
// ============================================

function initCrazyTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    
                    // Efecto adicional para el marcador
                    const marker = entry.target.querySelector('.marker-orb');
                    if (marker) {
                        marker.style.animation = 'orbExplode 0.6s ease-out forwards';
                        setTimeout(() => {
                            marker.style.animation = 'orbPulse 2s ease-in-out infinite';
                        }, 600);
                    }
                }, index * 300);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Efectos hover adicionales
    timelineItems.forEach(item => {
        const card = item.querySelector('.timeline-card');
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05) rotateZ(2deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateZ(0deg)';
        });
    });
}

// ============================================
// ANIMATED TITLE FUNCTIONALITY
// ============================================

function initAnimatedTitle() {
    const titleWords = document.querySelectorAll('.title-words .word');
    
    if (titleWords.length === 0) {
        console.warn('No se encontraron palabras para animar en el título');
        return;
    }
    
    // Forzar repaint para activar las animaciones
    titleWords.forEach((word, index) => {
        // Asegurarse de que las animaciones estén aplicadas
        word.style.animation = 'none';
        
        // Pequeño delay para el efecto escalonado
        setTimeout(() => {
            void word.offsetWidth; // Trigger reflow
            word.style.animation = `wordFloat 6s ease-in-out ${index * 0.2}s infinite, titleGlow 4s ease-in-out ${index * 0.1}s infinite`;
        }, 100);
    });
    
    // Observer para reiniciar animaciones cuando sean visibles
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titleWords.forEach((word, index) => {
                    setTimeout(() => {
                        word.style.animationPlayState = 'running';
                    }, index * 200);
                });
            } else {
                titleWords.forEach(word => {
                    word.style.animationPlayState = 'paused';
                });
            }
        });
    }, { threshold: 0.5 });
    
    const titleSection = document.querySelector('.timeline-header');
    if (titleSection) {
        titleObserver.observe(titleSection);
    }
}

// ============================================
// INITIALIZE EVERYTHING ON DOM LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system
    translatePage();

    // Initialize all functionalities
    initMobileNavigation();
    initModalORC();
    initInfiniteCarousel();
    initHeroVideo();
    initCrazyTimeline();
    initAnimatedTitle();

    // Language buttons event listeners
    ['lang-btn-es', 'lang-btn-en', 'lang-btn-es-desktop', 'lang-btn-en-desktop'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', () => {
                const lang = el.getAttribute('data-lang') || (id.includes('es') ? 'es' : 'en');
                setLanguage(lang);
            });
        }
    });

    console.log('Instrelec Group - All functionalities loaded successfully!');
});

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Debounce resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-initialize carousel on resize for responsive adjustments
        initInfiniteCarousel();
    }, 250);
});

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        '/img/logo_instrelec.png',
        '/img/ORC vapor.jpg',
        '/img/orc1.png',
        '/img/orc.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalImages);
} else {
    preloadCriticalImages();
}

 function lineaDeTiempo() {
            'use strict';
            var items = document.querySelectorAll("#timeline-1 li");
            
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                    if (isElementInViewport(items[i])) {
                        items[i].classList.add("in-view");
                    }
                }
            }
            
            window.addEventListener("load", callbackFunc);
            window.addEventListener("resize", callbackFunc);
            document.addEventListener('scroll', callbackFunc, true);
        }
        
        lineaDeTiempo();