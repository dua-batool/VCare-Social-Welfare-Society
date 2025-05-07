
import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Annual Conference on Elder Abuse',
      category: 'Elder Abuse Awareness',
      image: '/conference.jpg',
      description: 'Every October, VCare Social Welfare Society organizes a dedicated conference focused on raising awareness about elder abuse — a topic often neglected in public discourse. Through this initiative, VCare creates a space for healthcare professionals, caregivers, students, and community members to come together, discuss challenges, share experiences, and advocate for the protection and dignity of older adults. The conference highlights legal, emotional, and social aspects of elder abuse and promotes preventive strategies that empower families and institutions to better support the elderly population.',
    },
    {
      id: 2,
      title: 'Community Outreach for Healthy and Active Ageing',
      category: 'Healthy Aging',
      image: '/ageing.jpg',
      description: 'VCare regularly conducts outreach programs in underserved communities, particularly targeting low-income and marginalized areas. In these sessions, VCare team members and volunteers visit local neighborhoods to educate senior citizens about the importance of healthy lifestyles, mental well-being, and preventive healthcare. The initiative focuses on spreading awareness about aging-related issues, encouraging mobility, self-care, and informed decision-making for older adults. By bringing these resources directly to those who might not otherwise have access, VCare works to reduce the disparities in elder care across socio-economic lines.',
    },
    {
      id: 3,
      title: 'Celebrating Older Adults: VCare Annual Seniors’ Day',
      category: 'Older Persons Day',
      image: '/elder-playing.jpg',
      description: 'VCare Social Welfare Society organizes its own annual event dedicated entirely to celebrating the lives, experiences, and continued vitality of senior citizens. This special day is designed to uplift and engage the elderly through fun, interactive activities like games, sports, music, and storytelling sessions. It serves as a reminder that aging can be joyful and fulfilling when approached with community, respect, and care. By hosting this celebration, VCare not only brings smiles to the faces of older adults but also raises awareness about the importance of social inclusion, emotional well-being, and active engagement in later life.',
    },
    {
      id: 4,
      title: 'Health & Wellness Screening Camps',
      category: 'Health & Wellness',
      image: '/medical.jpg',
      description: 'VCare regularly conducts free health screening camps in underprivileged neighborhoods to ensure elderly individuals receive basic medical attention and health education. These camps include general checkups, eye exams, blood pressure and sugar monitoring, and consultations with healthcare professionals. By making healthcare more accessible and raising awareness about age-related health issues, VCare empowers older adults to take proactive steps toward a healthier, more active life.',
    },
    {
      id: 5,
      title: 'Skills Revival Workshops',
      category: 'Skills',
      image: '/mehndi.jpg',
      description: 'To recognize and rekindle the lifelong talents of senior citizens, VCare hosts workshops where older adults can share or rediscover skills such as embroidery, cooking, poetry, or calligraphy. These workshops not only honor the creativity and contributions of elders but also give them a chance to mentor younger attendees, boosting their sense of purpose, confidence, and community belonging.',
    }
  ];

  const [expandedProjectId, setExpandedProjectId] = React.useState<number | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--light-blue)] to-[var(--light-blue-dark)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
          Empowering Aging with Dignity — Discover how our community-led projects are enriching the lives of older adults across Karachi.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-ngo-blue-light text-ngo-blue rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {expandedProjectId === project.id 
                      ? project.description 
                      : `${project.description.slice(0, 150)}...`}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                  <button 
                    onClick={() => setExpandedProjectId(expandedProjectId === project.id ? null : project.id)} 
                    className="text-ngo-blue font-medium hover:underline"
                  >
                    {expandedProjectId === project.id ? 'Show Less' : 'Read More'}
                  </button>
                    <Link to="/donate" className="text-[var(--green)] hover:text-[var(--green-dark)] font-medium">
                      Support This Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--green-dark)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Support Our Projects?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your time, skills, or donation can help us bring comfort, care, and dignity to the elderly in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-[var(--green-dark)] hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Donate Now
            </Link>
            <Link to="/volunteer" className="border-2 border-white hover:bg-white hover:text-[var(--green-dark)] px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
