import React from 'react';
import { FooterProps } from '../../types/components';
import { brandConfig } from '../../config/brand.config';
import Container from '../ui/Container';
import { cn } from '../../utils/styles';

interface ExtendedFooterProps extends FooterProps {
  onNavigate?: (to: string) => void;
  currentPath?: string;
}

const Footer: React.FC<ExtendedFooterProps> = ({
  navigation,
  className = '',
  onNavigate,
  currentPath,
}) => {
  // Get company info from brand config
  const companyInfo = {
    name: brandConfig.company.name,
    description: brandConfig.company.description,
    email: brandConfig.company.contact?.email,
    phone: brandConfig.company.contact?.phone,
  };

  // Generate social links from brand config
  const socialLinks = [];
  if (brandConfig.company.contact?.socialMedia?.linkedin) {
    socialLinks.push({
      platform: 'LinkedIn',
      url: brandConfig.company.contact.socialMedia.linkedin,
      icon: '💼'
    });
  }
  if (brandConfig.company.contact?.socialMedia?.twitter) {
    socialLinks.push({
      platform: 'Twitter', 
      url: brandConfig.company.contact.socialMedia.twitter,
      icon: '🐦'
    });
  }
  if (brandConfig.company.contact?.socialMedia?.github) {
    socialLinks.push({
      platform: 'GitHub',
      url: brandConfig.company.contact.socialMedia.github,
      icon: '💻'
    });
  }
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) return;
    const performScroll = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    if (currentPath === '/privacy' && onNavigate) {
      onNavigate('/');
      setTimeout(performScroll, 50);
    } else {
      performScroll();
    }
  };

  return (
    <footer className={cn('bg-secondary-900 text-white', className)}>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img
                  src={brandConfig.assets.logo}
                  alt={`${companyInfo.name} logo`}
                  className="h-8 w-auto filter brightness-0 invert"
                />
                <span className="ml-3 text-xl font-bold">
                  {companyInfo.name}
                </span>
              </div>
              <p className="text-secondary-300 mb-6 max-w-md">
                {brandConfig.company.tagline}
              </p>
              <div className="space-y-2 text-sm text-secondary-400">
                {companyInfo.email && (
                  <div className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                )}
                {companyInfo.phone && (
                  <div className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            {navigation && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Services */}
            {brandConfig.company.services && brandConfig.company.services.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {brandConfig.company.services.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection('#services')}
                        className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      className="flex items-center text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-3 text-lg">{social.icon}</span>
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-400 text-sm">
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button
                  onClick={() => onNavigate ? onNavigate('/privacy') : window.location.assign('/privacy')}
                  className={`text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm ${currentPath === '/privacy' ? 'text-primary-400' : ''}`}
                >
                  Privacy Policy
                </button>
                <a
                  href="/sitemap.xml"
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  aria-label="Sitemap XML"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;