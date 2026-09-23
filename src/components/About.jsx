import React from 'react';
import { Heart, Trophy, Code2, GraduationCap, Flame, ShieldCheck } from 'lucide-react';
import { playXpSound } from '../utils/sound';

export default function About() {
  const stats = [
    {
      title: 'CGPA SCORE',
      value: '8.56 / 10',
      desc: 'Galgotias University',
      icon: Heart,
      color: 'text-red-400',
      borderColor: 'border-red-500/50',
      bgGlow: 'bg-red-500/10',
      badge: 'HIGH MARKS',
    },
    {
      title: 'LEETCODE SOLVED',
      value: '216+ PROBS',
      desc: 'Data Structures & Algo',
      icon: Code2,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/50',
      bgGlow: 'bg-emerald-500/10',
      badge: 'RANKED DEV',
    },
    {
      title: 'SIH 2025 RANK',
      value: 'TOP 10',
      desc: 'Smart India Hackathon',
      icon: Trophy,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/50',
      bgGlow: 'bg-amber-500/10',
      badge: 'NATIONAL WINNER',
    },
    {
      title: 'INTERNSHIP',
      value: 'BLUESTOCK',
      desc: 'Data Analyst Intern',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/50',
      bgGlow: 'bg-cyan-500/10',
      badge: 'FINTECH EXPERIENCE',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          WORLD INFO & PLAYER STATS
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          ABOUT TANISHQ YADAV
        </h2>
      </div>

      {/* Main World Info Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Bio Panel Left */}
        <div className="lg:col-span-7 mc-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b-2 border-[#16181b]">
              <GraduationCap className="w-7 h-7 text-emerald-400" />
              <div>
                <h3 className="font-pixel text-sm sm:text-base text-white">
                  CHARACTER SPECS & BACKGROUND
                </h3>
                <span className="font-vt text-stone-400 text-lg">
                  Galgotias University, Greater Noida, India
                </span>
              </div>
            </div>

            <p className="font-sans text-stone-300 text-base leading-relaxed mb-4">
              I am a passionate <strong className="text-emerald-400">Computer Science & Engineering (Data Science)</strong> candidate 
              driven by solving complex computational problems and building robust, production-grade applications. 
              My expertise spans machine learning model engineering, exploratory data analytics, and secure full-stack software development.
            </p>

            <p className="font-sans text-stone-300 text-base leading-relaxed mb-6">
              During my internship at <strong className="text-cyan-300">Bluestock Fintech</strong>, I optimized analytical pipelines, 
              cleaned financial datasets, and built interactive dashboards. Furthermore, achieving a <strong className="text-amber-300">Top 10 standing at Smart India Hackathon 2025</strong> validated 
              my ability to design nationwide, high-impact technical systems under intense pressure.
            </p>
          </div>

          {/* Quick Attributes Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#171b1e] p-4 border-2 border-[#0f1113]">
            <div>
              <span className="font-vt text-stone-400 text-sm block">DEGREE</span>
              <span className="font-pixel text-xs text-white">B.Tech CSE</span>
            </div>
            <div>
              <span className="font-vt text-stone-400 text-sm block">SPECIALIZATION</span>
              <span className="font-pixel text-xs text-emerald-400">Data Science</span>
            </div>
            <div>
              <span className="font-vt text-stone-400 text-sm block">LOCATION</span>
              <span className="font-pixel text-xs text-stone-300">Noida, India</span>
            </div>
            <div>
              <span className="font-vt text-stone-400 text-sm block">STATUS</span>
              <span className="font-pixel text-xs text-amber-400 animate-pulse">READY TO DEPLOY</span>
            </div>
          </div>
        </div>

        {/* Attribute Cards Grid Right */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => playXpSound()}
                className={`mc-panel p-5 flex flex-col justify-between hover:translate-y-[-3px] transition-transform cursor-pointer border-2 ${stat.borderColor} ${stat.bgGlow}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-[#161a1d] border-2 border-[#0d0f11] flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="font-pixel text-[9px] bg-[#121518] px-2 py-1 text-stone-300 border border-stone-700">
                    {stat.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-vt text-stone-400 text-lg tracking-wider mb-1">
                    {stat.title}
                  </h4>
                  <div className={`font-pixel text-lg sm:text-xl font-bold ${stat.color} drop-shadow-[2px_2px_0_#000]`}>
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-stone-400 mt-1">
                    {stat.desc}
                  </div>
                </div>

                {/* Simulated Minecraft Hearts / Health Bar */}
                <div className="flex space-x-1 mt-3 pt-2 border-t border-stone-800">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 border border-black ${
                        i < 4 ? 'bg-emerald-500' : 'bg-emerald-800/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
