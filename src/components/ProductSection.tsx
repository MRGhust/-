import React from 'react';
import ProductCard from './ProductCard';

const products = [
  ['۰۱', 'Dala Compute', 'رایانش منعطف برای بارهای کاری که هر روز شکل تازه‌ای می‌گیرند.'],
  ['۰۲', 'Dala Vault', 'ذخیره‌سازی امن، نزدیک و همیشه آماده برای داده‌های مهم شما.'],
  ['۰۳', 'Dala Flow', 'مسیر ساده‌ی داده از اولین رویداد تا آخرین تصمیم.'],
];
const ProductSection: React.FC = () => <section id="products" className="products section-shell">
  <div className="section-intro"><p className="eyebrow">محصولات دالا</p><h2>هرآنچه برای<br />ساختن در ابر<br />لازم دارید.</h2></div>
  <div className="product-list">{products.map(([number, name, description]) => <ProductCard key={number} number={number} name={name} description={description} />)}</div>
</section>;
export default ProductSection;
