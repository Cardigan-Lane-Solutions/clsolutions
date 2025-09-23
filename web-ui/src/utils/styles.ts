// Utility functions for styling and animations

export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getAnimationClasses = (animation: string, delay?: string) => {
  const baseClasses = `animate-${animation}`;
  return delay ? `${baseClasses} animate-delay-${delay}` : baseClasses;
};

export const getGlassEffect = (opacity: 'light' | 'medium' | 'heavy' = 'medium') => {
  const opacityMap = {
    light: 'bg-white/5 backdrop-blur-sm',
    medium: 'bg-white/10 backdrop-blur-md',
    heavy: 'bg-white/20 backdrop-blur-lg',
  };
  
  return `${opacityMap[opacity]} border border-white/20 rounded-lg`;
};

export const getGradientBackground = (direction: 'to-r' | 'to-br' | 'to-b' = 'to-br') => {
  return `bg-gradient-${direction} from-primary-600 via-primary-700 to-secondary-800`;
};

export const getSectionPadding = () => {
  return 'py-16 md:py-24 lg:py-32';
};

export const getContainerClasses = () => {
  return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
};

export const getButtonVariant = (variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary') => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    ghost: 'text-primary-600 hover:bg-primary-50',
  };
  
  return `${variants[variant]} font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center`;
};

export const getCardClasses = (variant: 'default' | 'glass' | 'elevated' = 'default') => {
  const variants = {
    default: 'bg-white shadow-lg',
    glass: getGlassEffect('medium'),
    elevated: 'bg-white shadow-xl hover:shadow-2xl',
  };
  
  return `${variants[variant]} rounded-lg p-6 transition-all duration-300`;
};

export const getTextClasses = (size: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' = 'base') => {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };
  
  return sizes[size];
};

export const getResponsiveClasses = (property: string, values: { sm?: string; md?: string; lg?: string; xl?: string }) => {
  const classes = [];
  
  if (values.sm) classes.push(`sm:${property}-${values.sm}`);
  if (values.md) classes.push(`md:${property}-${values.md}`);
  if (values.lg) classes.push(`lg:${property}-${values.lg}`);
  if (values.xl) classes.push(`xl:${property}-${values.xl}`);
  
  return classes.join(' ');
};