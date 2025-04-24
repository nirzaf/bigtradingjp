import { Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-12 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1844C6 0%, #3E5AC1 100%)' }}>
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20"
          style={{ background: '#F76C09' }}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/5 bottom-0 w-24 h-24 rounded-full opacity-10"
          style={{ background: '#E77D2E' }}
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="md:w-3/5 text-left">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
                <span className="inline-block relative">
                  {t('cta.title')}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#F76C09] to-[#E77D2E]"></span>
                </span>
              </h2>

              <p className="text-sm md:text-base text-[#F7F7EA]/90 mb-0 md:pr-4">
                {t('cta.description')}
              </p>
            </div>

            <div className="md:w-2/5 flex flex-col sm:flex-row md:flex-col gap-3">
              <motion.a
                href="tel:+81804213-9008"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm transition-all duration-300 relative overflow-hidden"
                style={{ background: '#F76C09' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F76C09] to-[#E77D2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{t('cta.callUs')}</span>
              </motion.a>

              <motion.a
                href="https://wa.me/+81804213-9008"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 text-white font-medium text-sm transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                href="/contact"
                className="group flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#1844C6] font-medium text-sm transition-all duration-300 hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                <span>{t('cta.contactUs')}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
