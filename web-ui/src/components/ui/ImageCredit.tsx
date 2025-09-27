import React from 'react';

export interface ImageCreditData {
  profileLink: string;
  name: string;
  imageLink: string;
  imageSource: string;
}

interface ImageCreditProps {
  credit: ImageCreditData;
  variant?: 'overlay' | 'inline';
  className?: string;
}

/**
 * ImageCredit
 * Reusable attribution badge for images (e.g., service modal, cards, hero variants).
 * variant "overlay" is optimized for placement over images (dark translucent background).
 * variant "inline" is for text flow on mobile when the image itself is hidden.
 */
const ImageCredit: React.FC<ImageCreditProps> = ({ credit, variant = 'overlay', className = '' }) => {
  const baseLink = 'underline decoration-dotted hover:decoration-solid';
  if (!credit) return null;

  if (variant === 'inline') {
    return (
      <div className={`text-[11px] text-secondary-500 ${className}`}> 
        <span>Photo by </span>
        <a href={credit.profileLink} target="_blank" rel="noopener noreferrer" className={baseLink}>{credit.name}</a>
        <span> on </span>
        <a href={credit.imageLink} target="_blank" rel="noopener noreferrer" className={baseLink}>{credit.imageSource}</a>
      </div>
    );
  }

  // overlay variant
  return (
    <div className={`text-[10px] text-white/85 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md leading-tight space-x-1 pointer-events-auto ${className}`}>
      <span>Photo by</span>
      <a href={credit.profileLink} target="_blank" rel="noopener noreferrer" className={baseLink}>{credit.name}</a>
      <span>on</span>
      <a href={credit.imageLink} target="_blank" rel="noopener noreferrer" className={baseLink}>{credit.imageSource}</a>
    </div>
  );
};

export default ImageCredit;
