import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter text-black mb-6">Get in Touch</h1>
            <p className="text-lg text-zinc-600 mb-12">
              Have a question or need help with an order? Our team is here to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-zinc-500">support@reinstore.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-zinc-500">+233 50 000 0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-1">Visit Us</h3>
                  <p className="text-zinc-500">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-black/5">
            <h2 className="text-2xl font-bold text-black mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</label>
                  <input className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email</label>
                  <input className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
