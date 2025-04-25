import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck, DollarSign, Globe
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie-player';
import truckAnimation from '../../assets/animations/truck-animation.json';
import BusinessAdvantageIcon from './BusinessAdvantageIcon';

// Color constants from color-codes.md
const COLORS = {
  byzantineBlue: '#3E5AC1',
  ivory: '#F7F7EA',
  white: '#FEFEFE',
  pumpkin: '#F76C09',
  violetBlue: '#1844C6',
  safetyOrange: '#E77D2E'
};

interface AdvantageItem {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const BusinessObjectivesSection: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Using enhanced icons from BusinessAdvantageIcon component

  const advantages: AdvantageItem[] = [
    {
      id: 1,
      icon: <BusinessAdvantageIcon id={1} delay={0.1} />,
      title: t('business.advantage1'),
      description: t('business.advantage1Desc')
    },
    {
      id: 2,
      icon: <BusinessAdvantageIcon id={2} delay={0.2} />,
      title: t('business.advantage2'),
      description: t('business.advantage2Desc')
    },
    {
      id: 3,
      icon: <BusinessAdvantageIcon id={3} delay={0.3} />,
      title: t('business.advantage3'),
      description: t('business.advantage3Desc')
    },
    {
      id: 4,
      icon: <BusinessAdvantageIcon id={4} delay={0.4} />,
      title: t('business.advantage4'),
      description: t('business.advantage4Desc')
    },
    {
      id: 5,
      icon: <BusinessAdvantageIcon id={5} delay={0.5} />,
      title: t('business.advantage5'),
      description: t('business.advantage5Desc')
    },
    {
      id: 6,
      icon: <BusinessAdvantageIcon id={6} delay={0.6} />,
      title: t('business.advantage6'),
      description: t('business.advantage6Desc')
    },
    {
      id: 7,
      icon: <BusinessAdvantageIcon id={7} delay={0.7} />,
      title: t('business.advantage7'),
      description: t('business.advantage7Desc')
    },
    {
      id: 8,
      icon: <BusinessAdvantageIcon id={8} delay={0.8} />,
      title: t('business.advantage8'),
      description: t('business.advantage8Desc')
    },
    {
      id: 9,
      icon: <BusinessAdvantageIcon id={9} delay={0.9} />,
      title: t('business.advantage9'),
      description: t('business.advantage9Desc')
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233e5ac1\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-3xl font-display font-bold mb-2 uppercase relative inline-block">
              {t('business.title')}
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ background: `linear-gradient(90deg, ${COLORS.byzantineBlue}, ${COLORS.violetBlue}, ${COLORS.pumpkin}, ${COLORS.safetyOrange})` }}
                initial={{ width: 0, left: '50%' }}
                animate={inView ? { width: '100%', left: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h2>
          </motion.div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto mt-4">
              {t('business.description')}
            </p>
            <div className="mt-4 bg-primary-50 px-6 py-2 rounded-full text-primary-700 font-medium inline-block border border-primary-200">
              {t('business.tagline')}
            </div>
          </div>
        </div>

        {/* Business Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary-700">
                {t('business.ourBusiness')}
              </h3>
              <p className="text-secondary-600 mb-4">
                {t('business.ourBusinessDesc')}
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 w-40 h-40">
              <Globe className="w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary-700">
                {t('business.constructionMachinery')}
              </h3>
              <p className="text-secondary-600 mb-4">
                {t('business.constructionMachineryDesc')}
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 w-40 h-40">
              <Truck className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Purchase Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-primary-700">
                {t('business.purchase')}
              </h3>
              <p className="text-secondary-600 mb-6">
                {t('business.purchaseDesc')}
              </p>
              <div className="inline-block">
                <a
                  href="/contact"
                  className="btn btn-primary px-6 py-3 text-base inline-flex items-center gap-2"
                >
                  <DollarSign className="w-5 h-5" />
                  {t('business.contactForAppraisal')}
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Lottie
                loop
                animationData={truckAnimation}
                play
                style={{ width: 300, height: 300 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Advantages Section */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold mb-8 text-center"
          >
            {t('business.advantages')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4"
                style={{ borderColor: COLORS.byzantineBlue }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1 p-3 rounded-full flex items-center justify-center shadow-sm" style={{ width: '56px', height: '56px' }}>
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="bg-primary-100 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                        {advantage.id}
                      </span>
                      {advantage.title}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 relative overflow-hidden rounded-2xl shadow-2xl border border-white/10"
        >
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-violetBlue to-byzantineBlue"
               style={{ background: `linear-gradient(135deg, ${COLORS.violetBlue} 0%, ${COLORS.byzantineBlue} 100%)` }}>
            {/* Animated elements */}
            <motion.div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
              style={{ background: COLORS.pumpkin }}
              animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/4 -bottom-20 w-40 h-40 rounded-full opacity-10"
              style={{ background: COLORS.safetyOrange }}
              animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            />

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")` }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  background: i % 2 === 0 ? COLORS.ivory : COLORS.safetyOrange,
                  opacity: Math.random() * 0.3 + 0.1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -30 - 10, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 py-12 px-6 sm:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-white">
                <span className="relative inline-block">
                  {t('business.ctaTitle')}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pumpkin to-safetyOrange rounded-full"
                    style={{ background: `linear-gradient(to right, ${COLORS.pumpkin}, ${COLORS.safetyOrange})` }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                </span>
              </h3>

              <p className="mb-8 max-w-2xl mx-auto text-white text-lg">
                {t('business.ctaDescription')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn group relative overflow-hidden bg-white text-violetBlue hover:text-byzantineBlue px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ivory to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <Globe className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{t('business.contactUs')}</span>
                </motion.a>

                <motion.a
                  href="tel:+81804213-9008"
                  className="btn group relative overflow-hidden bg-pumpkin text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: COLORS.pumpkin }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pumpkin to-safetyOrange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, ${COLORS.pumpkin}, ${COLORS.safetyOrange})` }}/>
                  <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="relative z-10">{t('cta.callUs')}</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/+81804213-9008"
                  className="btn group relative overflow-hidden bg-green-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="relative z-10">WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessObjectivesSection;
