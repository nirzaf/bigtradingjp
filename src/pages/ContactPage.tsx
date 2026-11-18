import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

import PageHeader from '../components/ui/PageHeader';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ success?: string; error?: string }>({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${language === 'ja' ? 'お名前' : 'Name'}: ${formData.name}\nEmail: ${formData.email}\n${language === 'ja' ? '電話番号' : 'Phone'}: ${formData.phone}\n\n${formData.message}`;
    window.location.href = `mailto:bigtradingjp@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus({ success: language === 'ja'
      ? 'メールアプリで下書きを確認し、送信してください。このフォームからはまだ送信されていません。アプリが開かない場合は、bigtradingjp@gmail.com に直接メールしてください。'
      : 'Review and send the draft in your email app. This form has not sent your message. If no app opens, email bigtradingjp@gmail.com directly.' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}

      />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-display font-bold mb-6 uppercase">{t('contact.getInTouch')}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <MapPin className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">{t('contact.officeAddress')}</h3>
                    <p className="text-secondary-700">
                      {language === 'ja' ? '〒498-0801 三重県桑名郡木曽岬町加路戸553' : '〒498-0801, 553 Karoto, Kisosaki-cho, Kuwana-gun, Mie Prefecture, Japan'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Phone className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">{t('contact.phoneNumber')}</h3>
                    <p className="text-secondary-700">
                      <a href="tel:+81804213-9008" className="hover:text-primary-800 transition-colors">
                        +81 80-4213-9008
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Mail className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">{t('contact.emailAddress')}</h3>
                    <p className="text-secondary-700">
                      <a href="mailto:bigtradingjp@gmail.com" className="hover:text-primary-800 transition-colors">
                        bigtradingjp@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mr-4">
                    <Clock className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-900 mb-1">{t('contact.businessHours')}</h3>
                    <p className="text-secondary-700">
                      {language === 'en' ? (
                        <>
                          Monday - Friday: 9:00 AM - 6:00 PM (JST)<br />
                          Saturday: 10:00 AM - 4:00 PM (JST)<br />
                          Sunday: Closed
                        </>
                      ) : (
                        <>
                          月曜日〜金曜日：午前9時〜午後6時（日本時間）<br />
                          土曜日：午前10時〜午後4時（日本時間）<br />
                          日曜日：休業
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-display font-bold mb-6 uppercase">{t('contact.contactForm')}</h2>

                {formStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-success-100 border border-success-300 text-success-700 px-4 py-3 rounded mb-6"
                  >
                    <p>{formStatus.success}</p>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-error-100 border border-error-300 text-error-700 px-4 py-3 rounded mb-6"
                  >
                    <p>{formStatus.error}</p>
                  </motion.div>
                )}

                <p className="text-sm text-secondary-700 mb-6">{language === 'ja' ? 'このフォームはメールアプリで下書きを作成します。内容を確認して送信してください。' : 'This form prepares a draft in your email app for you to review and send.'}</p>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        {t('contact.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                        {language === 'ja' ? '件名' : 'Subject'} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">{language === 'ja' ? '件名を選択してください' : 'Select a subject'}</option>
                        <option value="General Inquiry">{language === 'ja' ? '一般のお問い合わせ' : 'General Inquiry'}</option>
                        <option value="Vehicle Information">{language === 'ja' ? '車両について' : 'Vehicle Information'}</option>
                        <option value="Construction Equipment">{language === 'ja' ? '建設機械について' : 'Construction Equipment'}</option>
                        <option value="Spare Parts">{language === 'ja' ? '部品について' : 'Spare Parts'}</option>
                        <option value="Export Inquiry">{language === 'ja' ? '輸出について' : 'Export Inquiry'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      {t('contact.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-primary-800 text-white rounded-md font-medium hover:bg-primary-700"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.submit')}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </motion.div>
  );
};

export default ContactPage;