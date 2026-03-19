import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 block">Social Proof</span>
          <h2 className="text-4xl font-bold tracking-tighter text-black">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < t.rating ? "text-amber-400 fill-amber-400" : "text-zinc-200"} 
                  />
                ))}
              </div>
              <p className="text-zinc-600 text-sm italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">{t.name}</h4>
                  <p className="text-[10px] text-zinc-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
