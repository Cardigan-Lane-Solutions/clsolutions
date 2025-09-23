import React from 'react';
import { ButtonProps } from '../../types/components';
import { getButtonVariant, cn } from '../../utils/styles';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  loading = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const baseClasses = cn(
    getButtonVariant(variant),
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...props}
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
            Loading...
          </div>
        ) : (
          children
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      {...props}
    >
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;