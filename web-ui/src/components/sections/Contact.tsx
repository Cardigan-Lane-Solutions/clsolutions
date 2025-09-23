import React, { useState } from 'react';
import { Container, Section, Card, Button } from '../index';
import { ContactInfo } from '../../types/components';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo: ContactInfo = {
    email: 'hello@cardiganlane.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Technology Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'United States',
    },
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      value: contactInfo.email,
      description: 'Send us an email anytime',
      action: `mailto:${contactInfo.email}`,
    },
    {
      icon: '📞',
      title: 'Call Us',
      value: contactInfo.phone || '',
      description: 'Mon-Fri from 8am to 6pm PST',
      action: `tel:${contactInfo.phone}`,
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: `${contactInfo.address?.city}, ${contactInfo.address?.state}`,
      description: 'Come say hello at our office',
      action: '#',
    },
  ];

  return (
    <Section id="contact" background="gradient" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                variant="glass"
                className="text-white hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(method.action, '_self')}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl mt-1">{method.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                    <p className="text-accent-200 font-medium mb-1">{method.value}</p>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['💼', '🐦', '💻'].map((icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-xl">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="glass" className="text-white">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12" role="alert" aria-live="polite">
                  <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
                  <h4 className="text-2xl font-bold mb-2 text-accent-300">Thank You!</h4>
                  <p className="text-gray-200">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby="name-error"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-describedby="email-error"
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby="message-error"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={!formData.name || !formData.email || !formData.message}
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;