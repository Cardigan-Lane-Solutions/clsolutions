import React from 'react';
import { FooterProps } from '../../types/components';
import { brandConfig } from '../../config/brand.config';
import Container from '../ui/Container';
import { cn } from '../../utils/styles';

const Footer: React.FC<FooterProps> = ({
  navigation,
  companyInfo = {
    name: brandConfig.company.name,
    description: brandConfig.company.description,
    email: 'hello@cardiganlane.com',
    phone: '+1 (555) 123-4567',
  },
  socialLinks = [
    { platform: 'LinkedIn', url: '#', icon: '💼' },
    { platform: 'Twitter', url: '#', icon: '🐦' },
    { platform: 'GitHub', url: '#', icon: '💻' },
  ],
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={cn('bg-secondary-900 text-white', className)}>
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
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
                {companyInfo.description}
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

            {/* Social Links */}
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
          </div>

          {/* Bottom Section */}
          <div className="border-t border-secondary-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-400 text-sm">
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </button>
                <button className="text-secondary-400 hover:text-primary-400 transition-colors duration-200 text-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;