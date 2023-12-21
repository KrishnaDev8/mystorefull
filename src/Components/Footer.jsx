'use client';
import React from 'react';

function Footer() {
    return (
      <footer className="bg-gradient-to-r from-purple-500 to-pink-500 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="logo" className="h-10 w-40" />
              {/* <h2 className="text-lg font-semibold mb-2">D.store</h2> */}
              <ul className="text-sm">
                {/* <li><a href="#about">About Us</a></li> */}
                <li><a href="#contact" className='mt-2'>Contact Us</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul className="text-sm">
                <li><a href="#clothing">Clothing</a></li>
                <li><a href="#shoes">Shoes</a></li>
                <li><a href="#accessories">Accessories</a></li>
                <li><a href="#electronics">Electronics</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Help & Support</h3>
              <ul className="text-sm">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#shipping">Shipping Information</a></li>
                <li><a href="#returns">Returns & Exchanges</a></li>
                <li><a href="#support">Customer Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
              <ul className="text-sm">
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.linkedin.com">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          {/* <hr className="border-t border-gray-400" /> */}
          <p className="mt-6 text-center text-sm text-white">&copy; 2023 Dstore. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
      
