import React from 'react';
import { SectionProps } from '../../types/components';
import { cn } from '../../utils/styles';

const Section: React.FC<SectionProps> = ({
  children,
  id,
  background = 'white',
  padding = 'lg',
  className = '',
  ...props
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-600',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800',
  };

  const paddingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40',
  };

  const classes = cn(
    backgroundClasses[background],
    paddingClasses[padding],
    className
  );

  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
};

export default Section;