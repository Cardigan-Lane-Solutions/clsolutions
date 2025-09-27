import React from 'react';

/**
 * BackgroundCredit
 * Displays a small attribution badge for the hero background image.
 * Positioned absolutely; parent should be relative.
 */
const BackgroundCredit: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`pointer-events-auto text-[10px] sm:text-xs font-medium tracking-wide text-white/80 hover:text-white transition-colors
        bg-secondary-900/40 backdrop-blur-md border border-white/10 rounded-md px-2 py-1 shadow-lg
        flex items-center gap-1
        ${className}`}
      style={{ lineHeight: 1.2 }}
    >
      <span>Photo by</span>
      <a
        href="https://unsplash.com/@jamesq?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-dotted hover:decoration-solid"
      >
        James Qualtrough 🇮🇲
      </a>
      <span>on</span>
      <a
        href="https://unsplash.com/photos/islet-rock-during-golden-hour-bcSWX0Opuy8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-dotted hover:decoration-solid"
      >
        Unsplash
      </a>
    </div>
  );
};

export default BackgroundCredit;
