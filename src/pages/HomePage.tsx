import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import HeroSection from '../components/home/HeroSection';
import InstagramFeed from '../components/home/InstagramFeed';
import FeatureSection from '../components/home/FeatureSection';
import VehicleGallery from '../components/home/VehicleGallery';
import CallToAction from '../components/home/CallToAction';
import CategoryGallery from '../components/ui/CategoryGallery';
import { categories } from '../data/categories';
import '../styles/instagram-embed.css';

const HomePage = () => {
  const { language } = useLanguage();
  
  // Generate structured data for the organization
  const generateOrganizationStructuredData = () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'BIG TRADING',
      'url': 'https://www.bigtrading.com',
      'logo': 'https://www.bigtrading.com/images/logo.png',
      'description': language === 'en' ? 
        'Leading exporter of high-quality Japanese vehicles, construction machinery, and spare parts.' :
        '高品質の日本車、建設機械、スペアパーツの主要輸出業者。',
      'sameAs': [
        'https://www.instagram.com/bigtrading',
        'https://www.facebook.com/bigtrading'
      ]
    };
    
    return JSON.stringify(structuredData);
  };
  
  // Generate structured data for the website
  const generateWebsiteStructuredData = () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'BIG TRADING',
      'url': 'https://www.bigtrading.com',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.bigtrading.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    };
    
    return JSON.stringify(structuredData);
  };
  
  return (
    <>
      <Helmet>
        <title>{language === 'en' ? 'BIG TRADING - Quality Vehicle & Machinery Exports' : 'BIG TRADING - 高品質な車両・機械輸出'}</title>
        <meta name="description" content={language === 'en' ? 
          'Leading exporter of high-quality Japanese vehicles, construction machinery, and spare parts with worldwide shipping.' :
          '高品質の日本車、建設機械、スペアパーツの主要輸出業者。世界中への配送サービスを提供。'} />
        <meta name="keywords" content={language === 'en' ? 
          'vehicle export, Japanese cars, construction machinery, Mitsubishi, Toyota, Komatsu, Caterpillar, spare parts, used vehicles' :
          '車両輸出, 日本車, 建設機械, 三菱, トヨタ, コマツ, キャタピラー, スペアパーツ, 中古車'} />
        <link rel="canonical" href={`https://www.bigtrading.com/${language === 'ja' ? 'ja/' : ''}`} />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : 'ja_JP'} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={language === 'en' ? 'BIG TRADING - Quality Vehicle & Machinery Exports' : 'BIG TRADING - 高品質な車両・機械輸出'} />
        <meta property="og:description" content={language === 'en' ? 
          'Leading exporter of high-quality Japanese vehicles, construction machinery, and spare parts with worldwide shipping.' :
          '高品質の日本車、建設機械、スペアパーツの主要輸出業者。世界中への配送サービスを提供。'} />
        <meta property="og:url" content={`https://www.bigtrading.com/${language === 'ja' ? 'ja/' : ''}`} />
        <meta property="og:site_name" content="BIG TRADING" />
        <script type="application/ld+json">{generateOrganizationStructuredData()}</script>
        <script type="application/ld+json">{generateWebsiteStructuredData()}</script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
      <HeroSection />
      <FeatureSection />
      <CategoryGallery categories={categories} />
      <VehicleGallery />
      <InstagramFeed />
      <CallToAction />
    </motion.div>
    </>
  );
};

export default HomePage;