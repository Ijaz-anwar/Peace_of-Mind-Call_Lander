import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { handlePhoneCall } from '../utils/pixelTracking'
import './LegalPages.css'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated Feb 3, 2026</p>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <section className="legal-section">
            <p>
              Thank you for choosing to be part of our community at Capital Media Agency, Centerfield and Peace of Mind Insurance ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="#" onClick={(e) => handlePhoneCall('+18335494113', e)}>+1 833-549-4113</a> or <a href="mailto:Leslie@cmediaagency.com">Leslie@cmediaagency.com</a>.
            </p>
            <p>
              When you visit our website <a href="https://peaceofmind-co.com">https://peaceofmind-co.com</a> (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
            </p>
          </section>

          <section className="legal-section">
            <h2>Table of Contents</h2>
            <ul>
              <li>What Information Do We Collect?</li>
              <li>How Do We Use Your Information?</li>
              <li>Will Your Information Be Shared With Anyone?</li>
              <li>Who Will Your Information Be Shared With?</li>
              <li>Text Messaging Consent and Data Use</li>
              <li>Do We Use Cookies and Other Tracking Technologies?</li>
              <li>Do We Use Google Maps Platform APIs?</li>
              <li>How Long Do We Keep Your Information?</li>
              <li>How Do We Keep Your Information Safe?</li>
              <li>Do We Collect Information From Minors?</li>
              <li>What Are Your Privacy Rights?</li>
              <li>Controls for Do-Not-Track Features</li>
              <li>Do California Residents Have Specific Privacy Rights?</li>
              <li>Do We Make Updates to This Notice?</li>
              <li>How Can You Contact Us About This Notice?</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>1. What Information Do We Collect?</h2>
            <h3>Personal information you disclose to us</h3>
            <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            </p>
            <p>
              <strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; contact preferences; utility company; monthly payment; sunlight on the roof; property type; estimated credit score; and other similar information.
            </p>
            <h3>Information automatically collected</h3>
            <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</p>
            <p>
              We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Website.
            </p>
            <ul>
              <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage and performance information our servers automatically collect.</li>
              <li><strong>Device Data:</strong> Information about your computer, phone, tablet or other device you use to access the Website.</li>
              <li><strong>Location Data:</strong> Information about your device's location, which can be either precise or imprecise.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How Do We Use Your Information?</h2>
            <p><strong>In Short:</strong> We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
            <p>We use the information we collect or receive:</p>
            <ul>
              <li>To facilitate account creation and logon process</li>
              <li>To post testimonials with your consent</li>
              <li>Request feedback about your use of our Website</li>
              <li>To enable user-to-user communications</li>
              <li>To manage user accounts</li>
              <li>Fulfill and manage your orders</li>
              <li>To deliver and facilitate delivery of services to the user</li>
              <li>To respond to user inquiries/offer support to users</li>
              <li>To send you marketing and promotional communications</li>
              <li>Deliver targeted advertising to you</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Will Your Information Be Shared With Anyone?</h2>
            <p><strong>In Short:</strong> We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <p>We may process or share your data based on the following legal basis:</p>
            <ul>
              <li><strong>Consent:</strong> We may process your data if you have given us specific consent.</li>
              <li><strong>Legitimate Interests:</strong> We may process your data when reasonably necessary.</li>
              <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you.</li>
              <li><strong>Legal Obligations:</strong> We may disclose your information where legally required.</li>
              <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Who Will Your Information Be Shared With?</h2>
            <p><strong>In Short:</strong> We only share information with the following third parties.</p>
            <ul>
              <li><strong>Advertising, Direct Marketing, and Lead Generation:</strong> Google AdSense, Facebook Audience Network, Outbrain, Google Adwords</li>
              <li><strong>Communicate and Chat with Users:</strong> Facebook Customer Chat, Manychat</li>
              <li><strong>Data Backup and Security:</strong> Dropbox</li>
              <li><strong>Retargeting Platforms:</strong> Facebook Remarketing, Google Ads Remarketing, Google Analytics Remarketing</li>
              <li><strong>Social Media Sharing and Advertising:</strong> Facebook advertising</li>
              <li><strong>Web and Mobile Analytics:</strong> Facebook Analytics, Google Analytics</li>
              <li><strong>Website Hosting:</strong> Cloudways</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Text Messaging Consent and Data Use</h2>
            <p>
              When you provide your mobile phone number and consent to receive text messages, we collect and use that information solely to communicate with you regarding our services and available Auto Insurance options.
            </p>
            <p>
              All categories of personal information described in this Privacy Policy exclude text messaging originator opt-in data and consent; this information will not be shared, sold, rented, or transferred to any third parties. Only Capital Media Agency, Centerfield and Peace of Mind Insurance may send text messages to individuals who have opted in.
            </p>
            <p>
              We may share text messaging opt-in data and consent only with our telecommunications service providers (such as Twilio) and mobile network carriers (such as Verizon, AT&T, and T-Mobile) strictly as necessary to deliver text messages or to comply with legal, regulatory, or investigatory requests.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Do We Use Cookies and Other Tracking Technologies?</h2>
            <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</p>
          </section>

          <section className="legal-section">
            <h2>7. Do We Use Google Maps Platform APIs?</h2>
            <p><strong>In Short:</strong> Yes, we use Google Maps Platform APIs for the purpose of providing better service.</p>
            <p>This Website uses Google Maps Platform APIs which are subject to Google's Terms of Service.</p>
          </section>

          <section className="legal-section">
            <h2>8. How Long Do We Keep Your Information?</h2>
            <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than twelve (12) months past the start of idle period of the user's account.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. How Do We Keep Your Information Safe?</h2>
            <p><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Do We Collect Information From Minors?</h2>
            <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
            <p>
              We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Website.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. What Are Your Privacy Rights?</h2>
            <p><strong>In Short:</strong> You may review, change, or terminate your account at any time.</p>
            <p>If you have questions or comments about your privacy rights, you may contact us at <a href="#" onClick={(e) => handlePhoneCall('+18335494113', e)}>+1 833-549-4113</a> or <a href="mailto:Leslie@cmediaagency.com">Leslie@cmediaagency.com</a>.</p>
            <h3>Account Information</h3>
            <p>
              If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account, or contact us using the contact information provided.
            </p>
            <p>
              <strong>Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Controls for Do-Not-Track Features</h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Do California Residents Have Specific Privacy Rights?</h2>
            <p><strong>In Short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes.
            </p>
            <h3>CCPA Privacy Notice</h3>
            <p>Your rights with respect to your personal data:</p>
            <ul>
              <li><strong>Right to request deletion of the data:</strong> You can ask for the deletion of your personal information.</li>
              <li><strong>Right to be informed:</strong> You have a right to know whether we collect and use your personal information.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you if you exercise your privacy rights.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>14. Do We Make Updates to This Notice?</h2>
            <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p>
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. How Can You Contact Us About This Notice?</h2>
            <p>You can reach us by phone at <a href="#" onClick={(e) => handlePhoneCall('+18335494113', e)}>+1 (833) 549-4113</a> or by email at <a href="mailto:Leslie@cmediaagency.com">Leslie@cmediaagency.com</a>.
              , or by post to:</p>
            <div className="contact-info">
              <p>Capital Media Agency</p>
              <p>Peace of Mind Insurance</p>
              <p>United States</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Important Legal Disclosure</h2>
            <p>
              This website is not a government agency. Peace of Mind Insurance is a private lead generation service owned and operated by Capital Media Agency, Centerfield and Peace of Mind Insurance. Insurance plans referenced may not meet Auto Insurance requirements and availability varies in all states. By submitting your information, you provide express written consent to be contacted by Capital Media Agency, Centerfield and Peace of Mind Insurance via phone call, text message, or email, including through autodialed, AI, or prerecorded messages, even if your number is on a state or national Do Not Call registry.
            </p>
            <p>
              Your personal information may be shared with licensed insurance agents or third-party partners for marketing purposes or to contact you via voice call or email only; text messaging originator opt-in data and consent will not be shared with any third parties. Submitting your information constitutes permission for an agent to contact you regarding available Auto Insurance coverage options, which may include Major Medical, Short-Term, Fixed Indemnity, or other insurance products. Plan availability, descriptions, and quotes may vary. By using this site, you agree to the Terms of Service and Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
