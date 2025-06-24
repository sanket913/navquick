import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium QR NFC Business Card',
    price: 899,
    originalPrice: 1299,
    image: '/assets/nfc-card-1.png',
    rating: 5,
    reviews: 124,
    badge: 'Best Seller',
    category: 'QR & NFC Cards',
    description: 'Professional digital business card with QR code and NFC technology for instant contact sharing.',
    features: ['NFC Enabled', 'QR Code', 'Waterproof', 'Custom Design', 'Real-time Updates']
  },
  {
    id: 2,
    name: 'Executive QR NFC Card',
    price: 1299,
    originalPrice: 1799,
    image: '/assets/nfc-card-2.png',
    rating: 4.8,
    reviews: 89,
    badge: 'Premium',
    category: 'QR & NFC Cards',
    description: 'Luxury business card with premium finish and advanced NFC capabilities.',
    features: ['Premium Material', 'NFC Chip', 'QR Code', 'Gold Finish', 'Analytics Dashboard']
  },
  {
    id: 3,
    name: 'Student ID QR Card',
    price: 599,
    originalPrice: 899,
    image: '/assets/student-card.png',
    rating: 4.9,
    reviews: 156,
    badge: 'Popular',
    category: 'QR & NFC Cards',
    description: 'Affordable digital ID card perfect for students and young professionals.',
    features: ['QR Code', 'Student Discount', 'Durable Material', 'Custom Colors', 'Easy Setup']
  },
  {
    id: 4,
    name: 'QR NFC Display Standee',
    price: 2499,
    originalPrice: 3299,
    image: '/assets/nfc-standee.png',
    rating: 5,
    reviews: 67,
    badge: 'New',
    category: 'QR & NFC Standees',
    description: 'Professional display standee with integrated QR and NFC for business presentations.',
    features: ['Large Display', 'NFC Integration', 'QR Code', 'Portable Design', 'Professional Look']
  },
  {
    id: 5,
    name: 'Smart NFC Keychain',
    price: 399,
    originalPrice: 599,
    image: '/assets/nfc-keychain.png',
    rating: 4.7,
    reviews: 203,
    badge: 'Trending',
    category: 'NFC Keychains',
    description: 'Compact NFC keychain for quick contact sharing and digital interactions.',
    features: ['Compact Size', 'NFC Enabled', 'Durable Build', 'Multiple Colors', 'Easy Programming']
  },
  {
    id: 6,
    name: 'Luxury NFC Keychain',
    price: 799,
    originalPrice: 1099,
    image: '/assets/luxury-keychain.png',
    rating: 4.9,
    reviews: 145,
    badge: 'Premium',
    category: 'NFC Keychains',
    description: 'Premium metal keychain with advanced NFC capabilities and elegant design.',
    features: ['Metal Build', 'NFC Chip', 'Laser Engraving', 'Premium Finish', 'Gift Box']
  },
  {
    id: 7,
    name: 'Smart NFC Bracelet',
    price: 1199,
    originalPrice: 1599,
    image: '/assets/nfc-bracelet.png',
    rating: 4.6,
    reviews: 98,
    badge: 'Innovative',
    category: 'NFC Bracelets',
    description: 'Stylish wearable NFC bracelet for modern professionals and tech enthusiasts.',
    features: ['Wearable Tech', 'NFC Enabled', 'Adjustable Size', 'Water Resistant', 'Modern Design']
  },
  {
    id: 8,
    name: 'Premium Accessories Kit',
    price: 1499,
    originalPrice: 1999,
    image: '/assets/a.png',
    rating: 4.5,
    reviews: 76,
    badge: 'Bundle',
    category: 'Accessories',
    description: 'Complete accessories kit with multiple NFC-enabled items for comprehensive networking.',
    features: ['Multiple Items', 'NFC Enabled', 'Premium Package', 'Custom Branding', 'Bulk Discount']
  }
];

export const categories = ['All', 'QR & NFC Cards', 'QR & NFC Standees', 'Accessories', 'NFC Keychains', 'NFC Bracelets'];