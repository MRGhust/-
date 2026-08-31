import React from 'react';
import { ArrowUpLeft } from 'lucide-react';

interface ProductCardProps { number: string; name: string; description: string; }
const ProductCard: React.FC<ProductCardProps> = ({ number, name, description }) => (
  <article className="product-line">
    <span className="product-number">{number}</span>
    <div><h3>{name}</h3><p>{description}</p></div>
    <a href="#contact" aria-label={`بیشتر درباره ${name}`}><ArrowUpLeft size={24} strokeWidth={1.4} /></a>
  </article>
);
export default ProductCard;
