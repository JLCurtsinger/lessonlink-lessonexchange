import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 text-center">
          <Link 
            to="/about"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-1"
          >
            About Us
          </Link>
          <Link 
            to="/contact"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-1"
          >
            Contact
          </Link>
          <Link 
            to="/privacy"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-1"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms"
            onClick={scrollToTop}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-1"
          >
            Terms of Service
          </Link>
        </div>
        <div className="text-center pt-4 border-t border-primary-foreground/20">
          <p className="text-sm">© 2025 Lesson Link. All Rights Reserved.</p>
          <a 
            href="https://talklikealocal.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-block mt-2 bg-gradient-to-r from-[#4338FF] to-[#8C1AFF] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            TalkLikeALocal.org
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;