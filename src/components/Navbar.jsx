import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, Award, Cpu, FolderGit2, BookOpen, MessageSquareCode } from 'lucide-react';
import { toggleSound, getSoundStatus, playClickSound } from '../utils/sound';

export default function Navbar() {
  const [soundActive, setSoundActive] = useState(getSoundStatus());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSoundToggle = () => {
    const nextState = !soundActive;
    toggleSound(nextState);
    setSoundActive(nextState);
    if (nextState) playClickSound();
  };

  const navLinks = [
    { name: 'SPAWN', href: '#hero', icon: Compass },
    { name: 'WORLD INFO', href: '#about', icon: BookOpen },
    { name: 'CRAFTING', href: '#skills', icon: Cpu },
    { name: 'LOOT CRATES', href: '#projects', icon: FolderGit2 },
    { name: 'PROGRESS', href: '#timeline', icon: Award },
    { name: 'TROPHIES', href: '#achievements', icon: Award },
    { name: 'FAQ', href: '#faq', icon: MessageSquareCode },
  ];

  const handleNavClick = (href) => {
    playClickSound();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#181c20]/95 backdrop-blur-md border-b-4 border-[#0e1012] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Name in Minecraft Pixel Font */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center space-x-3 group"
        >
          <div className="w-9 h-9 bg-[#5d9c3f] border-2 border-[#121417] shadow-[2px_2px_0_#000] flex items-center justify-center font-pixel text-xs text-white group-hover:scale-105 transition-transform">
            TY
          </div>
          <div>
            <span className="font-pixel text-xs sm:text-sm text-[#00ffcc] tracking-wide block drop-shadow-[1px_1px_0_#000]">
              TANISHQ YADAV
            </span>
            <span className="font-vt text-stone-400 text-sm block -mt-1">
              [DEVELOPER PORTFOLIO]
            </span>
          </div>
        </a>

        {/* Desktop Navigation Hotbar */}
        <nav className="hidden lg:flex items-center space-x-1.5 bg-[#262b30] p-1.5 border-2 border-[#121416] shadow-[inset_2px_2px_0_#141618,inset_-2px_-2px_0_#383e46]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="mc-button px-3 py-1.5 text-xs font-vt tracking-wider uppercase flex items-center space-x-1.5 hover:text-[#00ffcc]"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Sound FX Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleSoundToggle}
            className={`mc-button p-2 text-xs flex items-center justify-center ${
              soundActive ? 'mc-button-teal' : 'mc-button'
            }`}
            title={soundActive ? 'Sound FX Enabled' : 'Sound FX Muted'}
            aria-label="Toggle Sound Effects"
          >
            {soundActive ? <Volume2 className="w-4 h-4 text-emerald-300" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden mc-button p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5 text-stone-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1f2428] border-b-4 border-[#0b0c0e] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="mc-button block w-full py-2 px-4 text-left font-vt text-lg tracking-wide uppercase hover:text-[#00ffcc]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
