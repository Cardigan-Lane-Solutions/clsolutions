import React from 'react';
import { Container, Section, Card, Button } from '../index';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies like React, TypeScript, and Node.js.',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development & Integration',
      ],
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
      features: [
        'AWS & Azure Cloud Migration',
        'Serverless Architecture',
        'DevOps & CI/CD Pipelines',
        'Container Orchestration',
        'Cloud Security & Monitoring',
      ],
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
      features: [
        'React Native Development',
        'Native iOS & Android',
        'App Store Optimization',
        'Mobile UI/UX Design',
        'Push Notifications & Analytics',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: '🔧',
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation services to modernize your business processes and technology stack.',
      features: [
        'Technology Assessment',
        'Legacy System Modernization',
        'Process Automation',
        'Digital Strategy Planning',
        'Change Management',
      ],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving cyber threats.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance & Governance',
        'Incident Response Planning',
        'Security Training Programs',
      ],
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Business Intelligence Dashboards',
        'Data Warehouse Solutions',
        'Machine Learning Models',
        'Real-time Analytics',
        'Data Visualization',
      ],
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <Section id="services" background="white" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
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
              <div className="space-y-4">
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-secondary-600">
                      <span className="text-accent-500 mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
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
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;