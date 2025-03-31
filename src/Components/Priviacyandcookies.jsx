import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PrivacyAndCookies = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Terms and Conditions for LynkUp App
        </h1>
        
        <p className="text-white mb-8">
          <strong className="font-medium">Last Updated:</strong> 31st January 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Introduction</h2>
            <p className="text-white">
              Welcome to LynkUp! By accessing or using the LynkUp app ("the App"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please discontinue using the App immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li><strong>"App": </strong> The LynkUp mobile application and its associated services.</li>
              <li><strong>"User": </strong> Any individual who registers and uses the App.</li>
              <li><strong>"Creator": </strong> A User who has linked their Instagram account to the App and is eligible to receive offers from restaurants.</li>
              <li><strong>"Restaurant": </strong> Any business registered on the App offering products or services to Creators.</li>
              <li><strong>"Instagram API": </strong> The official API provided by Instagram for integrating third-party services with Instagram profiles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Registration and Account</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>To use the App, you must create an account and link your Instagram profile via the official Instagram API. By doing so, you authorize LynkUp to access permitted data in accordance with Instagram's terms of service.</li>
              <li>You are solely responsible for maintaining the confidentiality of your account credentials and all activities conducted through your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Use of Meta API</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp uses the official Meta API to securely connect your profile to the App. We do not store your Instagram username or password.</li>
              <li>The App will only access data that you authorize via the Meta API and will not interfere with your Instagram account or its algorithm.</li>
              <li>Instagram's terms of service govern your Instagram use. LynkUp is not responsible for any actions or penalties imposed by Instagram.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Offers from Restaurants</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>By linking your Instagram account, you gain access to offers from restaurants and businesses listed on the App. Offers may include complimentary items, discounts, or event invitations.</li>
              <li>Details of each offer, including its requirements, are outlined in the <strong> "We're Offering" </strong> section of the booking.</li>
              <li>By booking an offer, you agree to deliver the required content (e.g., Instagram posts, stories, or other promotional materials) within the specified time frame, provided the restaurant accepts your booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Content Delivery and Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>You must deliver content as outlined in the offer, including posting on Instagram and writing Google reviews, within the designated time frame.</li>
              <li>Content must include the specified tags, mentions, or hashtags as outlined in the offer.</li>
              <li>LynkUp may monitor your content to ensure compliance and reserves the right to take appropriate action for non-compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Strikes and Account Suspension</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>A strike may be issued for:</li>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Canceling a booking within 24 hours of the scheduled time.</li>
                <li>Failing to deliver required content within the specified timeframe.</li>
                <li>Arriving late (over 15 minutes) or failing to show up at the venue.</li>
                <li>Not adhering to the content posting requirements (e.g., incorrect tags).</li>
              </ul>
              <li>Accumulating three strikes will result in account suspension, rendering you ineligible for offers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Data Privacy and Security</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp is committed to protecting your personal information and processes it in accordance with our Privacy Policy.</li>
              <li>Data shared with restaurants is limited to engagement metrics, profile details, and task completion status. Sensitive data is never disclosed.</li>
              <li>LynkUp employs industry-standard security measures but cannot guarantee absolute protection against unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">9. Data Collection and Usage</h2>
            
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Data Collected from Instagram</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp collects data via the Instagram API, including:</li>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Profile details (e.g., username, bio, profile picture).</li>
                <li>Metrics such as followers, engagement rates, and content performance.</li>
                <li>Insights from promotional content posted as part of offers.</li>
              </ul>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Sharing Data with Restaurants</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Relevant data is shared with restaurants for offer evaluation purposes. No data beyond what is necessary for collaboration is disclosed.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Retention of Data</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Data is retained only as long as necessary to facilitate offers and improve app functionality. Upon account deletion, all associated data will be permanently deleted, except where retention is legally required.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Third-Party Data Access</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp does not sell or rent data to third parties. Authorized third-party access is restricted to operational needs under data protection agreements.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Marketing Communications</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>By using the App, you consent to receiving updates about offers and promotions. You may opt out by adjusting your settings.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Accuracy of Data</h3>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>You are responsible for providing accurate information. LynkUp is not liable for issues arising from inaccurate data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">10. Restrictions on Use</h2>
            <p className="text-white mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>Use the App for illegal or unauthorized purposes.</li>
              <li>Violate any laws or regulations in connection with the App.</li>
              <li>Impersonate others or misrepresent your affiliation.</li>
              <li>Overburden or impair the App's functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">11. Termination</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp reserves the right to suspend or terminate your account without prior notice for violations of these Terms or any inappropriate behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Limitation of Liability</h2>
            <p className="text-white mb-4">
              LynkUp is not responsible for damages arising from the use or inability to use the App, including issues with restaurants or third-party services.
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-white">
            <li className="text-xl font-semibold text-white mt-4 mb-2">12.1 Responsibility for Restaurant and Cloud Kitchen Selection</li>
            </ul>
            <h2>LynkUp provides a platform for users to discover and engage with restaurants and cloud kitchens. However, we are <strong> not responsible </strong> for the businesses you choose to interact with. Any issues, disputes, or concerns that arise between you and a restaurant or cloud kitchen are <strong> solely between you and the respective establishment.</strong> LynkUp holds <strong> no liability </strong> for their actions, policies, or services.</h2>

            <ul className="list-disc pl-5 space-y-2 text-white">
            <li className="text-xl font-semibold text-white mt-4 mb-2">12.2 Food Quality and Health Concerns</li>
            </ul>
              <h2>LynkUp <strong> does not guarantee </strong> the quality, safety, or hygiene standards of the food provided by restaurants and cloud kitchens listed on our App. If you experience any adverse health effects, foodborne illnesses, or dissatisfaction with food quality, the responsibility lies <strong>solely with the restaurant or cloud kitchen.</strong> LynkUp is <strong> not accountable </strong> for any health-related concerns or damages resulting from consuming food obtained through our platform.</h2>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">13. Modifications to Terms</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp reserves the right to update these Terms at any time. Significant changes will be communicated via the App, and continued use signifies acceptance of the revised Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">14. Governing Law</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>These Terms are governed by the laws of India. Any disputes are subject to the <strong> exclusive jurisdiction of the courts in India.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">15. Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>For any questions or concerns, contact us at:</li>
              <li> <strong>Email:</strong> lynkupindia@gmail.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndCookies;