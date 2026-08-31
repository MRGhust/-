import React from 'react';
import { ArrowLeft } from 'lucide-react';

const points = Array.from({ length: 210 }, (_, index) => {
  const angle = (index * 137.508 * Math.PI) / 180;
  const radius = 10 + Math.sqrt(index / 210) * 92;
  const x = 150 + Math.cos(angle) * radius * (1.15 + 0.14 * Math.sin(index * 0.33));
  const y = 145 + Math.sin(angle) * radius * (0.72 + 0.2 * Math.cos(index * 0.21));
  const colors = ['#8052ff', '#ffb829', '#15846e', '#e653d3', '#5d9dff'];
  return { x, y, color: colors[index % colors.length], size: 1.3 + (index % 4) * 0.45 };
});

const Hero: React.FC = () => (
  <section id="home" className="hero section-shell">
    <div className="hero-copy">
      <p className="eyebrow">زیرساخت ابری، با وضوح بیشتر</p>
      <h1>ابر را<br /><em>هم‌فکر</em> کنید.</h1>
      <p className="lead">دالا مجموعه‌ای از سرویس‌های ابری هوشمند است تا تیم شما کمتر درگیر زیرساخت و بیشتر مشغول ساختن آینده باشد.</p>
      <a className="primary-button" href="#products">کاوش محصولات <ArrowLeft size={16} strokeWidth={1.7} /></a>
    </div>
    <div className="constellation-wrap" aria-label="شبکه‌ای از نقاط متصل ابری">
      <svg className="constellation" viewBox="0 0 300 290" role="img">
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <path d="M46 150C47 98 93 70 133 80C157 43 220 56 231 103C268 119 271 171 239 193C226 236 171 244 145 216C103 232 58 209 61 173C50 166 45 158 46 150Z" className="cloud-outline" />
        {points.map((point, index) => <polygon key={index} points={`${point.x},${point.y - point.size} ${point.x - point.size},${point.y + point.size} ${point.x + point.size},${point.y + point.size}`} fill="none" stroke={point.color} strokeWidth="0.8" filter="url(#glow)" />)}
      </svg>
      <i className="ambient ambient-one" /><i className="ambient ambient-two" /><i className="ambient ambient-three" />
    </div>
  </section>
);

export default Hero;
