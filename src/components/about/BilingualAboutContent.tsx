import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const BilingualAboutContent: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About BIG TRADING",
      paragraph1: "Big Trading Company Ltd. began its journey in 2015, rooted in the vibrant industrial region of Kuwana, Mie Ken, Japan. Strategically located in Kisosaki-cho, Karoto 553, the company has grown steadily over the past decade, establishing a solid presence in Trucking & Equipment, Exports, Retailing, and Consultancy.",
      paragraph2: "With 10 years of experience in both local and international trading, Big Trading has built a reputation for reliability, industry expertise, and a forward-thinking approach. Operating under the Big Trading banner, the company is committed to delivering excellence and forging lasting relationships with clients across the globe.",
      paragraph3: "Driven by a vision to transcend borders, Big Trading leverages its deep industry knowledge to serve a diverse and ever-growing clientele. The company remains focused on sustainable growth, innovation, and customer satisfaction, positioning itself as a leader in the world of global trade.",
      contact: "For inquiries or collaborations, please reach out at",
      email: "bigtradingjp@gmail.com",
      or: "or",
      callUs: "call us",
    },
    ja: {
      title: "BIG TRADINGについて",
      paragraph1: "ビッグトレーディング株式会社は2015年、日本の三重県桑名市の活気ある工業地域に根ざして設立されました。木曽崎町、嘉郎戸553に戦略的に位置し、当社は過去10年間で着実に成長し、トラック・機器、輸出、小売、コンサルタンシーの分野で確固たる地位を確立しています。",
      paragraph2: "国内外の取引において10年の経験を持つビッグトレーディングは、信頼性、業界の専門知識、そして先見性のあるアプローチで評判を築いてきました。ビッグトレーディングの旗印の下、当社は卓越性を提供し、世界中の顧客との永続的な関係を築くことに尽力しています。",
      paragraph3: "国境を超えるというビジョンに導かれ、ビッグトレーディングはその深い業界知識を活かして、多様で絶えず成長する顧客層にサービスを提供しています。当社は持続可能な成長、革新、そして顧客満足に焦点を当て、グローバル貿易の世界でリーダーとしての地位を確立しています。",
      contact: "お問い合わせやコラボレーションについては、",
      email: "bigtradingjp@gmail.com",
      or: "または",
      callUs: "お電話",
      callUsText: "でご連絡ください。",
    }
  };

  const currentContent = language === 'en' ? content.en : content.ja;

  return (
    <div className="bg-[#FEFEF5] p-6 rounded-lg shadow-sm">
      <h2 className="text-3xl font-display font-bold mb-4 text-primary-700">{currentContent.title}</h2>
      
      <p className="mb-4 text-secondary-700">
        {currentContent.paragraph1}
      </p>
      
      <p className="mb-4 text-secondary-700">
        {currentContent.paragraph2}
      </p>
      
      <p className="mb-4 text-secondary-700">
        {currentContent.paragraph3}
      </p>
      
      <p className="text-secondary-700">
        {currentContent.contact}{' '}
        <a href="mailto:bigtradingjp@gmail.com" className="text-primary-700 hover:text-primary-900 transition-colors">
          {currentContent.email}
        </a>{' '}
        {currentContent.or}{' '}
        <a href="tel:+81804213-9008" className="text-primary-700 hover:text-primary-900 transition-colors">
          {currentContent.callUs}
        </a>
        {language === 'ja' ? (content.ja.callUsText || '') : '.'}
      </p>
    </div>
  );
};

export default BilingualAboutContent;
