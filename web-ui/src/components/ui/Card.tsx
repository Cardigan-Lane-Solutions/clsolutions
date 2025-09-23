import React from 'react';
import { CardProps } from '../../types/components';
import { getCardClasses, cn } from '../../utils/styles';

const Card: React.FC<CardProps & { onClick?: () => void }> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  onClick,
  ...props
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = cn(
    getCardClasses(variant),
    paddingClasses[padding],
    hover && 'hover:transform hover:scale-105 cursor-pointer',
    className
  );

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;