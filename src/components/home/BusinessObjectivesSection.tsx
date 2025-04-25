import React from 'react';
import { motion } from 'framer-motion';
import { Truck, DollarSign, Eraser, Globe, ShieldCheck, Clock, FileText, Package, Wrench } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie-player';
import truckAnimation from '../../assets/animations/truck-animation.json';

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
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages: AdvantageItem[] = [
    {
      id: 1,
      icon: <Clock className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage1'),
      description: t('business.advantage1Desc')
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage2'),
      description: t('business.advantage2Desc')
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage3'),
      description: t('business.advantage3Desc')
    },
    {
      id: 4,
      icon: <FileText className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage4'),
      description: t('business.advantage4Desc')
    },
    {
      id: 5,
      icon: <Truck className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage5'),
      description: t('business.advantage5Desc')
    },
    {
      id: 6,
      icon: <Eraser className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage6'),
      description: t('business.advantage6Desc')
    },
    {
      id: 7,
      icon: <FileText className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage7'),
      description: t('business.advantage7Desc')
    },
    {
      id: 8,
      icon: <Package className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
      title: t('business.advantage8'),
      description: t('business.advantage8Desc')
    },
    {
      id: 9,
      icon: <Wrench className="w-8 h-8" style={{ color: COLORS.byzantineBlue }} />,
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
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mt-6">
            {t('business.description')}
          </p>
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
                  <div className="mr-4 mt-1 bg-primary-50 p-3 rounded-full">
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
          className="text-center mt-12 bg-primary-700 text-white p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">{t('business.ctaTitle')}</h3>
          <p className="mb-6 max-w-2xl mx-auto">{t('business.ctaDescription')}</p>
          <a
            href="/contact"
            className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2"
          >
            <Globe className="w-5 h-5" />
            {t('business.contactUs')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessObjectivesSection;
