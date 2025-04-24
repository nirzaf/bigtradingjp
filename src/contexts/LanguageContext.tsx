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
    'footer.quickLinks': 'Quick Links',
    'footer.aboutUs': 'About Us',
    'footer.ourProducts': 'Our Products',
    'footer.motorVehicles': 'Motor Vehicles',
    'footer.spareParts': 'Spare Parts',
    'footer.constructionMachinery': 'Construction Machinery',
    'footer.heavyEquipment': 'Heavy Equipment',
    'footer.contactUs': 'Contact Us',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.companyDescription': 'Established in 2015, BIG TRADING specializes in exporting high-quality motor vehicles, spare parts, and construction machinery worldwide. Based in Kuwana, Mie Ken, Japan, we deliver excellence and reliability to our global clients.',

    // About Page
    'about.title': 'About BIG TRADING',
    'about.subtitle': 'Your Trusted Partner in Vehicle Export',
    'about.ourStory': 'Our Story',
    'about.ourStoryContent': 'Founded in 2015 in Kuwana, Mie Ken, Japan, BIG TRADING has grown from a small local business to a respected international exporter of vehicles and machinery. Our journey began with a simple mission: to provide high-quality Japanese vehicles to international markets with transparency and integrity.',
    'about.ourMission': 'Our Mission',
    'about.ourMissionContent': 'To deliver exceptional Japanese vehicles and machinery to global clients with uncompromising quality, transparent pricing, and personalized service that exceeds expectations.',
    'about.ourValues': 'Our Values',
    'about.value1Title': 'Quality',
    'about.value1Content': 'We never compromise on the quality of our vehicles and machinery.',
    'about.value2Title': 'Integrity',
    'about.value2Content': 'We operate with complete transparency and honesty in all our dealings.',
    'about.value3Title': 'Customer Focus',
    'about.value3Content': 'We put our customers\' needs at the center of everything we do.',
    'about.value4Title': 'Excellence',
    'about.value4Content': 'We strive for excellence in every aspect of our business.',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d Love to Hear From You',
    'contact.getInTouch': 'Get in Touch',
    'contact.getInTouchContent': 'Have questions about our vehicles or services? Our team is ready to assist you. Reach out to us through any of the following channels:',
    'contact.officeAddress': 'Office Address',
    'contact.phoneNumber': 'Phone Number',
    'contact.emailAddress': 'Email Address',
    'contact.businessHours': 'Business Hours',
    'contact.businessHoursContent': 'Monday - Friday: 9:00 AM - 6:00 PM (JST)',
    'contact.contactForm': 'Contact Form',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'Your Email',
    'contact.phonePlaceholder': 'Your Phone Number',
    'contact.messagePlaceholder': 'Your Message',
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
    'footer.quickLinks': 'クイックリンク',
    'footer.aboutUs': '会社概要',
    'footer.ourProducts': '取扱製品',
    'footer.motorVehicles': '自動車',
    'footer.spareParts': '部品',
    'footer.constructionMachinery': '建設機械',
    'footer.heavyEquipment': '重機',
    'footer.contactUs': 'お問い合わせ',
    'footer.privacyPolicy': 'プライバシーポリシー',
    'footer.termsOfService': '利用規約',
    'footer.companyDescription': '2015年に設立されたBIG TRADINGは、高品質の自動車、部品、建設機械を世界中に輸出することを専門としています。日本の三重県桑名市を拠点に、世界中のお客様に卓越した品質と信頼性をお届けしています。',

    // About Page
    'about.title': 'BIG TRADINGについて',
    'about.subtitle': '車両輸出における信頼できるパートナー',
    'about.ourStory': '私たちの物語',
    'about.ourStoryContent': '2015年に日本の三重県桑名市で設立されたBIG TRADINGは、小さな地元企業から車両や機械の国際的な輸出業者として成長してきました。私たちの旅は、透明性と誠実さをもって高品質の日本車を国際市場に提供するという単純な使命から始まりました。',
    'about.ourMission': '私たちの使命',
    'about.ourMissionContent': '妥協のない品質、透明な価格設定、そして期待を超えるパーソナライズされたサービスで、世界中のお客様に優れた日本車と機械をお届けすること。',
    'about.ourValues': '私たちの価値観',
    'about.value1Title': '品質',
    'about.value1Content': '私たちは車両や機械の品質に妥協することはありません。',
    'about.value2Title': '誠実さ',
    'about.value2Content': '私たちはすべての取引において完全な透明性と誠実さを持って運営しています。',
    'about.value3Title': '顧客重視',
    'about.value3Content': '私たちはお客様のニーズをすべての活動の中心に置いています。',
    'about.value4Title': '卓越性',
    'about.value4Content': '私たちはビジネスのあらゆる側面で卓越性を追求しています。',

    // Contact Page
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'ご連絡をお待ちしております',
    'contact.getInTouch': 'お問い合わせ方法',
    'contact.getInTouchContent': '車両やサービスについてご質問がありますか？私たちのチームがお手伝いいたします。以下のいずれかの方法でお問い合わせください：',
    'contact.officeAddress': '事務所住所',
    'contact.phoneNumber': '電話番号',
    'contact.emailAddress': 'メールアドレス',
    'contact.businessHours': '営業時間',
    'contact.businessHoursContent': '月曜日〜金曜日：午前9時〜午後6時（日本時間）',
    'contact.contactForm': 'お問い合わせフォーム',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.phone': '電話番号',
    'contact.message': 'メッセージ',
    'contact.submit': '送信',
    'contact.namePlaceholder': 'お名前',
    'contact.emailPlaceholder': 'メールアドレス',
    'contact.phonePlaceholder': '電話番号',
    'contact.messagePlaceholder': 'メッセージ内容',
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
