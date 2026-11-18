import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../contexts/LanguageContext';

const policy = {
  en: {
    title: 'Privacy Policy', updated: 'Last updated: 18 November 2026',
    intro: 'BIG TRADING CO., LTD. / 株式会社ビッグトレーディング operates this website to introduce our vehicle, spare-parts and machinery business and receive enquiries. This policy explains how information is handled when you browse the site or contact us. This website does not provide member accounts or a dealer marketplace.',
    sections: [
      ['Information you provide', 'When you contact us by email, telephone or WhatsApp, we receive the information you choose to send, such as your name, contact details, product requirements and correspondence. Please do not send passwords, payment-card details or identity documents through a general enquiry. Opening an email draft or WhatsApp message does not send it until you choose to send it.'],
      ['Why we use information', 'We use enquiry information to respond to your questions, discuss products and quotations, arrange requested services and maintain relevant business correspondence. A transaction may require additional information, which will be explained when requested.'],
      ['Language preferences and browsing information', 'The site stores your language preference in browser local storage and a preference cookie. The cookie is set for one year; local storage remains until cleared. If no preference is saved, the site requests an approximate country from ipapi.co using your internet connection to choose an initial language. You can change the language and clear stored preferences using your browser settings. Hosting and analytics services may process technical information about requests and page visits; this site includes Vercel Analytics.'],
      ['External services', 'The site embeds Instagram content and links to WhatsApp and other external services. Loading embedded content or following these links may disclose your IP address, browser information and the content you send to the relevant provider. Their own privacy policies apply to their services. Information needed for a requested transaction may also be provided to relevant service providers, such as transport or export-service providers, or disclosed where required by applicable law.'],
      ['Retention and protection', 'Please contact us for information about the records held in relation to your enquiry or transaction and any applicable retention requirements. We limit the use of enquiry information to the purposes described here. No internet transmission can be guaranteed completely secure; use the contact details below to discuss a suitable channel before sending sensitive documents.'],
      ['Your questions and requests', 'You may contact us to ask about your personal information or request access, correction or deletion. We will consider your request under applicable law and may need to verify your identity. Some records may need to be retained for legal obligations or an ongoing transaction.'],
      ['Changes to this policy', 'Updates will be published on this page with a revised date. This policy covers this website and our handling of enquiries, not the independent practices of linked services.'],
    ], contact: 'Privacy contact', address: '〒498-0801, 553 Karoto, Kisosaki-cho, Kuwana-gun, Mie Prefecture, Japan',
  },
  ja: {
    title: 'プライバシーポリシー', updated: '最終更新日：2026年11月18日',
    intro: 'BIG TRADING CO., LTD. / 株式会社ビッグトレーディングは、自動車・部品・機械に関する事業のご案内とお問い合わせへの対応のために本ウェブサイトを運営しています。本ポリシーでは、サイトの閲覧時および当社へのお問い合わせ時の情報の取り扱いについて説明します。本サイトには会員登録機能や販売業者向けのマーケットプレイスはありません。',
    sections: [
      ['お客様からご提供いただく情報', 'メール、電話、WhatsAppでお問い合わせいただいた場合、氏名、連絡先、ご希望の商品、やり取りの内容など、お客様が提供された情報を受け取ります。一般のお問い合わせには、パスワード、クレジットカード情報、本人確認書類を含めないでください。メールの下書きやWhatsAppのメッセージ画面を開いただけでは送信されず、お客様ご自身で送信操作を行う必要があります。'],
      ['情報の利用目的', 'お問い合わせへの回答、商品や見積もりのご案内、ご依頼いただいたサービスの手配、および関連する業務上の連絡記録の管理に利用します。お取引に追加情報が必要な場合は、その都度ご案内します。'],
      ['言語設定と閲覧情報', '本サイトは、言語設定をブラウザーのローカルストレージと設定用Cookieに保存します。Cookieの有効期間は1年間で、ローカルストレージの情報は削除されるまで残ります。保存済みの設定がない場合、初期表示の言語を選ぶため、インターネット接続を通じてipapi.coにおおよその国情報を問い合わせます。表示言語は変更でき、保存された設定はブラウザーの設定から削除できます。ホスティングやアクセス解析のサービスでは、通信や閲覧に関する技術情報が処理される場合があります。本サイトにはVercel Analyticsが組み込まれています。'],
      ['外部サービス', '本サイトにはInstagramの埋め込みコンテンツやWhatsAppなどの外部サービスへのリンクがあります。埋め込みコンテンツの読み込みやリンク先へのアクセスにより、IPアドレス、ブラウザー情報、送信内容などが各サービスの提供者に伝わる場合があります。各サービスには、それぞれのプライバシーポリシーが適用されます。ご依頼のお取引に必要な情報は、輸送・輸出関連の事業者などに提供する場合や、適用法令に基づき開示する場合もあります。'],
      ['情報の保管と保護', 'お問い合わせやお取引に関して保有する記録、または適用される保管要件については、当社までお問い合わせください。お問い合わせ情報は、本ポリシーに記載した目的の範囲で利用します。インターネット通信の安全性を完全に保証することはできません。機密性の高い書類を送付する際は、事前に適切な連絡方法についてご相談ください。'],
      ['情報に関するお問い合わせとご請求', 'ご自身の個人情報についてのご質問、開示・訂正・削除のご請求は、当社までご連絡ください。適用法令に従って対応し、必要に応じて本人確認をお願いする場合があります。法令上の義務や進行中のお取引のため、一部の記録を保持する必要がある場合があります。'],
      ['本ポリシーの変更', '変更がある場合は、本ページの内容と更新日を改定します。本ポリシーは、本サイトおよび当社へのお問い合わせの取り扱いを対象とし、リンク先のサービス独自の取り扱いには適用されません。'],
    ], contact: '個人情報に関するお問い合わせ窓口', address: '〒498-0801 三重県桑名郡木曽岬町加路戸553',
  },
};

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const content = policy[language];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} lang={language}>
      <PageHeader title={content.title} />
      <article className="container-custom max-w-4xl py-12 px-4 leading-relaxed">
        <p className="font-medium text-primary-700 mb-4">{content.updated}</p>
        <p>{content.intro}</p>
        {content.sections.map(([heading, body], index) => <section key={heading} className="mt-8">
          <h2 className="text-2xl font-display font-bold mb-3">{index + 1}. {heading}</h2>
          <p>{body}</p>
        </section>)}
        <section className="mt-8">
          <h2 className="text-2xl font-display font-bold mb-3">{content.contact}</h2>
          <address className="not-italic">BIG TRADING CO., LTD. / 株式会社ビッグトレーディング<br />{content.address}<br />
            <a className="underline" href="mailto:bigtradingjp@gmail.com">bigtradingjp@gmail.com</a><br />
            <a className="underline" href="tel:+818042139008">+81 80-4213-9008</a>
          </address>
        </section>
      </article>
    </motion.div>
  );
};
export default PrivacyPolicyPage;
