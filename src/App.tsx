import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

import WhatsAppButton from './components/ui/WhatsAppButton';
import FloatingLanguageSwitcher from './components/ui/FloatingLanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const VehiclesPage = lazy(() => import('./pages/VehiclesPage'));
const VehicleDetailPage = lazy(() => import('./pages/VehicleDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CompanyInfoPage = lazy(() => import('./pages/CompanyInfoPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname, location.search]);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>

              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/vehicles" element={<VehiclesPage />} />
                <Route path="/vehicles/:vehicleId" element={<VehicleDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/company-info" element={<CompanyInfoPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>

          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <FloatingLanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
