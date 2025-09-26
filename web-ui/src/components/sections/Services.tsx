import React from 'react';
import brandConfig from '../../config/brand.config';
import { Container, Section, Card, Button } from '../index';
import ServiceModal from '../modals/ServiceModal';

const Services: React.FC = () => {
  const services = brandConfig.company.services || [];
  const [openServiceIndex, setOpenServiceIndex] = React.useState<number | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const openModalFor = (i: number) => { setOpenServiceIndex(i); setModalOpen(true); };
  const requestClose = () => setModalOpen(false);
  const afterClose = () => setOpenServiceIndex(null);

  if (services.length === 0) {
    return null;
  }

  return (
    <Section id="services" background="white" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Regular Service Cards */}
          {services.map((service, index) => (
            <Card
              key={index}
              className="group h-full flex flex-col cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              hover
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-br ${service.color} p-6 -m-6 mb-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex flex-col flex-1">
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-secondary-600">
                      <span className="text-accent-500 mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                    onClick={() => openModalFor(index)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}

                    <Card
            className="group h-full flex flex-col cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative"
            hover
          >
            {/* Special Header with Pulsing Gradient */}
            <div className="bg-gradient-to-br from-fuchsia-500 via-amber-400 to-rose-600 dark:from-fuchsia-600 dark:via-amber-500 dark:to-rose-700 p-6 -m-6 mb-6 text-white relative overflow-hidden shadow-[0_0_0_2px_rgba(255,255,255,0.15),0_8px_32px_-4px_rgba(244,114,182,0.55)] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.35),transparent_60%)] after:pointer-events-none">
              <div className="absolute inset-0 bg-black/10"></div>
              {/* Animated gradient overlay (sheen) */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse opacity-40 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  💡
                </div>
                <h3 className="text-xl font-bold">
                  Not Sure What You Need?
                </h3>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
              {/* Extra decorative elements for special card */}
              <div className="absolute -left-2 -bottom-2 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="space-y-4 flex flex-col flex-1">
              <p className="text-secondary-600 leading-relaxed">
                Get in touch today, don't wait to start your digital transformation.
              </p>

              {/* Benefits List */}
              <ul className="space-y-2 flex-1">
                <li className="flex items-start text-sm text-secondary-600">
                  <span className="text-accent-500 mr-2 mt-1">✓</span>
                  Free initial consultation
                </li>
                <li className="flex items-start text-sm text-secondary-600">
                  <span className="text-accent-500 mr-2 mt-1">✓</span>
                  Personalized recommendations
                </li>
                <li className="flex items-start text-sm text-secondary-600">
                  <span className="text-accent-500 mr-2 mt-1">✓</span>
                  No technical jargon, just solutions
                </li>
                <li className="flex items-start text-sm text-secondary-600">
                  <span className="text-accent-500 mr-2 mt-1">✓</span>
                  Quick response within 24 hours
                </li>
              </ul>

              {/* Special CTA Button */}
              <div className="pt-4 mt-auto">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full bg-gradient-to-r from-fuchsia-500 via-amber-400 to-rose-600 hover:from-fuchsia-600 hover:via-amber-500 hover:to-rose-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group-hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 focus:outline-none"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Let's Talk Today
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals 
              and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => window.location.href = '#contact'}>
                Schedule Consultation
              </Button>
              {(brandConfig.company.caseStudies && brandConfig.company.caseStudies.length > 0) && (
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
      {/* Modal Mount */}
      <ServiceModal open={modalOpen} onClose={requestClose} onAfterClose={afterClose} serviceIndex={openServiceIndex} />
    </Section>
  );
};

export default Services;