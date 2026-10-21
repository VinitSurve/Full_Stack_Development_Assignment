import { useState } from 'react';
import Logo from './Logo';
import Authbuttons from './authbuttons';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Personal', 'Business', 'Partners', 'Useful Info'];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Nav links */}
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center gap-1 text-[15px] font-semibold text-black hover:text-blue-600 transition-colors"
                >
                  {item}
                  <svg
                    className="w-3.5 h-3.5 text-black stroke-[2.5]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center">
            <Authbuttons />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="flex items-center justify-between font-semibold text-black hover:text-blue-600"
              >
                <span>{item}</span>
                <svg className="w-4 h-4 text-gray-600 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Authbuttons />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;