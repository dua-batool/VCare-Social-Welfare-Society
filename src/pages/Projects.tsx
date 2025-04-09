
import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      category: 'Infrastructure',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Providing access to clean and safe drinking water in rural communities through well construction and water purification systems. This project aims to reduce waterborne diseases and improve overall health outcomes.',
      impact: 'Benefited over 10,000 individuals across 15 communities, reducing waterborne disease rates by 60%.'
    },
    {
      id: 2,
      title: 'Education For All',
      category: 'Education',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80',
      description: 'Supporting education through school construction, teacher training, and scholarship programs for underprivileged children. This project focuses on improving access to quality education in underserved areas.',
      impact: 'Built 5 schools, trained 120 teachers, and provided scholarships to 500 students from low-income families.'
    },
    {
      id: 3,
      title: 'Healthcare Services',
      category: 'Healthcare',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Delivering essential healthcare services through mobile clinics, medical camps, and healthcare education programs. This project aims to improve access to healthcare in remote and underserved areas.',
      impact: 'Provided medical care to over 25,000 patients through 50 medical camps and 10 mobile clinics.'
    },
    {
      id: 4,
      title: 'Emergency Response',
      category: 'Disaster Relief',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Providing immediate relief and support to communities affected by natural disasters such as floods, earthquakes, and hurricanes. This includes emergency supplies, temporary shelter, and medical assistance.',
      impact: 'Assisted over 5,000 families during recent flood disasters with emergency supplies and shelter.'
    },
    {
      id: 5,
      title: 'Food Security Program',
      category: 'Agriculture',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1620654458232-9be7271ce7f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      description: 'Implementing sustainable agriculture practices and food distribution programs to combat hunger and malnutrition in vulnerable communities. This project includes training on modern farming techniques and providing essential equipment.',
      impact: 'Established 20 community farms, trained 300 farmers, and improved food security for 2,000 families.'
    },
    {
      id: 6,
      title: 'Women Empowerment',
      category: 'Social Development',
      status: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      description: 'Supporting women through skill development, entrepreneurship training, and microfinance initiatives. This project aims to enhance economic independence and social status of women in underserved communities.',
      impact: 'Trained 500 women in various vocational skills and supported 200 women entrepreneurs through microloans.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ngo-blue to-ngo-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our ongoing and completed initiatives that are creating lasting positive change in communities.
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
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      project.status === 'Ongoing' 
                        ? 'bg-ngo-green-light text-ngo-green' 
                        : 'bg-ngo-orange-light text-ngo-orange'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-1">Impact:</h4>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <Link to={`/projects`} className="text-ngo-blue font-medium hover:underline">
                      Read More
                    </Link>
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
            Your contribution can help us expand our impact and reach more communities in need.
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
