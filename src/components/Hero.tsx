import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-float">
          <span className="block text-primary">Learn. Teach.</span>
          <span className="block bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent">
            Exchange Knowledge.
          </span>
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
          <div 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate("/teach")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Teach Skills Globally
              </h3>
              <p className="text-gray-600">
                Share your expertise with students worldwide through our platform.
              </p>
            </div>
          </div>
          <div 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate("/learn")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Learn Anything You Love
              </h3>
              <p className="text-gray-600">
                Explore diverse lessons from experienced instructors.
              </p>
            </div>
          </div>
          <div 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate("/flexible-payments")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Bitcoin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Flexible Payment Options
              </h3>
              <p className="text-gray-600">
                Choose between free lessons, barter, or cryptocurrency payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};