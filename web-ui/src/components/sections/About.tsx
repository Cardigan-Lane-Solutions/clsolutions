import React from 'react';
import { Container, Section, Card } from '../index';
import { brandConfig } from '../../config/brand.config';

const About: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that give you a competitive advantage.',
    },
    {
      icon: '🎯',
      title: 'Results Driven',
      description: 'Our focus is on delivering measurable outcomes that directly impact your business growth.',
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We work as an extension of your team, ensuring seamless collaboration and communication.',
    },
    {
      icon: '💡',
      title: 'Strategic Thinking',
      description: 'Every solution is carefully crafted with your long-term business objectives in mind.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <Section id="about" background="gray" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {brandConfig.company.name}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative digital solutions. Our expertise spans across modern web technologies, 
            cloud infrastructure, and strategic digital transformation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center group cursor-pointer"
              hover
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              To empower businesses with innovative technology solutions that drive growth, 
              enhance efficiency, and create lasting competitive advantages in the digital landscape. 
              We believe that great technology should be accessible, scalable, and transformative.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;