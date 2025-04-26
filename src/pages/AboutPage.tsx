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
      <section className="py-10 sm:py-16">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 uppercase leading-tight">{t('about.title')}</h2>
              <p className="text-sm sm:text-base text-secondary-700 mb-3 sm:mb-4 leading-relaxed">
                {t('about.ourStoryContent')}
              </p>
              <p className="text-sm sm:text-base text-secondary-700 mb-3 sm:mb-4 leading-relaxed">
                {t('about.experienceText')}
              </p>
              <p className="text-sm sm:text-base text-secondary-700 mb-3 sm:mb-4 leading-relaxed">
                {t('about.visionText')}
              </p>
              <p className="text-sm sm:text-base text-secondary-700 mb-3 sm:mb-4 leading-relaxed">
                {t('about.inquiryText1')}{' '}
                <a href="mailto:bigtradingjp@gmail.com" className="text-primary-700 hover:text-primary-900 transition-colors inline-block">{t('about.emailUs')}</a>{' '}
                {t('about.inquiryText2')}{' '}
                <a href="tel:+81804213-9008" className="text-primary-700 hover:text-primary-900 transition-colors inline-block">{t('about.callUs')}</a>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-full mb-8 lg:mb-0 order-1 lg:order-2"
            >
              <div className="bg-primary-900 absolute top-6 -left-6 w-72 h-72 rounded-lg hidden sm:block"></div>
              <img
                src="/images/logo.png"
                alt="Big Trading Company Logo"
                className="w-full h-auto rounded-lg shadow-xl relative z-10 bg-white p-3 sm:p-4"
                loading="lazy"
              />
              <div className="bg-accent-400 absolute -bottom-6 -right-6 w-72 h-72 rounded-lg hidden sm:block"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mission & Values */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 uppercase leading-tight">{t('about.coreValues')}</h2>
            <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.coreValuesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Value 1 */}
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-primary-100 rounded-full mb-3 sm:mb-4 mx-auto">
                <Shield className="w-7 sm:w-8 h-7 sm:h-8 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 text-center leading-tight">{t('about.globalExpertise')}</h3>
              <p className="text-sm sm:text-base text-secondary-700 text-center leading-relaxed">
                {t('about.globalExpertiseDesc')}
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-primary-100 rounded-full mb-3 sm:mb-4 mx-auto">
                <Star className="w-7 sm:w-8 h-7 sm:h-8 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 text-center leading-tight">{t('about.qualityAssurance')}</h3>
              <p className="text-sm sm:text-base text-secondary-700 text-center leading-relaxed">
                {t('about.qualityAssuranceDesc')}
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-primary-100 rounded-full mb-3 sm:mb-4 mx-auto">
                <Users className="w-7 sm:w-8 h-7 sm:h-8 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 text-center leading-tight">{t('about.customerPartnership')}</h3>
              <p className="text-sm sm:text-base text-secondary-700 text-center leading-relaxed">
                {t('about.customerPartnershipDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="py-10 sm:py-16">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 uppercase leading-tight">{t('about.businessAreas')}</h2>
            <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.businessAreasDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Business Area 1 */}
            <motion.div
              className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-3 sm:mb-4 mx-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Car className="w-8 sm:w-10 h-8 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 leading-tight">{t('about.truckingEquipment')}</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                {t('about.truckingEquipmentDesc')}
              </p>
            </motion.div>

            {/* Business Area 2 */}
            <motion.div
              className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-3 sm:mb-4 mx-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <CircleDollarSign className="w-8 sm:w-10 h-8 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 leading-tight">{t('about.exports')}</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                {t('about.exportsDesc')}
              </p>
            </motion.div>

            {/* Business Area 3 */}
            <motion.div
              className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-3 sm:mb-4 mx-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <ShoppingBag className="w-8 sm:w-10 h-8 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 leading-tight">{t('about.retailing')}</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                {t('about.retailingDesc')}
              </p>
            </motion.div>

            {/* Business Area 4 */}
            <motion.div
              className="text-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative mb-3 sm:mb-4 mx-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-primary-100 flex items-center justify-center">
                <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-primary-800" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3 leading-tight">{t('about.consultancy')}</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                {t('about.consultancyDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 sm:py-16 bg-primary-900 text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 text-white uppercase leading-tight">{t('about.whyChooseUs')}</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('about.whyChooseUsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Reason 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-primary-800/50 rounded-lg"
            >
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-accent-400 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 text-white leading-tight">{t('about.globalNetwork')}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
              className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-primary-800/50 rounded-lg"
            >
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-accent-400 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 text-white leading-tight">{t('about.industryExpertise')}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
              className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-primary-800/50 rounded-lg"
            >
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-accent-400 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 text-white leading-tight">{t('about.customizedSolutions')}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {t('about.customizedSolutionsDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 sm:mb-4 uppercase leading-tight">{t('about.readyToPartner')}</h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            {t('about.readyToPartnerDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="tel:+81804213-9008" className="btn btn-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              {t('about.callUsBtn')}
            </a>
            <a href="/contact" className="btn btn-accent px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              {t('about.contactUsBtn')}
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;