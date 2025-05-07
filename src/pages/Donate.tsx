
import React, { useState } from 'react';
import { sendDonationForm } from '../services/emailService';
import { toast } from 'sonner';
import { Heart, Shield, Zap, RefreshCw } from 'lucide-react';

const Donate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    donationType: 'one-time',
    projectAllocation: 'general',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendDonationForm(formData);
      toast.success(response.message);
      // Reset form
      setFormData({
        name: '',
        email: '',
        amount: '',
        donationType: 'one-time',
        projectAllocation: 'general',
        message: ''
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const predefinedAmounts = ['10', '25', '50', '100', '250', '500'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--green)] to-[var(--green-dark)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Donate Today</h1>
          <p className="text-xl max-w-2xl mx-auto">
          Your generosity can make a lasting difference in the lives of older adults. Every donation helps us continue our mission of healthy and active aging.
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Your Support Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your donation enables us to carry out vital projects and initiatives that directly impact communities in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-orange-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-ngo-orange" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Support Communities</h3>
              <p className="text-gray-600">
                Your donation directly helps communities access clean water, education, and healthcare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-blue-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-ngo-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Immediate Impact</h3>
              <p className="text-gray-600">
                We ensure your donation quickly reaches those who need it most through our efficient programs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="text-ngo-green" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainable Change</h3>
              <p className="text-gray-600">
                We focus on long-term solutions that help communities become self-sufficient.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-gray-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-ngo-gray" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Transparency</h3>
              <p className="text-gray-600">
                We're committed to accountability and transparency in how we use your donations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Make Your Donation</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Donation Type</h3>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="donationType" 
                        value="one-time" 
                        checked={formData.donationType === 'one-time'} 
                        onChange={handleChange}
                        className="mr-2"
                      />
                      One-time Donation
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="donationType" 
                        value="monthly" 
                        checked={formData.donationType === 'monthly'} 
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Monthly Donation
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Donation Amount</h3>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                    {predefinedAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-2 px-4 rounded-md border ${
                          formData.amount === amount
                            ? 'bg-ngo-orange text-white border-ngo-orange'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, amount }))}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">Custom Amount ($)</label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Enter custom amount"
                      min="1"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="projectAllocation" className="block text-gray-700 font-medium mb-2">Allocate Your Donation</label>
                  <select
                    id="projectAllocation"
                    name="projectAllocation"
                    value={formData.projectAllocation}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="general">General Fund (Where Most Needed)</option>
                    <option value="water">Clean Water Initiative</option>
                    <option value="education">Education For All</option>
                    <option value="healthcare">Healthcare Services</option>
                    <option value="emergency">Emergency Response</option>
                    <option value="food">Food Security Program</option>
                  </select>
                </div>
                
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
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="input-field"
                    placeholder="Leave a message or special instructions"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading || !formData.amount}
                  className="w-full btn-primary bg-ngo-orange hover:bg-ngo-orange-dark"
                >
                  {loading ? 'Processing...' : 'Complete Donation'}
                </button>
                
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Note: This is a demo form. No actual payment will be processed.
                  In a real application, this would connect to a payment gateway.
                </p>
              </form>
            </div>
            
            <div className="mt-8 p-6 bg-ngo-blue-light rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-ngo-blue">Other Ways to Support</h3>
              <p className="text-gray-700 mb-4">
                If you prefer to donate via check or bank transfer, please contact us at donations@helpinghands.org or call us at +1 (555) 123-4567.
              </p>
              <p className="text-gray-700">
                For corporate donations or sponsorship opportunities, please email partnerships@helpinghands.org.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Impact of Your Donation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how previous donations have made a difference in the lives of people around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Clean water project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Clean Water for Ruraville</h3>
                <p className="text-gray-600 mb-4">
                  "Thanks to generous donors, we installed 5 water purification systems in Ruraville, providing clean water to over 2,000 people and reducing waterborne diseases by 70%."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                alt="Education project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">New School in Edutown</h3>
                <p className="text-gray-600 mb-4">
                  "With your support, we built a new school that now serves 500 children who previously had to walk over 5 miles to the nearest educational facility."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Emergency response"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Flood Relief Effort</h3>
                <p className="text-gray-600 mb-4">
                  "Donations allowed us to respond quickly to devastating floods, providing emergency supplies, temporary shelter, and medical care to 1,500 affected individuals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
