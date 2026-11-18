import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../contexts/LanguageContext';

const terms = {
  en: {
    title: 'Terms of Service', updated: 'Last updated: 18 November 2026',
    intro: 'These terms describe the use of the website of BIG TRADING CO., LTD. / 株式会社ビッグトレーディング. The website provides information about vehicles, spare parts and machinery and enables you to contact us. It is not an online checkout or a marketplace for registered dealers.',
    sections: [
      ['Product information and enquiries', 'Photographs and descriptions are provided for enquiry purposes. Availability, condition, specifications and any included accessories must be confirmed with us for the particular item before purchase. Sending an enquiry does not reserve an item or create a purchase contract.'],
      ['Quotations and purchases', 'Please request a quotation for current pricing. The price, currency, payment arrangements, delivery or export arrangements, applicable charges, and any warranty or cancellation terms must be stated in the quotation or agreement for your transaction. The website does not impose a single currency or replace that agreement. Do not make payment based only on website content.'],
      ['Responsible use', 'Please provide accurate contact information and use the website lawfully. Do not attempt to access systems without permission, introduce malicious code, disrupt the site, or misuse another person’s information.'],
      ['Website content and external links', 'Company materials and third-party logos or photographs remain subject to their respective owners’ rights. Do not reproduce or use content beyond what applicable law or the rights holder permits. Links to external websites are provided for convenience; those providers are responsible for their own content and services.'],
      ['Privacy', 'Our Privacy Policy explains the handling of website preferences, enquiries and external services. Please read it before providing personal information and do not include sensitive documents in a general enquiry.'],
      ['Availability and corrections', 'Website content may be updated and the website may occasionally be unavailable. Please contact us to confirm any information material to a proposed purchase or to report an error. Nothing in these terms excludes rights or obligations that cannot lawfully be excluded.'],
      ['Questions and disputes', 'Please contact us first so that we can try to resolve any concerns. Rights, obligations and dispute procedures are determined by applicable law and any valid agreement for the particular transaction. These website terms do not impose mandatory arbitration or an exclusive court venue.'],
      ['Updates', 'Changes to these website terms will be published here with a revised date. A change to this page does not by itself change the terms of an existing purchase agreement.'],
    ], contact: 'Contact', address: '〒498-0801, 553 Karoto, Kisosaki-cho, Kuwana-gun, Mie Prefecture, Japan',
  },
  ja: {
    title: '利用規約', updated: '最終更新日：2026年11月18日',
    intro: '本規約は、BIG TRADING CO., LTD. / 株式会社ビッグトレーディングのウェブサイトの利用について定めるものです。本サイトでは、自動車・部品・機械に関する情報をご案内し、お問い合わせを受け付けています。オンライン決済サイトや登録販売業者向けのマーケットプレイスではありません。',
    sections: [
      ['商品情報とお問い合わせ', '掲載されている写真や説明は、お問い合わせの参考として提供しています。ご購入前に、対象商品の在庫状況、状態、仕様、付属品などを当社にご確認ください。お問い合わせの送信のみで、商品の予約や売買契約が成立するものではありません。'],
      ['見積もりとご購入', '最新の価格については、見積もりをご依頼ください。価格、通貨、支払方法、配送・輸出の手配、適用される費用、保証やキャンセルに関する条件は、個別のお取引の見積書または契約書に記載するものとします。本サイトで一律の通貨を指定することはなく、個別の契約に代わるものでもありません。ウェブサイトの情報だけに基づいてお支払いを行わないでください。'],
      ['適切なご利用', '連絡先は正確にご記入いただき、本サイトを適法にご利用ください。無断でのシステムへのアクセス、不正なプログラムの送信、サイト運営の妨害、他人の情報の不正利用などを行わないでください。'],
      ['掲載内容と外部リンク', '当社の資料および第三者のロゴや写真に関する権利は、それぞれの権利者に帰属します。法令または権利者が認める範囲を超えて転載・利用しないでください。外部サイトへのリンクは利便性のために設置しています。リンク先の内容やサービスは、それぞれの提供者が管理しています。'],
      ['個人情報', 'サイトの設定情報、お問い合わせ情報および外部サービスに関する取り扱いは、プライバシーポリシーをご確認ください。個人情報を提供する前にお読みいただき、一般のお問い合わせには機密性の高い書類を添付しないでください。'],
      ['サイトの利用可能性と訂正', '掲載内容は更新される場合があり、サイトが一時的に利用できなくなることもあります。ご購入の判断に関わる情報の確認や、誤りのご報告は当社までご連絡ください。本規約は、法令上排除できない権利や義務を排除するものではありません。'],
      ['ご相談と紛争', 'ご不明点や問題がある場合は、解決に向けて協議できるよう、まず当社までご連絡ください。権利・義務および紛争の解決手続きは、適用法令と個別のお取引に関する有効な合意に従います。本サイトの利用規約は、強制的な仲裁や専属的な裁判管轄を定めるものではありません。'],
      ['規約の更新', '本規約を変更する場合は、本ページの内容と更新日を改定します。本ページの変更のみをもって、既に締結された売買契約の条件が変更されることはありません。'],
    ], contact: 'お問い合わせ', address: '〒498-0801 三重県桑名郡木曽岬町加路戸553',
  },
};

const TermsOfServicePage = () => {
  const { language } = useLanguage();
  const content = terms[language];
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
export default TermsOfServicePage;
