
import React, { useState } from 'react';
import { sendContactForm } from '../services/emailService';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendContactForm(formData);
      toast.success(response.message);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--light-blue)] to-[var(--light-blue-dark)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to learn more about our work? We're here to help. Reach out to us using the contact information below or fill out the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                    <MapPin className="text-ngo-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">Plot A 513, Block C North Nazimabad Town, Karachi, Karachi City, Sindh, Karachi, Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                    <Mail className="text-ngo-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">vcaresocialwelfare786@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                    <Phone className="text-ngo-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+92 333 1246080</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                    <Clock className="text-ngo-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Always Open</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/17reYq7wDe/?mibextid=wwXIfr" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://youtu.be/YzA7puNv4bk" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a2.993 2.993 0 00-2.107-2.117C19.529 3.5 12 3.5 12 3.5s-7.529 0-9.391.569a2.993 2.993 0 00-2.107 2.117C0 8.057 0 12 0 12s0 3.943.502 5.814a2.993 2.993 0 002.107 2.117C4.471 20.5 12 20.5 12 20.5s7.529 0 9.391-.569a2.993 2.993 0 002.107-2.117C24 15.943 24 12 24 12s0-3.943-.502-5.814zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/vcaresocialwelfare?igsh=bTJ4ZWpjYXdkcWRh" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.105676070283!2d67.07840981545343!3d24.92483248402857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e40bc59e2ab%3A0xa9cc4d20fe58f7f5!2sPlot%20A%20513%2C%20Block%20C%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1673456844132!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Location in Karachi"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
