
import React, { useState } from 'react';
import { sendVolunteerForm } from '../services/emailService';
import { toast } from 'sonner';
import { Heart, Activity, Users, FileText } from 'lucide-react';

const Volunteer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    interests: [],
    availability: '',
    experience: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendVolunteerForm(formData);
      toast.success(response.message);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
        interests: [],
        availability: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const volunteerOpportunities = [
    {
      title: 'Caregiver Support Volunteer',
      description: 'Assist with providing companionship, emotional support, and basic care to aging adults at the VCARE Adult Day Center. Help create a warm, safe environment for seniors and support their daily activities.',
      requirements: 'Empathy, good communication skills, patience, and a passion for elderly care.',
      icon: <Heart className="text-ngo-blue" size={24} />
    },
    {
      title: 'Health & Wellness Volunteer',
      description: 'Support health-related activities such as exercise classes, wellness checks, and nutritional guidance for aging adults. Help implement programs that encourage active and healthy aging.',
      requirements: 'Basic knowledge of health and wellness practices, enthusiasm for senior care, and good organizational skills.',
      icon: <Activity className="text-ngo-blue" size={24} />
    },
    {
      title: 'Community Outreach Volunteer',
      description: 'Engage with the local community to raise awareness about VCARE\'s programs and services. Help organize events, workshops, and outreach campaigns to educate families about the importance of elder care.',
      requirements: 'Strong communication skills, event planning experience, and a proactive attitude.',
      icon: <Users className="text-ngo-blue" size={24} />
    },
    {
      title: 'Administrative Volunteer',
      description: 'Assist with office tasks such as data entry, organizing files, and managing communications. Support the VCARE team in ensuring smooth operations of the Adult Day Center and other programs.',
      requirements: 'Attention to detail, organizational skills, proficiency in Microsoft Office or Google Workspace, and an interest in nonprofit operations.',
      icon: <FileText className="text-ngo-blue" size={24} />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--green)] to-[var(--green-dark)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer With Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our team of dedicated volunteers making a positive impact in communities around the world.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Volunteer With Us?</h2>
              <p className="text-gray-600 mb-4">
              Volunteering with VCARE offers a fulfilling opportunity to make a real difference in the lives of aging adults and their families while gaining meaningful experiences and connections.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-ngo-green-light p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-ngo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Make a Compassionate Impact</h3>
                    <p className="text-gray-600">Contribute directly to initiatives that enhance the well-being of seniors and support their families with dignity and care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-ngo-green-light p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-ngo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Develop Valuable Skills</h3>
                    <p className="text-gray-600">Gain hands-on experience in healthcare, caregiving, and community support while enhancing your personal and professional growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-ngo-green-light p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-ngo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Connect with a Caring Community</h3>
                    <p className="text-gray-600">Join a network of like-minded individuals who share your dedication to improving the lives of aging adults.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-ngo-green-light p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-ngo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Roles for You</h3>
                    <p className="text-gray-600">Choose volunteer opportunities that align with your skills, schedule, and interests, making a difference at your own pace.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="volunteer.jpg"
                alt="Volunteers working together"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a variety of ways to get involved based on your skills, interests, and availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{opportunity.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Requirements:</h4>
                  <p className="text-gray-600 text-sm">{opportunity.requirements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Volunteer Application Form</h2>
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
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="skills" className="block text-gray-700 font-medium mb-2">Skills & Expertise *</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g., Teaching, Medical, Construction, IT, etc."
                  />
                </div>
                
                <div className="mb-5">
                  <label className="block text-gray-700 font-medium mb-2">Areas of Interest *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Caregiver Support', 'Health & Wellness', 'Community Outreach', 'Administrative Support', 'Fundraising', 'Event Planning', 'Senior Advocacy', 'Education & Training'].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {interest}
                      </label>
                    ))}
                  </div>
                </div>

                
                <div className="mb-5">
                  <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Availability *</label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekly">Weekly (Few hours per week)</option>
                    <option value="monthly">Monthly (Few days per month)</option>
                    <option value="oneTime">One-time event</option>
                    <option value="flexible">Flexible schedule</option>
                    <option value="longTerm">Long-term commitment (3+ months)</option>
                  </select>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Previous Volunteer Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select your experience level</option>
                    <option value="none">No previous experience</option>
                    <option value="some">Some experience (1-2 volunteer roles)</option>
                    <option value="moderate">Moderate experience (3-5 volunteer roles)</option>
                    <option value="extensive">Extensive experience (5+ volunteer roles)</option>
                  </select>
                </div>
                
                <div className="mb-5">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field"
                    placeholder="Tell us why you want to volunteer with us and any other details you'd like to share."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary bg-ngo-green hover:bg-ngo-green-dark"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
            
            <div className="mt-8 p-6 bg-ngo-blue-light rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-ngo-blue">What Happens Next?</h3>
              <p className="text-gray-700 mb-2">
                After submitting your application, our volunteer coordinator will review your information and contact you within 7 days to discuss potential opportunities that match your skills and interests.
              </p>
              <p className="text-gray-700">
                If you have any questions about volunteering, please email shermindanish@gmail.com or call us at +92 333 1246080.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from some of our volunteers about their experiences working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Volunteer Jane"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Ali Ahmed</h3>
                  <p className="text-sm text-gray-600">Caregiver Support Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The opportunity to provide companionship and care to the elderly has taught me so much about empathy and patience. It's rewarding to see the positive changes we bring to their lives."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Volunteer Michael"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Omar Shah</h3>
                  <p className="text-sm text-gray-600">Health & Wellness Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Joining the VCARE team as a Health & Wellness volunteer was a decision I will never regret. The role gave me a unique opportunity to blend my love for fitness with my desire to help others, particularly the elderly. What I didn’t expect was how much they would inspire me. Seeing seniors motivated to exercise and improve their well-being truly reminded me of the importance of health at every stage of life. It's fulfilling in a way that goes beyond words."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Volunteer Sarah"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">Fatima Khan</h3>
                  <p className="text-sm text-gray-600">Community Outreach Volunteer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Volunteering with VCARE has been an eye-opening experience. It’s not just about spreading awareness; it’s about connecting with families and making a real impact on their understanding of elder care. I’m proud to be part of such a meaningful initiative."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
