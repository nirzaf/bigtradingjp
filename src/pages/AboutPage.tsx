import { motion } from 'framer-motion';
import { Shield, Users, Star, Award, Clock, Sparkles, Car, CircleDollarSign, ShoppingBag, Briefcase } from 'lucide-react';

import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title={t('about.title')}
        subtitle={`${t('nav.home')}/${t('nav.about')}`}
        backgroundImage="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
      />

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-4 uppercase">{t('about.title')}</h2>
              <p className="text-secondary-700 mb-4">
                {t('about.ourStoryContent')}
              </p>
              <p className="text-secondary-700 mb-4">
                {t('about.experienceText')}
              </p>
              <p className="text-secondary-700 mb-4">
                {t('about.visionText')}
              </p>
              <p className="text-secondary-700 mb-4">
                {t('about.inquiryText1')}
                <a href="mailto:bigtradingjp@gmail.com" className="text-primary-700 hover:text-primary-900 transition-colors">{t('about.emailUs')}</a>
                {t('about.inquiryText2')}
                <a href="tel:+81804213-9008" className="text-primary-700 hover:text-primary-900 transition-colors">{t('about.callUs')}</a>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-900 absolute top-6 -left-6 w-72 h-72 rounded-lg"></div>
              <img
                src="/images/logo.png"
                alt="Big Trading Company Logo"
                className="w-full h-auto rounded-lg shadow-xl relative z-10 bg-white p-4"
              />
              <div className="bg-accent-400 absolute -bottom-6 -right-6 w-72 h-72 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">{t('about.coreValues')}</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('about.coreValuesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">{t('about.globalExpertise')}</h3>
              <p className="text-secondary-700 text-center">
                {t('about.globalExpertiseDesc')}
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Star className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">{t('about.qualityAssurance')}</h3>
              <p className="text-secondary-700 text-center">
                {t('about.qualityAssuranceDesc')}
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 mx-auto">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-center">{t('about.customerPartnership')}</h3>
              <p className="text-secondary-700 text-center">
                {t('about.customerPartnershipDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">{t('about.businessAreas')}</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('about.businessAreasDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business Area 1 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Car className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{t('about.truckingEquipment')}</h3>
              <p className="text-secondary-600">
                {t('about.truckingEquipmentDesc')}
              </p>
            </motion.div>

            {/* Business Area 2 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <CircleDollarSign className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{t('about.exports')}</h3>
              <p className="text-secondary-600">
                {t('about.exportsDesc')}
              </p>
            </motion.div>

            {/* Business Area 3 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{t('about.retailing')}</h3>
              <p className="text-secondary-600">
                {t('about.retailingDesc')}
              </p>
            </motion.div>

            {/* Business Area 4 */}
            <motion.div
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-4 mx-auto w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{t('about.consultancy')}</h3>
              <p className="text-secondary-600">
                {t('about.consultancyDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 text-white uppercase">{t('about.whyChooseUs')}</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('about.whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Award className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">{t('about.globalNetwork')}</h3>
                <p className="text-gray-300">
                  {t('about.globalNetworkDesc')}
                </p>
              </div>
            </motion.div>

            {/* Reason 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Sparkles className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">{t('about.industryExpertise')}</h3>
                <p className="text-gray-300">
                  {t('about.industryExpertiseDesc')}
                </p>
              </div>
            </motion.div>

            {/* Reason 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start p-6 bg-primary-800/50 rounded-lg"
            >
              <Clock className="w-10 h-10 text-accent-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold mb-2 text-white">{t('about.customizedSolutions')}</h3>
                <p className="text-gray-300">
                  {t('about.customizedSolutionsDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">{t('about.readyToPartner')}</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            {t('about.readyToPartnerDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+81804213-9008" className="btn btn-primary px-6 py-3 text-base">
              {t('about.callUsBtn')}
            </a>
            <a href="/contact" className="btn btn-accent px-6 py-3 text-base">
              {t('about.contactUsBtn')}
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;