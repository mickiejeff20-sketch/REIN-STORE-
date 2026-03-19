import { Zap, Shield, Heart, RefreshCw } from 'lucide-react';

const REASONS = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    desc: "We prioritize speed. Get your orders delivered across Ghana within 24-48 hours."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    desc: "Your transactions are safe with us. We support Mobile Money and all major cards."
  },
  {
    icon: Heart,
    title: "Quality Guaranteed",
    desc: "Every product is hand-checked for quality before it leaves our warehouse."
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "Not satisfied? Return your product within 7 days for a hassle-free exchange."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] mb-2 block">Why REIN?</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-6 leading-tight">
              We are building the most <br />
              trusted store in Ghana.
            </h2>
            <p className="text-zinc-500 mb-10 text-lg">
              At REIN, we believe quality shouldn't be a luxury. We bridge the gap between premium products and affordable pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {REASONS.map((reason, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <reason.icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-black">{reason.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                alt="Service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-3xl hidden md:block max-w-xs">
              <p className="text-2xl font-bold mb-2">10k+</p>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">Happy Customers across Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
