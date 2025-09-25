import React from "react";
import brandConfig from "../../config/brand.config";
import { Container, Section, Button } from "../index";
import { cn } from "../../utils/styles";

const Products: React.FC = () => {
  const products = brandConfig.company.products || [];

  if (products.length === 0) {
    return null;
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="products" background="white" padding="lg">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of technology products designed to accelerate 
            your digital transformation and drive business growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "group relative",
                "transform transition-all duration-500 hover:scale-105",
                "animate-fade-in-up",
                index === 0 && "animate-fade-in-up-delay-1",
                index === 1 && "animate-fade-in-up-delay-2",
                index === 2 && "animate-fade-in-up-delay-3",
                index === 3 && "animate-fade-in-up-delay-4"
              )}
            >
              {/* Product Card */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden">
                {/* Badge */}
                {product.badge && (
                  <div className={cn(
                    "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold",
                    product.badge === "Popular" && "bg-primary-100 text-primary-700",
                    product.badge === "New" && "bg-accent-100 text-accent-700"
                  )}>
                    {product.badge}
                  </div>
                )}

                {/* Coming Soon Overlay */}
                {product.comingSoon && (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 to-secondary-800/90 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🚀</div>
                      <h4 className="text-xl font-bold text-white mb-2">Coming Soon</h4>
                      <p className="text-white/80 text-sm">Get notified when available</p>
                    </div>
                  </div>
                )}

                {/* Gradient Background Effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl",
                  `bg-gradient-to-br ${product.color}`
                )} />

                {/* Icon */}
                <div className="relative">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110",
                    `bg-gradient-to-br ${product.color} text-white shadow-lg`
                  )}>
                    {product.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                    {product.tagline}
                  </p>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm text-secondary-700"
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0",
                          `bg-gradient-to-r ${product.color}`
                        )} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={product.comingSoon ? "outline" : "primary"}
                    className={cn(
                      "w-full transition-all duration-300",
                      !product.comingSoon && "group-hover:shadow-lg group-hover:scale-105"
                    )}
                    onClick={product.comingSoon ? undefined : scrollToContact}
                    disabled={product.comingSoon}
                  >
                    {product.comingSoon ? "Notify Me" : "Learn More"}
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our products can be tailored to meet your specific needs and drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                className="bg-white text-primary-700 hover:bg-white/90 px-8 py-3"
                onClick={scrollToContact}
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3"
                onClick={scrollToContact}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Products;