import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-black/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} className="text-black" />
                <h2 className="text-lg font-bold text-black">Your Cart ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-zinc-300" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Your cart is empty</h3>
                  <p className="text-sm text-zinc-500 mb-6">Looks like you haven't added anything yet.</p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="text-sm font-bold text-black line-clamp-1">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-500 mb-3">GHS {item.price}</p>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-black/10 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-zinc-50 text-zinc-600"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs font-bold text-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-zinc-50 text-zinc-600"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-black ml-auto">GHS {item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-black/5 bg-zinc-50">
                <div className="flex justify-between mb-4">
                  <span className="text-sm font-medium text-zinc-600">Subtotal</span>
                  <span className="text-lg font-bold text-black">GHS {totalPrice}</span>
                </div>
                <p className="text-[10px] text-zinc-400 mb-6 text-center uppercase tracking-widest font-bold">
                  Shipping and taxes calculated at checkout
                </p>
                <Link 
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full py-4 bg-black text-white text-center font-bold rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
