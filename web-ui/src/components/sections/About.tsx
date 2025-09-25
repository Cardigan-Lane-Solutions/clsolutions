import React from 'react';
import { Container, Section, Card } from '../index';
import { brandConfig } from '../../config/brand.config';

const About: React.FC = () => {
  const showMission : boolean = false;
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
            {brandConfig.company.longDescription}
          </p>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl text-center mb-2 p-4">
          <h3 className="text-xl md:text-3xl font-bold text-white">
            Why Choose Us?
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brandConfig.company.features?.map((feature, index) => (
            <Card
              key={index}
              className="text-center group cursor-pointer m-2"
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
        {showMission && (
          <div className="mt-20 text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                {brandConfig.company.mission}
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default About;