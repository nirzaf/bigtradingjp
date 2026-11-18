import { useLanguage } from '../../contexts/LanguageContext';

/** Owner-confirmed profile from the 18 November 2026 correction brief. */
const BilingualAboutContent = () => {
  const { language } = useLanguage();
  const japanese = language === 'ja';
  const rows = [
    [japanese ? '会社名' : 'Registered company', japanese ? '株式会社ビッグトレーディング' : 'BIG TRADING CO., LTD.'],
    [japanese ? '代表者' : 'Representative', 'Rikaz Mohamed'],
    [japanese ? '設立' : 'Established', japanese ? '2015年10月5日' : '5 October 2015'],
    [japanese ? '資本金' : 'Capital', japanese ? '1,000万円' : '¥10,000,000'],
    [japanese ? '従業員数' : 'Employees', japanese ? '12名' : '12'],
    [japanese ? '所在地' : 'Address', japanese ? '〒498-0801 三重県桑名郡木曽岬町加路戸553' : '〒498-0801, 553 Karoto, Kisosaki-cho, Kuwana-gun, Mie Prefecture, Japan'],
    [japanese ? '事業内容' : 'Business lines', japanese ? '中古車両、建設機械・重機、部品・アタッチメントの売買および輸出' : 'Buying, selling and exporting used motor vehicles, construction machinery, heavy equipment, spare parts and attachments'],
  ];
  return (
    <section aria-labelledby="company-profile-heading" className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
      <h2 id="company-profile-heading" className="text-2xl font-display font-bold mb-6">{japanese ? '会社概要' : 'Company profile'}</h2>
      <dl className="divide-y divide-gray-200">
        {rows.map(([label, value]) => (
          <div key={label} className="grid sm:grid-cols-3 gap-2 py-4">
            <dt className="font-semibold text-primary-900">{label}</dt>
            <dd className="sm:col-span-2 text-secondary-700">{value}</dd>
          </div>
        ))}
        <div className="grid sm:grid-cols-3 gap-2 py-4"><dt className="font-semibold text-primary-900">{japanese ? '電話番号' : 'Telephone'}</dt><dd className="sm:col-span-2"><a href="tel:+818042139008" className="text-primary-700 hover:underline">+81 80-4213-9008</a></dd></div>
        <div className="grid sm:grid-cols-3 gap-2 py-4"><dt className="font-semibold text-primary-900">{japanese ? 'メール' : 'Email'}</dt><dd className="sm:col-span-2"><a href="mailto:bigtradingjp@gmail.com" className="text-primary-700 hover:underline">bigtradingjp@gmail.com</a></dd></div>
      </dl>
    </section>
  );
};

export default BilingualAboutContent;
