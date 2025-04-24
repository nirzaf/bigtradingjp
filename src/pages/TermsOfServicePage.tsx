import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const TermsOfServicePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title="Terms of Service"
        subtitle="Home/Terms of Service"
        backgroundImage="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
      />

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-lg font-medium text-primary-700">Last Updated: May 25, 2024</p>
              <p>Welcome to Big Trading Company Limited.</p>
              <p>Big Trading Company Limited, referred here as "Big Trading" or "portal site" provides website features, applications and other products and services that are subject to the following conditions.</p>
              <p>When you visit, sell or buy at Big Trading Company Limited, use Big Trading products or services, use Big Trading applications, or use software provided by Big Trading, you agree to these conditions. Please read these Conditions of Use carefully. In addition, when you use any current or future Big Trading Services or visit or sell through or purchase from any Big Trading Member, whether or not included in the Big Trading site, you also will be subject to the guidelines and conditions applicable to such service or business.</p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#common-terms" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors">Common Terms of Use</a>
              <a href="#buyer-terms" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors">Terms of Use for Buyers</a>
              <a href="#dealer-terms" className="px-4 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors">Terms of Use for Dealers</a>
            </div>

            <h2 id="common-terms" className="text-2xl font-display font-bold mt-8 mb-4">Common Terms of Use</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Big Trading Company Limited reserves the right to update the TOU at any time without notice to you.</li>
              <li>By accessing or using the Site, you are deemed to have accepted the TOU set forth in this Agreement as a User. You shall be bound by the TOU of this Agreement with respect to your access or use of this Site and any further upgrade, modification, addition or change to this Site. If you do not accept all of the TOU of this Agreement, please do not use this Site.</li>
              <li>No User shall attempt to gain unauthorized access to any Services, other accounts, computer systems or networks connected to any Big Trading Company Limited server or to any of the Services, through hacking, password mining or any other means.</li>
              <li>The features and services on the Big Trading Company Limited site is provided on an "as is" and "as available" basis, and we hereby expressly disclaims any and all warranty except warranty expressly stated herein, including but not limited to any warranties of condition, quality, durability, performance, accuracy, reliability, merchantability or fitness for a particular purpose. All such warranties, representations, conditions, undertakings and terms are hereby excluded.</li>
              <li>You may not copy, reproduce, recompile, decompile, disassemble, reverse-engineer, distribute, publish, display, perform, modify, upload to create derivative works from, transmit, communicate or in any other way exploit any part of the information or material obtained through the Website and/or the Website's material.</li>
              <li>Big Trading Company Limited has no obligation to monitor the Communication Services (The Services may contain e-mail services, newsletter, tell your friend and/or other message or communication facilities designed to enable you to communicate with us or others). However, Big Trading Company Limited reserves the right to review materials posted to the Communication Services and to remove any materials in its sole discretion. Big Trading Company Limited reserves the right to terminate your access to any or all of the Communication Services at any time, without notice, for any reason whatsoever.</li>
            </ul>

            <h2 id="buyer-terms" className="text-2xl font-display font-bold mt-8 mb-4">Terms of Use for Buyers/Visitors/Users</h2>
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">Limitation of Liability</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Big Trading Company Limited makes no representations or warranty about the validity, accuracy, correctness, reliability, quality, stability, and/or other problems with the information, products and services provided except warranty expressly stated herein. We advised you to contact our sales department to get more about our warranty (if any) before you made the purchase.</li>
              <li>Big Trading Company Limited is not responsible for any delay in shipping the material purchased/ordered. But we always help you to sort out any problems if it is in our control.</li>
              <li>Customers are solely responsible for all of the terms and conditions of the transactions conducted on, through or as a result of use of the Site, including, without limitation, terms regarding payment, returns, warranty, shipping, insurance, fees, taxes, title, licenses, fines, permits, handling, transportation and storage.</li>
              <li>Under no circumstances shall Big Trading Company Limited be held liable for an delay or failure or disruption of the content or services delivered resulting directly or indirectly from acts of nature, forces or causes beyond its reasonable control, including without limitation, Internet failures, computer, telecommunications or any other equipment failures, electrical power failures, strikes, labour disputes, riots, insurrections, civil disturbances, shortages of labour or materials, fires, flood, storms, explosions, Acts of God, war, governmental actions, orders of domestic or foreign courts or tribunals or non-performance of third parties.</li>
              <li>Big Trading Company Limited reserved the rights of canceling any fraud/incomplete order without any prior intimation in written or verbal.</li>
              <li>Under no circumstances Big Trading Company Limited is not liable for any refund against any purchase made except warranty expressly stated herein.</li>
            </ul>

            <h3 className="text-xl font-display font-semibold mt-6 mb-3">Lead Aggregation Service Terms</h3>
            <p>By using our Lead aggregation service, you agree to comply with these terms and conditions. We may modify these terms from time to time, and such modifications shall be effective immediately upon posting on our website.</p>

            <h4 className="text-lg font-display font-semibold mt-4 mb-2">Definition of Terms:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Lead Forms" refers to the Get Free Quote / Inquiry / Contact forms on the website from which the lead aggregation is done.</li>
              <li>"Lead Sender" refers to the individual or dealer who submits leads through our lead forms.</li>
              <li>"Paid Member" refers to the company who has subscribed to our lead aggregation service and pays for access to the leads. It applies to both Premium and Gold Members.</li>
              <li>"Portal Site" refers to the website operated by our company where Paid Members can access the leads.</li>
              <li>"Contact Information" refers to the information provided by the Lead Sender, including but not limited to email address, phone number, and IP address.</li>
            </ul>

            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Stock Lead Submission: By submitting a lead through our lead form, the Lead Sender acknowledges and agrees that the Contact Information provided will be shared to the respective Paid Member of our Portal Site.</li>
              <li>General Lead Submission: By submitting a lead through our lead form, the Lead Sender acknowledges and agrees that the Contact Information provided will be shared to all the Paid Members of our Portal Site.</li>
              <li>Contact preference option for email, phone or both is given to the Lead Sender and only the selected Contact preferences are shared to all Paid Members of our Portal Site.</li>
              <li>Use of Contact Information: The Paid Members are authorized to use the Contact Information shared only for the purpose of contacting the lead in relation to the product or service they have expressed interest in by email, call, whatsapp or any other channels. However it is beyond our control to get it unsubscribed at the Exporter's side once the information is shared with the buyer's consent.</li>
              <li>Prohibited Use: The Lead Sender acknowledges and agrees that they will not use our lead aggregation service for any unlawful or fraudulent purpose, including but not limited to identity theft, phishing, or spamming.</li>
              <li>Compliance with Laws: The Lead Sender represents and warrants that they have obtained all necessary consents and permissions, including any applicable data protection laws, for the collection and processing of the Contact Information provided.</li>
              <li>Limitation of Liability: Our company shall not be liable for any damages or losses arising from the use of our lead aggregation service, including but not limited to any errors, omissions, or delays in the transmission of the Contact Information Or any transaction between the Lead Sender and the Paid Member.</li>
              <li>Indemnification: The Lead Sender agrees to indemnify and hold harmless our company and its officers, directors, employees, and agents from any claims, damages, or losses arising from their use of our lead aggregation service, including but not limited to any violation of these terms and conditions.</li>
              <li>Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of Japan.</li>
              <li>Dispute Resolution: Any disputes arising from these terms and conditions shall be resolved through arbitration in accordance with the rules of the Japan Arbitration Association.</li>
              <li>Entire Agreement: These terms and conditions constitute the entire agreement between the Lead Sender and our company with respect to the use of our lead aggregation service and supersede all prior agreements and understandings, whether written or oral.</li>
            </ul>

            <h2 id="dealer-terms" className="text-2xl font-display font-bold mt-8 mb-4">Terms of Use for Dealers/Exporters/Members</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Website, Email, Phone No., WhatsApp No. cannot be displayed anywhere else like on vehicle details, photos, logo, etc. other than their respective fields on the company profile.</li>
              <li>Membership fee is non refundable in any case we get any complaint from the buyers your membership will be blocked till issue is resolved.</li>
              <li>Inquiries from Big Trading should not be shared with any other company without bringing it to the prior notice of Big Trading Company Limited. Misuse of the inquiries is strictly prohibited and can result in permanent membership block at Big Trading.</li>
              <li>Buyers contact information is shared explicitly for the use by the Big Trading Paid Members company's only. Its their responsibility that the information is not leaked or shared outside their company. In case of any evidence showing the misuse of the information, may result in permanent membership block at Big Trading.</li>
              <li>Stock of any other company should not be uploaded in the name of your company. Violating the terms might result in membership block if we get any complaint from the exporters.</li>
            </ul>

            <h3 className="text-xl font-display font-semibold mt-6 mb-3">Materials Provided To/Posted at Big Trading Company Limited</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>When participating in any service you may provide us with information about yourself and/or products and services listed. You grant us exclusive rights in all of this information, and all information derived or generated from it, in all existing or future media. These rights include but are not limited to the right to display your information anywhere, to search the information, and, consistent with our privacy policy, to repackage and resell it to anyone for any reason. As used in this paragraph, information includes but is not limited to data, text, photographs, drawings, sound recordings, feedback, and any other information or data displayed or presented in connection with your listings with us.</li>
              <li>Big Trading Company Limited reserves the right at all times to disclose any information as Big Trading Company Limited deems necessary to satisfy any applicable law, regulation, legal process or governmental request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in Big Trading Company Limited's sole discretion. See the Privacy Statement disclosures relating to the collection and use of your information.</li>
              <li>If the information provided by you in your registration or web mail is false Big Trading Company Limited reserves the right to terminate your account.</li>
              <li>Any rights not expressly granted herein are reserved.</li>
            </ul>

            <p className="mt-6">By clicking on the "submit" button on our lead form, the Lead Sender acknowledges that they have read, understood, and agreed to these terms and conditions.</p>

            <p className="mt-6">This Agreement shall be governed by the laws of Japan without regard to its conflict. If the dispute/conflict can not be solved through amicable discussion, Tokyo district court holds original, exclusive jurisdiction over the dispute/conflict.</p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-4">
              <strong>Big Trading Company Limited</strong><br />
              Kisosaki-cho, Karoto 553<br />
              Kuwana, Mie Ken<br />
              Japan<br />
              Email: bigtradingjp@gmail.com<br />
              Phone: +81 80-4213-9008
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsOfServicePage;
