import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title="Privacy Policy"
        subtitle="Home/Privacy Policy"
        backgroundImage="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
      />

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-lg font-medium text-primary-700">Please read our Privacy Policy carefully! Last Update: 25th May, 2014</p>
              <p>Big Trading Company Limited is well aware of the importance of personal information of our customers, that is collected through the course of business activities. Big Trading protects personal information from security threats with the following Privacy Policy and committed to handle the data sensibly. This privacy policy describes what information we collect from our platforms and third-parties and how this data is used and shared.</p>
            </div>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">1. What kind of information do we collect?</h2>
            <p>Big Trading collects and stores information entered or provided by you at Big Trading website, third-party services on our website or any other method of transmission. Big Trading uses personal information according to the purposes defined in this policy.</p>
            <p>There are cases in which you may not want to share certain information with Big Trading, and we respect your decision. However certain information are necessary to do business with Big Trading. If you decide to not share the required information, Big Trading will be unable to offer you our services.</p>
            
            <p className="font-medium mt-4">We collect data in the following ways:</p>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">1. Information submitted by you at Big Trading or third-party services</h3>
            <p>Big Trading collects contact information such as your name, email address, country, telephone/mobile/fax number, etc for verification and to contact you for business purpose.</p>
            <p>A valid email address along with your name and country of residence are required to create a Big Trading Member Account.</p>
            <p>We also collect and store your inquiries and contacts in order to reply to your requests, this help us understand which products and services interest you, assist us with developing a more personalized and improved user experience, supervise how our services have been delivered to you, and find out how we can improve your overall experience with Big Trading. Communication channels used to provide these services include email, social media, phone calls, whatsapp, skype, line, viber etc.</p>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">2. Information submitted by you on social media platforms</h3>
            <p>Big Trading uses social media platforms to establish more sincere relationships with our users. As social media are public communication platforms, we receive the reactions you place on the content we publish. You may perform actions such as subscription requests, general comments, or direct messages. There is a possibility that we may collect and process this information for the purposes of providing our services.</p>
            <p>Although users have the freedom to express their opinion by placing public comments, we reserve the right to exclude any comments that we think may contain disrespectful or harmful content, be in violation of any laws, or be a security risk to us or our users.</p>
            <p>The social media channels we use each have their own designated Privacy/Cookies Policy and Privacy/Cookies Settings that prompt you for your consent for them to access, process, and collect your data. This includes controls for you be in control of which information you choose to share.</p>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">3. Cookies (Browsing Information)</h3>
            <p>A cookie is a small text file that a website saves on your computer or mobile device when you visit a site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.</p>
            <p>We use cookies for a variety of functions including keeping you logged in to your account page; memorizing entered information for your convenience; providing an analytical basis that allows us to improve items such as communication with you and user experience; seeing if our emails are received, read and/or deliver value to you; and providing relevant ads that might interest you.</p>
            <p>If you do not consent to our usage of cookies, we advise you to adjust your browser settings, update your interest-based ads settings, or refrain from using our website. Most browsers have an option to utilize add-ons to prevent the usage of cookies, and many advertising groups offer opt-out tools to give you control of what you want to see. However, by deciding to block or reject cookies, some features on our website may be disabled. Keeping cookies enabled will ensure full functionality of our website.</p>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">4. Contact History</h3>
            <p>A record of your contact history is maintained and used for the purpose of developing improvements to our services. They help us safeguard mutual interests and facilitate our customer service team by serving as a reference source when providing our services.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">2. What information you have access to?</h2>
            <p>At any point or time, you have the right to access, correct, and/or limit your personal data. You should decide to control the amount of data you share with us, including the complete removal of consent. You can also download a copy of your personal data. You hold the right to request the removal of your personal information at no cost. Requests for any of the above-mentioned cases can be made to bigtradingjp@gmail.com. Upon requesting to remove the personal records, please advise that it may take up to 30 days to complete processing.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">3. Personal Data Lifetime</h2>
            <p>Whenever personal information is given to us, we will indicate how long it will be stored for. In the case that nothing is mentioned, we follow these principles:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Information is held onto for the time that is taken to complete the activities we have described.</li>
              <li>We consider the type of the information collected and any other legal requirements that need to be taken into account.</li>
              <li>We don't keep your information for longer than we have to. For inactive accounts in our system, we may send a confirmation email notifying of account closure if no further action is taken.</li>
            </ul>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">Sharing of Personal Data to trusted Third-Parties</h3>
            <p>There are cases when your personal data are shared with a third-party in order to provide our services.</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>We share your information collected through inquiries and contacts submitted on our portal with the dealers and exporters registered with us, they in turn provide offers for your vehicle requirement. It is necessary to share the information in order to get you the vehicles of your interest from our platform.</li>
              <li>The dealers may require your information for internal administrative purposes (e.g. payment matters, issuing of invoices, or delivery of commodities), which is necessary for the business and providing you the vehicle of your interest.</li>
              <li>It becomes necessary to disclose your information to comply with court orders, subpoenas, or any other legal process or to exercise our legal rights.</li>
              <li>It becomes necessary to share information in pursuance of investigation, prevention, or taking action against any illegal activities, fraud, or threatening situations to any person, violation of our Terms of Use, or alternatively required by law.</li>
            </ul>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">4. Data transfers, storage and the global handling of your personal information</h2>
            <p>The main office of Big Trading Company Limited is located in Kuwana, Mie Ken, Japan.</p>
            <p>There may be situations in which we are required to transfer your personal data to countries or territories that may not have the same standard of data protection as your country. We make sure that business partners such as third-party our shipping companies are adherent to our standards for security, including but not limited to confidentiality of personal information.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">5. Age Restrictions</h2>
            <p>We do not sell vehicles or any products for purchase by minors below age of 18 years. Minors may use Big Trading website only with adult supervision. We do not knowingly gather personal information from children under the legal age of majority according to each specific country we deal with.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">6. Security Measures</h2>
            <p>We aim to ensure that your information is secure at every step of processing, and that is why we implement the following measures to protect it when it is being sent or handled.</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Secure browsing via our official website (SSL Certificate)</li>
              <li>Educate employees - Social media protocol, internet usage policies</li>
              <li>Planning and preparing for a security breach</li>
              <li>Data backup</li>
              <li>Firewall</li>
            </ul>
            
            <h3 className="text-xl font-display font-semibold mt-6 mb-3">Contact Information</h3>
            <p>If you have any questions concerning our handling of your personal information, would like to request a copy, amend, or delete your personal data, or provide feedback regarding our privacy policy, please email us at bigtradingjp@gmail.com or send physical mail to the following address.</p>
            <p className="mt-4">
              <strong>Big Trading Company Limited</strong><br />
              Kisosaki-cho, Karoto 553<br />
              Kuwana, Mie Ken<br />
              Japan
            </p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">7. Changes to this Privacy Policy</h2>
            <p>We reserve the right to modify our Privacy Policy from time to time without notifying users. We recommend that you consult this Privacy Policy on a regular basis. You are deemed to have understood and agreed that all Collected Information (whether or not collected prior to or after the new policy became effective) shall be governed by the newest Privacy Policy then in effect. If you do not agree to the new changes in our Privacy Policy, you should contact Big Trading in writing and specifically request that we remove all your collected Information in our possession.</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicyPage;
