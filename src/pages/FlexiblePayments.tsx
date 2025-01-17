import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bitcoin, Gift, Repeat } from "lucide-react";

const FlexiblePayments = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-32 mb-8">
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Flexible Payment Options with Lesson Link
        </h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Learning and Teaching Made Flexible
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            At Lesson Link, we understand that flexibility is key to connecting teachers and learners worldwide. That's why we offer a variety of payment options that cater to diverse needs and preferences. Whether you want to share your skills for free, trade services, or earn cryptocurrency, Lesson Link has you covered.
          </p>
        </section>

        {/* Payment Options Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Choose What Works Best for You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Gift className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Free Lessons</h3>
              <p className="text-gray-600">
                Share your knowledge or learn from others without any financial obligations. Perfect for fostering connections and giving back to the community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Repeat className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Barter System</h3>
              <p className="text-gray-600">
                Exchange skills or services for lessons. For example, trade a graphic design consultation for cooking classes—create value through mutual exchange.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Bitcoin className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Cryptocurrency Payments</h3>
              <p className="text-gray-600">
                Embrace the future of payments by offering or accepting lessons in cryptocurrency. Set your price in ETH or other supported cryptocurrencies for a secure, global transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Flexibility Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Inclusive Opportunities</h3>
              <p className="text-gray-600">
                Make learning and teaching accessible to everyone, regardless of financial status.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Use cryptocurrency to connect with learners and teachers worldwide without worrying about currency conversion.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Customizable Value</h3>
              <p className="text-gray-600">
                Teachers can define the terms of their lessons, ensuring fair exchanges and rewarding interactions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Pick Your Payment Path
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Lesson Link is all about giving you choices. Start offering or taking lessons today, and choose the payment method that suits you best. Whether it's free, barter, or crypto, the power is in your hands.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => navigate("/browse")}
          >
            Explore Lessons
          </Button>
        </section>

      </div>
    </div>
  );
};

export default FlexiblePayments;
