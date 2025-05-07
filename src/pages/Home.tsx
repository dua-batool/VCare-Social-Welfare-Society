
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BarChart, ThumbsUp } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = [
    {
      title: "Annual Conference on Elder Abuse",
      description: "Every October, VCare Social Welfare Society organizes a dedicated conference focused on raising awareness about elder abuse — a topic often neglected in public discourse. Through this initiative, VCare creates a space for healthcare professionals, caregivers, students, and community members to come together, discuss challenges, share experiences, and advocate for the protection and dignity of older adults. The conference highlights legal, emotional, and social aspects of elder abuse and promotes preventive strategies that empower families and institutions to better support the elderly population.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/projects"
    },
    {
      title: "Community Outreach for Healthy and Active Ageing",
      description: "VCare regularly conducts outreach programs in underserved communities, particularly targeting low-income and marginalized areas. In these sessions, VCare team members and volunteers visit local neighborhoods to educate senior citizens about the importance of healthy lifestyles, mental well-being, and preventive healthcare. The initiative focuses on spreading awareness about aging-related issues, encouraging mobility, self-care, and informed decision-making for older adults. By bringing these resources directly to those who might not otherwise have access, VCare works to reduce the disparities in elder care across socio-economic lines.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
      link: "/projects"
    },
    {
      title: "Celebrating Older Adults: VCare Annual Seniors’ Day",
      description: "VCare Social Welfare Society organizes its own annual event dedicated entirely to celebrating the lives, experiences, and continued vitality of senior citizens. This special day is designed to uplift and engage the elderly through fun, interactive activities like games, sports, music, and storytelling sessions. It serves as a reminder that aging can be joyful and fulfilling when approached with community, respect, and care. By hosting this celebration, VCare not only brings smiles to the faces of older adults but also raises awareness about the importance of social inclusion, emotional well-being, and active engagement in later life.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/projects"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--light-blue)] to-[var(--light-blue-dark)] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Caring for a Better <br /> Tomorrow
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
              Join us in our mission to enhance the lives of aging adults through compassionate care, community support, and empowering families for a healthier, active aging experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate" 
                className="text-light-blue border-2 border-white px-6 py-3 rounded-md font-medium transition-colors duration-300 hover:bg-light-blue hover:text-white">
                Donate Now
              </Link>


                <Link to="/volunteer" className="bg-white text-[var(--light-blue-dark)] hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300">
                  Volunteer
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in">
              <img 
                src="/main-image.jpg" 
                alt="Helping the elderly" 
                className="rounded-lg shadow-xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our current initiatives focus on areas where we can make the greatest impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div className="card" key={index}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description.slice(0, 150)}...</p>
                  <Link to={project.link} className="text-ngo-blue font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--green-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you contribute your time as a volunteer or support our cause with a donation, your help matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[var(--green-dark)] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Donate Now
            </Link>
            <Link to="/volunteer" className="border-2 border-white hover:bg-white hover:text-[var(--green)] px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
