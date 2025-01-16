import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-center">
          <Link 
            to="/about"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            About Us
          </Link>
          <Link 
            to="/contact"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/privacy"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <div className="text-center pt-4 border-t border-primary-foreground/20">
          <p className="text-sm">© 2025 Lesson Link. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;