import React from "react";
import brandConfig from "../../config/brand.config";
import { Container, Section } from "../index";
import { cn } from "../../utils/styles";

const Testimonials: React.FC = () => {
    if (!brandConfig.company.testimonials || brandConfig.company.testimonials.length === 0) {
        return null;
    }

    return (
        <Section id="testimonials" background="gradient" padding="lg">
            <Container>
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Client Success Stories
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Discover how {brandConfig.company.name} has transformed businesses and delivered 
                        exceptional results for our valued clients.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {brandConfig.company.testimonials.map((testimonial, index) => (
                        <div
                            key={index}
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
                            {/* Glassmorphism Card */}
                            <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-300">
                                {/* Gradient Border Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header with Logo and Client Name */}
                                    <div className="flex items-center mb-6">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                                                <img 
                                                    src={testimonial.logo} 
                                                    alt={`${testimonial.author} logo`} 
                                                    className="w-full h-full object-contain filter brightness-0 invert"
                                                />
                                            </div>
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 w-16 h-16 rounded-full bg-accent-400/20 blur-lg group-hover:bg-accent-400/40 transition-all duration-300" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                                {testimonial.company}
                                            </h3>
                                            <div className="w-12 h-0.5 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full" />
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="relative">
                                        {/* Quote Icon */}
                                        <div className="absolute -top-2 -left-2 text-6xl text-accent-400/30 font-serif leading-none">
                                            "
                                        </div>
                                        
                                        <blockquote className="relative z-10 text-white/90 text-lg md:text-xl leading-relaxed font-medium italic pl-6">
                                            {testimonial.quote}
                                        </blockquote>
                                        
                                        {/* Closing Quote */}
                                        <div className="text-right text-4xl text-accent-400/30 font-serif leading-none -mt-4">
                                            "
                                        </div>
                                    </div>

                                    {/* Action */}
                                    {testimonial.action && (
                                        <div className="mt-6">
                                            <a
                                                href={testimonial.action.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300"
                                            >
                                                {testimonial.action.text}
                                            </a>
                                        </div>
                                    )}

                                    {/* Attribution */}
                                    <div className="mt-6 pt-4 border-t border-white/20">
                                        <p className="text-accent-200 font-semibold text-sm uppercase tracking-wider">
                                            {testimonial.author}
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Decorative Elements */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-accent-400/40 rounded-full animate-pulse" />
                                <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary-400/50 rounded-full animate-pulse delay-700" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button
                        onClick={() => {
                            const element = document.querySelector('#contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-transparent"
                    >
                        <div className="flex items-center px-6 py-3 rounded-full bg-white/10 group-hover:bg-white/15 transition-all duration-300">
                            <span className="text-white font-medium mr-2">Ready to join our success stories?</span>
                            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse ml-2 group-hover:scale-125 transition-transform duration-300" />
                        </div>
                    </button>
                </div>
            </Container>
        </Section>
    );
};

export default Testimonials;