import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import Contact from './Contact';

const Navbar: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="bg-[#0F3460] text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-[#E94560]" />
          <h1 className="text-2xl font-bold tracking-tight">ریو شاپ</h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="hover:text-[#E94560] transition-colors">
              <a href="#" className="font-medium">خانه</a>
            </li>
            <li className="hover:text-[#E94560] transition-colors">
              <a href="#" className="font-medium">محصولات</a>
            </li>
            <li className="hover:text-[#E94560] transition-colors">
              <a href="#" className="font-medium">درباره ما</a>
            </li>
            <li className="hover:text-[#E94560] transition-colors">
              <button 
                onClick={() => setIsContactOpen(true)} 
                className="font-medium"
              >
                تماس با ما
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  );
};

export default Navbar;
