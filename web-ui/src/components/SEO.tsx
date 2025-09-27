import React, { useMemo } from 'react';
import brandConfig from '../config/brand.config';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  canonical?: string; // Explicit canonical URL override
}

const SEO: React.FC<SEOProps> = ({
  title = `${brandConfig.company.name} - Elegance in Software`,
  description = brandConfig.company.description,
  keywords = [
    'technology solutions', 
    'web development', 
    'cloud solutions', 
    'digital transformation', 
    'cardigan lane solutions',
    'mobile applications',
    'responsive web design',
    'automation solutions',
    'digital consulting',
    'artificial intelligence',
    'agentic ai',
    'agentic artificial intelligence',
    'large language models',
    'ai solutions'
  ],
  image = brandConfig.assets.logo,
  url = brandConfig.company.contact!.website,
  canonical
}) => {
  // Derive canonical: prefer explicit prop, else use provided url without query/hash
  const canonicalUrl = useMemo(() => {
    if (canonical) return canonical;
    try {
      const u = new URL(url);
      u.search = '';
      u.hash = '';
      return u.toString();
    } catch {
      return url; // fallback to raw
    }
  }, [canonical, url]);
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brandConfig.company.name,
    "description": brandConfig.company.description,
    "url": url,
    "logo": image,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": brandConfig.company.contact!.email
    },
    ...(brandConfig.company.contact?.address && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": brandConfig.company.contact.address.street,
        "addressLocality": brandConfig.company.contact.address.city,
        "addressRegion": brandConfig.company.contact.address.state,
        "postalCode": brandConfig.company.contact.address.zip,
        "addressCountry": brandConfig.company.contact.address.country
      }
    }),
    "sameAs": [
      ...(brandConfig.company.contact?.socialMedia?.linkedin ? [brandConfig.company.contact.socialMedia.linkedin] : []),
      ...(brandConfig.company.contact?.socialMedia?.github ? [brandConfig.company.contact.socialMedia.github] : []),
      ...(brandConfig.company.contact?.socialMedia?.twitter ? [brandConfig.company.contact.socialMedia.twitter] : [])
    ].filter(Boolean)
  }), [url, image]);

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

    // Canonical link handling
    if (canonicalUrl) {
      let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    return () => {};
  }, [title, description, keywords, image, url, structuredData, canonicalUrl]);

  return null; // This component doesn't render anything visible
};

export default SEO;