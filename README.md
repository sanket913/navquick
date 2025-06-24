# NavQuick - Smart NFC Solutions

A modern e-commerce platform for NFC and QR-enabled digital networking products with integrated Razorpay payment processing.

## 🚀 Features

- **Modern E-commerce Interface**: Beautiful, responsive design with smooth animations
- **Secure Payment Processing**: Integrated Razorpay payment gateway with test mode
- **Professional Invoice System**: Automated PDF invoice generation and download
- **Product Management**: Categories, filters, and detailed product views
- **Shopping Cart**: Add to cart and buy now functionality
- **Mobile Responsive**: Optimized for all device sizes
- **Custom Logo**: SVG logo with gradient effects and animations

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Icons**: Lucide React
- **Payment**: Razorpay Integration (Test Mode)
- **PDF Generation**: jsPDF, html2canvas
- **Build Tool**: Vite

## 📋 Environment Setup

The application comes pre-configured with Razorpay test credentials. Create a `.env` file in the root directory with the following variables:

```env
# Razorpay Test Configuration (Pre-configured for testing)
VITE_RAZORPAY_KEY_ID=rzp_test_1DP5mmOlF5G5ag
VITE_RAZORPAY_KEY_SECRET=thisissecretkey

# Company Information
VITE_COMPANY_NAME=NavQuick
VITE_COMPANY_EMAIL=sanket9526@gmail.com
VITE_COMPANY_PHONE=+91 9904491017
VITE_COMPANY_ADDRESS=India

# App Configuration
VITE_APP_NAME=NavQuick Store
VITE_APP_DESCRIPTION=Smart NFC & QR Solutions
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd navquick-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 💳 Razorpay Test Mode

### Pre-configured Test Setup:

The application comes with Razorpay test credentials already configured:
- **Test Key ID**: `rzp_test_1DP5mmOlF5G5ag`
- **Test Secret**: `thisissecretkey`

### Test Card Details:

Use these test card details for payment testing:
- **Card Number**: `4111 1111 1111 1111`
- **Expiry**: `12/25`
- **CVV**: `123`
- **Name**: Any name

### Other Test Payment Methods:
- **UPI**: Use any UPI ID ending with `@payu`
- **Net Banking**: Select any test bank
- **Wallets**: All wallet options work in test mode

### Setting up your own Razorpay Account:

1. **Create Razorpay Account**
   - Visit [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Sign up for a new account

2. **Get Test API Keys**
   - Navigate to Settings → API Keys
   - Generate test API keys
   - Replace the keys in `.env` file

3. **Go Live**
   - Complete KYC verification
   - Get live API keys
   - Replace test keys with live keys for production

### Security Notes:
- Never expose your Razorpay Key Secret in frontend code
- Use webhook verification for production applications
- Implement proper order verification on your backend
- The current setup is for testing only

## 🎨 Logo & Branding

### Custom Logo
The application now uses a custom SVG logo located at `/public/assets/logo.svg` featuring:
- Gradient background with purple to blue colors
- Letter "N" with elegant typography
- NFC wave indicators
- Animated hover effects
- Responsive design

### Customizing the Logo
To replace the logo:
1. Replace `/public/assets/logo.svg` with your logo file
2. Update the logo reference in `src/components/Navigation.tsx`
3. Ensure the logo is optimized for web (SVG recommended)

## 📄 Invoice System

The application automatically generates professional invoices with:
- Company branding and logo
- Detailed order breakdown
- Customer billing information
- Payment confirmation details
- PDF download and print functionality
- Test mode indicators

## 🎨 Customization

### Branding
- Update company information in `.env` file
- Replace logo in `/public/assets/logo.svg`
- Modify colors in `tailwind.config.js`

### Products
- Edit product data in `src/data/products.ts`
- Add new categories and items
- Update product images and descriptions

### Styling
- Customize themes in `src/index.css`
- Modify component styles in respective files
- Update gradient colors and animations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security Features

- Environment-based configuration
- Secure payment processing with Razorpay
- Input validation and sanitization
- Error handling and user feedback
- SSL/HTTPS ready
- Test mode for safe development

## 🧪 Testing

### Payment Testing
1. Add products to cart
2. Proceed to checkout
3. Fill in customer details
4. Use test card details provided above
5. Complete payment flow
6. Download/print invoice

### Test Scenarios
- Successful payments
- Failed payments
- Cancelled payments
- Network errors
- Invalid card details

## 📞 Support

For technical support or questions:
- Email: sanket9526@gmail.com
- Phone: +91 9904491017

## 📄 License

This project is proprietary software. All rights reserved.

---

**Made with ❤️ in India 🇮🇳**

### Development Notes:
- Uses Razorpay test environment by default
- All payments are simulated in test mode
- No real money transactions occur
- Perfect for development and demonstration