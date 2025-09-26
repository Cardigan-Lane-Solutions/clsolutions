import React, { useEffect } from 'react';
import { Button, Card } from '../index';
import brandConfig from '../../config/brand.config';

export interface ServiceModalProps {
  open: boolean; // controls animation state
  onClose: () => void; // user intent to close (triggers exit)
  onAfterClose?: () => void; // fired after exit animation finishes
  serviceIndex: number | null; // which service to show (should persist until after close)
}

// Derive service type from brandConfig (to avoid manual duplication)
const services = brandConfig.company.services || [];

const ANIMATION_MS = 280;

export const ServiceModal: React.FC<ServiceModalProps> = ({ open, onClose, onAfterClose, serviceIndex }) => {
  const [rendered, setRendered] = React.useState(open);
  const [animState, setAnimState] = React.useState<'enter' | 'idle' | 'exit'>(open ? 'enter' : 'exit');

  // Keep mounted while animating
  React.useEffect(() => {
    if (open) {
      setRendered(true);
      requestAnimationFrame(() => setAnimState('enter'));
      const t = setTimeout(() => setAnimState('idle'), ANIMATION_MS);
      return () => clearTimeout(t);
    } else if (rendered) {
      setAnimState('exit');
      const t = setTimeout(() => {
        setRendered(false);
        onAfterClose?.();
      }, ANIMATION_MS);
      return () => clearTimeout(t);
    }
  }, [open, rendered, onAfterClose]);

  const service = (serviceIndex !== null && services[serviceIndex]) ? services[serviceIndex] : null;

  // Lock scroll while rendered (not just while open to avoid flash during exit)
  useEffect(() => {
    if (rendered) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [rendered]);

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && rendered) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [rendered, onClose]);

  if (!rendered || !service) return null;

  const backdropClasses = {
    enter: 'opacity-0 animate-none',
    idle: 'opacity-100',
    exit: 'opacity-0',
  }[animState];

  const dialogClasses = {
    enter: 'opacity-0 translate-y-4 scale-[0.97]',
    idle: 'opacity-100 translate-y-0 scale-100',
    exit: 'opacity-0 translate-y-4 scale-[0.97]',
  }[animState];

  const transition = `transition-all duration-[${ANIMATION_MS}ms] ease-[cubic-bezier(0.4,0,0.2,1)]`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-slate-900/70 backdrop-blur-sm ${transition} ${backdropClasses}`} onClick={onClose} />

  <Card className={`relative max-w-5xl w-full overflow-hidden shadow-2xl border-0 p-0 ${transition} ${dialogClasses} max-h-[90vh] flex flex-col`}>
        {/* Gradient Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-600" />

        <div className="flex flex-col md:flex-row flex-1 min-h-0">
          {/* Image / Visual Side (hidden on mobile) */}
          <div className="hidden md:flex md:w-5/12 relative group bg-gradient-to-br from-slate-800 to-slate-900 items-stretch">
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-56 md:h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                <span>{service.icon}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Content (scrollable on small screens) */}
          <div className="md:w-7/12 p-5 md:p-10 flex flex-col gap-6 overflow-y-auto">
            <div>
              {/* Mobile icon badge (hidden on md because image side shows context) */}
              <div className={`md:hidden inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white bg-gradient-to-r ${service.color} shadow-md mb-4`}>{service.icon}</div>
              <h3 id="service-modal-title" className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              {service.longDescription && (
                <p className="text-secondary-600 leading-relaxed text-base md:text-lg">
                  {service.longDescription}
                </p>
              )}
            </div>

            {/* Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div>
                <h4 className="font-semibold text-secondary-800 mb-2 text-sm tracking-wide uppercase">Key Value</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-sm text-secondary-700">
                      <span className="text-accent-500 mr-2 mt-0.5">✓</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            <div>
              <h4 className="font-semibold text-secondary-800 mb-2 text-sm tracking-wide uppercase">What We Deliver</h4>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start text-sm text-secondary-700">
                    <span className="text-primary-500 mr-2 mt-0.5">●</span>{f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 mt-auto">
              <Button
                variant="primary"
                className="flex-1 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 hover:from-primary-700 hover:via-accent-600 hover:to-secondary-700 shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
              >
                Talk To Us
              </Button>
              <Button variant="outline" onClick={onClose} className="sm:w-auto">
                Close
              </Button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-secondary-500 hover:text-secondary-700 transition-colors bg-white/70 backdrop-blur px-2 rounded md:bg-transparent md:backdrop-blur-0"
        >
          <span className="sr-only">Close</span>
          ×
        </button>
      </Card>
    </div>
  );
};

export default ServiceModal;
