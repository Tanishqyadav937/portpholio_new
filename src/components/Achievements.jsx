import React from 'react';
import { Trophy, Code, Award, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import { playXpSound } from '../utils/sound';

export default function Achievements() {
  const trophies = [
    {
      title: 'SIH 2025 PRE-QUALIFIER',
      subtitle: 'Smart India Hackathon',
      value: 'TOP 10 RANK',
      desc: 'Achieved Top 10 Rank in the SIH 2025 Pre-Qualifier round among innovator teams across India.',
      icon: Trophy,
      color: 'text-amber-400',
      frameBorder: 'border-amber-600',
    },
    {
      title: 'LEETCODE 216+',
      subtitle: 'Competitive Programming',
      value: '216+ SOLVED',
      desc: 'Consistent problem solver demonstrating expertise in trees, graphs, DP & system optimization.',
      icon: Code,
      color: 'text-emerald-400',
      frameBorder: 'border-emerald-600',
    },
    {
      title: 'CGPA 8.56 / 10',
      subtitle: 'Galgotias University',
      value: 'TOP DECILE',
      desc: 'Sustained academic excellence in Computer Science & Engineering (Data Science).',
      icon: Award,
      color: 'text-red-400',
      frameBorder: 'border-red-600',
    },
    {
      title: 'DATA ANALYST INTERN',
      subtitle: 'Bluestock Fintech',
      value: 'FINTECH PRO',
      desc: 'Optimized financial pipelines and built dynamic reporting dashboards for market datasets.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      frameBorder: 'border-cyan-600',
    },
    {
      title: '83 / 83 TESTS PASS',
      subtitle: 'Code Integrity',
      value: '100% SUITE',
      desc: 'Rigorous automated testing and zero regression standard across production applications.',
      icon: CheckCircle2,
      color: 'text-teal-400',
      frameBorder: 'border-teal-600',
    },
    {
      title: 'NVIDIA CERTIFIED',
      subtitle: 'AI & Deep Learning',
      value: 'GPU ACCEL',
      desc: 'Completed specialized NVIDIA workshop on deep neural networks and accelerated workflows.',
      icon: Star,
      color: 'text-lime-400',
      frameBorder: 'border-lime-600',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          TROPHY CASE & ITEM FRAMES
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          ACHIEVEMENTS & BADGES
        </h2>
        <p className="font-vt text-stone-300 text-lg sm:text-xl mt-2">
          IN-GAME DISPLAY OF UNLOCKED BADGES AND COMPETITIVE METRICS
        </p>
      </div>

      {/* Item Frame Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trophies.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => playXpSound()}
              className="item-frame p-6 flex flex-col items-center text-center group hover:scale-[1.03] transition-transform cursor-pointer"
            >
              {/* Item Frame Display Slot */}
              <div className="item-frame-bg w-20 h-20 mb-4 flex items-center justify-center relative group-hover:rotate-6 transition-transform">
                <Icon className={`w-10 h-10 ${item.color} drop-shadow-[2px_2px_0_#000]`} />
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-pixel text-sm text-white mb-1 group-hover:text-[#00ffcc] transition-colors">
                {item.title}
              </h3>
              <span className="font-vt text-amber-300 text-lg mb-2">
                [{item.subtitle}]
              </span>

              {/* Metric Badge */}
              <div className="font-pixel text-xs text-emerald-400 bg-[#14171a] px-3 py-1 border border-stone-700 mb-3 shadow-[2px_2px_0_#000]">
                {item.value}
              </div>

              <p className="font-sans text-stone-300 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
