import { apartmentConfig } from '../config/apartment.config';

export interface GuideContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    wifi: string;
    rules: string;
    checkin: string;
    nearby: string;
    emergency: string;
  };
  hero: {
    welcome: string;
    apartmentName: string;
    tagline: string;
    quickWifi: string;
    badge: string;
  };
  wifi: {
    title: string;
    subtitle: string;
    networkLabel: string;
    passwordLabel: string;
    copyButton: string;
    copied: string;
    qrHint: string;
    tip: string;
  };
  schedule: {
    title: string;
    subtitle: string;
    checkinTitle: string;
    checkinTime: string;
    checkinDesc: string;
    checkoutTitle: string;
    checkoutTime: string;
    checkoutDesc: string;
    wristbandTitle: string;
    wristbandBadge: string;
    wristbandDesc: string;
    minorsTitle: string;
    minorsBadge: string;
    minorsDesc: string;
  };
  rules: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      desc: string;
      badge: string;
    }>;
  };
  lagoon: {
    title: string;
    subtitle: string;
    hours: string;
    rulesTitle: string;
    rules: string[];
  };
  nearby: {
    title: string;
    subtitle: string;
    categories: Array<{
      name: string;
      icon: string;
      places: Array<{
        name: string;
        desc: string;
        distance: string;
        tag: string;
        link?: string;
      }>;
    }>;
  };
  emergency: {
    title: string;
    subtitle: string;
    contacts: Array<{
      role: string;
      name: string;
      phone: string;
      notes: string;
      whatsapp?: boolean;
    }>;
  };
  footer: {
    rights: string;
    note: string;
  };
}

export const content: Record<'es' | 'en', GuideContent> = {
  es: {
    meta: {
      title: "Guía de Bienvenida & Portal del Huésped",
      description: "Toda la información indispensable para tu estadía: WiFi, normas del condominio, horarios y recomendaciones en Cartagena."
    },
    nav: {
      wifi: "WiFi",
      rules: "Normas",
      checkin: "Horarios",
      nearby: "Cerca de ti",
      emergency: "Emergencias"
    },
    hero: {
      welcome: "¡Bienvenidos a Cartagena!",
      apartmentName: `${apartmentConfig.propertyName} (${apartmentConfig.tower} - ${apartmentConfig.apartmentNumber})`,
      tagline: "Disfruta de la laguna cristalina y el encanto caribeño. Aquí tienes todo lo que necesitas saber para una estadía perfecta.",
      quickWifi: "Conectar al WiFi",
      badge: "Huésped VIP • Guía Digital"
    },
    wifi: {
      title: "Conexión a Internet de Alta Velocidad",
      subtitle: "WiFi de fibra óptica disponible en todo el apartamento",
      networkLabel: "Nombre de Red (SSID)",
      passwordLabel: "Contraseña",
      copyButton: "Copiar Clave",
      copied: "¡Copiada!",
      qrHint: "O escanea con la cámara de tu teléfono:",
      tip: "Ideal para streaming 4K, videollamadas y trabajo remoto."
    },
    schedule: {
      title: "Horarios y Registro de Llegada",
      subtitle: "Procedimientos del conjunto residencial para tu tranquilidad",
      checkinTitle: "Check-in (Entrada)",
      checkinTime: "2:00 PM – 9:00 PM",
      checkinDesc: "Si planeas llegar después de las 9:00 PM, avísanos con anticipación para autorizar el ingreso en portería.",
      checkoutTitle: "Check-out (Salida)",
      checkoutTime: "8:00 AM – 12:00 M",
      checkoutDesc: "En recepción se debe hacer entrega de las manillas y reclamar el paz y salvo de salida para el personal de seguridad.",
      wristbandTitle: "Manilla de Identificación",
      wristbandBadge: "Uso Obligatorio 24/7",
      wristbandDesc: "Cada huésped debe portar su manilla durante toda la estadía para acceder a la laguna, piscinas y zonas recreativas. Evita multas del condominio portándola visiblemente.",
      minorsTitle: "Registro de Menores de Edad",
      minorsBadge: "Requisito Legal Estricto",
      minorsDesc: "Por ley colombiana y reglamento del condominio, los menores deben presentar Registro Civil de Nacimiento en recepción. Si viajan sin uno de sus padres o con terceros, deben presentar autorización autenticada en Notaría."
    },
    rules: {
      title: "Normas de Convivencia y Copropiedad",
      subtitle: "Diseñadas para que todos los residentes y huéspedes disfruten de paz y confort",
      items: [
        {
          icon: "🩱",
          title: "Código de Vestimenta en Áreas Comunes",
          desc: "Al transitar por recepción, lobby y pasillos es obligatorio usar calzado y ropa seca (o pareo sobre el vestido de baño). No se permite circular descalzos o goteando agua.",
          badge: "Recepción y Pasillos"
        },
        {
          icon: "🛗",
          title: "Ascensores Libres de Agua y Arena",
          desc: "Sécate bien y retira la arena de tus pies antes de subir en los ascensores para evitar accidentes y resbalones.",
          badge: "Seguridad"
        },
        {
          icon: "🏖️",
          title: "Balcones y Fachadas Libres",
          desc: "Por estética de la fachada, está estrictamente prohibido colgar toallas, vestidos de baño o ropa en las barandas o ventanas.",
          badge: "Estética"
        },
        {
          icon: "🤫",
          title: "Horas de Silencio y Cero Bafles",
          desc: "No está permitido el uso de parlantes o música alta en áreas comunes o balcones. Respeta el descanso nocturno después de las 10:00 PM.",
          badge: "Descanso"
        },
        {
          icon: "🗑️",
          title: "Manejo de Basuras en tu Piso",
          desc: "Deposita tus residuos en bolsas bien cerradas en el cuarto de basuras ubicado en este mismo piso. Por favor separa vidrio y reciclaje en bolsas independientes.",
          badge: "Ecológico"
        },
        {
          icon: "🚫",
          title: "Mascotas y Pasadías",
          desc: "El estatuto del conjunto prohíbe el ingreso de mascotas a visitantes/huéspedes y prohíbe la comercialización de pasadías o ingreso de personas no registradas.",
          badge: "Estatutario"
        }
      ]
    },
    lagoon: {
      title: "La Laguna Cristalina & Piscinas",
      subtitle: "Disfruta de una de las lagunas de agua turquesa más espectaculares de Cartagena",
      hours: "Horario de piscinas y laguna: 9:00 AM a 6:00 PM (Sujeto a mantenimiento)",
      rulesTitle: "Recomendaciones para tu seguridad:",
      rules: [
        "Porta tu manilla en todo momento para ingresar al área de playa y piscina.",
        "Los niños deben estar permanentemente acompañados y supervisados por un adulto responsable.",
        "Usa toallas de piscina y retira el exceso de agua y arena antes de ingresar a los edificios.",
        "No ingreses alimentos, botellas ni vasos de vidrio a las zonas húmedas o arena."
      ]
    },
    nearby: {
      title: "Guía Local: ¿Qué hay cerca de ti?",
      subtitle: "Nuestras recomendaciones personales para compras, delicias y planes en Cartagena",
      categories: [
        {
          name: "Supermercados & Compras",
          icon: "🛒",
          places: [
            {
              name: "Supermercado Éxito / Carulla",
              desc: "Gran variedad de carnes, frutas frescas, vinos y productos importados.",
              distance: "10-15 min en carro",
              tag: "Supermercado Completo"
            },
            {
              name: "Tiendas D1 & Ara",
              desc: "Para compras rápidas, bebidas, snacks y artículos de aseo a precios económicos.",
              distance: "8 min",
              tag: "Ahorro & Conveniencia"
            },
            {
              name: "Droguerías 24 Horas & Rappi",
              desc: "Servicio de domicilio disponible por aplicación de Rappi directo a la portería.",
              distance: "Delivery disponible",
              tag: "Farmacia & Envíos"
            }
          ]
        },
        {
          name: "Restaurantes & Gastronomía",
          icon: "🍽️",
          places: [
            {
              name: "Playas de Manzanillo & La Boquilla",
              desc: "Auténtico pescado frito caribeño, arroz con coco y patacones frente al mar.",
              distance: "10 min",
              tag: "Comida Típica Caribeña"
            },
            {
              name: "Restaurantes en la Ciudad Amurallada",
              desc: "Gastronomía de autor, mariscos y cocina fusión en el corazón histórico de Cartagena (Carmen, Celele, Candé).",
              distance: "25-30 min",
              tag: "Fine Dining"
            },
            {
              name: "Cafés de Especialidad",
              desc: "Disfruta del mejor café de origen colombiano (Café San Alberto, Ábaco Libros y Café).",
              distance: "Centro Histórico",
              tag: "Café Gourmet"
            }
          ]
        },
        {
          name: "Planes Imperdibles",
          icon: "✨",
          places: [
            {
              name: "Atardecer en las Murallas",
              desc: "Contempla la puesta del sol sobre el Mar Caribe con una brisa inigualable.",
              distance: "Imperdible",
              tag: "Paseo & Romance"
            },
            {
              name: "Castillo San Felipe de Barajas",
              desc: "La mayor fortaleza colonial española construida en América, llena de túneles e historia.",
              distance: "25 min",
              tag: "Cultura & Historia"
            },
            {
              name: "Islas del Rosario & Barú",
              desc: "Tours diarios en lancha hacia aguas cristalinas y arenas blancas.",
              distance: "Muelle de La Bodeguita",
              tag: "Aventura Marina"
            }
          ]
        }
      ]
    },
    emergency: {
      title: "Contactos Útiles y Emergencias",
      subtitle: "Estamos aquí para asistirte en cualquier momento",
      contacts: [
        {
          role: "Tu Anfitrión",
          name: apartmentConfig.hostName,
          phone: apartmentConfig.hostPhone,
          notes: "Escríbenos por WhatsApp ante cualquier duda de tu estancia.",
          whatsapp: true
        },
        {
          role: "Portería & Vigilancia",
          name: "Conjunto Baia Kabo",
          phone: "Extensión Portería",
          notes: "Atención 24/7 en la entrada principal del condominio."
        },
        {
          role: "Emergencias Médicas",
          name: "Cruz Roja / Ambulancia Cartagena",
          phone: "123 / 132",
          notes: "Línea única de emergencias y urgencias médicas."
        },
        {
          role: "Policía Nacional / Turismo",
          name: "Policía de Turismo Cartagena",
          phone: "112 / +57 (605) 664 6610",
          notes: "Asistencia y orientación al turista."
        }
      ]
    },
    footer: {
      rights: "Guía Digital de Bienvenida • Apartamento en Baia Kabo, Cartagena",
      note: "Te deseamos unas vacaciones inolvidables. ¡Disfruta la magia de Cartagena!"
    }
  },

  en: {
    meta: {
      title: "Welcome Guide & Guest Portal",
      description: "Everything you need for your stay: High-speed WiFi, complex rules, check-in schedules, and top local spots in Cartagena."
    },
    nav: {
      wifi: "WiFi",
      rules: "House Rules",
      checkin: "Schedule",
      nearby: "Nearby",
      emergency: "Emergency"
    },
    hero: {
      welcome: "Welcome to Cartagena!",
      apartmentName: `${apartmentConfig.propertyName} (${apartmentConfig.tower} - ${apartmentConfig.apartmentNumber})`,
      tagline: "Immerse yourself in the crystal-clear lagoon and Caribbean charm. Here is everything you need for a seamless stay.",
      quickWifi: "Connect to WiFi",
      badge: "VIP Guest • Digital Guide"
    },
    wifi: {
      title: "High-Speed Internet Connection",
      subtitle: "Fiber-optic WiFi available throughout the apartment",
      networkLabel: "Network Name (SSID)",
      passwordLabel: "Password",
      copyButton: "Copy Password",
      copied: "Copied!",
      qrHint: "Or scan with your smartphone camera:",
      tip: "Optimized for 4K streaming, video calls, and remote work."
    },
    schedule: {
      title: "Arrival Schedules & Registration",
      subtitle: "Official residential complex protocols for your safety and peace of mind",
      checkinTitle: "Check-in",
      checkinTime: "2:00 PM – 9:00 PM",
      checkinDesc: "If you plan to arrive after 9:00 PM, please notify us in advance so we can clear your gate pass with security.",
      checkoutTitle: "Check-out",
      checkoutTime: "8:00 AM – 12:00 PM",
      checkoutDesc: "Please drop off wristbands at the reception desk and obtain your gate clearance pass before exiting.",
      wristbandTitle: "Identification Wristbands",
      wristbandBadge: "Required 24/7",
      wristbandDesc: "Every guest must wear their wristband throughout their stay to access the lagoon, swimming pools, and beach area. Prevent complex fines by keeping it on.",
      minorsTitle: "Traveling with Minors",
      minorsBadge: "Strict Legal Policy",
      minorsDesc: "Under Colombian law and HOA regulations, minors must present their Birth Certificate at check-in. If traveling without both parents, an official notarized parental authorization is strictly required."
    },
    rules: {
      title: "Community Guidelines & Complex Rules",
      subtitle: "Designed to ensure peace, comfort, and safety for all guests and residents",
      items: [
        {
          icon: "🩱",
          title: "Dress Code in Common Areas",
          desc: "Footwear and dry clothing (or a sarong/cover-up over swimsuits) are strictly required when walking through reception, lobbies, and hallways. No bare feet or dripping water.",
          badge: "Reception & Hallways"
        },
        {
          icon: "🛗",
          title: "Water & Sand-Free Elevators",
          desc: "Dry off thoroughly and wipe sand off your feet before entering elevators to prevent slippery surfaces and mechanical wear.",
          badge: "Safety First"
        },
        {
          icon: "🏖️",
          title: "Clear Balconies & Railings",
          desc: "To preserve architectural harmony, hanging towels, swimwear, or clothes on balcony railings is strictly prohibited.",
          badge: "Aesthetics"
        },
        {
          icon: "🤫",
          title: "Quiet Hours & No Loud Speakers",
          desc: "Portable sound systems and loud music are prohibited in common areas and balconies. Please respect quiet hours after 10:00 PM.",
          badge: "Relaxation"
        },
        {
          icon: "🗑️",
          title: "Trash Disposal on Your Floor",
          desc: "Please dispose of bagged trash in the designated disposal room located on this floor. Keep glass and recyclables in separate bags.",
          badge: "Eco-Friendly"
        },
        {
          icon: "🚫",
          title: "No Pets & No Day-Passes",
          desc: "HOA bylaws strictly forbid guest pets and prohibit subleasing day-passes to non-registered visitors.",
          badge: "HOA Bylaws"
        }
      ]
    },
    lagoon: {
      title: "The Crystal Lagoon & Pools",
      subtitle: "Experience one of Cartagena's most breathtaking turquoise-water lagoons",
      hours: "Pool & Lagoon Hours: 9:00 AM to 6:00 PM (Subject to maintenance)",
      rulesTitle: "Safety recommendations:",
      rules: [
        "Wear your wristband at all times to enter the beach and swimming areas.",
        "Children must be supervised by a responsible adult at all times.",
        "Please use pool towels and dry off before entering the residential tower.",
        "No food, glassware, or glass bottles are allowed near wet zones or sandy areas."
      ]
    },
    nearby: {
      title: "Local Guide: Exploring the Area",
      subtitle: "Our hand-picked recommendations for groceries, dining, and must-see attractions",
      categories: [
        {
          name: "Groceries & Pharmacies",
          icon: "🛒",
          places: [
            {
              name: "Éxito / Carulla Supermarket",
              desc: "Full supermarket with fresh produce, prime meats, imported snacks, and fine wines.",
              distance: "10-15 min drive",
              tag: "Full Supermarket"
            },
            {
              name: "D1 & Ara Stores",
              desc: "Great for quick grocery runs, drinks, snacks, and basics at budget-friendly prices.",
              distance: "8 min",
              tag: "Convenience"
            },
            {
              name: "24/7 Pharmacies & Rappi App",
              desc: "On-demand delivery directly to the complex gate via the Rappi mobile app.",
              distance: "Delivery available",
              tag: "Pharmacy & Delivery"
            }
          ]
        },
        {
          name: "Dining & Coffee",
          icon: "🍽️",
          places: [
            {
              name: "Manzanillo & La Boquilla Beachfront",
              desc: "Authentic coastal fried fish, coconut rice, and crispy plantains right by the beach.",
              distance: "10 min",
              tag: "Caribbean Seafood"
            },
            {
              name: "Walled City Restaurants",
              desc: "World-class signature dining, fusion seafood, and romantic courtyards (Celele, Carmen, Candé).",
              distance: "25-30 min",
              tag: "Fine Dining"
            },
            {
              name: "Specialty Coffee Shops",
              desc: "Taste single-origin Colombian coffees prepared by expert baristas (Café San Alberto, Ábaco).",
              distance: "Historic Center",
              tag: "Specialty Coffee"
            }
          ]
        },
        {
          name: "Must-Do Experiences",
          icon: "✨",
          places: [
            {
              name: "Sunset along the Ramparts",
              desc: "Watch the golden sunset over the Caribbean Sea with the refreshing ocean breeze.",
              distance: "Must See",
              tag: "Scenic & Iconic"
            },
            {
              name: "San Felipe de Barajas Castle",
              desc: "The greatest military fortress built by the Spanish in the Americas, full of secret tunnels.",
              distance: "25 min",
              tag: "Culture & History"
            },
            {
              name: "Rosario Islands & Barú",
              desc: "Day boat trips to pristine turquoise waters and powdery white-sand beaches.",
              distance: "Depart from Marina",
              tag: "Marine Adventure"
            }
          ]
        }
      ]
    },
    emergency: {
      title: "Helpful Contacts & Emergencies",
      subtitle: "We are always available to help make your stay effortless",
      contacts: [
        {
          role: "Your Host",
          name: apartmentConfig.hostName,
          phone: apartmentConfig.hostPhone,
          notes: "Message us anytime on WhatsApp for assistance or questions.",
          whatsapp: true
        },
        {
          role: "Gate Security & Concierge",
          name: "Baia Kabo Front Gate",
          phone: "Gate Intercom / Reception",
          notes: "24/7 security station at the main entrance."
        },
        {
          role: "Medical Emergencies",
          name: "Red Cross & Ambulance",
          phone: "123 / 132",
          notes: "Emergency hotline for urgent medical attention."
        },
        {
          role: "Tourist Police",
          name: "Cartagena Tourism Police",
          phone: "112 / +57 (605) 664 6610",
          notes: "Dedicated traveler support and security hotline."
        }
      ]
    },
    footer: {
      rights: "Digital Welcome Guide • Luxury Apartment at Baia Kabo, Cartagena",
      note: "Wishing you an unforgettable vacation. Enjoy the enchantment of Cartagena!"
    }
  }
};
