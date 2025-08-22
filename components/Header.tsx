import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#aka', label: 'Details' },
  { href: '#publications', label: 'Bio' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const MenuIcon = () => (
    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);

const CloseIcon = () => (
    <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-[#0c0c1e]/80 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <nav className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="font-display text-2xl font-bold text-white tracking-wider hover:text-amber-300 transition-colors z-50">
            GOD
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-slate-300 hover:text-amber-300 transition-colors duration-300 tracking-wide">
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0c0c1e]/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center space-y-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-3xl font-display text-slate-300 hover:text-amber-300 transition-colors duration-300 tracking-wide">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;