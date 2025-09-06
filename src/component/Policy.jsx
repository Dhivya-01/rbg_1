import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center border-b p-6">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <div className="text-sm text-gray-600 mt-2">
            <p>Effective Date: November 14, 2024</p>
            <p>Last Updated: August 13, 2024. Version 1.0.1</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="h-[600px] overflow-y-auto pr-4">
            <div className="space-y-6">
              <p className="text-gray-700">
                Resilience Business Grids LLP ("RBG", "we", "our", or "us") is committed to protecting 
                the privacy of individuals in accordance with applicable Indian laws, including the 
                Information Technology Act, 2000, and relevant rules under the act. This Privacy Policy 
                outlines how we collect, use, disclose, and safeguard your personal information when 
                you interact with our website, services, and products.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">1. Personal Information We Collect</h2>
                <p>We collect personal information that you provide to us directly, as well as information 
                   we collect automatically when you use our services:</p>
                <div className="space-y-2 pl-4">
                  <p><span className="font-medium">Account Information:</span> When you create an account 
                     or engage with our services, we collect your name, contact details, account credentials, 
                     payment information, and transaction history.</p>
                  <p><span className="font-medium">User Content:</span> Any information you submit through 
                     our services, such as input data, file uploads, and feedback.</p>
                  <p><span className="font-medium">Communication Information:</span> Details from any 
                     communications you have with us, including your contact details and message content.</p>
                  <p><span className="font-medium">Social Media Information:</span> Information you provide 
                     when interacting with our social media pages or platforms.</p>
                  <p><span className="font-medium">Technical Information:</span> Automatically collected 
                     data about your use of our services, including IP addresses, device information, 
                     browser type, usage data, and cookies.</p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">2. How We Use Personal Information</h2>
                <p>Your personal information is used for the following purposes:</p>
                <div className="space-y-2 pl-4">
                  <p><span className="font-medium">Service Provision:</span> To provide, maintain, and enhance 
                     our services, including troubleshooting, data analytics, and research.</p>
                  <p><span className="font-medium">Communication:</span> To communicate with you, including 
                     sending you service updates, promotional materials, and responding to your inquiries.</p>
                  <p><span className="font-medium">Legal Compliance:</span> To comply with legal obligations, 
                     such as responding to legal requests or enforcing our terms and conditions.</p>
                  <p><span className="font-medium">Security:</span> To protect against fraud, unauthorized 
                     access, and other illegal activities.</p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">3. Disclosure of Personal Information</h2>
                <p>We may share your personal information with third parties in the following scenarios:</p>
                <div className="space-y-2 pl-4">
                  <p><span className="font-medium">Vendors and Service Providers:</span> To assist in providing our services, we may share information with third-party vendors and service providers.</p>
                  <p><span className="font-medium">Legal Requirements:</span> When required by law, we may disclose your information to government authorities or other entities.</p>
                  <p><span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or other business transfer, your personal information may be transferred as part of the transaction.</p>
                  <p><span className="font-medium">Affiliates:</span> We may share your personal information with our affiliates in a manner consistent with this Privacy Policy.</p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">4. Your Rights</h2>
                <p>In accordance with Indian laws, you have the following rights concerning your personal information:</p>
                <div className="space-y-2 pl-4">
                  <p><span className="font-medium">Access and Correction:</span> You can request access to your personal information and ask us to correct any inaccuracies.</p>
                  <p><span className="font-medium">Deletion:</span> You can request the deletion of your personal information from our records.</p>
                  <p><span className="font-medium">Objection to Processing:</span> You may object to the processing of your personal information for certain purposes.</p>
                  <p><span className="font-medium">Data Portability:</span> You have the right to request a copy of your personal information in a structured, machine-readable format.</p>
                  <p><span className="font-medium">Withdraw Consent:</span> We process your personal information based on your consent, you can withdraw that consent at any time.</p>
                </div>
                <p className="text-sm text-gray-600">To exercise these rights, please contact us at privacy@rbg.ai</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">5. Security and Retention</h2>
                <p>
                  We implement reasonable technical and organizational measures to protect your personal 
                  information from unauthorized access, misuse, and loss. However, no online service can 
                  be 100% secure. We retain your personal information for as long as necessary to fulfill 
                  the purposes outlined in this Privacy Policy, or as required by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">6. International Data Transfers</h2>
                <p>
                  If your personal information is transferred outside India, we will ensure that it is 
                  protected in a manner consistent with Indian laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">7. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If we learn that we have collected 
                  such information, we will take steps to delete it.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the updated policy on our website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold">9. Contact Us</h2>
                <p>
                  For any questions or concerns regarding this Privacy Policy or our privacy practices, 
                  please contact us at privacy@rbg.ai
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;