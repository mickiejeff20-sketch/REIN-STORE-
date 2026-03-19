import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { ShieldCheck, CreditCard, Smartphone, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'momo'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSuccess(true);
      clearCart();
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-3xl border border-black/5 text-center shadow-2xl shadow-black/5"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">Order Successful!</h2>
          <p className="text-zinc-500 mb-10">
            Thank you for shopping with REIN. Your order has been received and is being processed. We will contact you shortly for delivery.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/shop')} className="text-emerald-600 font-bold">Start Shopping</button>
      </div>
    );
  }

  return (
    <div className="py-12 bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <button onClick={() => navigate(-1)} className="flex items-center text-zinc-500 hover:text-black transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-black text-white" : "bg-zinc-200 text-zinc-500"}`}>1</div>
            <div className="w-8 h-px bg-zinc-200" />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-black text-white" : "bg-zinc-200 text-zinc-500"}`}>2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-8">
                {step === 1 ? "Shipping Information" : "Payment Method"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                        <input 
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                        <input 
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Phone Number (WhatsApp Preferred)</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Delivery Address</label>
                      <input 
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="House No, Street Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">City</label>
                      <input 
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-50 border border-black/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        placeholder="Accra"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <label className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all ${formData.paymentMethod === 'momo' ? "border-emerald-500 bg-emerald-50/50" : "border-black/5 hover:border-black/10"}`}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="momo"
                        checked={formData.paymentMethod === 'momo'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mr-4">
                        <Smartphone size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-black">Mobile Money (MTN, Telecel, AT)</h4>
                        <p className="text-xs text-zinc-500">Pay securely with your mobile wallet</p>
                      </div>
                      {formData.paymentMethod === 'momo' && <CheckCircle2 className="text-emerald-500" size={20} />}
                    </label>

                    <label className={`flex items-center p-6 border-2 rounded-2xl cursor-pointer transition-all ${formData.paymentMethod === 'card' ? "border-emerald-500 bg-emerald-50/50" : "border-black/5 hover:border-black/10"}`}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <CreditCard size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-black">Credit / Debit Card</h4>
                        <p className="text-xs text-zinc-500">Visa, Mastercard, American Express</p>
                      </div>
                      {formData.paymentMethod === 'card' && <CheckCircle2 className="text-emerald-500" size={20} />}
                    </label>
                  </div>
                )}

                <button 
                  type="submit"
                  className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-black/10"
                >
                  {step === 1 ? "Continue to Payment" : "Complete Order"}
                </button>
              </form>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-black mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-zinc-500">{item.name} x {item.quantity}</span>
                    <span className="font-bold text-black">GHS {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-black/5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-bold text-black">GHS {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Delivery</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-lg pt-4 border-t border-black/5">
                  <span className="font-bold text-black">Total</span>
                  <span className="font-bold text-black">GHS {totalPrice}</span>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-2 text-zinc-400">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
