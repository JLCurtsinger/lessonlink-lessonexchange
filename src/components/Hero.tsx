import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-float">
          <span className="block">Learn. Teach.</span>
          <span className="block">Exchange Knowledge.</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A global platform for sharing knowledge
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/create-lesson")}
          >
            Teach a Lesson
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => navigate("/browse")}
          >
            Take a Lesson
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-primary" />}
            title="Teach Skills Globally"
            description="Share your expertise with students worldwide through our platform."
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-primary" />}
            title="Learn Anything You Love"
            description="Explore diverse lessons from experienced instructors."
          />
          <FeatureCard
            icon={<Bitcoin className="w-8 h-8 text-primary" />}
            title="Flexible Payment Options"
            description="Choose between free lessons, barter, or cryptocurrency payments."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);