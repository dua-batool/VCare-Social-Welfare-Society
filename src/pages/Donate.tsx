
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
              Your donation empowers VCare to continue promoting dignity, wellbeing, and active aging among elderly individuals across underserved communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-orange-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-ngo-orange" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Care for the Elderly</h3>
              <p className="text-gray-600">
                Your contribution allows us to create safe, supportive environments for elderly individuals to socialize, learn, and thrive.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-blue-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-ngo-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Immediate Outreach</h3>
              <p className="text-gray-600">
                Your support helps us extend our sessions and community visits to marginalized neighborhoods in need of elderly care guidance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="text-ngo-green" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainable Aging</h3>
              <p className="text-gray-600">
                We promote lifelong learning, health awareness, and social inclusion so older adults can age with dignity and independence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-ngo-gray-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-ngo-gray" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Accountable Giving</h3>
              <p className="text-gray-600">
                VCare ensures transparency and integrity in using your donations for impactful programs that uplift senior citizens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
  {/* Heading above card */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Donate Now</h2>
  </div>

  {/* Centered card */}
  <div className="flex justify-center items-center">
    <div className="bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl p-6 w-full max-w-md border border-white/20">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Bank Account Details</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Bank Name:</span>
          <span className="text-gray-800">Islamic Bank</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">BSB:</span>
          <span className="text-gray-800">112 879</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Account Number:</span>
          <span className="text-gray-800">425 989 660</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Reference:</span>
          <span className="text-gray-800">ZAKAT AL-MAAL/FITR</span>
        </div>

        {/* <div className="flex justify-between">
          <span className="text-gray-600 font-medium">SWIFT/BIC:</span>
          <span className="text-gray-800">ABCDPKKA</span>
        </div> */}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Your support makes a difference.</p>
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
              See how your donations make difference in the lives of elderly communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/voice.jpg"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Empowering Elderly Voices</h3>
                <p className="text-gray-600 mb-4">
                  Your donations help fund annual conferences that shed light on elder abuse, equipping caregivers, professionals, and communities with the knowledge and tools to advocate for the safety and dignity of older adults.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/healthcare.jpg"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Bringing Healthcare Education to the Underserved</h3>
                <p className="text-gray-600 mb-4">
                With your support, VCare reaches marginalized communities, providing vital awareness sessions that promote healthy lifestyles, preventive care, and mental well-being for senior citizens who lack access to these resources.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/joy.jpg"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Fostering Joy and Connection in Later Life</h3>
                <p className="text-gray-600 mb-4">
                Donations allow VCare to host interactive events like the Seniors’ Day, creating opportunities for older adults to socialize, celebrate, and participate in activities that combat isolation and encourage active aging.
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
