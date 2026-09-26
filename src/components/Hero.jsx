import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Sun, Moon, ArrowDown, Terminal, FileText } from 'lucide-react';
import { playClickSound, playTeleportSound } from '../utils/sound';

import avatarImg from '../assets/avatar.jpg';

export default function Hero({ onOpenResume }) {
  const [isDay, setIsDay] = useState(false);

  const toggleDayNight = () => {
    playClickSound();
    setIsDay(!isDay);
  };

  const handleTeleport = (targetId) => {
    playTeleportSound();
    const elem = document.querySelector(targetId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-16 overflow-hidden transition-colors duration-700 select-none ${
        isDay
          ? 'bg-gradient-to-b from-[#3878ad] via-[#5c98ca] to-[#3a281c]'
          : 'bg-gradient-to-b from-[#0b0e14] via-[#141b24] to-[#1d261e]'
      }`}
    >
      {/* Drifting Pixel Clouds Layer */}
      <div className="absolute top-10 left-0 right-0 h-32 overflow-hidden pointer-events-none opacity-40">
        <div className="animate-cloud-fast absolute top-2 flex space-x-32">
          <div className="w-32 h-10 bg-white/70 shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-2 border-slate-700" />
          <div className="w-48 h-12 bg-white/60 shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-2 border-slate-700" />
        </div>
        <div className="animate-cloud-slow absolute top-12 flex space-x-48">
          <div className="w-40 h-10 bg-white/50 shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-2 border-slate-700" />
          <div className="w-56 h-14 bg-white/40 shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-2 border-slate-700" />
        </div>
      </div>

      {/* Sun/Moon Toggle Button */}
      <button
        onClick={toggleDayNight}
        className="absolute top-6 right-6 z-20 mc-button p-2.5 flex items-center space-x-2 text-xs font-vt bg-[#262b30] hover:text-[#00ffcc]"
        title="Toggle Day/Night World Lighting"
      >
        {isDay ? (
          <>
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline text-amber-300">DAY MODE</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-cyan-300" />
            <span className="hidden sm:inline text-cyan-200">NIGHT MODE</span>
          </>
        )}
      </button>

      {/* Hero Content Panel */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl w-full text-center mc-panel p-6 sm:p-10 my-8 shadow-2xl"
      >
        {/* Spawn Point Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#171b1e] px-4 py-1.5 border-2 border-[#5d9c3f] shadow-[inset_2px_2px_0_#2b4a1c] mb-6">
          <span className="w-2.5 h-2.5 bg-emerald-400 animate-pulse" />
          <span className="font-pixel text-[10px] sm:text-xs text-[#00ffcc] tracking-wider uppercase">
            WORLD SPAWN POINT: (X: 2026, Y: 8.56, Z: SIH_TOP10)
          </span>
        </div>

        {/* Character Skin Avatar Display */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Item Frame Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 rounded-none opacity-80 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            {/* Minecraft Item Frame Box */}
            <div className="relative bg-[#221c16] p-3 border-4 sm:border-8 border-[#5c4028] shadow-[inset_0_0_20px_rgba(0,0,0,0.95),6px_6px_0_#101417]">
              <div className="w-48 h-64 sm:w-64 sm:h-84 md:w-72 md:h-96 overflow-hidden border-2 border-[#3d2919] bg-[#121518] relative">
                <img
                  src={avatarImg}
                  alt="Tanishq Yadav - Minecraft Character Avatar"
                  className="w-full h-full object-cover object-top contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/85 py-1.5 text-center border-t-2 border-amber-500/60 backdrop-blur-xs">
                  <span className="font-pixel text-[10px] sm:text-xs text-amber-300 tracking-widest uppercase block drop-shadow-[1px_1px_0_#000]">
                    PLAYER SKIN • LVL 99 DEV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Name Headline */}
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-wider mb-4 drop-shadow-[4px_4px_0_#101417]">
          TANISHQ YADAV
        </h1>

        {/* Subtitle / Role */}
        <div className="font-vt text-xl sm:text-2xl md:text-3xl text-amber-300 tracking-wide mb-6">
          DATA SCIENCE • ML/AI • SECURE FULL-STACK SYSTEMS
        </div>

        {/* Short Bio Tagline */}
        <p className="font-sans text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
          B.Tech CSE (Data Science) student at <strong className="text-emerald-400 font-semibold">Galgotias University</strong>. 
          Former Data Analyst Intern at <strong className="text-cyan-300 font-semibold">Bluestock Fintech</strong> & 
          <strong className="text-amber-400 font-semibold"> Top 10 Winner in Smart India Hackathon 2025 (Pre-Qualifier Round)</strong>. 
          Crafting intelligent machine learning models and bulletproof web applications.
        </p>

        {/* Action Button Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => handleTeleport('#projects')}
            className="mc-button mc-button-gold px-6 py-3 text-sm sm:text-base font-pixel tracking-wider flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <Compass className="w-5 h-5 text-amber-100" />
            <span>TELEPORT TO PROJECTS</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              if (onOpenResume) onOpenResume();
            }}
            className="mc-button mc-button-teal px-6 py-3 text-sm sm:text-base font-pixel tracking-wider flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <FileText className="w-5 h-5 text-teal-100" />
            <span>VIEW RESUME</span>
          </button>

          <button
            onClick={() => handleTeleport('#contact')}
            className="mc-button px-6 py-3 text-sm sm:text-base font-pixel tracking-wider flex items-center space-x-2 w-full sm:w-auto justify-center text-stone-200"
          >
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <span>RESPAWN CHEST</span>
          </button>
        </div>

        {/* Retro In-Game Chat Console Display */}
        <div className="bg-[#121518] border-2 border-[#090b0d] p-3 text-left font-vt text-stone-300 text-sm sm:text-base flex items-center space-x-2 overflow-x-auto">
          <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-emerald-400 shrink-0">&gt;</span>
          <span className="text-stone-300">
            /tp @player ~GalgotiasUniversity ~BluestockFintech ~216LeetCode
          </span>
          <span className="text-teal-400 animate-pulse font-bold">|</span>
        </div>
      </motion.div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={() => handleTeleport('#about')}
        className="relative z-10 mt-2 text-stone-300 hover:text-[#00ffcc] flex flex-col items-center cursor-pointer transition-colors"
      >
        <span className="font-vt text-lg tracking-widest uppercase mb-1">
          SCROLL TO EXPLORE WORLD
        </span>
        <ArrowDown className="w-6 h-6 animate-bounce text-emerald-400" />
      </button>
    </section>
  );
}
