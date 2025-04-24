import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.vehicles': 'Vehicles',
    'nav.contact': 'Contact',
    'nav.language': 'Language',

    // Feature Section
    'feature.curatedSelection.title': 'Curated Selection',
    'feature.curatedSelection.description': 'Each vehicle in our inventory is hand-selected for its exceptional quality and condition.',
    'feature.transparentPricing.title': 'Transparent Pricing',
    'feature.transparentPricing.description': 'Our no-haggle pricing ensures you always get a fair deal with no hidden fees.',
    'feature.premiumService.title': 'Premium Service',
    'feature.premiumService.description': 'Enjoy concierge-level service from your first inquiry to long after your purchase.',
    'feature.qualityGuarantee.title': 'Quality Guarantee',
    'feature.qualityGuarantee.description': 'All vehicles undergo rigorous inspection and come with a comprehensive warranty.',
    'feature.whyChoose': 'Why Choose',
    'feature.whyChooseDescription': 'We offer an unmatched selection of performance vehicles and construction equipment with transparent pricing and exceptional service.',

    // Call to Action
    'cta.title': 'Ready to Find Your Perfect Vehicle?',
    'cta.description': 'Our team of experts is ready to help you find the perfect vehicle or equipment that matches your needs and requirements.',
    'cta.callUs': 'Call Us',
    'cta.contactUs': 'Contact Us',

    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.poweredBy': 'Powered by Quadrate Tech Solutions',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '会社概要',
    'nav.vehicles': '車両',
    'nav.contact': 'お問い合わせ',
    'nav.language': '言語',

    // Feature Section
    'feature.curatedSelection.title': '厳選されたセレクション',
    'feature.curatedSelection.description': '当社の在庫車両は、その優れた品質と状態のために厳選されています。',
    'feature.transparentPricing.title': '透明な価格設定',
    'feature.transparentPricing.description': '明朗な価格設定により、隠れた費用なしで常に公正な取引を保証します。',
    'feature.premiumService.title': 'プレミアムサービス',
    'feature.premiumService.description': '最初のお問い合わせからご購入後まで、コンシェルジュレベルのサービスをお楽しみください。',
    'feature.qualityGuarantee.title': '品質保証',
    'feature.qualityGuarantee.description': 'すべての車両は厳格な検査を受け、包括的な保証が付いています。',
    'feature.whyChoose': '選ばれる理由',
    'feature.whyChooseDescription': '当社は、透明な価格設定と卓越したサービスで、パフォーマンス車両と建設機器の比類のないセレクションを提供しています。',

    // Call to Action
    'cta.title': '理想の車両をお探しですか？',
    'cta.description': '当社の専門家チームが、お客様のニーズと要件に合った完璧な車両や機器を見つけるお手伝いをいたします。',
    'cta.callUs': 'お電話はこちら',
    'cta.contactUs': 'お問い合わせ',

    // Footer
    'footer.rights': '全著作権所有',
    'footer.poweredBy': 'Quadrate Tech Solutions 提供',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
