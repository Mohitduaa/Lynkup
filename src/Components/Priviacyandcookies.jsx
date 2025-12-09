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
              <li><strong>"App": </strong>  The LynkUp mobile application and its associated services.</li>
              <li><strong>"User": </strong> Any individual who registers and uses the App.</li>
              <li><strong>"Creator": </strong> A User who has linked their Instagram account to the App and is eligible to receive offers from brands.</li>
              <li><strong>"Brand": </strong>  Any business registered on the App offering products or services to Creators.</li>
              <li><strong>"Instagram API": </strong> The official API provided by Instagram for integrating third-party services with Instagram profiles.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Registration and Account</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>To use the App, you must create an account and link your Instagram profile via the official Instagram API. By doing so, you authorize LynkUp to access permitted data in accordance with Instagram’s terms of service..</li>
              <li>You are solely responsible for maintaining the confidentiality of your account credentials and all activities conducted through your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Use of Meta API</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>LynkUp uses the official Meta API to securely connect your profile to the App. We do not store your Instagram username or password.</li>
              <li>The App will only access data that you authorize via the Meta API and will not interfere with your Instagram account or its algorithm.</li>
              <li>Instagram’s terms of service govern your Instagram use. LynkUp is not responsible for any actions or penalties imposed by Instagram.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Offers from Brands</h2>
            <ul className="list-disc pl-5 space-y-2 text-white">
              <li>By linking your Instagram account, you gain access to offers from brands listed on the App. Offers may include complimentary items, discounts, or event invitations.</li>
              <li>Details of each offer, including its requirements, are outlined in the “We’re Offering” section of the booking.</li>
              <li>By booking an offer, you agree to deliver the required content (e.g., Instagram posts, stories, Google review, Zomato review, or other promotional materials) within the specified timeframe, provided the brand accepts your booking.</li>
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
            
            <li className="text-xl font-semibold text-white mt-4 mb-2">9.1 Data Collected from Instagram</li>
            <ul className=" pl-5 space-y-2 text-white">
              <li>LynkUp collects data via the Instagram API, including:</li>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Profile details (e.g., username, bio, profile picture).</li>
                <li>Metrics such as followers, engagement rates, and content performance.</li>
                <li>Insights from promotional content posted as part of offers.</li>
              </ul>
            </ul>

            <li className="text-xl font-semibold text-white mt-4 mb-2">9.2 Sharing Data with Brands</li>
            <ul className=" pl-5 space-y-2 text-white">
              <li>Relevant data is shared with brands for offer evaluation purposes. No data beyond what is necessary for collaboration is disclosed.</li>
            </ul>

            <li className="text-xl font-semibold text-white mt-4 mb-2">9.3 Retention of Data</li>
            <ul className=" pl-5 space-y-2 text-white">
              <li>Data is retained only as long as necessary to facilitate offers and improve app functionality. Upon account deletion, all associated data will be permanently deleted, except where retention is legally required.</li>
            </ul>

            <li className="text-xl font-semibold text-white mt-4 mb-2">9.4 Third-Party Data Access</li>
            <ul className=" pl-5 space-y-2 text-white">
              <li>LynkUp does not sell or rent data to third parties. Authorized third-party access is restricted to operational needs under data protection agreements.</li>
            </ul>

            <li className="text-xl font-semibold text-white mt-4 mb-2">9.5 Marketing Communications</li>
            <ul className=" pl-5 space-y-2 text-white">
              <li>By using the App, you consent to receiving updates about offers and promotions. You may opt out by adjusting your settings.</li>
            </ul>

            <li className="text-xl font-semibold text-white mt-4 mb-2">9.6 Accuracy of Data</li>
            <ul className=" pl-5 space-y-2 text-white">
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
            <ul className=" pl-5 space-y-2 text-white">
              <li>LynkUp reserves the right to suspend or terminate your account without prior notice for violations of these Terms or any inappropriate behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">12. Limitation of Liability</h2>
            {/* <p className="text-white mb-4">
              LynkUp is not responsible for damages arising from the use or inability to use the App, including issues with restaurants or third-party services.
            </p> */}
            
            <ul className="list-disc pl-5 space-y-2 text-white">
            <li className="text-xl font-semibold text-white mt-4 mb-2">12.1 Responsibility for Restaurant and Cloud Kitchen Selection</li>
            </ul>
            <h2>LynkUp provides a platform for users to discover and engage with brands , restaurants and cloud kitchens. However, we are <strong> not responsible </strong> for the businesses you choose to interact with. Any issues, disputes, or concerns that arise between you and a brand , restaurant or cloud kitchen are <strong> solely between you and the respective establishment.</strong> LynkUp holds <strong> no liability </strong> for their actions, policies, or services.</h2>

            <ul className="list-disc pl-5 space-y-2 text-white">
            <li className="text-xl font-semibold text-white mt-4 mb-2">12.2 Food Quality and Health Concerns</li>
            </ul>
              <h2>LynkUp <strong> does not guarantee </strong> the quality, safety, or hygiene standards of the food provided by restaurants and cloud kitchens listed on our App. If you experience any adverse health effects, foodborne illnesses, or dissatisfaction with food quality, the responsibility lies <strong>solely with the brand , restaurant or cloud kitchen.</strong> LynkUp is <strong> not accountable </strong> for any health-related concerns or damages resulting from consuming food obtained through our platform.</h2>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">13. Modifications to Terms</h2>
            <ul className=" pl-5 space-y-2 text-white">
              <li>LynkUp reserves the right to update these Terms at any time. Significant changes will be communicated via the App, and continued use signifies acceptance of the revised Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">14. Governing Law</h2>
            <ul className=" pl-5 space-y-2 text-white">
              <li>These Terms are governed by the laws of Delhi, India. Any disputes are subject to the <strong> exclusive jurisdiction of the courts in Delhi, India</strong></li>
            </ul>
          </section>
<section>
  <h2 className="text-2xl font-semibold text-white mb-3">15. Payment Safeguards</h2>
  <ul className="list-disc pl-5 space-y-2 text-white">

    <li>
      <strong>15.1 Listing Fee:</strong> A listing fee must be paid in full before making your brand’s offer live on the App. The exact amount of this fee will be discussed and agreed upon prior to onboarding your brand. All payments are exclusive of Goods and Services Tax (GST), which shall be levied at the applicable rate and must be paid by the brand in addition to the fee.
    </li>

    <li>
      <strong>15.2 Organic Reel View Milestone:</strong> Organic reel views will be calculated on the 30th day from the date of posting the reel. Payments related to these milestones must be made within 2–3 working days after the 30th day from the posting date. The exact fee amount will be communicated to you prior to onboarding your brand and is non-negotiable. All such payments are subject to applicable GST, which must be paid in full along with the milestone payment.
    </li>

    <li>
      <strong>15.3 Failure to Pay:</strong> Any delay or failure to make payments as per the agreed terms will constitute a breach of these Terms. In such cases, LynkUp reserves the right to:

Suspend, limit, or permanently terminate your account access;
Withhold or cancel any ongoing collaborations;
Initiate recovery proceedings, including legal action, to recover the outstanding dues along with interest, penalties, and recovery costs;
Report the default to relevant authorities or industry bodies, if applicable.
You acknowledge and agree that GST payments are mandatory under applicable law, and failure to pay GST along with applicable fees shall also constitute a breach of these Terms.
    </li>

    <li>
      <strong>15.4 Dispute Resolution:</strong> Mediation and Arbitration
In the event of any dispute, controversy, or claim arising out of or relating to these Payment Safeguards or any related obligations:
    </li>

  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold text-white mb-3">16. Limitation on Liability</h2>
  <ul className="list-disc pl-5 space-y-2 text-white">
    <li>
      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LYNKUP, ITS PARENT COMPANY, SUBSIDIARIES, AFFILIATES, OR ANY OF THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, LICENSORS, OR SERVICE PROVIDERS BE LIABLE FOR ANY DAMAGES OF ANY KIND, WHETHER DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY, ARISING OUT OF OR IN CONNECTION WITH (i) YOUR ACCESS TO OR USE OF THE PLATFORM, (ii) YOUR INABILITY TO ACCESS OR USE THE PLATFORM, (iii) ANY CONTENT MADE AVAILABLE ON OR THROUGH THE PLATFORM, OR (iv) ANY SERVICES OR PRODUCTS OBTAINED THROUGH THE PLATFORM.
    </li>
    <li>
      THIS LIMITATION COVERS, WITHOUT LIMITATION, CLAIMS FOR PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF GOODWILL, LOSS OF DATA, OR ANY OTHER TANGIBLE OR INTANGIBLE LOSSES, REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF SUCH DAMAGES WERE FORESEEABLE. NOTHING IN THIS CLAUSE SHALL LIMIT OR EXCLUDE ANY LIABILITY THAT CANNOT BE LIMITED OR EXCLUDED UNDER APPLICABLE LAW.
    </li>
  </ul>
</section>





          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">17. Contact Us</h2>
            <ul className=" pl-5 space-y-2 text-white">
              <li>For any questions or concerns, contact us at:</li>
              <h1> <strong>Email:</strong> lynkupindia@gmail.com</h1>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndCookies;