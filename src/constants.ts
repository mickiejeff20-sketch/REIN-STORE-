import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Ultra-Fast Wireless Charger",
    description: "15W Fast charging for all Qi-enabled devices. Sleek design with heat protection.",
    price: 99,
    originalPrice: 150,
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=800",
    category: "Gadgets",
    rating: 4.8,
    reviews: 124,
    stock: 5,
    features: ["15W Fast Charge", "LED Indicator", "Overheat Protection"]
  },
  {
    id: "2",
    name: "Premium Noise Cancelling Buds",
    description: "Crystal clear sound with active noise cancellation and 24-hour battery life.",
    price: 250,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
    category: "Audio",
    rating: 4.9,
    reviews: 89,
    stock: 12,
    features: ["Active Noise Cancellation", "IPX4 Water Resistant", "Touch Controls"]
  },
  {
    id: "3",
    name: "Smart Fitness Tracker V2",
    description: "Track your heart rate, steps, and sleep with precision. 14-day battery life.",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
    category: "Wearables",
    rating: 4.7,
    reviews: 210,
    stock: 8,
    features: ["Heart Rate Monitor", "Sleep Tracking", "Waterproof 5ATM"]
  },
  {
    id: "4",
    name: "Portable Power Bank 20000mAh",
    description: "High capacity power bank with dual USB ports and fast charging support.",
    price: 120,
    originalPrice: 180,
    image: "https://images.unsplash.com/photo-1609592806457-99d4ad981655?auto=format&fit=crop&q=80&w=800",
    category: "Accessories",
    rating: 4.6,
    reviews: 156,
    stock: 3,
    features: ["20000mAh Capacity", "Dual Output", "Compact Design"]
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Kwame Mensah",
    role: "Tech Enthusiast",
    content: "REIN delivered my charger in less than 24 hours in Accra. The quality is top-notch!",
    rating: 5
  },
  {
    id: "2",
    name: "Ama Serwaa",
    role: "Student",
    content: "Affordable prices and great customer service. I love my new earbuds.",
    rating: 5
  },
  {
    id: "3",
    name: "Kofi Appiah",
    role: "Professional",
    content: "The fitness tracker is exactly as described. Very reliable store.",
    rating: 4
  }
];
