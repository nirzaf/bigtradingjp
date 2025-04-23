import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category } from '../../data/categories';

interface CategoryGalleryProps {
  categories: Category[];
}

const CategoryGallery = ({ categories }: CategoryGalleryProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4 uppercase relative inline-block">
            <span className="relative z-10">Our Categories</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200/50 -rotate-1 z-0"></span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-6">
            Explore our wide range of vehicles and construction equipment categories.
          </p>
          <div className="mt-6">
            <a href="tel:+81804213-9008" className="btn btn-primary px-6 py-3 text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
              Call Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px]"
            >
              <Link to={category.link} className="block relative overflow-hidden rounded-lg aspect-[16/9] bg-white shadow-inner">
                <div className="absolute inset-0 bg-white/10 z-0"></div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain p-2 relative z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-800/30 to-transparent flex items-end transition-all duration-300 group-hover:from-primary-900/80 group-hover:via-primary-800/40 z-20">
                  <div className="w-full p-6">
                    <h3 className="text-white text-xl md:text-2xl font-display font-bold tracking-wide transition-transform duration-300 group-hover:translate-y-[-5px] drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium transition-all duration-300 group-hover:text-white group-hover:translate-y-[-3px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Click to explore</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGallery;
