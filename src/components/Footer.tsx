import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-black">REIN</span>
              <span className="text-xs font-semibold bg-emerald-500 text-white px-1.5 py-0.5 rounded uppercase">Store</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Affordable Quality Products Delivered Fast in Ghana. Your trusted destination for gadgets, lifestyle, and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 hover:text-black transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 hover:text-black transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 hover:text-black transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-zinc-500 hover:text-black transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-zinc-500 hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-zinc-500 hover:text-black transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-widest mb-6">Policies</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-zinc-500 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-zinc-500 hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/returns" className="text-sm text-zinc-500 hover:text-black transition-colors">Return Policy</Link></li>
              <li><Link to="/shipping" className="text-sm text-zinc-500 hover:text-black transition-colors">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-black uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-zinc-500">Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-zinc-500">+233 50 000 0000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-zinc-500">support@reinstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">© 2026 REIN Store. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-4 opacity-50 grayscale" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-4 opacity-50 grayscale" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Mobile Money Accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
