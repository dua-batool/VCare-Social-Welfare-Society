
import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Silver Circles: Social Engagement Program',
      category: 'Companionship & Mental Wellness',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'A weekly gathering hosted at the VCARE Adult Day Center, Silver Circles brings together elders from across Karachi for tea, conversation, games, and cultural storytelling. These sessions aim to combat social isolation while celebrating diverse life experiences. The program also includes Urdu poetry readings, light group activities, and shared meals, encouraging emotional wellness and community bonding.',
      impact: 'Benefited over 10,000 individuals across 15 communities, reducing waterborne disease rates by 60%.'
    },
    {
      id: 2,
      title: 'Wellness Wednesdays',
      category: 'Health & Mobility Support',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80',
      description: 'This weekly initiative provides older adults with guided stretching, low-impact exercises, and basic wellness checks—all led by trained volunteers and certified physiotherapists. Held at our center or through partner clinics in Karachi, Wellness Wednesdays help promote physical mobility and prevent common age-related conditions. We also offer awareness sessions on chronic illness management in Urdu and local dialects.',
      impact: 'Built 5 schools, trained 120 teachers, and provided scholarships to 500 students from low-income families.'
    },
    {
      id: 3,
      title: 'Caregiver Circle: Support & Training Workshops',
      category: 'Family Support & Capacity Building',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Many Karachi households care for aging parents or grandparents without formal training. Caregiver Circle offers free monthly workshops teaching safe elder care practices—from mobility aid and hygiene to emotional support and dementia care. These Urdu-language sessions empower caregivers (especially women) with practical, hands-on training, peer support, and stress management techniques.',
      impact: 'Provided medical care to over 25,000 patients through 50 medical camps and 10 mobile clinics.'
    },
    {
      id: 4,
      title: 'Elder Voices: Story Archiving Project',
      category: 'Oral History & Heritage',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Karachi’s elders carry rich personal histories shaped by migration, resilience, and cultural diversity. Elder Voices invites them to share their life stories through recorded interviews and photographs. These stories are then archived and shared with schools, digital platforms, and community exhibitions—preserving intergenerational wisdom and giving elders a meaningful voice in society.',
      impact: 'Assisted over 5,000 families during recent flood disasters with emergency supplies and shelter.'
    },
    {
      id: 5,
      title: 'Mobile VCARE Clinics',
      category: 'Outreach & Preventive Healthcare',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1620654458232-9be7271ce7f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Access to quality geriatric care is limited in underserved neighborhoods of Karachi. Mobile VCARE Clinics bring basic health screenings, medication support, and health education directly to older adults in areas like Korangi, Lyari, and Orangi Town. Staffed by volunteer medical professionals and caregivers, this project ensures that aging does not mean being left behind—no matter where one lives.',
      impact: 'Established 20 community farms, trained 300 farmers, and improved food security for 2,000 families.'
    },
    // {
    //   id: 6,
    //   title: 'Women Empowerment',
    //   category: 'Social Development',
    //   status: 'Ongoing',
    //   image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    //   description: 'Supporting women through skill development, entrepreneurship training, and microfinance initiatives. This project aims to enhance economic independence and social status of women in underserved communities.',
    //   impact: 'Trained 500 women in various vocational skills and supported 200 women entrepreneurs through microloans.'
    // }
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
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium px-3 py-1 bg-ngo-blue-light text-ngo-blue rounded-full">
                      {project.category}
                    </span>
                    {/* <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      project.status === 'Ongoing' 
                        ? 'bg-ngo-green-light text-ngo-green' 
                        : 'bg-ngo-orange-light text-ngo-orange'
                    }`}>
                      {project.status}
                    </span> */}
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
                    
                    <Link to="/donate" className="text-ngo-orange hover:text-ngo-orange-dark font-medium">
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
      <section className="py-16 bg-ngo-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Support Our Projects?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Your time, skills, or donation can help us bring comfort, care, and dignity to the elderly in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="bg-white text-ngo-green hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Donate Now
            </Link>
            <Link to="/volunteer" className="border-2 border-white hover:bg-white hover:text-ngo-green px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
