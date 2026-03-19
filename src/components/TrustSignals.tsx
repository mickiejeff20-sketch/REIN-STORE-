import { Truck, ShieldCheck, Clock, RotateCcw } from 'lucide-react';

const SIGNALS = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Across Ghana in 24-48h"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "MoMo & Card accepted"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "We are here to help"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7-day return policy"
  }
];

export default function TrustSignals() {
  return (
    <div className="bg-white py-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNALS.map((signal, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-emerald-600">
                <signal.icon size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">{signal.title}</h3>
                <p className="text-xs text-zinc-500">{signal.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
