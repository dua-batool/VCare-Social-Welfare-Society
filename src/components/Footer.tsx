
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ngo-gray-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">VCare Social Welfare Society</h3>
            <p className="text-gray-300 mb-4">
            A non-profit organization committed to improving the lives of aging adults and their families through compassionate care and innovative support services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17reYq7wDe/?mibextid=wwXIfr" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtu.be/YzA7puNv4bk" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/vcaresocialwelfare?igsh=bTJ4ZWpjYXdkcWRh" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Projects</h3>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Annual Conference on Elder Abuse</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Community Outreach for Healthy and Active Ageing</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Celebrating Older Adults: VCare Annual Seniors’ Day</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Health & Wellness Screening Camps</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Skills Revival Workshops</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Plot A 513, Block C North Nazimabad Town, Karachi, Karachi City, Sindh, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+92 333 1246080</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">vcaresocialwelfare786@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VCare Social Welfare Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
