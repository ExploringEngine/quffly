import React, { useState } from 'react';
import './App.css';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import qufflyLogo from './assets/quffly-logo.png';
import { superDeals, recommendations } from './data/products';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const categories = [
    'New In', 'Women', 'Men', 'Kids', 'Shoes', 'Accessories', 'Home', 'Sale'
  ];

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    // In a real app, you'd add the product to a cart state
  };

  const addToWishlist = (product) => {
    setWishlistCount(wishlistCount + 1);
    // In a real app, you'd add the product to a wishlist state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top banner */}
        <div className="bg-teal-600 text-white text-center py-2 text-sm">
          <span>🚚 FREE SHIPPING ON ORDERS OVER $50 | 📞 24/7 CUSTOMER SUPPORT | 💰 BEST PRICES GUARANTEED</span>
        </div>
        
        {/* Main header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={qufflyLogo} alt="Quffly" className="h-10 w-auto" />
            </div>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-600 text-white px-6 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* User account */}
              <button className="flex items-center space-x-1 hover:text-teal-600 transition-colors">
                <User className="h-6 w-6" />
                <span className="hidden lg:block">Account</span>
              </button>

              {/* Wishlist */}
              <button className="relative flex items-center space-x-1 hover:text-teal-600 transition-colors">
                <Heart className="h-6 w-6" />
                <span className="hidden lg:block">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button className="relative flex items-center space-x-1 hover:text-teal-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="hidden lg:block">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="absolute right-0 top-0 bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-gray-100 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row md:space-x-8 py-2">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="block py-2 px-2 text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-teal-500 to-coral-400 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Quffly
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover the latest trends in fashion
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </section>

        {/* Super Deals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Super Deals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {superDeals.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                      {product.discount}
                    </span>
                    <button
                      onClick={() => addToWishlist(product)}
                      className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-bold text-teal-600">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recommended for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => addToWishlist(product)}
                      className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-bold text-teal-600">${product.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src={qufflyLogo} alt="Quffly" className="h-8 w-auto mb-4 filter brightness-0 invert" />
              <p className="text-gray-400">
                Your one-stop destination for trendy fashion and lifestyle products.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Quffly.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

