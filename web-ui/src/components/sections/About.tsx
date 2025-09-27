import React, { useState } from 'react';
import { Container, Section, Card } from '../index';
import { brandConfig } from '../../config/brand.config';

const About: React.FC = () => {
  const features = brandConfig.company.features || [];
  const [missionOpen, setMissionOpen] = useState(false);

  return (
    <Section id="about" background="gray" padding="lg">
      <Container>
        {/* Intro & Mission Summary */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 mb-6 rounded-full text-xs font-medium tracking-wide bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-sm">
                  ABOUT
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-secondary-900">
                  Elevating Digital Outcomes for Modern Teams
                </h2>
              </div>
              <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
                {brandConfig.company.longDescription}
              </p>
              <div className="relative rounded-xl border border-secondary-200 bg-white/60 backdrop-blur-sm shadow-sm">
                <button
                  type="button"
                  onClick={() => setMissionOpen(o => !o)}
                  aria-expanded={missionOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/70 rounded-xl"
                >
                  <div>
                    <span className="text-sm font-semibold tracking-wide text-primary-600 block">Our Mission</span>
                    <span className="mt-1 block text-xs text-secondary-500">{missionOpen ? 'Collapse' : 'Tap to expand'}</span>
                  </div>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 text-white text-sm transition-transform duration-300 ${missionOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${missionOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-5`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-1 text-secondary-700 leading-relaxed text-base md:text-lg animate-fade-in">
                      {brandConfig.company.mission}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-primary-50/60 via-transparent to-secondary-50/50" />
              </div>
            </div>
            {/* Why Choose Us */}
            <div className="lg:col-span-6 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-400 to-primary-600" />
                <h3 className="text-sm font-semibold tracking-wider text-primary-700 uppercase">Why Partner With Us</h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <li key={i} className="group relative rounded-lg border border-secondary-200 bg-white/70 backdrop-blur-sm p-5 hover:shadow-md transition-all duration-300">
                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {f.icon}
                    </div>
                    <h4 className="text-base font-semibold text-secondary-900 mb-1 tracking-tight">
                      {f.title}
                    </h4>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      {f.description}
                    </p>
                    <div className="absolute inset-0 rounded-lg ring-1 ring-transparent group-hover:ring-primary-300/60 group-hover:bg-gradient-to-br from-primary-50/40 to-secondary-50/30" />
                  </li>
                ))}
              </ul>
              <div className="pt-4 text-sm text-secondary-500">
                Built on craftsmanship, clarity, and measurable delivery.
              </div>
            </div>
          </div>
  </div>
      </Container>
    </Section>
  );
};

export default About;