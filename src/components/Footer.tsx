import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link 
            to="/about"
            className="text-white hover:text-gray-300 transition-colors text-center md:text-left"
          >
            About Us
          </Link>
          <Link 
            to="/contact"
            className="text-white hover:text-gray-300 transition-colors text-center md:text-left"
          >
            Contact
          </Link>
          <Link 
            to="/privacy"
            className="text-white hover:text-gray-300 transition-colors text-center md:text-left"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms"
            className="text-white hover:text-gray-300 transition-colors text-center md:text-left"
          >
            Terms of Service
          </Link>
        </div>
        <div className="text-center pt-4 border-t border-gray-700">
          <p className="text-sm">© 2025 Lesson Link. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;