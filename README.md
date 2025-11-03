# Fastor ReactJS Assignment

A Progressive Web Application (PWA) built with React.js that demonstrates modern frontend development skills including authentication simulation, API integration, and PWA capabilities.

### Live Project

- **Link**: https://psaiprathap-fastor7-assignment.netlify.app

## Features

### Core Functionality
- **Two-Step Authentication Flow**: Mobile number input followed by OTP verification (hardcoded OTP: 123456)
- **Restaurant Discovery**: Browse and explore nearby restaurants with detailed information
- **Image Sharing**: Share restaurant images using the Web Share API with robust fallback support
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **PWA Ready**: Installable as a Progressive Web App

### Technical Highlights
- **React Hooks**: Modern React development with useState, useEffect, and useContext
- **Routing**: Client-side routing with react-router-dom
- **API Integration**: Mock API service with simulated network delays
- **Canvas API**: HTML5 Canvas for image manipulation (superimposed logo functionality)
- **Web Share API**: Native sharing capabilities with comprehensive fallbacks
- **Clean Architecture**: Well-organized component structure and separation of concerns

## Technology Stack

- **Frontend Framework**: React.js (v19.2.0)
- **Routing**: react-router-dom
- **Styling**: Pure CSS (responsive design)
- **Build Tool**: Create React App
- **Package Manager**: npm

## Project Structure

```
fastor-reactjs-assignment/
├── public/
│   ├── fastor-logo.png          # Logo for image superimposing
│   ├── index.html              # Main HTML template
│   └── manifest.json           # PWA manifest
├── src/
│   ├── api/
│   │   ├── apiService.js       # API service functions
│   │   └── mockData.js         # Mock restaurant data
│   ├── components/
│   │   ├── Header.js           # Page headers
│   │   ├── NavigationHeader.js # Main navigation
│   │   ├── RestaurantCard.js   # Restaurant card component
│   │   ├── InputField.js       # Reusable input component
│   │   └── Footer.js           # Site footer
│   ├── context/
│   │   └── AuthContext.js      # Authentication context
│   ├── pages/
│   │   ├── Login.js            # Mobile number input
│   │   ├── Otp.js              # OTP verification
│   │   ├── RestaurantList.js   # Restaurant listing
│   │   ├── RestaurantDetail.js # Restaurant details & sharing
│   │   ├── About.js            # About page
│   │   ├── Contact.js          # Contact page
│   │   └── Help.js             # Help/FAQ page
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styles
│   └── index.js                # App entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PSaiPrathap/Fastor7-Reactjs-Assignment
   cd fastor-reactjs-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Authentication Flow
1. **Login**: Enter a 10-digit mobile number
2. **OTP Verification**: Enter the hardcoded OTP `123456`
3. **Access**: Navigate through the restaurant discovery features

### Restaurant Discovery
1. **Browse**: View the list of nearby restaurants
2. **Details**: Click on any restaurant to see detailed information
3. **Share**: Use the "Share Image" button to share restaurant images

### PWA Installation
- The app can be installed as a PWA on supported devices
- Look for the "Add to Home Screen" option in your browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Key Features Demonstration

### Authentication Simulation
- Two-step verification process
- Local storage for session management
- Protected routes

### API Integration
- Mock REST API with realistic data
- Simulated network delays
- Error handling and loading states

### Image Manipulation & Sharing
- HTML5 Canvas API for image processing
- Web Share API with comprehensive fallbacks
- Cross-browser compatibility

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

## Acknowledgments

- Built with Create React App
- Restaurant data and images sourced from placeholder services
- Icons and UI elements designed for demonstration purposes

---

**Note**: This is a demonstration project showcasing React.js and PWA capabilities. The authentication is simulated and the restaurant data is mocked for development purposes.
