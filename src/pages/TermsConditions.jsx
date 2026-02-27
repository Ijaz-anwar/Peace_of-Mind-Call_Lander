import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { handlePhoneCall } from '../utils/pixelTracking'
import './LegalPages.css'

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p className="last-updated">Last updated Oct 15, 2025</p>
        </div>
      </div>

      <div className="legal-content">
        <div className="container">
          <section className="legal-section">
            <h2>General</h2>
            <p>
              This website (the "Site") is owned and operated by Capital Media Agency, Centerfield and Peace of Mind Insurance ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from COMPANY. Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
            </p>
            <p>
              We reserve the right to change these Terms of Service or to impose new conditions on use of the Site, from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
            </p>
            <p>
              By submitting an inquiry you agree that a licensed insurance agent with Peace of Mind Insurance or Capital Media Agency may contact you by phone, text message or email. You expressly consent to receive phone calls (including autodialed and/or pre-recorded calls) text messages and email using automated technology at the phone number and email address you provided, even if it is a wireless number, regardless of whether you are on any Federal or state DNC ("Do Not Call") and/or DNE ("Do Not Email") list or registry. In addition, you understand and acknowledge that data and message rates may apply. Furthermore, you acknowledge that you are over 18 years of age. You may revoke your express consent at any time by contacting us via <a href="#" onClick={(e) => handlePhoneCall('+18335494113', e)}>+1 (833) 549-4113</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>Text Messaging Program Terms</h2>
            <p>
              By providing your mobile phone number and submitting a form on this website, you agree to participate in the Peace of Mind Insurance Text Messaging Program, operated by Capital Media Agency, Centerfield and Peace of Mind Insurance.
            </p>
            <h3>Program Description</h3>
            <p>
              The Peace of Mind Insurance Text Messaging Program provides informational and marketing text messages related to Auto Insurance coverage options, responses to consumer inquiries, follow-ups, appointment reminders, and other communications related to your request.
            </p>
            <h3>Message Frequency</h3>
            <p>Message frequency may vary based on your interactions with us.</p>
            <h3>Message and Data Rates</h3>
            <p>Message and data rates may apply depending on your mobile carrier and plan.</p>
            <h3>Opt-Out and Help</h3>
            <p>You may opt out at any time by replying STOP. For help, reply HELP.</p>
            <p>
              For more information on how we collect, use, and protect your information, please review our Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Intellectual Property Rights</h2>
            <h3>Our Limited License to You</h3>
            <p>
              This Site and all the materials available on the Site are the property of us and/or our affiliates or licensors, and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal noncommercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us. More specifically, unless explicitly authorized in these Terms of Service or by the owner of the materials, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium (including by email or other electronic means) any material from the Site. You may, however, from time to time, download and/or print one copy of individual pages of the Site for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
            </p>
            <h3>Your License to Us</h3>
            <p>
              By posting or submitting any material (including, without limitation, comments, blog entries, Facebook postings, photos and videos) to us via the Site, internet groups, social media venues, or to any of our staff via email, text or otherwise, you are representing: (i) that you are the owner of the material, or are making your posting or submission with the express consent of the owner of the material; and (ii) that you are thirteen years of age or older. In addition, when you submit, email, text or deliver or post any material, you are granting us, and anyone authorized by us, a royalty-free, perpetual, irrevocable, non-exclusive, unrestricted, worldwide license to use, copy, modify, transmit, sell, exploit, create derivative works from, distribute, and/or publicly perform or display such material, in whole or in part, in any manner or medium, now known or hereafter developed, for any purpose.
            </p>
            <h3>Limitations on Linking and Framing</h3>
            <p>
              You may establish a hypertext link to the Site so long as the link does not state or imply any sponsorship of your site by us or by the Site. However, you may not, without our prior written permission, frame or inline link any of the content of the Site, or incorporate into another website or other service any of our material, content or intellectual property.
            </p>
          </section>

          <section className="legal-section">
            <h2>Disclaimers</h2>
            <p>
              Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites, or the information, products or services offered on or through the sites. In addition, neither we nor affiliates operate or control in any respect any information, products or services that third parties may provide on or through the Site or on websites linked to by us on the Site.
            </p>
            <p>
              THE INFORMATION, PRODUCTS AND SERVICES OFFERED ON OR THROUGH THE SITE AND BY COMPANY AND ANY THIRD-PARTY SITES ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE SITE OR ANY OF ITS FUNCTIONS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT ANY PART OF THIS SITE, INCLUDING BULLETIN BOARDS, OR THE SERVERS THAT MAKE IT AVAILABLE, ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section className="legal-section">
            <h2>Online Commerce</h2>
            <p>
              Certain sections of the Site may allow you to purchase many different types of products and services online that are provided by third parties. We are not responsible for the quality, accuracy, timeliness, reliability or any other aspect of these products and services. If you make a purchase from a merchant on the Site or on a site linked to by the Site, the information obtained during your visit to that merchant's online store or site, and the information that you give as part of the transaction, such as your credit card number and contact information, may be collected by both the merchant and us.
            </p>
            <p>
              You agree to be financially responsible for all purchases made by you or someone acting on your behalf through the Site. You agree to use the Site and to purchase services or products through the Site for legitimate, non-commercial purposes only.
            </p>
          </section>

          <section className="legal-section">
            <h2>Interactive Features</h2>
            <p>
              This Site may include a variety of features, such as bulletin boards, web logs, chat rooms, and email services, which allow feedback to us and real-time interaction between users, and other features which allow users to communicate with others. Responsibility for what is posted on bulletin boards, web logs, chat rooms, and other public posting areas on the Site, or sent via any email services on the Site, lies with each user – you alone are responsible for the material you post or send.
            </p>
            <p>
              It is a condition of your use of the Site that you do not: restrict or inhibit any other user from using and enjoying the Site; use the Site to impersonate any person or entity; interfere with or disrupt any servers or networks; use the Site to instigate or encourage others to commit illegal activities; gain unauthorized access to the Site; post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable information.
            </p>
          </section>

          <section className="legal-section">
            <h2>Registration</h2>
            <p>
              To access certain features of the Site, we may ask you to provide certain demographic information including your gender, year of birth, zip code and country. In addition, if you elect to sign-up for a particular feature of the Site, you may also be asked to register with us on the form provided and such registration may require you to provide personally identifiable information such as your name and email address. You agree to provide true, accurate, current and complete information about yourself as prompted by the Site's registration form.
            </p>
          </section>

          <section className="legal-section">
            <h2>Passwords</h2>
            <p>
              To use certain features of the Site, you will need a username and password, which you will receive through the Site's registration process. You are responsible for maintaining the confidentiality of the password and account, and are responsible for all activities (whether by you or by others) that occur under your password or account. You agree to notify us immediately of any unauthorized use of your password or account or any other breach of security.
            </p>
          </section>

          <section className="legal-section">
            <h2>Limitation of Liability</h2>
            <p>
              UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE, OUR SUBSIDIARY AND PARENT COMPANIES OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE SITE, INCLUDING OUR MESSAGING, BLOGS, COMMENTS OF OTHERS, BOOKS, EMAILS, PRODUCTS, OR SERVICES, OR THIRD-PARTY MATERIALS, PRODUCTS, OR SERVICES MADE AVAILABLE THROUGH THE SITE OR BY US IN ANY WAY, EVEN IF WE ARE ADVISED BEFOREHAND OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              COMPANY IS NOT AN INVESTMENT ADVISORY SERVICE, IS NOT AN INVESTMENT ADVISER, AND DOES NOT PROVIDE PERSONALIZED FINANCIAL ADVICE OR ACT AS A FINANCIAL ADVISOR.
            </p>
          </section>

          <section className="legal-section">
            <h2>Termination</h2>
            <p>
              We may cancel or terminate your right to use the Site or any part of the Site at any time without notice. In the event of cancellation or termination, you are no longer authorized to access the part of the Site affected by such cancellation or termination. The restrictions imposed on you with respect to material downloaded from the Site, and the disclaimers and limitations of liabilities set forth in these Terms of Service, shall survive.
            </p>
          </section>

          <section className="legal-section">
            <h2>Refund Policy</h2>
            <p>
              Your purchase of a product or service or ticket to an event may or may not provide for any refund. Each specific product, service, event or course will specify its own refund policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>Other</h2>
            <p>
              The Digital Millennium Copyright Act of 1998 (the "DMCA") provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under the U.S. copyright law. If you believe in good faith that materials hosted by COMPANY infringe your copyright, you, or your agent may send to COMPANY a notice requesting that the material be removed or access to it be blocked.
            </p>
            <p>
              COMPANY's Copyright Agent for notice of claims of copyright infringement or counter notices can be reached as follows: <a href="mailto:Leslie@cmediaagency.com">Leslie@cmediaagency.com</a>
            </p>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of California and any dispute shall be subject to binding arbitration in California, USA. If any provision of this agreement shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions.
            </p>
          </section>

          <section className="legal-section">
            <h2>Disclaimer</h2>
            <p>
              Although it is highly unlikely, this policy may be changed at any time at our discretion. If we should update this policy, we will post the updates to this page on our Website.
            </p>
            <p>
              If you have any questions about these Terms, please contact us at <a href="#" onClick={(e) => handlePhoneCall('+18335494113', e)}>+1 (833) 549-4113</a> or <a href="mailto:Leslie@cmediaagency.com">Leslie@cmediaagency.com</a>.
            </p>
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

export default TermsConditions
