import { Header, Footer, Hero, About, Testimonials, Products, Services, Contact } from './components';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { NavigationItem } from './types/components';
import brandConfig from './config/brand.config';
import './App.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import React from 'react';

function App() {
  const [path, setPath] = React.useState<string>(() => window.location.pathname);

  React.useEffect(() => {
    const handler = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const navigate = (to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
      // Scroll to top after route change
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    } else if (to === '/privacy') {
      // Force scroll if already on page
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };
  // Navigation configuration - dynamically built based on available content
  const navigation: NavigationItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    ...(brandConfig.company.testimonials && brandConfig.company.testimonials.length > 0 
      ? [{ label: 'Testimonials', href: '#testimonials' }] 
      : []
    ),
    ...(brandConfig.company.products && brandConfig.company.products.length > 0 
      ? [{ label: 'Products', href: '#products' }] 
      : []
    ),
    ...(brandConfig.company.services && brandConfig.company.services.length > 0 
      ? [{ label: 'Services', href: '#services' }] 
      : []
    ),
    { label: 'Contact', href: '#contact' },
  ];

  const isPrivacy = path === '/privacy';

  return (
    <ErrorBoundary>
      <div className="App">
        <SEO />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
        >
          Skip to main content
        </a>

        <Header
          navigation={navigation}
          transparent={!isPrivacy}
          fixed={true}
          onNavigate={navigate}
          currentPath={path}
        />

        <main id="main-content" role="main">
          {isPrivacy ? (
            <PrivacyPolicy onBack={() => navigate('/')} />
          ) : (
            <>
              <Hero />
              <About />
              {(brandConfig.company.testimonials && brandConfig.company.testimonials.length > 0) && <Testimonials />}
              {(brandConfig.company.products && brandConfig.company.products.length > 0 ) && <Products />}
              {(brandConfig.company.services && brandConfig.company.services.length > 0) && <Services />}
              <Contact />
            </>
          )}
        </main>

        <Footer
          navigation={navigation}
          onNavigate={navigate}
          currentPath={path}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
