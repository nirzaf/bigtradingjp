import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import WideBanner from './components/ui/WideBanner';
import WhatsAppButton from './components/ui/WhatsAppButton';
import FloatingLanguageSwitcher from './components/ui/FloatingLanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const VehicleDetailPage = lazy(() => import('./pages/VehicleDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/vehicles/:vehicleId" element={<VehicleDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <div className="mt-8 mb-0">
          <WideBanner
            imageSrc="/huge-used-car-sale-peugeot-banner.jpg"
            altText="Huge Used Car Sale Banner"
            link="/"
          />
        </div>
        <Footer />
        <WhatsAppButton />
        <FloatingLanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;