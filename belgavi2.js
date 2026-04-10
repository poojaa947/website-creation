import React, { useState, useEffect } from 'react';
import { Bus, MapPin, Clock, Navigation, Search, Menu, X, User, Settings, LogOut } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: '/lovable-uploads/6a30cd18-86d4-4654-87fd-e920e9744481.png', alt: 'Belagavi Night View with Indian Flag' },
    { src: '/lovable-uploads/8d2d42b3-65b5-473e-9249-1c0fb364a252.png', alt: 'Belagavi Waterfalls' },
    { src: '/lovable-uploads/aac5e681-13cb-4bbb-9507-d1a136becf73.png', alt: 'Belagavi Heritage Building' },
    { src: '/lovable-uploads/488dc246-5f3c-41ad-9c21-1998b038c20c.png', alt: 'Historic Temple' },
    { src: '/placeholder.svg', alt: 'Scenic View' }
  ];

  const busRoutes = [
    { destination: 'Uchagavi', village: 'Village', stops: 5, duration: '30m' },
    { destination: 'Ambewadi', village: 'Village', stops: 5, duration: '30m' },
    { destination: 'Gojaga', village: 'Village', stops: 5, duration: '30m' },
    { destination: 'Angol', village: 'Village', stops: 5, duration: '30m' },
    { destination: 'Kakti', village: 'Village', stops: 5, duration: '30m' },
    { destination: 'Sambra', village: 'Belagavi Airport', stops: 5, duration: '30m' },
    { destination: 'Panth Balekundri', village: 'Village', stops: 5, duration: '30m' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-red-950" />
              <span className="text-xl font-bold text-gray-900">Belagavi Bus</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#district" className="flex items-center space-x-1 text-gray-700 hover:text-red-950 transition-colors">
                <MapPin className="h-4 w-4" />
                <span>Select District</span>
              </a>
              <a href="#services" className="flex items-center space-x-1 text-gray-700 hover:text-red-950 transition-colors">
                <Navigation className="h-4 w-4" />
                <span>Services</span>
              </a>
              <a href="#contact" className="flex items-center space-x-1 text-gray-700 hover:text-red-950 transition-colors">
                <span>Contact</span>
              </a>
              
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-950 transition-colors"
                >
                  <span>More</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <a href="#profile" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </a>
                    <a href="#settings" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </a>
                    <a href="#logout" className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-950"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#district" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-red-950">
                  <MapPin className="h-4 w-4" />
                  <span>Select District</span>
                </a>
                <a href="#services" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-red-950">
                  <Navigation className="h-4 w-4" />
                  <span>Services</span>
                </a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-950">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Slider and Search */}
      <div className="relative h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

        {/* Centered Search Bar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white border-opacity-30 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-white mb-2">Find Your Bus</h1>
              <p className="text-white text-opacity-90">Track buses across Belagavi district</p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-950 focus:bg-white transition-all duration-300"
              />
            </div>
            
            <button className="w-full mt-4 bg-red-950 hover:bg-red-900 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 transform hover:scale-105">
              Search Routes
            </button>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bus Routes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Routes</h2>
          <p className="text-gray-600">Track your bus in real-time</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {busRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Bus className="h-6 w-6 text-red-950" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{route.destination}</h3>
                    <p className="text-gray-500">Fri, 18 Jul 2025</p>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="hidden md:flex items-center space-x-8">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">CBT</p>
                    <p className="text-sm text-gray-500">Bus Stand</p>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-1">
                    <p className="text-sm text-gray-600">{route.duration}</p>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-950 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="w-2 h-2 bg-red-950 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-600">{route.stops} Stops</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{route.destination}</p>
                    <p className="text-sm text-gray-500">{route.village}</p>
                  </div>
                </div>

                {/* Right Section */}
                <button className="bg-red-950 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center space-x-2 group">
                  <span>Track</span>
                  <MapPin className="h-4 w-4 group-hover:animate-pulse" />
                </button>
              </div>

              {/* Mobile Middle Section */}
              <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">CBT Bus Stand</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{route.duration} • {route.stops} stops</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{route.destination}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
