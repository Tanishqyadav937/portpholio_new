import React, { useState } from 'react';
import { Mail, Code, Copy, Check, Sparkles, ArrowUp } from 'lucide-react';
import { playClickSound, playXpSound } from '../utils/sound';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'tanishq.yadav.cse@gmail.com';

  const handleCopyEmail = () => {
    playXpSound();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GITHUB',
      url: 'https://github.com/tanishqyadav',
      icon: GithubIcon,
      color: 'hover:text-emerald-400',
    },
    {
      name: 'LINKEDIN',
      url: 'https://linkedin.com/in/tanishqyadav',
      icon: LinkedinIcon,
      color: 'hover:text-cyan-400',
    },
    {
      name: 'LEETCODE',
      url: 'https://leetcode.com',
      icon: Code,
      color: 'hover:text-amber-400',
    },
  ];

  return (
    <footer id="contact" className="bg-[#121518] border-t-4 border-[#0b0c0e] py-16 px-4 select-none relative">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Respawn Banner */}
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-6">
          PLAYER RESPAWN POINT & COMMUNICATIONS
        </div>

        <h2 className="font-pixel text-2xl sm:text-4xl text-white mb-4 drop-shadow-[3px_3px_0_#000]">
          GET IN TOUCH WITH TANISHQ
        </h2>

        <p className="font-sans text-stone-300 text-base max-w-xl mx-auto mb-8">
          Whether you want to discuss AI models, full-stack architectures, hackathon projects, or potential job opportunities — my inbox is always open!
        </p>

        {/* Copy Email Card Slot */}
        <div className="mc-panel p-6 max-w-lg mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-10 h-10 bg-[#161a1d] border-2 border-[#0e1012] flex items-center justify-center">
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-vt text-stone-400 text-xs block">DIRECT EMAIL</span>
              <span className="font-pixel text-xs sm:text-sm text-white">{emailAddress}</span>
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className={`mc-button px-4 py-2.5 text-xs font-pixel flex items-center space-x-2 w-full sm:w-auto justify-center ${
              copied ? 'mc-button-teal' : 'mc-button-gold'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-white" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </div>

        {/* Social Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound()}
                className="mc-button px-5 py-3 font-pixel text-xs flex items-center space-x-2 text-stone-200 hover:text-[#00ffcc]"
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Return to Top Button */}
        <div className="mb-10">
          <button
            onClick={handleScrollTop}
            className="mc-button px-4 py-2 text-xs font-vt uppercase tracking-wider inline-flex items-center space-x-2 text-stone-300 hover:text-[#00ffcc]"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
            <span>TELEPORT TO SPAWN (TOP)</span>
          </button>
        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-stone-800 font-pixel text-[10px] text-stone-300 tracking-wider">
          © {new Date().getFullYear()} TANISHQ YADAV • CRAFTED WITH REACT & TAILWIND CSS • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
