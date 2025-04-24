import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { saveLanguagePreference } from '../utils/storage';
import { initializeLanguage } from '../utils/languageDetection';

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

    // Vehicle Gallery
    'vehicles.previousExports': 'Previous Exports',
    'vehicles.previousExportsDesc': 'Explore our past exports of premium vehicles and construction equipment. These examples showcase our quality standards and expertise in global trading.',
    'vehicles.allVehicles': 'All Vehicles',
    'vehicles.sedans': 'Sedans',
    'vehicles.construction': 'Construction',
    'vehicles.excavators': 'Excavators',
    'vehicles.bulldozers': 'Bulldozers',
    'vehicles.diesel': 'Diesel',
    'vehicles.sold': 'Sold',
    'vehicles.viewDetails': 'View Details',
    'vehicles.km': 'km',
    'vehicles.year': 'Year',
    'vehicles.mileage': 'Mileage',
    'vehicles.fuelType': 'Fuel Type',

    // Categories Section
    'categories.title': 'Our Categories',
    'categories.description': 'Explore our wide range of vehicles and construction equipment categories.',
    'categories.callUs': 'Call Us',
    'categories.clickToExplore': 'Click to explore',
    'categories.excavators': 'Excavators',
    'categories.vehicles': 'Vehicles',
    'categories.dumpTrucks': 'Dump Trucks',
    'categories.roadRollers': 'Road Rollers',
    'categories.motorGraders': 'Motor Graders',
    'categories.mobileCranes': 'Mobile Cranes',

    // Vehicle Detail Page
    'vehicle.contactForPricing': 'Contact for pricing',
    'vehicle.contactAboutVehicle': 'Contact About This Vehicle',
    'vehicle.vehicleNotFound': 'Vehicle Not Found',
    'vehicle.vehicleNotFoundDesc': 'Sorry, we couldn\'t find the vehicle you\'re looking for.',
    'vehicle.returnToHome': 'Return to Home',
    'vehicle.aboutThis': 'About This',
    'vehicle.keyFeatures': 'Key Features',
    'vehicle.vehicleInformation': 'Vehicle Information',
    'vehicle.year': 'Year',
    'vehicle.mileage': 'Mileage',
    'vehicle.transmission': 'Transmission',
    'vehicle.bodyType': 'Body Type',
    'vehicle.color': 'Color',
    'vehicle.performanceSpecs': 'Performance Specs',
    'vehicle.engine': 'Engine',
    'vehicle.power': 'Power',
    'vehicle.torque': 'Torque',
    'vehicle.acceleration': 'Acceleration',
    'vehicle.topSpeed': 'Top Speed',
    'vehicle.interestedInVehicle': 'I\'m interested in this',
    'vehicle.moreInfo': 'Can you provide more information?',

    // Vehicle Features
    'vehicle.recaro': 'Recaro Sport Seats',
    'vehicle.suspension': 'Upgraded Suspension',
    'vehicle.carbon': 'Carbon Fiber Accents',
    'vehicle.lsd': 'Limited Slip Differential',
    'vehicle.exhaust': 'Performance Exhaust System',
    'vehicle.wheels': 'Aftermarket Wheels',
    'vehicle.turbo': 'Turbo Boost Controller',
    'vehicle.lancer.description': 'The Mitsubishi Lancer Evolution delivers exhilarating performance with its rally-bred heritage. This tuned blue model features enhanced aerodynamics, precision handling, and aggressive styling that turns heads wherever it goes.',
    'vehicle.about': 'About this vehicle',

    // Vehicle Gallery Descriptions
    'vehicles.lancer.description': 'The Mitsubishi Lancer Evolution delivers exhilarating performance with its rally-bred heritage. This tuned blue model features enhanced aerodynamics, precision handling, and aggressive styling.',
    'vehicles.allion.description': 'The Toyota Allion combines elegant styling with practical functionality. This silver sedan offers a comfortable ride, excellent fuel efficiency, and ample interior space for daily commuting.',
    'vehicles.komatsu.wa70.description': 'The Komatsu WA70 Wheel Loader is a versatile and powerful construction vehicle designed for efficient material handling in various work environments.',
    'vehicles.caterpillar.320gc.description': 'The Caterpillar 320GC Excavator delivers exceptional performance and efficiency for demanding construction projects with reduced fuel consumption.',
    'vehicles.komatsu.d51px.description': 'The Komatsu D51PX Bulldozer is a powerful and versatile earthmoving machine designed for construction and mining applications with excellent stability.',
    'vehicles.caterpillar.140m.description': 'The Caterpillar 140M Motor Grader is a precision earthmoving machine designed for road construction and maintenance with advanced control systems.',

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
    'about.value3Content': 'We put our customers\'s needs at the center of everything we do.',
    'about.value4Title': 'Excellence',
    'about.value4Content': 'We strive for excellence in every aspect of our business.',
    'about.coreValues': 'Our Core Values',
    'about.coreValuesDescription': 'At Big Trading Company, we\'re guided by our commitment to excellence, integrity, and customer satisfaction in everything we do.',
    'about.globalExpertise': 'Global Expertise',
    'about.globalExpertiseDesc': 'With deep knowledge of international markets and trade regulations, we facilitate seamless transactions across borders and cultures.',
    'about.qualityAssurance': 'Quality Assurance',
    'about.qualityAssuranceDesc': 'We maintain rigorous quality control standards for all vehicles and equipment, ensuring our clients receive only the best products that meet their specific needs.',
    'about.customerPartnership': 'Customer Partnership',
    'about.customerPartnershipDesc': 'We view our clients as partners, building lasting relationships based on trust, reliability, and a deep understanding of their business needs and goals.',
    'about.businessAreas': 'Our Business Areas',
    'about.businessAreasDesc': 'Big Trading Company specializes in four key business areas, delivering expertise and excellence across multiple sectors.',
    'about.truckingEquipment': 'Trucking & Equipment',
    'about.truckingEquipmentDesc': 'Specializing in high-quality trucks, construction equipment, and heavy machinery for various industrial applications.',
    'about.exports': 'Exports',
    'about.exportsDesc': 'Facilitating international trade with expertise in export regulations, logistics, and cross-border transactions.',
    'about.retailing': 'Retailing',
    'about.retailingDesc': 'Providing premium vehicles and equipment to local markets with personalized service and competitive pricing.',
    'about.consultancy': 'Consultancy',
    'about.consultancyDesc': 'Offering expert advice on vehicle selection, market trends, and investment opportunities in the automotive and machinery sectors.',
    'about.viewBilingual': 'View Bilingual Company Information (日本語版はこちら)',
    'about.emailUs': 'bigtradingjp@gmail.com',
    'about.callUs': 'call us',
    'about.whyChooseUs': 'Why Clients Choose Us',
    'about.whyChooseUsDesc': 'Since 2015, clients across the globe have trusted Big Trading Company for their vehicle and equipment needs. Here\'s why.',
    'about.globalNetwork': 'Global Network',
    'about.globalNetworkDesc': 'Our extensive international network allows us to source and deliver equipment and vehicles worldwide with efficiency and reliability.',
    'about.industryExpertise': 'Industry Expertise',
    'about.industryExpertiseDesc': 'Our team brings deep knowledge of both local and international markets, regulations, and industry best practices to every transaction.',
    'about.customizedSolutions': 'Customized Solutions',
    'about.customizedSolutionsDesc': 'We tailor our services to meet the specific needs of each client, providing personalized solutions rather than one-size-fits-all approaches.',
    'about.readyToPartner': 'Ready to Partner with BIG TRADING?',
    'about.readyToPartnerDesc': 'Join our global network of satisfied clients and discover how Big Trading Company can meet your vehicle and equipment needs.',
    'about.callUsBtn': 'Call Us',
    'about.contactUsBtn': 'Contact Us',
    'about.viewBilingualBtn': 'View Bilingual Company Info',

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

    // Vehicle Gallery
    'vehicles.previousExports': '過去の輸出実績',
    'vehicles.previousExportsDesc': '当社の高級車両や建設機器の過去の輸出実績をご覧ください。これらの例は、当社の品質基準とグローバル取引における専門知識を示しています。',
    'vehicles.allVehicles': '全ての車両',
    'vehicles.sedans': 'セダン',
    'vehicles.construction': '建設機械',
    'vehicles.excavators': 'ショベルカー',
    'vehicles.bulldozers': 'ブルドーザー',
    'vehicles.diesel': 'ディーゼル',
    'vehicles.sold': '売約済',
    'vehicles.viewDetails': '詳細を見る',
    'vehicles.km': 'km',
    'vehicles.year': '年式',
    'vehicles.mileage': '走行距離',
    'vehicles.fuelType': '燃料タイプ',

    // Categories Section
    'categories.title': '取扱カテゴリー',
    'categories.description': '幅広い車両や建設機器のカテゴリーをご覧ください。',
    'categories.callUs': 'お電話はこちら',
    'categories.clickToExplore': 'クリックして詳細を見る',
    'categories.excavators': 'ショベルカー',
    'categories.vehicles': '車両',
    'categories.dumpTrucks': 'ダンプトラック',
    'categories.roadRollers': 'ロードローラー',
    'categories.motorGraders': 'モーターグレーダー',
    'categories.mobileCranes': 'クレーン車',

    // Vehicle Detail Page
    'vehicle.contactForPricing': '価格はお問い合わせください',
    'vehicle.contactAboutVehicle': 'この車両についてお問い合わせ',
    'vehicle.vehicleNotFound': '車両が見つかりません',
    'vehicle.vehicleNotFoundDesc': '申し訳ありませんが、お探しの車両が見つかりませんでした。',
    'vehicle.returnToHome': 'ホームに戻る',
    'vehicle.aboutThis': 'この車両について',
    'vehicle.keyFeatures': '主な特徴',
    'vehicle.vehicleInformation': '車両情報',
    'vehicle.year': '年式',
    'vehicle.mileage': '走行距離',
    'vehicle.transmission': 'トランスミッション',
    'vehicle.bodyType': 'ボディタイプ',
    'vehicle.color': '色',
    'vehicle.performanceSpecs': '性能仕様',
    'vehicle.engine': 'エンジン',
    'vehicle.power': '出力',
    'vehicle.torque': 'トルク',
    'vehicle.acceleration': '加速',
    'vehicle.topSpeed': '最高速度',
    'vehicle.interestedInVehicle': 'この車両に興味があります',
    'vehicle.moreInfo': '詳細情報を教えていただけますか？',

    // Vehicle Features
    'vehicle.recaro': 'レカロスポーツシート',
    'vehicle.suspension': 'アップグレードサスペンション',
    'vehicle.carbon': 'カーボンファイバーアクセント',
    'vehicle.lsd': 'リミテッドスリップディファレンシャル',
    'vehicle.exhaust': 'パフォーマンスエキゾーストシステム',
    'vehicle.wheels': 'アフターマーケットホイール',
    'vehicle.turbo': 'ターボブーストコントローラー',
    'vehicle.lancer.description': '三菱ランサーエボリューションは、ラリーブレッドの伝統を持つ興奮のパフォーマンスを提供します。このチューンドブルーモデルは、強化されたエアロダイナミクス、精密なハンドリング、そしてどこに行っても視線を集めるアグレッシブなスタイリングを特徴としています。',
    'vehicle.about': 'この車両について',

    // Vehicle Gallery Descriptions
    'vehicles.lancer.description': '三菱ランサーエボリューションは、ラリーブレッドの伝統を持つ興奮のパフォーマンスを提供します。このチューンドブルーモデルは、強化されたエアロダイナミクス、精密なハンドリング、そしてアグレッシブなスタイリングを特徴としています。',
    'vehicles.allion.description': 'トヨタ・アリオンは、優雅なスタイリングと実用的な機能性を兵ね備えています。このシルバーのセダンは、快適な乗り心地、優れた燃費効率、日常の通勤に十分な室内空間を提供します。',
    'vehicles.komatsu.wa70.description': 'コマツWA70ホイールローダーは、様々な作業環境で効率的な材料処理を行うために設計された多目的で強力な建設車両です。',
    'vehicles.caterpillar.320gc.description': 'キャタピラー320GCショベルは、燃費削減と共に、要求の厳しい建設プロジェクトに対して優れた性能と効率性を提供します。',
    'vehicles.komatsu.d51px.description': 'コマツD51PXブルドーザーは、優れた安定性を持ち、建設や鉱業用途に設計された強力で多目的な土木作業機械です。',
    'vehicles.caterpillar.140m.description': 'キャタピラー140Mモーターグレーダーは、高度な制御システムを備え、道路建設や保守管理のために設計された精密な土木作業機械です。',

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
    'about.coreValues': '私たちの中心的価値観',
    'about.coreValuesDescription': 'ビッグトレーディングでは、すべての活動において卓越性、誠実さ、お客様満足への取り組みを指針としています。',
    'about.globalExpertise': 'グローバルな専門知識',
    'about.globalExpertiseDesc': '国際市場と貿易規制に関する深い知識を持ち、国境や文化を越えてスムーズな取引を促進します。',
    'about.qualityAssurance': '品質保証',
    'about.qualityAssuranceDesc': 'すべての車両と機器に対して厳格な品質管理基準を維持し、お客様が特定のニーズを満たす最高の製品のみを受け取ることを保証します。',
    'about.customerPartnership': '顧客とのパートナーシップ',
    'about.customerPartnershipDesc': '私たちはお客様をパートナーと考え、信頼性、信頼性、そしてビジネスニーズと目標に対する深い理解に基づいて永続的な関係を構築します。',
    'about.businessAreas': '事業分野',
    'about.businessAreasDesc': 'ビッグトレーディングは4つの主要な事業分野に特化し、複数のセクターにわたって専門知識と卓越性を提供しています。',
    'about.truckingEquipment': 'トラック・機器',
    'about.truckingEquipmentDesc': '様々な産業用途向けの高品質トラック、建設機器、重機を専門としています。',
    'about.exports': '輸出',
    'about.exportsDesc': '輸出規制、物流、国境を越えた取引に関する専門知識を持ち、国際貿易を促進します。',
    'about.retailing': '小売',
    'about.retailingDesc': 'パーソナライズされたサービスと競争力のある価格で、地域市場にプレミアム車両と機器を提供します。',
    'about.consultancy': 'コンサルタント',
    'about.consultancyDesc': '自動車および機械部門における車両選択、市場動向、投資機会に関する専門的なアドバイスを提供します。',
    'about.viewBilingual': '二か国語の会社情報を見る (日本語版はこちら)',
    'about.emailUs': 'bigtradingjp@gmail.com',
    'about.callUs': 'お電話ください',
    'about.whyChooseUs': 'お客様に選ばれる理由',
    'about.whyChooseUsDesc': '2015年以来、世界中のお客様が車両や機器のニーズに対してビッグトレーディングを信頼しています。その理由をご紹介します。',
    'about.globalNetwork': 'グローバルネットワーク',
    'about.globalNetworkDesc': '当社の広範な国際ネットワークにより、効率的かつ信頼性の高い方法で世界中の機器や車両を調達し、配送することができます。',
    'about.industryExpertise': '業界の専門知識',
    'about.industryExpertiseDesc': '当社のチームは、国内外の市場、規制、業界のベストプラクティスに関する深い知識をすべての取引にもたらします。',
    'about.customizedSolutions': 'カスタマイズされたソリューション',
    'about.customizedSolutionsDesc': '当社は、各クライアントの特定のニーズに合わせてサービスを調整し、画一的なアプローチではなく、パーソナライズされたソリューションを提供します。',
    'about.readyToPartner': 'BIG TRADINGとのパートナーシップの準備はできていますか？',
    'about.readyToPartnerDesc': '当社の満足されたクライアントのグローバルネットワークに参加し、ビッグトレーディングがお客様の車両や機器のニーズをどのように満たすことができるかをご覧ください。',
    'about.callUsBtn': 'お電話はこちら',
    'about.contactUsBtn': 'お問い合わせ',
    'about.viewBilingualBtn': '二か国語の会社情報を見る',

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
  // Initialize language from browser settings, storage, or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    return initializeLanguage() as Language;
  });

  // Effect to sync language across tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'big_trading_language' && e.newValue) {
        setLanguageState(e.newValue as Language);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Custom setter that updates both localStorage and cookies
  const setLanguage = (newLanguage: Language) => {
    saveLanguagePreference(newLanguage);
    setLanguageState(newLanguage);
  };

  const t = (key: string): string => {
    // Safely access translations
    if (translations[language] && key in translations[language]) {
      return translations[language][key as keyof typeof translations[typeof language]];
    }
    return key; // Fallback to key if translation not found
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
