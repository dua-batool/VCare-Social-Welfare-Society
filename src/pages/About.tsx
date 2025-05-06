
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
      <section className="bg-gradient-to-r from-[var(--light-blue)] to-[var(--light-blue-dark)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VCare Social Welfare Society</h1>
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
              In today’s world we are overwhelmed with responsibilities and cares piled one upon the other; and us at the end that comes with the package of care at the end of the day. They abound as responsibilities of me, us, our spouse, our children, our parents, our siblings, our friends, our neighbour, our co worker, and our country mate and on and on we can go.....We believe most responsibilities are enormously challenging; and of them most is the care of a frail adult loved one`s; not because we cannot do it but because we feel too powerless to offer the best care we dream of.
              </p>
              <p className="text-gray-600">
              VCARE Adult Day Center  is  the  Project  of VCARE Society  for Healthy and Active Ageing.  VCARE is an entrepreneur in Pakistan that has based its milestones on these very emotions well understood and a team working its way up to its services and reaching it out to others.
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
              To provide compassionate, quality care for frail adult loved ones, offering a safe and supportive environment for aging individuals while easing the emotional and physical burden on families. Through our Adult Day Center, we strive to enhance the well-being and independence of seniors, fostering a healthy and active aging process with a commitment to empathy, dignity, and respect.
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
              To be a leading provider of adult care services in Pakistan, empowering families by offering innovative solutions for the aging population. VCARE envisions a society where every elderly individual can enjoy their golden years with respect, care, and fulfillment, and where families are supported in their journey of caregiving with confidence and peace of mind.
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
              We prioritize empathy and kindness in all our interactions, ensuring that every individual in our care feels valued, respected, and supported.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-orange">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
              We operate with honesty and transparency, building trust with families, staff, and the community through ethical practices and genuine commitment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-green">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
              We are dedicated to providing the highest standards of care, continually improving our services to meet the evolving needs of those we serve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ngo-blue-dark">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
              We believe in teamwork, working closely with families, healthcare professionals, and the community to deliver holistic and effective care for aging adults.
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
      <section className="py-16 bg-[var(--green)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our story. Together, we can create meaningful change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="bg-white text-[var(--green)] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Join as Volunteer
            </Link>
            <Link to="/donate" className="border-2 border-white hover:bg-white hover:text-[var(--green)] px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
