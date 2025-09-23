import React from 'react';
import { brandConfig } from '../config/brand.config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = `${brandConfig.company.name} - ${brandConfig.company.tagline}`,
  description = brandConfig.company.description,
  keywords = ['technology solutions', 'web development', 'cloud solutions', 'digital transformation'],
  image = brandConfig.assets.logo,
  url = 'https://cardiganlane.com'
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandConfig.company.name,
    "description": brandConfig.company.description,
    "url": url,
    "logo": image,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@cardiganlane.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Technology Drive",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/cardiganlane",
      "https://twitter.com/cardiganlane",
      "https://github.com/cardiganlane"
    ]
  };

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Add structured data
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('id', 'structured-data');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, image, url]);

  return null; // This component doesn't render anything visible
};

export default SEO;