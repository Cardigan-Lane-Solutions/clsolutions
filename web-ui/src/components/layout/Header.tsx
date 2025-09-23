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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              alt={`${brandConfig.company.name} logo - Professional technology solutions company`}
              className="h-8 w-auto md:h-10"
            />
            <span className="ml-3 text-lg md:text-xl font-bold text-secondary-900">
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
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-5 h-0.5 transition-all duration-300',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen && 'rotate-45 translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 mt-1 transition-all duration-300',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 mt-1 transition-all duration-300',
                  transparent && !isScrolled ? 'bg-white' : 'bg-secondary-900',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/20 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary-600 hover:bg-primary-50 rounded-lg',
                    item.active ? 'text-primary-600' : 'text-secondary-700'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;