import { useState } from 'react';

function Hero() {
  const [activeTab, setActiveTab] = useState('Business');

  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      {/* Personal / Business Segmented Switcher */}
      <div className="inline-flex items-center bg-[#eff2f5] p-1.5 rounded-full mb-8">
        <button
          onClick={() => setActiveTab('Personal')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'Personal'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setActiveTab('Business')}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'Business'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Business
        </button>
      </div>

      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black mb-3">
        PayPal Open
      </h1>

      {/* Subheading */}
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
        One platform for your business needs
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-neutral-800 max-w-2xl mx-auto mb-8 leading-relaxed">
        PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <a
          href="#signup"
          className="inline-flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-colors cursor-pointer shadow-sm"
        >
          Sign Up
        </a>
        <a
          href="#contact-sales"
          className="inline-flex items-center justify-center bg-[#eff2f5] hover:bg-gray-200 text-black font-semibold text-sm sm:text-base px-7 py-3 rounded-full transition-colors cursor-pointer"
        >
          Contact Sales
        </a>
      </div>
    </section>
  );
}

export default Hero;
