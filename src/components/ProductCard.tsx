import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-56 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src={imageUrl} 
          alt={name}
        />
      </div>
      <div className="p-4 text-right">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-[#E94560] font-bold">{price} تومان</p>
      </div>
    </div>
  );
};

export default ProductCard;
