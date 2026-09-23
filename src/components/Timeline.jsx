import React from 'react';
import { GraduationCap, Briefcase, Trophy, Cpu, Flag } from 'lucide-react';
import { playXpSound } from '../utils/sound';

export default function Timeline() {
  const milestones = [
    {
      year: '2022 - 2026',
      title: 'B.Tech Computer Science & Engineering',
      organization: 'Galgotias University, Greater Noida',
      type: 'EDUCATION',
      icon: GraduationCap,
      description: 'Specialization in Data Science. Maintained strong academic standing with a CGPA of 8.56 / 10. Coursework includes Data Structures, Machine Learning, DBMS, Systems Security, and Software Engineering.',
      achievements: ['CGPA 8.56 / 10', 'Data Science Specialization', 'Core CS Foundations'],
      status: 'IN PROGRESS / FINAL YEAR',
      color: 'emerald',
    },
    {
      year: '2024',
      title: 'Data Analyst Intern',
      organization: 'Bluestock Fintech',
      type: 'EXPERIENCE',
      icon: Briefcase,
      description: 'Handled exploratory data analysis, dataset cleaning, financial metric visualization, and backend report automation using Python and SQL.',
      achievements: ['Financial Data Pipelines', 'Automated Reporting', 'Python & SQL Analytics'],
      status: 'COMPLETED QUEST',
      color: 'cyan',
    },
    {
      year: '2025',
      title: 'Smart India Hackathon 2025 (SIH)',
      organization: 'Government of India / National Hackathon',
      type: 'HACKATHON WIN',
      icon: Trophy,
      description: 'Secured Top 10 Standing out of thousands of national teams for building a real-time, scalable solution to a critical national problem statement.',
      achievements: ['Top 10 National Rank', 'Real-Time System Design', 'High-Pressure Pitching'],
      status: 'ACHIEVEMENT UNLOCKED',
      color: 'amber',
    },
    {
      year: '2025',
      title: 'NVIDIA AI & Deep Learning Workshop',
      organization: 'NVIDIA Deep Learning Institute',
      type: 'WORKSHOP',
      icon: Cpu,
      description: 'Participated in advanced hands-on training for accelerated computing, neural network architectures, and GPU-accelerated model deployment.',
      achievements: ['Accelerated Computing', 'Deep Learning Workflows', 'Model Optimization'],
      status: 'CERTIFICATION EARNED',
      color: 'teal',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          QUEST PROGRESSION & MILESTONES
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          EXPERIENCE & ROADMAP
        </h2>
      </div>

      {/* Quest Timeline Path */}
      <div className="relative border-l-4 border-[#5d9c3f] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
        {milestones.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => playXpSound()}
              className="relative mc-panel p-6 sm:p-8 hover:translate-x-2 transition-transform cursor-pointer group"
            >
              {/* Timeline Node Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-9 h-9 sm:w-10 sm:h-10 bg-[#5d9c3f] border-4 border-[#121417] shadow-[2px_2px_0_#000] flex items-center justify-center group-hover:bg-[#00ffcc] transition-colors">
                <Icon className="w-5 h-5 text-white group-hover:text-[#0f1215]" />
              </div>

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-pixel text-xs text-[#00ffcc] bg-[#161a1d] px-2.5 py-1 border border-stone-700">
                  {item.year}
                </span>
                <span className="font-pixel text-[9px] text-amber-300 bg-[#3d2a13] px-2 py-0.5 border border-amber-600">
                  {item.status}
                </span>
              </div>

              <h3 className="font-pixel text-base sm:text-xl text-white group-hover:text-[#00ffcc] transition-colors mb-1">
                {item.title}
              </h3>
              <p className="font-vt text-stone-300 text-lg sm:text-xl mb-4">
                {item.organization}
              </p>

              <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Achievements Chips */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-stone-800">
                {item.achievements.map((ach, aIdx) => (
                  <span
                    key={aIdx}
                    className="font-vt text-xs bg-[#191d21] text-emerald-300 px-2.5 py-1 border border-emerald-600/50"
                  >
                    ★ {ach}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
