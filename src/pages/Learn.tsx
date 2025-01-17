import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Learn Anything You Love with Lesson Link
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Unlock Your Passion for Learning
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lesson Link makes learning what you love easier than ever. Whether you're a complete beginner or looking to refine your skills, our platform connects you with knowledgeable teachers from around the world, ready to share their expertise. Dive into a world of endless possibilities and pursue your passions today.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            How Learning Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Browse Lessons
              </h3>
              <p className="text-gray-600">
                Explore a variety of topics across categories like technology, music, cooking, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Choose Your Lesson
              </h3>
              <p className="text-gray-600">
                Find the perfect match for your learning goals, whether it's a free lesson, a barter exchange, or a paid session.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Learn at Your Own Pace
              </h3>
              <p className="text-gray-600">
                Engage with lessons on your schedule and learn in the format that works best for you, from live video to self-paced materials.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Learn with Lesson Link?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Diverse Topics
              </h3>
              <p className="text-gray-600">
                Learn from an extensive range of subjects taught by passionate teachers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Personalized Learning
              </h3>
              <p className="text-gray-600">
                Choose lessons that match your specific interests and skill level.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Global Expertise
              </h3>
              <p className="text-gray-600">
                Gain knowledge from teachers worldwide with unique perspectives and experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Flexible Options
              </h3>
              <p className="text-gray-600">
                Whether you prefer free lessons, barter agreements, or paid sessions, we offer flexibility to suit your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Pursue Your Passions
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Why wait to explore what you love? Start your journey with Lesson Link today and unlock your potential. Whether it's learning a new skill or enhancing your expertise, the possibilities are endless. Begin your adventure now!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/browse")}
          >
            Browse Lessons <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Learn;