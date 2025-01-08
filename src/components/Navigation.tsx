import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full border-b">
      <div className="container py-4">
        <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          Lesson Link
        </Link>
      </div>
    </div>
  );
};

export default Navigation;