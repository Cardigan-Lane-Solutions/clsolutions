import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'text-primary-600',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-4" role="status" aria-live="polite">
      <div className={`animate-spin rounded-full border-b-2 border-current ${sizeClasses[size]} ${color}`}></div>
      {text && (
        <span className={`mt-2 text-sm ${color} sr-only`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default LoadingSpinner;