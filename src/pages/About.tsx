
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Jane Doe',
      position: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      bio: 'With over 15 years of experience in the non-profit sector, Jane leads our organization with passion and vision.'
    },
    {
      name: 'John Smith',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      bio: 'John oversees all of our field operations, ensuring that our projects deliver maximum impact to communities in need.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Program Coordinator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      bio: 'Sarah develops and manages our educational and healthcare programs, focusing on sustainability and community involvement.'
    },
    {
      name: 'Michael Chen',
      position: 'Fundraising Director',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80',
      bio: 'Michael leads our fundraising efforts, developing innovative strategies to support our growing impact.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ngo-blue to-ngo-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Helping Hands</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn about our mission, our team, and how we're making a difference in communities worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2003, Helping Hands began with a simple mission: to provide assistance to communities in need. What started as a small local initiative has grown into an international organization with projects spanning across multiple countries.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, a group of dedicated humanitarian workers, saw firsthand the challenges faced by underserved communities and decided to create an organization that could address these needs effectively and sustainably.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow our impact through the support of our donors, partners, and volunteers who share our vision of a more equitable world.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Helping Hands volunteers"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                  <Target className="text-ngo-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To empower communities through sustainable development initiatives, humanitarian aid, and educational programs that create lasting positive change and improve quality of life.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-ngo-blue-light p-3 rounded-full mr-4">
                  <Globe className="text-ngo-blue" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                A world where all communities have access to essential resources, education, and opportunities to thrive, regardless of geographical location or economic circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our work and decision-making at every level of our organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-blue">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Compassion</h3>
              <p className="text-gray-600">
                We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-orange">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in our operations, ensuring transparency and accountability to our stakeholders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-green">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-600">
                We design our programs to create lasting change, focusing on solutions that communities can maintain and build upon.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-blue-dark">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and work closely with communities, governments, and other organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who lead our organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-ngo-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ngo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our story. Together, we can create meaningful change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-white text-ngo-blue hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Join as Volunteer
            </Link>
            <Link to="/donate" className="border-2 border-white hover:bg-white hover:text-ngo-blue px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
