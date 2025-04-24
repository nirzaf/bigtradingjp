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
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Big Trading Company Limited.</p>
              <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
            </div>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">1. Use of Service</h2>
            <p>The Big Trading website and its content is intended for use by individuals who are at least 18 years of age or the age of majority in their jurisdiction, whichever is greater. If you do not meet this age requirement, you may not use the Service.</p>
            <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">2. Products and Services</h2>
            <p>Big Trading Company Limited specializes in exporting motor vehicles, spare parts, and construction machinery. All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.</p>
            <p>Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
            <p>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">3. Accuracy of Information</h2>
            <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.</p>
            <p>Any reliance on the material on this site is at your own risk. This site may contain certain historical information which is not current and is provided for reference only.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features and functionality are and will remain the exclusive property of Big Trading Company Limited and its licensors. The Service is protected by copyright, trademark, and other laws of both Japan and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Big Trading Company Limited.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">5. User Content</h2>
            <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p>By posting content to the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any content you submit, post or display on or through the Service and you are responsible for protecting those rights.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">6. Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Big Trading Company Limited.</p>
            <p>Big Trading Company Limited has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Big Trading Company Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">7. Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">8. Limitation Of Liability</h2>
            <p>In no event shall Big Trading Company Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">9. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Japan, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">10. Changes to Terms of Service</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">11. Contact Us</h2>
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
