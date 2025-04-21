import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-16"
    >
      <div className="container-custom text-center">
        <AlertCircle className="w-20 h-20 mx-auto text-error-500 mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          404 - Page Not Found
        </h1>
        
        <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-800 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;