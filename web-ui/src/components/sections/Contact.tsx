import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import brandConfig from '../../config/brand.config';
import { Container, Section, Card, Button } from '../index';
import { ContactInfo } from '../../types/components';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("movkvwgr");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Reset form data after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }
  }, [state.succeeded]);

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

              {state.succeeded ? (
                <div className="text-center py-12" role="alert" aria-live="polite">
                  <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
                  <h4 className="text-2xl font-bold mb-2 text-accent-300">Thank You!</h4>
                  <p className="text-gray-200">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                      <p className="text-red-400 text-sm">
                        There was a problem submitting your form. Please check your entries and try again.
                      </p>
                    </div>
                  )}
                  
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
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
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
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
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
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={state.submitting}
                    disabled={state.submitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending Message...' : 'Send Message'}
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