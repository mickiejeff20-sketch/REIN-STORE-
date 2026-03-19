import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
          {product.stock <= 5 && (
            <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              Only {product.stock} left
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link 
            to={`/product/${product.id}`}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            <Eye size={18} />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">{product.category}</span>
          <div className="flex items-center text-amber-400">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] font-bold text-zinc-400 ml-1">{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-bold text-black mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-black">GHS {product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-zinc-400 line-through">GHS {product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
