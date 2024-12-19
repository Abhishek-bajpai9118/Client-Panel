import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Track Order</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://youtube.com" className="text-gray-400 hover:text-white">YouTube</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm sm:text-base text-gray-400">
          <p>© 2024 Project Shop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
