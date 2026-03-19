import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../CartContext';
import { Star, Shield, Truck, RotateCcw, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="text-emerald-600 font-bold">Back to Shop</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-zinc-500 hover:text-black mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 border border-black/5">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-black/5 cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-2 text-sm font-bold text-black">{product.rating}</span>
                </div>
                <span className="text-zinc-300">|</span>
                <span className="text-sm text-zinc-500 font-medium">{product.reviews} Reviews</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-black">GHS {product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-zinc-400 line-through">GHS {product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">
                    SAVE GHS {product.originalPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            <p className="text-zinc-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              <h3 className="text-sm font-bold text-black uppercase tracking-widest">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-black/5 rounded-xl overflow-hidden h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 hover:bg-zinc-50 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 font-bold text-black">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 hover:bg-zinc-50 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button 
                  onClick={() => {
                    for(let i=0; i<quantity; i++) addToCart(product);
                  }}
                  className="flex-1 h-14 bg-black text-white font-bold rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/5">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Truck size={20} className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <Shield size={20} className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Secure MoMo</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <RotateCcw size={20} className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">7-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
