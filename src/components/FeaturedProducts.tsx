import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 block">Our Collection</span>
            <h2 className="text-4xl font-bold tracking-tighter text-black">Featured Products</h2>
          </div>
          <p className="text-zinc-500 max-w-md text-sm">
            Handpicked items that represent the perfect balance of quality and affordability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
