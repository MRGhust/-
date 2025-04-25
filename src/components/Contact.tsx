import React from 'react';
import { Phone } from 'lucide-react';

const Contact: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="text-center">
          <Phone className="w-12 h-12 text-[#E94560] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#0F3460] mb-4">تماس با ما</h2>
          <p className="text-xl text-gray-700 font-bold" dir="ltr">
            +98 991 234 2084
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
