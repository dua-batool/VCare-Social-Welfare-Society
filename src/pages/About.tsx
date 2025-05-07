
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Shermin Danish',
      position: 'Cofounder',
    },
    {
      name: 'Fatima Khalfan',
      position: 'Manager CEO',
    },
    {
      name: 'Isha Moiz',
      position: 'Manager',
    },
    {
      name: 'Shahzad Khan',
      position: 'Manager',
    },
  ];

  const founder = {
      name: 'Sameena Vertejee',
      position: 'Founder',
      description: 'Sameena Vertejee is a seasoned public health nurse practitioner with a deep commitment to community well-being, especially in the areas of healthy aging and substance use disorders. With over three decades of experience at Aga Khan University in both Pakistan and Uganda, she has combined teaching, research, and service to address complex health challenges through a public health lens. Sameena is a founding board member of VCare Social Welfare Society, where she brings her passion for active, dignified aging to the forefront. Her work with VCare reflects her long-standing dedication to empowering senior citizens through social connection, health education, and community engagement. She is also a member of the Sindh Senior Citizen Welfare Council, advocating for policies that improve the quality of life for the elderly.',
      image: '/sameena.jpg',
    };

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
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
              <p className="text-gray-600 mb-4">
              In today’s world we are overwhelmed with responsibilities and cares piled one upon the other; and us at the end that comes with the package of care at the end of the day. They abound as responsibilities of me, us, our spouse, our children, our parents, our siblings, our friends, our neighbour, our co worker, and our country mate and on and on we can go.....We believe most responsibilities are enormously challenging; and of them most is the care of a frail adult loved one`s; not because we cannot do it but because we feel too powerless to offer the best care we dream of.
              </p>
              <p className="text-gray-600">
              VCARE Adult Day Center  is  the  Project  of VCARE Society  for Healthy and Active Ageing.  VCARE is an entrepreneur in Pakistan that has based its milestones on these very emotions well understood and a team working its way up to its services and reaching it out to others.
              </p>
          
            </div>
            <div>
              <img
                src="/about.jpg"
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
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who lead our organization.
            </p>
          </div>

          {/* Founder Block */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12 flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* Founder Text */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-2xl font-bold text-[var(--light-blue)] mb-1">{founder.name}</h3>
              <p className="text-md font-medium text-gray-600 mb-4">{founder.position}</p>
              <p className="text-gray-700 leading-relaxed">{founder.description}</p>
            </div>
            {/* Founder Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-60 h-60 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          {/* Team Member Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-white border border-blue-100 rounded-xl p-6 text-center shadow hover:shadow-md transition"
              >
                <div className="mb-2 text-[var(--light-blue)] font-semibold tracking-wide text-sm uppercase">
                  {member.position}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
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
