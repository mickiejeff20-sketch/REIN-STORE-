import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { cn } from '../lib/utils';

export default function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-black/5 backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-black">REIN</span>
            <span className="text-xs font-semibold bg-emerald-500 text-white px-1.5 py-0.5 rounded uppercase">Store</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Shop</Link>
            <Link to="/about" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-zinc-600 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-zinc-600 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-zinc-600 hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-white border-b border-black/5 transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-64" : "max-h-0"
      )}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black">Home</Link>
          <Link to="/shop" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black">Shop</Link>
          <Link to="/about" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black">About</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-black">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
