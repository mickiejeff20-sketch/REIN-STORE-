import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100 rounded-full">
            New Arrivals 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6 leading-[0.9]">
            Affordable Quality <br />
            <span className="text-emerald-600">Delivered Fast</span> <br />
            in Ghana.
          </h1>
          <p className="text-lg text-zinc-600 mb-10 max-w-lg">
            Shop the latest gadgets, lifestyle products, and more with secure payments and lightning-fast delivery across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-all group"
            >
              Shop Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold border border-black/10 rounded-xl hover:bg-zinc-50 transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
