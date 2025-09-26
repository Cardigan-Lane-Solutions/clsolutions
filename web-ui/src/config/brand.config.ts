// Brand Configuration for Cardigan Lane Solutions
// This file centralizes all brand-related design tokens for easy customization
//
// Contains:
// - Company information (name, tagline, description, mission)
// - Features and testimonials
// - Products and services data
// - Contact information including social media
// - Color palettes (primary, secondary, accent, neutral)
// - Typography settings
// - Spacing and asset configurations
//
// Note: Images in the public folder should be referenced using PUBLIC_URL for proper deployment
const logo = `${process.env.PUBLIC_URL}/cls-logo.svg`;
const backgroundImage = `${process.env.PUBLIC_URL}/port-erin-background.jpg`;

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  logo: string;
  quote: string;
  company: string;
  author: string;
  action?: {
    text: string;
    href: string;
  }
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  badge?: string;
  comingSoon?: boolean;
}

interface Service {
  icon: string;
  title: string;
  description: string; // short blurb
  longDescription?: string; // extended marketing copy for modal
  features: string[]; // bullet list on card
  highlights?: string[]; // extra selling points for modal
  image?: string; // path relative to public for modal illustration
  color: string; // gradient tailwind classes e.g. from-blue-500 to-purple-600
}

interface ContactInfo {
  website: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface CaseStudy {
  title: string;
  description: string;
  images: string[];
  link?: string;
}

export interface BrandConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    features?: Feature[];
    mission?: string;
    testimonials?: Testimonial[];
    products?: Product[];
    services?: Service[];
    contact?: ContactInfo;
    caseStudies?: CaseStudy[];
  };
  colors: {
    primary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    accent: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  typography: {
    fontFamily: {
      display: string[];
      body: string[];
      mono: string[];
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
  };
  spacing: {
    section: string;
    container: string;
    component: string;
  };
  assets: {
    logo: string;
    backgroundImage: string;
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      default: string;
      bounce: string;
    };
  };
}

export const brandConfig: BrandConfig = {
  company: {
    name: "Cardigan Lane Solutions",
    tagline: "Solving Unique Problems with Elegant Solutions",
    description: "Digital Transformation Experts",
    longDescription: "We are a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions. Our expertise spans across modern web technologies, cloud infrastructure, and strategic digital transformation.",
    features: [
      {
        icon: '🤝',
        title: 'Partnership Approach',
        description: 'An extension of your team, ensuring seamless collaboration and communication.',
      },
      {
        icon: '🚀',
        title: 'Innovation First',
        description: 'Leveraging cutting-edge technologies to deliver solutions that give you a competitive advantage.',
      },
      {
        icon: '🎯',
        title: 'Results Driven',
        description: 'Our focus is on delivering measurable outcomes that directly impact your business growth.',
      }
    ],
    mission: "To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting competitive advantages in the digital landscape. We believe that great technology should be accessible, scalable, and transformative.",
    testimonials: [],
    products: [],
    services: [
      {
        icon: '🔧',
        title: 'Digital Transformation',
        description: 'Strategic consulting and implementation services to modernize your business processes and technology stack.',
        longDescription: 'We partner with stakeholders to evaluate existing capabilities, identify gaps, and design a pragmatic transformation roadmap that emphasises rapid value delivery, risk reduction, and organisational adoption.',
        features: [
          'Technology Assessment',
          'Legacy System Modernisation',
          'Process Automation',
          'Digital Strategy Planning',
          'Change Management'
        ],
        highlights: [
          'Outcome-focused roadmaps',
          'Modern architecture enablement',
          'Cultural & process alignment',
          'Prioritised incremental delivery'
        ],
        image: `${process.env.PUBLIC_URL}/images/services/digital-transformation.jpg`,
        color: 'from-orange-500 to-red-600',
      },
      {
        icon: '🤖',
        title: 'Artificial Intelligence',
        description: 'Streamline operations and enhance customer experiences with custom AI solutions tailored to your business needs.',
        longDescription: 'We design and deploy secure, production-ready AI & agentic systems that integrate seamlessly with your people, data, and processes—unlocking measurable efficiency and new value propositions.',
        features: [
          'Custom Agentic Pipelines',
          'Voice & Chat Interfaces',
          'Automated processes, internally and externally',
          'Integration with existing systems',
          'Migration to AI-friendly architectures and technologies.'
        ],
        highlights: [
          'Responsible AI patterns',
          'Tool & data layer integration',
          'Scalable inference optimisation',
          'Human-in-the-loop workflows'
        ],
        image: `${process.env.PUBLIC_URL}/images/services/ai.jpg`,
        color: 'from-yellow-500 to-red-600',
      },
      {
        icon: '🌐',
        title: 'Web Development',
        description: 'Modern, responsive web applications built client first, ensuring fluid, enjoyable user experiences.',
        longDescription: 'From proof-of-concept to enterprise platforms, our engineering approach emphasises performance, accessibility, security, and maintainability—without compromising brand experience.',
        features: [
          'Single Page Applications (SPA)',
          'Progressive Web Apps (PWA)',
          'E-commerce Solutions',
          'Content Management Systems',
          'API Development & Integration'
        ],
        highlights: [
          'Performance & Core Web Vitals',
          'Design system alignment',
          'Secure-by-default patterns',
          'Scalable service architectures'
        ],
        image: `${process.env.PUBLIC_URL}/images/services/web.jpg`,
        color: 'from-blue-500 to-purple-600',
      },
      {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
        longDescription: 'We design resilient, observable cloud platforms leveraging automation, infrastructure-as-code, and FinOps to drive sustainable velocity and cost efficiency.',
        features: [
          'AWS & Azure Cloud Migration',
          'Serverless Architecture',
          'DevOps & CI/CD Pipelines',
          'Container Orchestration',
          'Cloud Security & Monitoring',
        ],
        highlights: [
          'Zero-downtime migration strategies',
          'Cost & scalability optimisation',
          'Security & compliance alignment',
          'Observability & SRE practices'
        ],
        image: `${process.env.PUBLIC_URL}/images/services/cloud.jpg`,
        color: 'from-green-500 to-teal-600',
      },
      {
        icon: '🧑‍💻',
        title: 'Custom Software Development',
        description: 'Tailored software solutions designed to meet your unique business challenges and objectives.',
        longDescription: 'We co-create robust, extensible platforms and internal tools that accelerate differentiation, reduce manual effort, and evolve with your business.',
        features: [
          'Bespoke Application Development',
          'System Integration',
          'Maintenance & Support',
          'Scalable & Modular Solutions',
          'An extension of your team'
        ],
        highlights: [
          'Domain-driven design alignment',
          'Maintainability & test strategy',
          'Progressive enhancement',
          'Transparent delivery cadence'
        ],
        image: `${process.env.PUBLIC_URL}/images/services/custom-dev.jpg`,
        color: 'from-purple-500 to-pink-600'
      }
    ],

    contact: {
      website: 'https://clsolutions.tech',
      email: 'hello@clsolutions.tech',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/company/cardiganlanesolutions',
        github: 'https://github.com/cardigan-lane-solutions'
      }
    }
  },

  colors: {
    // Primary brand color - Modern tech blue
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },

    // Secondary color - Professional slate
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },

    // Accent color - Success green
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },

    // Neutral grays
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  },

  typography: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  spacing: {
    section: '6rem', // 96px
    container: '2rem', // 32px
    component: '1.5rem', // 24px
  },

  assets: {
    logo: logo,
    backgroundImage: backgroundImage,
  },

  animations: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
};

// Helper functions for easy brand access
export const getBrandColor = (color: keyof typeof brandConfig.colors, shade: keyof typeof brandConfig.colors.primary = 500) => {
  return brandConfig.colors[color][shade];
};

export const getBrandFont = (type: keyof typeof brandConfig.typography.fontFamily) => {
  return brandConfig.typography.fontFamily[type].join(', ');
};

export const getBrandSpacing = (type: keyof typeof brandConfig.spacing) => {
  return brandConfig.spacing[type];
};

export default brandConfig;