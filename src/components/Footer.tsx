
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Calendar, User, Image, BookOpen, User as UserIcon } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Faculty', path: '/faculty', icon: UserIcon },
    { name: 'Gallery', path: '/gallery', icon: Image },
    { name: 'Admissions', path: '/admissions', icon: BookOpen },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">KLE BCA</h1>
                <p className="text-sm text-gray-400">Gangavati</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with quality education in computer applications and fostering innovation in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                <strong className="text-white">Address:</strong><br />
                KLE Society's College<br />
                Gangavati, Karnataka
              </p>
              <p>
                <strong className="text-white">Phone:</strong><br />
                +91 8123456789
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                info@klebcagangavati.edu.in
              </p>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Bachelor of Computer Applications</li>
              <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Software Engineering</li>
              <li className="hover:text-white transition-colors cursor-pointer">Database Management</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mobile App Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 KLE BCA Gangavati. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
