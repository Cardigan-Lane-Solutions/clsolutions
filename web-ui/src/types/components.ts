// TypeScript interfaces for component props

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}

export interface ContainerProps extends BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  padding?: boolean;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'glass' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps extends BaseComponentProps {
  navigation: NavigationItem[];
  logo?: string;
  transparent?: boolean;
  fixed?: boolean;
}

export interface FooterProps extends BaseComponentProps {
  navigation?: NavigationItem[];
  companyInfo?: {
    name: string;
    description: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface HeroProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaButtons?: {
    primary?: ButtonProps & { text: string };
    secondary?: ButtonProps & { text: string };
  };
  logo?: string;
}

export interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon?: string;
  title: string;
  description: string;
  features?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  social?: {
    platform: string;
    url: string;
  }[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}