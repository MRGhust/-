import React from 'react';
import { Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#1A1A2E] text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <Shield className="h-16 w-16 text-[#E94560] mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ریو شاپ</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          بهترین فروشگاه تجهیزات دفاع شخصی
        </p>
        <button 
          className="bg-[#E94560] hover:bg-[#d13a53] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
        >
          نمایش محصولات
        </button>
      </div>
    </section>
  );
};

export default Hero;
