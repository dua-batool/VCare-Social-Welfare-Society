
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BarChart, ThumbsUp } from 'lucide-react';

const Home: React.FC = () => {
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

      {/* Impact Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Through the generosity of our donors and the dedication of our volunteers, we've made a real difference in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-ngo-blue-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-ngo-blue" size={28} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">20+</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-ngo-orange-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-ngo-orange" size={28} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-ngo-green-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="text-ngo-green" size={28} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-ngo-blue-light p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-ngo-blue" size={28} />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">10K+</h3>
              <p className="text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>
      </section> */}

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
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Clean Water Initiative" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Clean Water Initiative</h3>
                <p className="text-gray-600 mb-4">
                  Providing access to clean and safe drinking water in rural communities through well construction and water purification systems.
                </p>
                <Link to="/projects" className="text-ngo-blue font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80" 
                alt="Education For All" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Education For All</h3>
                <p className="text-gray-600 mb-4">
                  Supporting education through school construction, teacher training, and scholarship programs for underprivileged children.
                </p>
                <Link to="/projects" className="text-ngo-blue font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Healthcare Services" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Healthcare Services</h3>
                <p className="text-gray-600 mb-4">
                  Delivering essential healthcare services through mobile clinics, medical camps, and healthcare education programs.
                </p>
                <Link to="/projects" className="text-ngo-blue font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
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
            <Link to="/volunteer" className="border-2 border-white hover:bg-white hover:text-ngo-orange px-8 py-3 rounded-md font-medium transition-colors duration-300">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
