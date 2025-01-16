import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Terms of Service</h1>
        
        <section className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-foreground/80">Welcome to Lesson Link! These Terms of Service govern your use of our platform. By accessing or using Lesson Link, you agree to these terms. If you do not agree, please do not use our platform.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">2. Platform Purpose</h2>
            <p className="text-foreground/80">Lesson Link is a platform for connecting users who want to teach or learn. Users can create lessons, participate in lessons, and communicate with others in a respectful and collaborative manner.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">3. User Responsibilities</h2>
            <div className="space-y-2 pl-4">
              <h3 className="text-xl font-medium text-primary">Eligibility:</h3>
              <p className="text-foreground/80">Users must be at least 18 years old to use the platform.</p>
              
              <h3 className="text-xl font-medium text-primary mt-4">Account Security:</h3>
              <p className="text-foreground/80">Users are responsible for maintaining the security of their accounts and must notify us immediately of any unauthorized use.</p>
              
              <h3 className="text-xl font-medium text-primary mt-4">Prohibited Activities:</h3>
              <p className="text-foreground/80">Users may not engage in:</p>
              <ul className="list-disc pl-6 text-foreground/80">
                <li>Harassment, hate speech, or discriminatory behavior</li>
                <li>Fraudulent or illegal activities</li>
                <li>Sharing inappropriate or harmful content</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">4. Content Ownership</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">User-Generated Content:</h3>
              <p className="text-foreground/80">Users retain ownership of the content they create (e.g., lessons, messages). By posting content on Lesson Link, users grant us a non-exclusive, royalty-free license to use, display, and distribute the content on the platform.</p>
              
              <h3 className="text-xl font-medium text-primary mt-4">Platform Content:</h3>
              <p className="text-foreground/80">All site elements, such as logos, design, and functionality, are the intellectual property of Lesson Link and may not be copied or redistributed without permission.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">5. Payments and Transactions</h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">Free Lessons:</h3>
              <p className="text-foreground/80">Users can offer lessons for free without monetary or barter transactions.</p>
              
              <h3 className="text-xl font-medium text-primary mt-4">Barter Transactions:</h3>
              <p className="text-foreground/80">Users offering lessons via barter are responsible for negotiating and fulfilling agreements outside the platform.</p>
              
              <h3 className="text-xl font-medium text-primary mt-4">Cryptocurrency Payments:</h3>
              <p className="text-foreground/80">Lesson Link is not responsible for any issues related to cryptocurrency transactions, including but not limited to pricing errors or failed transfers.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">6. Disclaimers</h2>
            <div className="space-y-2">
              <p className="text-foreground/80">Lesson Link is provided on an 'as-is' basis. We make no guarantees regarding the availability, reliability, or accuracy of the platform.</p>
              <p className="text-foreground/80">We are not responsible for disputes, losses, or damages resulting from user interactions, lesson agreements, or any transactions conducted through the platform.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">7. Termination of Use</h2>
            <p className="text-foreground/80">We reserve the right to suspend or terminate accounts that violate these terms or engage in behavior that harms the platform or its users.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">8. Changes to Terms</h2>
            <p className="text-foreground/80">These Terms of Service may be updated periodically. By continuing to use Lesson Link after changes are posted, you agree to the revised terms.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">9. Contact Us</h2>
            <p className="text-foreground/80">If you have questions about these Terms of Service, please contact us through the form on the Contact Us page.</p>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default Terms;