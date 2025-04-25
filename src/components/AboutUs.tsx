import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F3460] mb-6">درباره‌ی ما</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            ما یک گروه کوچک 3 نفره ایم که محصولات خود را به قیمت به صرفه و با سود کم یا حتی بدون سود می فروشیم
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
