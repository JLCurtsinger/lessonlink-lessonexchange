import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        About Lesson Link
      </h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        <Card className="p-6">
          <p className="text-lg leading-relaxed text-foreground/90">
            Lesson Link is a global platform dedicated to connecting people who want to teach and learn. 
            We believe in the power of knowledge exchange to transform lives, foster growth, and build a more connected world.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
          <p className="text-foreground/90 leading-relaxed">
            Our mission is to create a space where individuals can share their skills, explore their passions, 
            and grow together. Whether you're teaching guitar basics, learning to cook authentic Italian pasta, 
            or mastering web development, Lesson Link is here to bridge the gap between teachers and learners.
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Accessibility</h3>
            <p className="text-foreground/90">
              We strive to make learning and teaching opportunities available to everyone.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Diversity</h3>
            <p className="text-foreground/90">
              We celebrate the unique skills, cultures, and perspectives that every teacher and learner brings.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Collaboration</h3>
            <p className="text-foreground/90">
              We believe in the power of shared knowledge to create meaningful connections and opportunities.
            </p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">How It Works</h2>
          <p className="text-foreground/90 leading-relaxed">
            Lesson Link allows users to create and join lessons based on their interests. 
            Lessons can be offered for free, in exchange for other skills, or for cryptocurrency payments. 
            We're here to make learning flexible and accessible.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;