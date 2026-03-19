import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "233500000000"; // Placeholder
  const message = "Hello REIN Store, I have a question about a product.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:scale-110 transition-transform group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-black/5">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
