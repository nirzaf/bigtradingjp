import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Car, ClipboardCheck, Cog, Pause, Play, Truck } from 'lucide-react';
import Lottie from 'react-lottie-player';
import { useLanguage } from '../../contexts/LanguageContext';
import excavatorAnimation from '../../assets/animations/excavator-animation.json';

/** One decorative player, finite motion and no viewport-resize render loop. */
const HeroSection = () => {
  const { t, language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const inView = useInView(heroRef, { amount: 0.15 });
  const [playing, setPlaying] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const japanese = language === 'ja';

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  // Decorative movement stops automatically; replay is an explicit user choice.
  useEffect(() => {
    if (!playing || !inView || !pageVisible || reduceMotion) return;
    const timer = window.setTimeout(() => setPlaying(false), 4000);
    return () => window.clearTimeout(timer);
  }, [playing, inView, pageVisible, reduceMotion]);

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay },
  });
  const categories = [
    { icon: Car, label: japanese ? '自動車' : 'Vehicles', to: '/vehicles?category=vehicles' },
    { icon: Truck, label: japanese ? '建設機械' : 'Machinery', to: '/vehicles?category=machinery' },
    { icon: Cog, label: japanese ? 'スペアパーツ' : 'Spare parts', to: '/contact' },
  ];

  return (
    <section ref={heroRef} aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-primary-900 text-white">
      {/* Static light and grid keep the scene calm; only transform/opacity animate. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-slate-950" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      <div className="container-custom relative grid items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[620px] lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="max-w-xl">
          <motion.p {...reveal()} className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
            <span aria-hidden="true" className="h-px w-9 bg-accent-400" />
            {japanese ? '日本から世界へ' : 'From Japan, to your business'}
          </motion.p>
          <motion.h1 id="hero-title" {...reveal(0.08)} className="font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl">
            BIG <span className="text-accent-400">TRADING</span>
          </motion.h1>
          <motion.div {...reveal(0.16)}>
            <h2 className="mt-6 text-xl font-semibold leading-snug sm:text-2xl">{t('business.heroTagline')}</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-100 sm:text-base">{t('business.heroSubtitle')}</p>
          </motion.div>
          <motion.div {...reveal(0.24)} className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ClipboardCheck aria-hidden="true" className="h-5 w-5" />{t('business.contactForAppraisal')}
            </Link>
            <Link to="/vehicles" className="inline-flex min-h-12 items-center gap-2 rounded-lg px-2 py-3 text-sm font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {japanese ? '取扱商品を見る' : 'Explore our range'}<ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div {...reveal(0.16)} className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <span className="text-xs font-medium tracking-wide text-blue-100">{japanese ? '建設機械・車両・部品' : 'MACHINERY · VEHICLES · PARTS'}</span>
              {!reduceMotion && <button type="button" onClick={() => setPlaying(value => !value)} aria-label={playing ? (japanese ? 'アニメーションを一時停止' : 'Pause animation') : (japanese ? 'アニメーションを再生' : 'Replay animation')} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
                {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
              </button>}
            </div>
            <div aria-hidden="true" className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-blue-50 to-slate-200 px-6 sm:aspect-[16/10]">
              <div className="absolute bottom-[20%] left-[15%] right-[15%] h-3 rounded-[50%] bg-slate-900/10 blur-sm" />
              <Lottie animationData={excavatorAnimation} loop play={Boolean(playing && inView && pageVisible && !reduceMotion)} goTo={reduceMotion ? 0 : undefined} className="relative w-full max-w-[320px]" rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }} />
            </div>
            <p className="px-5 py-3 text-xs text-blue-100">{japanese ? 'イメージイラストです。在庫・仕様はお問い合わせください。' : 'Illustration only. Contact us for current availability and specifications.'}</p>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {categories.map(({icon: Icon, label, to}) => <Link key={to} to={to} className="flex min-h-16 flex-col items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-2 py-3 text-center text-xs font-medium transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex-row">
              <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-400" />{label}
            </Link>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
