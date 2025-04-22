import { motion } from 'framer-motion';
import { Search, CircleDollarSign, ThumbsUp, Award } from 'lucide-react';

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureSection = () => {
  const features: FeatureItem[] = [
    {
      icon: <Search className="w-8 h-8 text-primary-800" />,
      title: "Curated Selection",
      description: "Each vehicle in our inventory is hand-selected for its exceptional quality and condition."
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-primary-800" />,
      title: "Transparent Pricing",
      description: "Our no-haggle pricing ensures you always get a fair deal with no hidden fees."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-primary-800" />,
      title: "Premium Service",
      description: "Enjoy concierge-level service from your first inquiry to long after your purchase."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-800" />,
      title: "Quality Guarantee",
      description: "All vehicles undergo rigorous inspection and come with a comprehensive warranty."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">Why Choose BIG TRADING</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We offer an unmatched selection of performance vehicles and construction equipment with transparent pricing and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
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
