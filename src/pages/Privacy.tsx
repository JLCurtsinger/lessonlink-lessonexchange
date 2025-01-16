import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Privacy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-8">
          Your privacy is important to us at Lesson Link. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform. By using Lesson Link, you agree to the terms outlined in this Privacy Policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">Account Information:</h3>
          <p className="mb-4">Name, email address, and any additional information provided during registration or lesson creation.</p>
          
          <h3 className="text-xl font-medium mb-2">Lesson Data:</h3>
          <p className="mb-4">Information about the lessons you create or participate in, including titles, categories, and descriptions.</p>
          
          <h3 className="text-xl font-medium mb-2">Communication:</h3>
          <p className="mb-4">Messages sent through the contact form or any other communication channels.</p>
          
          <h3 className="text-xl font-medium mb-2">Technical Information:</h3>
          <p className="mb-4">Data such as IP address, browser type, and usage analytics to improve the platform.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Provide and improve our services, including matching users to lessons.</li>
            <li className="mb-2">Facilitate secure communication and transactions between users.</li>
            <li className="mb-2">Respond to inquiries submitted through the contact form.</li>
            <li className="mb-2">Analyze usage patterns to improve the platform's functionality.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
          <p className="mb-4">We do not sell your personal information.</p>
          <p className="mb-4">Information is shared only in the following cases:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">With third-party services essential to the platform's operation (e.g., Supabase for authentication and database management, Formspree for handling contact form submissions).</li>
            <li className="mb-2">When required by law or to protect against fraud, security threats, or legal claims.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
          <p className="mb-4">We implement reasonable measures to secure your information. However, no online service is entirely secure, and we cannot guarantee absolute security.</p>
          <p className="mb-4">Users are encouraged to keep their passwords secure and notify us immediately if they suspect unauthorized access.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Your Rights</h2>
          <p className="mb-4">You have the right to request access to or deletion of your personal data. Contact us through the provided contact form for such requests.</p>
          <p className="mb-4">You may opt out of non-essential data collection by adjusting your browser settings or disabling cookies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies and Tracking</h2>
          <p className="mb-4">Our site may use cookies to enhance user experience and analyze traffic. By using Lesson Link, you consent to the use of cookies unless disabled in your browser.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Third-Party Services</h2>
          <p className="mb-4">Our platform integrates with third-party services, such as Supabase and Formspree. These services may collect data in accordance with their own privacy policies. Please refer to their policies for more information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Changes to This Policy</h2>
          <p className="mb-4">This Privacy Policy may be updated periodically to reflect changes to our practices or for legal reasons. The updated policy will be posted on this page, and the "Last Updated" date will be revised.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact Us</h2>
          <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us using the form on the Contact Us page.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;