import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center border-b p-6">
          <h1 className="text-2xl font-bold">Terms of Service</h1>
          <div className="text-sm text-gray-600 mt-2">
            <p>Updated: August 13, 2024. Version 1.0.1</p>
            <p>Effective: January 01, 2024 (Version 1.0.0)</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="h-[600px] overflow-y-auto pr-4">
            <div className="space-y-6">
              <p className="text-lg">Thank you for using MLloOps!</p>
              <p>
                These Terms of Service apply to your use of the MLloOps platform
                and other offerings provided by Resilience Business Grids LLP.
                These Terms form an agreement between you and Resilience
                Business Grids LLP, an LLP registered under section 12(1) of the
                Limited Liability Partnership Act,2008 , and they include our
                Service Terms and important provisions for resolving disputes
                under Indian law. By using our Services, you agree to these
                Terms.
              </p>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Who we are</h2>
                <p>
                  Resilience Business Grids LLP is a technology company
                  specializing in artificial intelligence-driven solutions. We
                  provide advanced GEN AI Solutions and other services. Our
                  mission is to enhance business operations through cutting-edge
                  AI technologies. For more information about Resilience
                  Business Grids LLP, please visit our website at
                  https://rbg.ai.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Registration and Access
                </h2>
                <div className="space-y-2">
                  <h3 className="font-medium">Minimum Requirement</h3>
                  <p>
                    You must be a registered company with appropriate Taxing
                    regulations in place respective to the geographical location
                    of the former, to use our Services.
                  </p>
                  <h3 className="font-medium">Registration</h3>
                  <p>
                    You must provide accurate and complete information when
                    registering for an account to use our Services. You are
                    responsible for maintaining the confidentiality of your
                    account credentials and are liable for all activities
                    conducted under your account. If you use the Services on
                    behalf of another entity, you must have the authority to
                    accept these Terms on their behalf.
                  </p>
                </div>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Using Our Services</h2>
                <p>
                  Subject to your compliance with these Terms, you may access
                  and use our Services. You must comply with all applicable
                  Indian laws, including our Usage Policies and any other
                  guidelines provided by us.
                </p>
                <div className="pl-4">
                  <p className="font-medium">
                    You may not use our Services for any illegal, harmful, or
                    abusive activities, including but not limited to:
                  </p>
                  <ul className="list-decimal pl-6 space-y-1 mt-2">
                    <li>Infringing on intellectual property rights.</li>
                    <li>
                      Modifying, copying, leasing, selling, or distributing our
                      Services without authorization.
                    </li>
                    <li>
                      Attempting to reverse engineer, decompile, or discover the
                      source code of our Services.
                    </li>
                    <li>Automatically extracting data from our Services.</li>
                    <li>
                      Representing AI-generated outputs as human-generated when
                      they are not.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Content</h2>
                <p>
                  You are responsible for the content you provide to our
                  Services. You represent that you have all necessary rights to
                  the content. As between you and Resilience Business Grids LLP,
                  you retain ownership of your content. We may use your content
                  to provide, maintain, and improve our Services in accordance
                  with applicable Indian laws.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Ownership and IP Rights
                </h2>
                <p>
                  Resilience Business Grids LLP owns all rights, title, and
                  interest in and to the Services, including all intellectual
                  property rights. You may not use our name, logo, or trademarks
                  without our express permission, in accordance with Indian
                  trademark laws.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Payment Terms</h2>
                <p>
                  If you purchase any of our Services, you agree to provide
                  accurate billing information and comply with payment
                  obligations. Service credits and other payments are subject to
                  our Service Credit Terms. All payments are non-refundable,
                  except where required by law.
                </p>
                <p>
                  All payments for our Services are due at the time of purchase
                  unless otherwise specified. We accept various forms of
                  payment, including credit/debit cards and other methods as
                  provided on our platform.{" "}
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy
                  Policy, which explains how we collect, use, and disclose your
                  personal information. By using our Services, you agree to the
                  collection and use of information in accordance with our
                  Privacy Policy.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Termination and Suspension
                </h2>
                <p>
                  You may stop using our Services at any time. We reserve the
                  right to suspend or terminate your access to our Services if
                  you breach these Terms, violate our Usage Policies, or if your
                  use could cause harm to Resilience Business Grids LLP or
                  others.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Disclaimer of Warranties
                </h2>
                <p>
                  Our Services are provided 'as is' and 'as available.' We make
                  no warranties of any kind, express or implied, regarding the
                  availability, accuracy, or reliability of our Services. You
                  use our Services at your own risk unless specifically agreed
                  by both parties depending on the type of service undertaken.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">
                  Limitation of Liability
                </h2>
                <p>
                  Resilience Business Grids LLP and its affiliates will not be
                  liable for any indirect, incidental, special, consequential,
                  or exemplary damages arising from your use of our Services.
                  Our aggregate liability for any claim related to the Services
                  will not exceed 25% of the amount paid by you for the Services
                  in the Four months preceding the claim.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Indemnity</h2>
                <p>
                  You agree to indemnify and hold harmless Resilience Business
                  Grids LLP, its affiliates, and personnel from any third-party
                  claims arising out of your use of the Services or your
                  violation of these Terms.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Dispute Resolution</h2>
                <p>
                  Any disputes arising out of these Terms or your use of our
                  Services will be resolved through binding arbitration in
                  accordance with Arbitration and Conciliation Act, 1996, or any
                  other applicable Indian laws. The arbitration will take place
                  in the jurisdiction of our registered office.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India. Any legal action or proceeding related
                  to your access to or use of the Services shall be subject to
                  the exclusive jurisdiction of the courts located in
                  Coimbatore, India
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Copyright Complaints</h2>
                <p>
                  If you believe your intellectual property rights have been
                  infringed, please contact us with the relevant details. We
                  will address your concerns in accordance with Indian copyright
                  laws.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">General Terms</h2>
                <h3 className="font-medium">Assignment:</h3>
                <p>
                  You may not assign or transfer any rights or obligations under
                  these Terms without our consent. We may assign our rights or
                  obligations to any affiliate or successor.
                </p>
                <h3 className="font-medium">Changes to these Terms:</h3>
                <p>
                  We may update these Terms from time to time to reflect changes
                  in our Services or for legal reasons. We will notify you of
                  any material changes.
                </p>
              </section>
              <section className="space-y-2">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  at: Resilience Business Grids LLP
                </p>
                <p>Resilience Business Grids LLP</p>
                <p>Email: contact@rbg.ai</p>
                <p>Phone: +91 7339103001</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
