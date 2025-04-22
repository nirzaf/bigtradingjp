import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface CategoryGalleryProps {
  categories: CategoryItem[];
}

const CategoryGallery = ({ categories }: CategoryGalleryProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">Our Categories</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore our wide range of vehicles and construction equipment categories.<br />
            For inquiries, call us at <a href="tel:+81804213-9008" className="text-primary-600 hover:text-primary-800 transition-colors">+81 80-4213-9008</a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={category.link} className="block relative overflow-hidden rounded-lg aspect-[16/9]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end transition-all duration-300 group-hover:from-primary-900/90">
                  <div className="w-full p-6">
                    <h3 className="text-white text-xl md:text-2xl font-display font-semibold transition-transform duration-300 group-hover:translate-y-[-5px]">
                      {category.name}
                    </h3>
                    <p className="text-white/0 text-sm transition-all duration-300 group-hover:text-white/90">Click to explore</p>
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
