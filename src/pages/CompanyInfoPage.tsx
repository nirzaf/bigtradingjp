import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import BilingualAboutContent from '../components/about/BilingualAboutContent';
import { useLanguage } from '../contexts/LanguageContext';

const CompanyInfoPage: React.FC = () => {
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
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <BilingualAboutContent />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CompanyInfoPage;
