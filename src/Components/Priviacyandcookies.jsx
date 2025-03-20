import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Priviacyandcookies = () => {
  const location = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  return (
    <div className="pt-28 pb-20 px-20  ">
      <h1 className="text-4xl font-bold mb-4">Terms and Conditions for LynkUp App</h1>
      <p className="mb-6">
      <strong className="text-base">Last Updated:</strong> 31st January 2025
      </p>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">1. Introduction</h2>
      <p className="mb-4 font-Lexend font-extralight">
      Welcome to LynkUp! By accessing or using the LynkUp app ("the App"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please discontinue using the App immediately.
      </p>
      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">2.Definitions</h2>
      <ul className="list-disc pl-10 mb-3">
        <li><strong>"App":</strong> The LynkUp mobile application and its associated services.</li>
        <li><strong>"User":</strong>Any individual who registers and uses the App.</li>
        <li><strong>"Creator":</strong>A User who has linked their Instagram account to the App and is eligible to receive offers from restaurants.</li>
        <li><strong>"Restaurant":</strong>Any business registered on the App offering products or services to Creators.</li>
        <li><strong>"Instagram API"</strong>The official API provided by Instagram for integrating third-party services with Instagram profiles.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">3.Registration and Account</h2>
      
      <ul className="list-disc pl-12 mb-4 ">
        <li>To use the App, you must create an account and link your Instagram profile via the official Instagram API. By doing so, you authorize LynkUp to access permitted data in accordance with Instagram's terms of service.</li>
        <li>You are solely responsible for maintaining the confidentiality of your account credentials and all activities conducted through your account.</li>
        
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">4.Use of Instagram API</h2>
      <ul className="list-disc pl-10 mb-4 ">
        <li>LynkUp uses the official Instagram API to securely connect your profile to the App. We do not store your Instagram username or password</li>
        <li>The App will only access data that you authorize via the Instagram API and will not interfere with your Instagram account or its algorithm.</li>
        <li>Instagram's terms of service govern your Instagram use. LynkUp is not responsible for any actions or penalties imposed by Instagram.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">5.Offers from Restaurants</h2>
      <ul className="list-disc pl-10 mb-4 ">
        <li>By linking your Instagram account, you gain access to offers from restaurants and businesses listed on the App. Offers may include complimentary items, discounts, or event invitations.</li>
        <li>Details of each offer, including its requirements, are outlined in the "We’re Offering" section of the booking</li>
        <li>By booking an offer, you agree to deliver the required content (e.g., Instagram posts, stories, or other promotional materials) within the specified time frame, provided the restaurant accepts your booking.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">6.Content Delivery and Guidelines</h2>
      <ul className="list-disc pl-10 mb-4 ">
        <li>You must deliver content as outlined in the offer, including posting on Instagram and writing Google reviews, within the designated time frame.</li>
        <li>Content must include the specified tags, mentions, or hashtags as outlined in the offer.</li>
        <li>LynkUp may monitor your content to ensure compliance and reserves the right to take appropriate action for non-compliance.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">7.  Strikes and Account Suspension</h2>
      <ul className="list-disc pl-10 mb-4 ">
        <li>A strike may be issued for:</li>
          <ul>
            <li>1. Canceling a booking within 24 hours of the scheduled time.</li>
            <li>2. Failing to deliver required content within the specified timeframe.</li>
            <li>3. Arriving late (over 15 minutes) or failing to show up at the venue.</li>
            <li>4. Not adhering to the content posting requirements (e.g., incorrect tags).</li>

          </ul>
          <li>Accumulating three strikes will result in account suspension, rendering you ineligible for offers.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">8. Data Privacy and Security</h2>
      <ul className="list-disc pl-10 mb-4 ">
        <li>LynkUp is committed to protecting your personal information and processes it in accordance with our Privacy Policy.</li>
        <li>Data shared with restaurants is limited to engagement metrics, profile details, and task completion status. Sensitive data is never disclosed</li>
        <li>LynkUp employs industry-standard security measures but cannot guarantee absolute protection against unauthorized access.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">9.Data Collection and Usage</h2>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-2 ml-6">Data Collected from Instagram</h1>
      <ul className="list-disc pl-16 mb-2 ">
        <li>LynkUp collects data via the Instagram API, including:</li>
      </ul>
          <ul className="list-disc pl-20 ">
            <li className="list-disc">Profile details (e.g., username, bio, profile picture).</li>
            <li className="list-disc">Metrics such as followers, engagement rates, and content performance</li>
            <li className="list-disc">Insights from promotional content posted as part of offers.</li>

          </ul>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-3 ml-6">Sharing Data with Restaurants</h1>
      <ul className="list-disc pl-16 mb-4 ">
        <li>Relevant data is shared with restaurants for offer evaluation purposes. No data beyond what is necessary for collaboration is disclosed.</li>
      </ul>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-3 ml-6">Retention of Data</h1>
      <ul className="list-disc pl-16 mb-4 ">
        <li>Data is retained only as long as necessary to facilitate offers and improve app functionality. Upon account deletion, all associated data will be permanently deleted, except where retention is legally required.</li>
      </ul>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-3 ml-6">Third-Party Data Access</h1>
      <ul className="list-disc pl-16 mb-4 ">
        <li>LynkUp does not sell or rent data to third parties. Authorized third-party access is restricted to operational needs under data protection agreements.</li>
      </ul>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-3 ml-6">Marketing Communications</h1>
      <ul className="list-disc pl-16 mb-4 ">
        <li>By using the App, you consent to receiving updates about offers and promotions. You may opt out by adjusting your settings.</li>
      </ul>
      <h1 className="text-xl font-poppins font-semibold mt-4 mb-3 ml-6">Accuracy of Data</h1>
      <ul className="list-disc pl-16 mb-4 ">
        <li>You are responsible for providing accurate information. LynkUp is not liable for issues arising from inaccurate data.</li>
      </ul>
      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">10. Restrictions on Use</h2>
      <h3>You agree not to:</h3>
      <ul className="list-disc pl-10 mb-4 ">
        <li>Use the App for illegal or unauthorized purposes</li>
        <li>Violate any laws or regulations in connection with the App.</li>
        <li>Impersonate others or misrepresent your affiliation.</li>
        <li>Overburden or impair the App’s functionality.</li>
      </ul>
      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">11. Termination</h2>
      <ul className="list-disc pl-14 mb-4 ">
        <li>LynkUp reserves the right to suspend or terminate your account without prior notice for violations of these Terms or any inappropriate behavior.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">12. Limitation of Liability</h2>
      <ul className="list-disc pl-14 mb-4 ">
        <li>LynkUp is not responsible for damages arising from the use or inability to use the App, including issues with restaurants or third-party services.</li>
      </ul>

      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">13. Modifications to Terms</h2>
      <ul className="list-disc pl-14 mb-4 ">
        <li>LynkUp reserves the right to update these Terms. Significant changes will be communicated via the App, and continued use signifies acceptance.</li>
      </ul>
      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">14. Governing Law</h2>
      <ul className="list-disc pl-14 mb-4 ">
        <li>These Terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts in India.</li>
      </ul>
      <h2 className="text-2xl font-poppins font-semibold mt-6 mb-1">15. Contact Us</h2>
      <ul className="list-disc pl-14 mb-4 ">
        <li>For any questions or concerns, contact us at: lynkupindia@gmail.com</li>
      </ul>
      
    </div>
  );
};

export default Priviacyandcookies;
