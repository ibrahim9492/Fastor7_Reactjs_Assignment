import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import Login from './pages/Login';
import Otp from './pages/Otp';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import './App.css';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <NavigationHeader />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/list" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/list" element={isAuthenticated ? <RestaurantList /> : <Navigate to="/login" />} />
        <Route path="/detail/:id" element={isAuthenticated ? <RestaurantDetail /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
