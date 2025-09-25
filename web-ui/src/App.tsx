import React from 'react';
import { Header, Footer, Hero, About, Testimonials, Products, Services, Contact } from './components';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import { NavigationItem } from './types/components';
import './App.css';

function App() {
  // Navigation configuration
  const navigation: NavigationItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
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

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />

          {/* Testimonials Section*/}
          <Testimonials />
          
          {/* Products Section */}
          <Products />
          
          {/* Services Section */}
          <Services />
          
          {/* Contact Section  */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer 
          navigation={navigation}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
