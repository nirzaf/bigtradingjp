import { motion } from 'framer-motion';
import { Search, CircleDollarSign, ThumbsUp, Award } from 'lucide-react';
import '../ui/3DIconEffects.css';

// Color constants from color-codes.md
const COLORS = {
  byzantineBlue: '#3E5AC1',
  ivory: '#F7F7EA',
  white: '#FEFEFE',
  pumpkin: '#F76C09',
  violetBlue: '#1844C6',
  safetyOrange: '#E77D2E'
};

interface FeatureItem {
  icon: JSX.Element;
  backIcon: JSX.Element;
  title: string;
  description: string;
}

const FeatureSection = () => {
  const features: FeatureItem[] = [
    {
      icon: <Search className="w-12 h-12" style={{ color: COLORS.byzantineBlue }} />,
      backIcon: <Search className="w-12 h-12" />,
      title: "Curated Selection",
      description: "Each vehicle in our inventory is hand-selected for its exceptional quality and condition."
    },
    {
      icon: <CircleDollarSign className="w-12 h-12" style={{ color: COLORS.byzantineBlue }} />,
      backIcon: <CircleDollarSign className="w-12 h-12" />,
      title: "Transparent Pricing",
      description: "Our no-haggle pricing ensures you always get a fair deal with no hidden fees."
    },
    {
      icon: <ThumbsUp className="w-12 h-12" style={{ color: COLORS.byzantineBlue }} />,
      backIcon: <ThumbsUp className="w-12 h-12" />,
      title: "Premium Service",
      description: "Enjoy concierge-level service from your first inquiry to long after your purchase."
    },
    {
      icon: <Award className="w-12 h-12" style={{ color: COLORS.byzantineBlue }} />,
      backIcon: <Award className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "All vehicles undergo rigorous inspection and come with a comprehensive warranty."
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233e5ac1\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-3xl font-display font-bold mb-2 uppercase relative inline-block">
              Why Choose <span className="text-primary-600">BIG TRADING</span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{ background: `linear-gradient(90deg, ${COLORS.byzantineBlue}, ${COLORS.violetBlue}, ${COLORS.pumpkin}, ${COLORS.safetyOrange})` }}
                initial={{ width: 0, left: '50%' }}
                whileInView={{ width: '100%', left: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h2>
          </motion.div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mt-6">
            We offer an unmatched selection of performance vehicles and construction equipment with transparent pricing and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card text-center p-8 pt-10 pb-8 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon-3d-container">
                <div className="icon-3d icon-float">
                  <div className="icon-3d-front icon-bg icon-shine icon-wave">
                    <div className="icon-glow icon-orbit">
                      <div className="flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div className="icon-3d-back icon-pulse">
                    <div className="flex items-center justify-center">
                      {feature.backIcon}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
