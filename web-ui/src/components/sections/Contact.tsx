import React, { act, useState } from 'react';
import brandConfig from '../../config/brand.config';
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

  const handleSubmit = (e: React.FormEvent) => {
    // Don't prevent default - let FormSubmit.co handle the submission
    setIsSubmitting(true);
    
    // FormSubmit.co will handle the actual form submission
    // The form will redirect or show success based on FormSubmit.co's response
  };

  const contactInfo = brandConfig.company.contact!;

  const allContactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      value: contactInfo.email,
      description: 'Send us an email anytime',
      action: `mailto:${contactInfo.email}`,
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with us on LinkedIn',
      description: 'Follow our company page',
      action: contactInfo.socialMedia!.linkedin
    }
  ]

  return (
    <Section id="contact" background="gradient" padding="lg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
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
                <form action="https://formsubmit.co/7fdc8afa38852b912606769acd37b00b" method="POST" className="space-y-6" noValidate>
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
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            {allContactMethods.map((method, index) => (
              <Card
                key={index}
                variant="glass"
                className="text-white hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(method.action)}
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
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;