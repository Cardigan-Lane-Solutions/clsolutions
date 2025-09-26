import React from 'react';
import brandConfig from '../config/brand.config';

interface StructuredDataProps {
  type?: 'WebPage' | 'Service' | 'Product' | 'ContactPage';
  title?: string;
  description?: string;
  url?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type = 'WebPage',
  title,
  description,
  url
}) => {
  const baseUrl = 'https://clsolutions.tech';
  
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      "name": title || brandConfig.company.name,
      "description": description || brandConfig.company.description,
      "url": url || baseUrl,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": brandConfig.company.name,
        "url": baseUrl
      },
      "about": {
        "@type": "Organization",
        "name": brandConfig.company.name,
        "description": brandConfig.company.description
      }
    };

    // Add specific structured data based on type
    switch (type) {
      case 'Service':
        return {
          ...baseData,
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": brandConfig.company.name,
            "url": baseUrl
          },
          "serviceType": "Technology Solutions",
          "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        };

      case 'Product':
        return {
          ...baseData,
          "@type": "Product",
          "brand": {
            "@type": "Brand",
            "name": brandConfig.company.name
          },
          "manufacturer": {
            "@type": "Organization", 
            "name": brandConfig.company.name
          }
        };

      case 'ContactPage':
        return {
          ...baseData,
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": brandConfig.company.name,
            "email": brandConfig.company.contact?.email,
            "url": baseUrl,
            ...(brandConfig.company.contact?.socialMedia?.linkedin && {
              "sameAs": [
                brandConfig.company.contact.socialMedia.linkedin,
                ...(brandConfig.company.contact.socialMedia.github ? [brandConfig.company.contact.socialMedia.github] : []),
                ...(brandConfig.company.contact.socialMedia.twitter ? [brandConfig.company.contact.socialMedia.twitter] : [])
              ]
            })
          }
        };

      default:
        return baseData;
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
};

export default StructuredData;