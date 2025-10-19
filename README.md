# STK College Website

A modern, responsive educational website for STK College built with React, Tailwind CSS, and Firebase.

## Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Fast Loading**: Optimized performance with Vite
- 🔥 **Firebase Integration**: Real-time data storage and management
- 📝 **Registration Forms**: Matric and IT course registration with form validation
- 👥 **Staff Directory**: Meet our team of expert educators
- 📊 **Results Showcase**: Student achievements and success stories
- 💰 **Pricing Plans**: Transparent pricing for all courses
- 📞 **Contact System**: Integrated contact form with Firebase storage

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: React Icons
- **Database**: Firebase Firestore
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase project (for full functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stk-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase config to `src/firebase/config.js`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Firebase Setup

1. Create a new Firebase project
2. Enable Firestore Database
3. Update `src/firebase/config.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## Project Structure

```
stk-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── SplashScreen.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── MatricRegister.jsx
│   │   ├── ITRegister.jsx
│   │   ├── Staff.jsx
│   │   ├── Results.jsx
│   │   ├── Pricing.jsx
│   │   └── Contact.jsx
│   ├── firebase/          # Firebase configuration
│   │   └── config.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### 🏠 Home Page
- Hero section with call-to-action
- Features showcase
- Statistics display
- Course highlights

### 📚 About Page
- Mission and vision
- Company story
- Values and achievements
- Team overview

### 📝 Registration Forms
- **Matric Registration**: Subject upgrade enrollment
- **IT Registration**: Professional course enrollment
- Form validation and Firebase integration
- Success/error feedback

### 👥 Staff Page
- Staff member profiles
- Department organization
- Contact information
- Qualifications and experience

### 🏆 Results Page
- Student success stories
- Achievement statistics
- Search and filter functionality
- Testimonials

### 💰 Pricing Page
- Course pricing tiers
- Payment options
- Feature comparisons
- Special offers

### 📞 Contact Page
- Contact form with validation
- Contact information
- Google Maps integration (placeholder)
- Social media links

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#004aad',    // Main brand color
      secondary: '#ffcc00',  // Accent color
      background: '#f9f9f9', // Background color
    }
  }
}
```

### Content
- Update company information in component files
- Replace placeholder images with actual photos
- Modify course offerings and pricing
- Update contact information

## Deployment

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Deploy: `vercel`

### Netlify
1. Build: `npm run build`
2. Upload `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@stkeducation.co.za or visit our website.

---

**STK College** - Empowering students through quality education and innovative learning approaches."# STK-College-Pty-Ltd-Website" 
"# STK-College-Pty-Ltd-Website" 
