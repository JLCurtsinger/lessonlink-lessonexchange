import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TeachSkills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
          Teach Skills Globally with Lesson Link
        </h1>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Empower Others with Your Knowledge
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Lesson Link, we believe that everyone has valuable skills to share.
            Our platform allows you to connect with learners from around the world
            who are eager to benefit from your expertise. Whether you're a
            professional, hobbyist, or educator, you can make a difference by
            teaching what you know.
          </p>
        </section>

        {/* Section 2: How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            How Teaching Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                1. Create a Lesson
              </h3>
              <p className="text-gray-600">
                Easily create and customize lessons that match your expertise,
                whether it's teaching a language, a musical instrument, or technical
                skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                2. Set Your Terms
              </h3>
              <p className="text-gray-600">
                Offer lessons for free, barter, or set a price using
                cryptocurrency, giving you flexibility and control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                3. Connect with Learners
              </h3>
              <p className="text-gray-600">
                Match with learners who are passionate about your subject and ready
                to grow.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Why Teach with Lesson Link?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Reach a Global Audience
              </h3>
              <p className="text-gray-600">
                Share your skills with learners worldwide, transcending geographic
                boundaries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Teach at your convenience and set your own schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Gain value in your preferred form, whether it's monetary, bartered
                services, or simply the joy of helping others.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Build Your Reputation
              </h3>
              <p className="text-gray-600">
                Establish yourself as an expert in your field and grow your
                personal or professional brand.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Get Started */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Start Teaching Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to share your knowledge? Create your first lesson and inspire
            learners worldwide. It's easy, flexible, and rewarding. Join Lesson
            Link today!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/create-lesson")}
          >
            Create Your First Lesson
          </Button>
        </section>
      </div>
    </div>
  );
};

export default TeachSkills;