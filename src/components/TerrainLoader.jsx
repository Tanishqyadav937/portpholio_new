import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playXpSound } from '../utils/sound';

export default function TerrainLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Building Terrain...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    const textStages = [
      'Generating Chunks...',
      'Loading Biomes & Features...',
      'Building Terrain...',
      'Spawn Point Ready!'
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 30 && prev < 30) setLoadingText(textStages[1]);
        if (next >= 65 && prev < 65) setLoadingText(textStages[2]);
        if (next >= 95 && prev < 95) setLoadingText(textStages[3]);

        if (next >= 100) {
          clearInterval(interval);
          playXpSound();
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 250);
          return 100;
        }
        return next;
      });
    }, 45); // ~1.1s total duration

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    playXpSound();
    setIsVisible(false);
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1013] px-4 font-sans select-none"
        >
          {/* Background Pixel Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e242a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

          <div className="mc-panel-dirt p-8 max-w-md w-full text-center relative z-10">
            {/* Dirt Block Graphic Header */}
            <div className="w-16 h-16 mx-auto mb-4 bg-[#5d9c3f] border-4 border-[#14171a] shadow-[inset_0_4px_0_#79b95b,inset_0_-4px_0_#3e6d27,4px_4px_0_#000] flex items-center justify-center">
              <span className="font-pixel text-2xl text-white drop-shadow-[2px_2px_0_#000]">TY</span>
            </div>

            <h2 className="font-pixel text-lg text-emerald-400 mb-2 drop-shadow-[2px_2px_0_#000]">
              WORLD LOADING
            </h2>
            <p className="font-vt text-xl text-stone-300 mb-6 tracking-wide">
              {loadingText}
            </p>

            {/* Minecraft XP Bar Component */}
            <div className="relative w-full mb-3">
              <div className="mc-slot h-6 w-full bg-[#1b1c1e] overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-lime-500 via-emerald-400 to-teal-300 border-y border-emerald-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* XP Level Number Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0e1114] px-2 border border-emerald-500/60 font-pixel text-xs text-[#00ffcc] shadow-[0_2px_0_#000]">
                LVL {Math.floor(progress / 10)}
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-stone-400 font-vt mt-4">
              <span>{progress}% GENERATED</span>
              <button
                onClick={handleSkip}
                className="hover:text-emerald-400 underline cursor-pointer transition-colors"
              >
                [Press to Skip]
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
