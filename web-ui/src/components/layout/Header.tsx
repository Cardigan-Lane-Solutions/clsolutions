import React, { useState, useEffect } from 'react';
import { HeaderProps } from '../../types/components';
import { brandConfig } from '../../config/brand.config';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { cn } from '../../utils/styles';

const Header: React.FC<HeaderProps> = ({
  navigation,
  logo = brandConfig.assets.logo,
  transparent = false,
  fixed = true,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerClasses = cn(
    'transition-all duration-300 z-50',
    fixed && 'fixed top-0 left-0 right-0',
    transparent && !isScrolled
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20',
    className
  );

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt={`${brandConfig.company.name} logo.`}
              className={cn(
                'h-8 w-auto md:h-10',
                transparent && !isScrolled ? 'filter brightness-0 invert' : ''
            )}
            />
            <span className={cn(
                'ml-3 text-lg md:text-xl font-bold',
                transparent && !isScrolled ? 'text-white' : 'text-secondary-900'
            )}>
              {brandConfig.company.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-primary-600',
                  item.active
                    ? 'text-primary-600'
                    : transparent && !isScrolled
                    ? 'text-white'
                    : 'text-secondary-700'
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100/50',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={cn(
                  'block w-5 h-0.5 transition-all duration-300 ease-in-out absolute',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-0' 
                    : 'rotate-0 -translate-y-1.5'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 transition-all duration-300 ease-in-out absolute',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 transition-all duration-300 ease-in-out absolute',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen 
                    ? '-rotate-45 translate-y-0' 
                    : 'rotate-0 translate-y-1.5'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMobileMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          )}
        >
          {/* Backdrop - with smooth fade transition */}
          <div 
            className={cn(
              'fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out',
              isMobileMenuOpen 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            )}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          <div className={cn(
            'relative z-50 border-t border-gray-200/20 bg-white/95 backdrop-blur-md mx-4 mt-2 mb-4 rounded-xl shadow-lg',
            'mobile-menu-enter',
            isMobileMenuOpen && 'mobile-menu-enter-active'
          )}>
            <div className="py-4 space-y-1">
              {navigation.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 hover:text-primary-600 hover:bg-primary-50 rounded-lg mx-2',
                    'transform hover:scale-105 hover:shadow-sm',
                    'animate-fade-in-up',
                    index === 0 && 'animate-fade-in-up-delay-1',
                    index === 1 && 'animate-fade-in-up-delay-2',
                    index === 2 && 'animate-fade-in-up-delay-3',
                    index === 3 && 'animate-fade-in-up-delay-4',
                    item.active ? 'text-primary-600 bg-primary-50' : 'text-secondary-700'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="primary"
                  className={cn(
                    'w-full transform hover:scale-105 transition-transform duration-200',
                    'animate-fade-in-up animate-fade-in-up-delay-5'
                  )}
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;