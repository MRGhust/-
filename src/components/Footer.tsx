import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F3460] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-[#E94560] mr-2" />
            <span className="text-xl font-bold">ریو شاپ</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">
              حق فروش برای غیاثیان و شعبانی
            </p>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ریو شاپ - تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
