import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 bg-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-black mb-8">Our Story</h1>
        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
          REIN was founded with a simple mission: to provide high-quality, affordable products to everyone in Ghana. We noticed a gap in the market where quality often came with an unreachable price tag, or affordable products were of poor quality.
        </p>
        <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
          Today, we are proud to serve thousands of customers across the country, delivering gadgets, lifestyle items, and more with speed and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/5">
          <div>
            <h3 className="text-3xl font-bold text-black mb-2">10k+</h3>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black mb-2">24h</h3>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Avg. Delivery</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black mb-2">100%</h3>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Satisfaction</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
