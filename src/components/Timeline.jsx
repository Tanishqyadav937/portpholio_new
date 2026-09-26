import React from 'react';
import { GraduationCap, Briefcase, Trophy, Cpu, Flag } from 'lucide-react';
import { playXpSound } from '../utils/sound';

export default function Timeline() {
  const milestones = [
    {
      year: 'AUG 2024 – MAY 2028',
      title: 'B.Tech in Computer Science & Engineering (Data Science)',
      organization: 'Galgotias University, Greater Noida',
      type: 'EDUCATION',
      icon: GraduationCap,
      description: 'Specialization in Data Science. Maintaining a strong academic standing with a CGPA of 8.56 / 10. Core focus on Data Structures & Algorithms, Systems Engineering, Machine Learning, and Secure AI.',
      achievements: ['CGPA: 8.56 / 10', 'Data Science Specialization', 'Core CS & DSA'],
      status: 'UNDERGRADUATE',
      color: 'emerald',
    },
    {
      year: 'APR 2026 – MAY 2026',
      title: 'Data Analyst Intern',
      organization: 'Bluestock Fintech',
      type: 'EXPERIENCE',
      icon: Briefcase,
      description: 'Analyzed financial datasets using Python, SQL, EDA, and Data Visualization to generate actionable business insights. Performed data cleaning, preprocessing, dashboard creation, and automated reporting.',
      achievements: ['Python & SQL EDA', 'Dashboard Creation', 'Financial Data Visualization'],
      status: 'COMPLETED INTERNSHIP',
      color: 'cyan',
    },
    {
      year: '2025',
      title: 'Smart India Hackathon (SIH 2025)',
      organization: 'Government of India / National Hackathon',
      type: 'HACKATHON WIN',
      icon: Trophy,
      description: 'Secured Top 10 Rank in SIH 2025 Pre-Qualifier Round with the Indian Carbon Registry prototype. Designed scalable workflows using Python, SQL, Flask, and Database Modeling.',
      achievements: ['Top 10 Rank (Pre-Qualifiers)', 'Indian Carbon Registry', 'Flask & Database Workflows'],
      status: 'NATIONAL HACKATHON FEAT',
      color: 'amber',
    },
    {
      year: '2026',
      title: 'NVIDIA AI Workshop Participant',
      organization: 'NVIDIA AI & Deep Learning Institute',
      type: 'WORKSHOP',
      icon: Cpu,
      description: 'Participated in intensive workshops focused on Artificial Intelligence, Deep Learning architectures, and GPU-accelerated computing.',
      achievements: ['Deep Learning & AI', 'GPU Computing', 'Model Acceleration'],
      status: 'WORKSHOP CERTIFIED',
      color: 'teal',
    },
    {
      year: '2021 – 2023',
      title: 'Lucknow Public School',
      organization: 'Lucknow, India',
      type: 'SCHOOLING',
      icon: GraduationCap,
      description: 'Completed Senior Secondary (Class XII, 2023) with 80% and High School (Class X, 2021) with 87%. Strong foundation in Physics, Chemistry, and Mathematics.',
      achievements: ['Class XII: 80%', 'Class X: 87%', 'PCM Foundation'],
      status: 'COMPLETED SCHOOLING',
      color: 'emerald',
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
