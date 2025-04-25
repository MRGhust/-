import React from 'react';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'چاقو ضامن دار آمریکایی',
      price: '1,000,000',
      imageUrl: 'https://i.imgur.com/5U1yKVx.jpeg'
    },
    {
      id: 2,
      name: 'چاقو شکاری',
      price: '1,500,000',
      imageUrl: 'https://i.imgur.com/9KCBvB1.jpeg'
    },
    {
      id: 3,
      name: 'دستبند پارکورد',
      price: '350,000',
      imageUrl: 'https://i.imgur.com/mhr5AAG.jpeg'
    },
    {
      id: 4,
      name: 'ساعت نظامی پارکورد',
      price: '700,000',
      imageUrl: 'https://i.imgur.com/VqCFA7C.jpeg'
    },
    {
      id: 5,
      name: 'باتوم ژله‌ای',
      price: '500,000',
      imageUrl: 'https://i.imgur.com/49W5F4Q.jpeg'
    },
    {
      id: 6,
      name: 'باتوم فنری',
      price: '800,000',
      imageUrl: 'https://i.imgur.com/1mG9yGL.jpeg'
    },
    {
      id: 7,
      name: 'باتوم پلیمری',
      price: '700,000',
      imageUrl: 'https://i.imgur.com/nTBM2A2.jpeg'
    },
    {
      id: 8,
      name: 'پنجه بوکس برنجی آمریکایی',
      price: '500,000',
      imageUrl: 'https://i.imgur.com/RrGJRje.jpeg'
    },
    {
      id: 9,
      name: 'شوکر',
      price: '950,000',
      imageUrl: 'https://i.imgur.com/IorvIph.jpeg'
    },
    {
      id: 10,
      name: 'گاز پلیس',
      price: '450,000',
      imageUrl: 'https://i.imgur.com/BNKSRgX.jpeg'
    },
    {
      id: 11,
      name: 'باتوم فلزی پلیس آمریکا',
      price: '1,500,000',
      imageUrl: 'https://i.imgur.com/yX6D8Pg.jpeg'
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F3460] mb-2">محصولات برتر</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجموعه‌ای از بهترین تجهیزات دفاع شخصی با کیفیت بالا
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-[#0F3460] hover:bg-[#0a264a] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
            نمایش محصولات
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
