import React, { useState } from 'react';
import { Cpu, ShieldAlert, Code2, Database, BrainCircuit, Wrench, Layers } from 'lucide-react';
import { playClickSound, playItemPickupSound } from '../utils/sound';

export default function SkillTrack() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', name: 'ALL TRACKS', icon: Layers },
    { id: 'AI_ML', name: 'AI / MACHINE LEARNING', icon: BrainCircuit },
    { id: 'WEB', name: 'FULL-STACK WEB DEV', icon: Code2 },
    { id: 'SECURITY', name: 'SECURITY & SYSTEMS', icon: ShieldAlert },
    { id: 'CORE_CS', name: 'CORE CS & ALGORITHMS', icon: Cpu },
    { id: 'DATABASE', name: 'DATABASES & DATA', icon: Database },
  ];

  const skillTracks = [
    {
      category: 'AI_ML',
      categoryLabel: 'AI / MACHINE LEARNING',
      name: 'Python & PyTorch',
      durability: 95,
      iconName: '🤖',
      level: 'LEVEL V (MASTER)',
      description: 'Deep Learning, Neural Networks, Model Optimization & Data Pipeline Construction.',
      tags: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV'],
    },
    {
      category: 'AI_ML',
      categoryLabel: 'AI / MACHINE LEARNING',
      name: 'Data Analytics & ML Models',
      durability: 90,
      iconName: '📊',
      level: 'LEVEL IV (EXPERT)',
      description: 'Feature Engineering, EDA, Regression/Classification, & Model Evaluation.',
      tags: ['Exploratory Data Analysis', 'Matplotlib', 'Seaborn', 'Jupyter', 'Statistics'],
    },
    {
      category: 'WEB',
      categoryLabel: 'FULL-STACK WEB DEV',
      name: 'React.js & Frontend Stack',
      durability: 92,
      iconName: '⚡',
      level: 'LEVEL V (MASTER)',
      description: 'Modern SPA development, Tailwind CSS design systems, Framer Motion animations.',
      tags: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'REST APIs'],
    },
    {
      category: 'WEB',
      categoryLabel: 'FULL-STACK WEB DEV',
      name: 'Java Servlet MVC Backend',
      durability: 88,
      iconName: '☕',
      level: 'LEVEL IV (EXPERT)',
      description: 'Enterprise Java MVC applications, Servlets, JSP, JDBC, & Session Management.',
      tags: ['Java', 'Servlets', 'JSP', 'JDBC', 'MVC Architecture', 'Tomcat'],
    },
    {
      category: 'SECURITY',
      categoryLabel: 'SECURITY & SYSTEMS',
      name: 'Secure Full-Stack & Auth',
      durability: 85,
      iconName: '🛡️',
      level: 'LEVEL IV (EXPERT)',
      description: 'Role-based access control, cryptographic verification, payload security & rate limiting.',
      tags: ['JWT', 'OAuth2', 'HTTPS/TLS', 'SQL Injection Defense', 'RBAC', 'Data Encryption'],
    },
    {
      category: 'CORE_CS',
      categoryLabel: 'CORE CS & ALGORITHMS',
      name: 'Data Structures & Algorithms',
      durability: 94,
      iconName: '🧩',
      level: 'LEVEL V (MASTER)',
      description: '216+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Arrays.',
      tags: ['Trees & Graphs', 'Dynamic Programming', 'Recursion', 'Binary Search', 'Sorting'],
    },
    {
      category: 'CORE_CS',
      categoryLabel: 'CORE CS & ALGORITHMS',
      name: 'Object-Oriented Design (OOP)',
      durability: 90,
      iconName: '⚙️',
      level: 'LEVEL IV (EXPERT)',
      description: 'Design patterns, modular architecture, SOLID principles, & clean code practices.',
      tags: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Design Patterns', 'System Design'],
    },
    {
      category: 'DATABASE',
      categoryLabel: 'DATABASES & DATA',
      name: 'SQL & Relational Databases',
      durability: 88,
      iconName: '💾',
      level: 'LEVEL IV (EXPERT)',
      description: 'Query optimization, schema normalization, indexing, joins & stored procedures.',
      tags: ['MySQL', 'PostgreSQL', 'SQLite', 'Database Indexing', 'Schema Design'],
    },
  ];

  const filteredTracks = activeCategory === 'ALL'
    ? skillTracks
    : skillTracks.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          CRAFTING TRACKS & ENCHANTMENTS
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          SKILLS & TECH STACK
        </h2>
        <p className="font-vt text-stone-300 text-lg sm:text-xl mt-2">
          SELECT A CRAFTING TRACK TO INSPECT DURABILITY AND LEVEL ENCHANTMENTS
        </p>
      </div>

      {/* Track Category Selector Hotbar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 bg-[#161a1d] p-3 border-4 border-[#0e1012] shadow-xl">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat.id);
              }}
              className={`mc-button px-3.5 py-2 text-xs font-vt tracking-wider uppercase flex items-center space-x-2 ${
                isSelected ? 'mc-button-gold text-amber-100' : 'mc-button text-stone-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-200' : 'text-stone-400'}`} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Skill Track Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredTracks.map((skill, idx) => (
          <div
            key={idx}
            onMouseEnter={() => playItemPickupSound()}
            className="mc-panel p-6 group hover:translate-y-[-4px] hover:border-[#00ffcc] transition-all cursor-pointer relative overflow-hidden"
          >
            {/* Top Bar: Icon + Category Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {/* Crafting Slot Item Display */}
                <div className="mc-slot w-12 h-12 flex items-center justify-center text-2xl bg-[#2b2b2b] group-hover:scale-110 transition-transform">
                  <span>{skill.iconName}</span>
                </div>
                <div>
                  <h3 className="font-pixel text-sm sm:text-base text-white group-hover:text-[#00ffcc] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-vt text-emerald-400 text-sm tracking-wider">
                    {skill.level}
                  </span>
                </div>
              </div>

              <span className="font-pixel text-[9px] bg-[#14171a] px-2 py-1 text-stone-300 border border-stone-700">
                {skill.categoryLabel}
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-stone-300 text-sm leading-relaxed mb-4">
              {skill.description}
            </p>

            {/* Durability Bar (Skill Level Indicator) */}
            <div className="mb-4">
              <div className="flex justify-between items-center font-vt text-xs text-stone-400 mb-1">
                <span>ITEM DURABILITY / PROFICIENCY</span>
                <span className="text-emerald-400 font-pixel text-[10px]">{skill.durability}%</span>
              </div>
              <div className="mc-slot h-3.5 w-full bg-[#16181b] overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 transition-all duration-500"
                  style={{ width: `${skill.durability}%` }}
                />
              </div>
            </div>

            {/* Tags Slot Array */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-800">
              {skill.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-vt text-xs bg-[#191d21] text-stone-300 px-2 py-0.5 border border-stone-700 hover:border-emerald-500 hover:text-emerald-300 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
