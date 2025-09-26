import { Header, Footer, Hero, About, Testimonials, Products, Services, Contact } from './components';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { NavigationItem } from './types/components';
import brandConfig from './config/brand.config';
import './App.css';

function App() {
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
          transparent={true}
          fixed={true}
        />

        <main id="main-content" role="main">
          <Hero />
          
          <About />

          {(brandConfig.company.testimonials && brandConfig.company.testimonials.length > 0) 
          && <Testimonials />}

          {(brandConfig.company.products && brandConfig.company.products.length > 0 ) 
          && <Products />}

          {(brandConfig.company.services && brandConfig.company.services.length > 0) 
          && <Services />}

          <Contact />
        </main>

        <Footer
          navigation={navigation}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
