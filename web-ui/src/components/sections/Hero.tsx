import React from 'react';
import { HeroProps } from '../../types/components';
import { brandConfig } from '../../config/brand.config';
import { Container, Button } from '../index';
import BackgroundCredit from '../ui/BackgroundCredit';
import { cn } from '../../utils/styles';

const Hero: React.FC<Partial<HeroProps>> = ({
  title = `Welcome to ${brandConfig.company.name}`,
  subtitle = brandConfig.company.tagline,
  description = brandConfig.company.description,
  backgroundImage = brandConfig.assets.backgroundImage,
  ctaButtons = {
    primary: { text: 'Get Started', href: '#contact' },
    secondary: { text: 'Learn More', href: '#about', variant: 'outline' },
  },
  logo = brandConfig.assets.logo,
  className = '',
}) => {
  const scrollToSection = (href: string) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/80 via-secondary-800/70 to-primary-900/80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src={logo}
              alt={`${brandConfig.company.name} - ${brandConfig.company.tagline}`}
              className="h-16 md:h-20 lg:h-24 w-auto mx-auto filter brightness-0 invert opacity-90"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-white">
            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-accent-300 font-medium tracking-wide animate-slide-up">
                {subtitle}
              </p>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-to-r from-white via-accent-200 to-primary-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Description */}
            {description && (
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {ctaButtons.primary && (
                <Button
                  variant={ctaButtons.primary.variant || 'primary'}
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection(ctaButtons.primary!.href || '#contact')}
                >
                  {ctaButtons.primary.text}
                </Button>
              )}
              {ctaButtons.secondary && (
                <Button
                  variant={ctaButtons.secondary.variant || 'outline'}
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection(ctaButtons.secondary!.href || '#about')}
                >
                  {ctaButtons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Background Image Credit */}
      <BackgroundCredit className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-20" />
    </section>
  );
};

export default Hero;