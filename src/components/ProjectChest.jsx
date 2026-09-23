import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, ChevronDown, Shield, Database, MapPin, AlertTriangle, FileCode2, Sparkles, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playChestSound, playClickSound } from '../utils/sound';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectChest() {
  const [openChestId, setOpenChestId] = useState(null);

  const projects = [
    {
      id: 'centinela',
      title: 'CENTINELA',
      tagline: 'AI-Powered Real-Time Security & Anomaly Detection System',
      icon: Shield,
      badge: 'EPIC LOOT',
      badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-500',
      problem: 'Traditional security monitors fail to detect subtle, zero-day anomalous behaviors in high-throughput network streams in real time.',
      solution: 'Developed an end-to-end AI monitoring engine using PyTorch & OpenCV that analyzes video/data streams, detects intrusions, and triggers automated containment alerts in milliseconds.',
      stack: ['Python', 'PyTorch', 'OpenCV', 'React', 'Tailwind CSS', 'FastAPI'],
      github: 'https://github.com/tanishqyadav',
      demo: '#',
      lootRarity: 'LEGENDARY ITEM',
    },
    {
      id: 'carbon-registry',
      title: 'Indian Carbon Registry',
      tagline: 'Transparent Data Platform for Carbon Credit Tracking & Audit',
      icon: Database,
      badge: 'RARE LOOT',
      badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-500',
      problem: 'Fragmented carbon credit accounting leads to double-counting, greenwashing, and opaque environmental impact verification across Indian industries.',
      solution: 'Engineered a centralized data registry platform that logs carbon credit issuances, verifies emission reduction benchmarks, and generates immutable audit reports for compliance.',
      stack: ['React', 'Python', 'PostgreSQL', 'Tailwind CSS', 'REST API', 'Data Visualization'],
      github: 'https://github.com/tanishqyadav',
      demo: '#',
      lootRarity: 'RARE ITEM',
    },
    {
      id: 'road-mapping',
      title: 'Interactive Road Mapping System',
      tagline: 'Spatial Route Optimization & Infrastructure Analytics Platform',
      icon: MapPin,
      badge: 'EPIC LOOT',
      badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-500',
      problem: 'Urban planners lack interactive, real-time spatial tools to visualize road degradation, traffic bottlenecks, and optimal route paths.',
      solution: 'Built a high-performance spatial mapping dashboard utilizing custom graph algorithms to calculate optimal pathing, render road condition overlays, and simulate traffic congestion.',
      stack: ['JavaScript (ES6)', 'Leaflet.js', 'Graph Algorithms', 'HTML5 Canvas', 'Tailwind CSS'],
      github: 'https://github.com/tanishqyadav',
      demo: '#',
      lootRarity: 'RARE ITEM',
    },
    {
      id: 'disaster-management',
      title: 'Disaster Management & Relief App',
      tagline: 'Real-Time Emergency Dispatch & Resource Coordination Network',
      icon: AlertTriangle,
      badge: 'SIH HACKATHON FEAT',
      badgeColor: 'bg-red-900/60 text-red-300 border-red-500',
      problem: 'During natural calamities, communication breakdown prevents emergency responders from locating victims and allocating critical medical supplies efficiently.',
      solution: 'Designed a resilient emergency relief coordination application with offline data syncing, GPS victim locator mapping, and real-time inventory allocation tracking for first responders.',
      stack: ['React', 'Python', 'Node.js', 'Tailwind CSS', 'WebSockets', 'GeoJSON'],
      github: 'https://github.com/tanishqyadav',
      demo: '#',
      lootRarity: 'MYTHIC ITEM',
    },
    {
      id: 'servlet-billing',
      title: 'Servlet MVC Billing System',
      tagline: 'Enterprise Java MVC Billing, Inventory & Invoice Management',
      icon: FileCode2,
      badge: 'ENTERPRISE LOOT',
      badgeColor: 'bg-cyan-900/60 text-cyan-300 border-cyan-500',
      problem: 'Legacy retail software often suffers from monolithic tight coupling, memory leaks, and unreliable transaction processing during peak sales volume.',
      solution: 'Architected a modular Java MVC billing system using Servlets, JSP, and JDBC with ACID transaction handling, dynamic tax calculation, and automated invoice PDF generation.',
      stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Tomcat', 'Bootstrap/CSS'],
      github: 'https://github.com/tanishqyadav',
      demo: '#',
      lootRarity: 'UNCOMMON ITEM',
    },
  ];

  const handleToggleChest = (id, e) => {
    e.stopPropagation();
    if (openChestId === id) {
      playClickSound();
      setOpenChestId(null);
    } else {
      playChestSound();
      setOpenChestId(id);
      
      // Trigger subtle retro particle confetti effect
      try {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#00ffcc', '#ffd700', '#5d9c3f'],
        });
      } catch (err) {
        // Ignore confetti fallback
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          LOOT CRATES & QUEST LOG
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          FEATURED PROJECTS
        </h2>
        <p className="font-vt text-stone-300 text-lg sm:text-xl mt-2">
          CLICK ANY CHEST TO UNLOCK THE PROJECT SPECS, PROBLEM-SOLUTION BRIEF & TECH STACK
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {projects.map((project) => {
          const isOpen = openChestId === project.id;
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className={`mc-panel transition-all duration-300 border-4 ${
                isOpen ? 'border-[#00ffcc] bg-[#2a3036]' : 'border-[#17191d] hover:border-amber-500/70'
              }`}
            >
              {/* Chest Header Bar (Always Visible) */}
              <div
                onClick={(e) => handleToggleChest(project.id, e)}
                className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer gap-4"
              >
                <div className="flex items-center space-x-4">
                  {/* Animated Minecraft Chest Icon Graphic */}
                  <div
                    className={`w-14 h-14 border-4 border-[#121417] flex items-center justify-center transition-transform ${
                      isOpen ? 'bg-amber-600 scale-105 shadow-[inset_0_4px_0_#fce074]' : 'bg-[#5c3e29] shadow-[inset_0_4px_0_#8c5c3a]'
                    }`}
                  >
                    {isOpen ? (
                      <Sparkles className="w-7 h-7 text-amber-200 animate-spin" />
                    ) : (
                      <FolderGit2 className="w-7 h-7 text-amber-100" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-pixel text-[9px] px-2 py-0.5 border ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <span className="font-vt text-stone-400 text-sm">
                        {project.lootRarity}
                      </span>
                    </div>

                    <h3 className="font-pixel text-base sm:text-xl text-white flex items-center space-x-2">
                      <span>{project.title}</span>
                    </h3>

                    <p className="font-vt text-stone-300 text-lg">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Open/Close Trigger Button */}
                <div className="flex items-center space-x-3 self-end sm:self-center">
                  <button
                    className={`mc-button px-4 py-2 text-xs font-vt uppercase tracking-wider flex items-center space-x-2 ${
                      isOpen ? 'mc-button-gold' : 'mc-button'
                    }`}
                  >
                    <span>{isOpen ? 'CLOSE CHEST' : 'OPEN CHEST'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Chest Expanded Content (Loot Reveal) */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t-2 border-[#181b1f] bg-[#1a1e22] p-6 sm:p-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      
                      {/* Problem Statement Slot */}
                      <div className="mc-panel-dirt p-5">
                        <div className="font-pixel text-xs text-red-400 mb-2 flex items-center space-x-2">
                          <span>⚠️ THE QUEST CHALLENGE (PROBLEM)</span>
                        </div>
                        <p className="font-sans text-stone-200 text-sm leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Solution Statement Slot */}
                      <div className="mc-panel-grass p-5">
                        <div className="font-pixel text-xs text-[#00ffcc] mb-2 flex items-center space-x-2">
                          <span>⚡ THE CRAFTED SOLUTION</span>
                        </div>
                        <p className="font-sans text-stone-200 text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Inventory Tags */}
                    <div className="mb-6">
                      <h4 className="font-pixel text-xs text-stone-300 mb-3 uppercase">
                        CRAFTING MATERIALS & TECH STACK:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="mc-slot px-3 py-1 font-vt text-sm text-emerald-300 bg-[#25282c]"
                          >
                            🛡️ {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-stone-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mc-button mc-button-teal px-5 py-2.5 text-xs font-pixel flex items-center space-x-2"
                        onClick={() => playClickSound()}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
