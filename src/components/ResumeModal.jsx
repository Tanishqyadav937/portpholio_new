import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, Code2, ShieldCheck, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { playClickSound, playCloseSound } from '../utils/sound';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleClose = () => {
    playCloseSound();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1e22] border-4 border-[#0f1215] shadow-2xl overflow-y-auto flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#252a30] p-4 border-b-4 border-[#121518] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#5d9c3f] border-2 border-[#121417] flex items-center justify-center font-pixel text-xs text-white">
                📜
              </div>
              <div>
                <h2 className="font-pixel text-sm sm:text-base text-white flex items-center space-x-2">
                  <span>TANISHQ YADAV — RESUME LOG</span>
                </h2>
                <span className="font-vt text-stone-400 text-sm">B.Tech CSE (Data Science) | Galgotias University</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="mc-button mc-button-gold px-3 py-1.5 text-xs font-vt flex items-center space-x-1.5"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">PRINT RESUME</span>
              </button>
              
              <button
                onClick={handleClose}
                className="mc-button p-2 text-red-400 hover:text-white"
                title="Close Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-[#15181b] text-stone-200 font-sans print:bg-white print:text-black print:p-0">
            
            {/* Contact Header */}
            <div className="text-center pb-6 border-b-2 border-stone-800 print:border-black">
              <h1 className="font-pixel text-2xl sm:text-4xl text-white print:text-black mb-2 tracking-wide">
                TANISHQ YADAV
              </h1>
              <p className="font-vt text-stone-300 print:text-gray-700 text-lg sm:text-xl mb-3">
                Computer Science Engineering Undergraduate (Specialization in Data Science)
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-stone-300 print:text-gray-800">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:hidden" />
                  <span>Greater Noida, India</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:hidden" />
                  <span>+91 7311178776</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 print:hidden" />
                  <a href="mailto:tanishyadav937@gmail.com" className="hover:underline text-[#00ffcc] print:text-black">
                    tanishyadav937@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs font-vt tracking-wider text-amber-300 print:text-black">
                <a href="https://github.com/Tanishqyadav937" target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub: Tanishqyadav937
                </a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/tanishq-yadav-a24656336" target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn: tanishq-yadav-a24656336
                </a>
                <span>|</span>
                <span>LeetCode: 216+ Solved</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-2 uppercase tracking-wider flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400 print:hidden" />
                <span>SUMMARY</span>
              </h3>
              <p className="text-sm text-stone-300 print:text-gray-800 leading-relaxed">
                Computer Science undergraduate specializing in <strong>Data Science</strong>, with hands-on experience in AI/ML, full-stack development, cybersecurity, and data analytics. Skilled in building scalable applications and secure AI systems using <strong>Python, C++, PyTorch, React, Flask, and SQL</strong>. Strong foundation in Data Structures & Algorithms, system design, and practical software engineering.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-3 uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-emerald-400 print:hidden" />
                <span>EDUCATION</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm sm:text-base">Galgotias University</h4>
                    <p className="text-xs text-stone-300 print:text-gray-700">B.Tech in Computer Science & Engineering (Data Science)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-vt text-amber-300 print:text-black">Aug 2024 – May 2028</span>
                    <p className="text-xs font-bold text-emerald-400 print:text-black">CGPA: 8.56 / 10</p>
                  </div>
                </div>

                <div className="flex justify-between items-start pt-2 border-t border-stone-800/60 print:border-gray-300">
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm">Lucknow Public School</h4>
                    <p className="text-xs text-stone-300 print:text-gray-700">Senior Secondary (Class XII, 2023) — <strong>80%</strong> | High School (Class X, 2021) — <strong>87%</strong></p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-vt text-stone-400 print:text-black">2021 – 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-3 uppercase tracking-wider flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-cyan-400 print:hidden" />
                <span>TECHNICAL SKILLS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">Languages:</span>
                  <span className="text-stone-300 print:text-gray-800">Python, C++, Java, SQL, TypeScript</span>
                </div>
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">AI / ML:</span>
                  <span className="text-stone-300 print:text-gray-800">PyTorch, TensorFlow, U-Net, Computer Vision, EDA, Data Cleaning</span>
                </div>
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">Web Development:</span>
                  <span className="text-stone-300 print:text-gray-800">Flask, React, Next.js, Node.js, Express.js, Tailwind CSS, REST APIs</span>
                </div>
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">Databases & Tools:</span>
                  <span className="text-stone-300 print:text-gray-800">MySQL, PostgreSQL, MongoDB, Git, GitHub, Docker, Linux</span>
                </div>
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">Core CS:</span>
                  <span className="text-stone-300 print:text-gray-800">Data Structures & Algorithms, OOP, DBMS, Operating Systems, Networks</span>
                </div>
                <div className="mc-panel-dirt p-3 print:border print:p-2">
                  <span className="font-bold text-amber-300 print:text-black block mb-1">Security & Systems:</span>
                  <span className="text-stone-300 print:text-gray-800">JWT, bcrypt, Rate Limiting, Cryptographic Hashing, Async APIs, Microservices</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-3 uppercase tracking-wider flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-amber-400 print:hidden" />
                <span>EXPERIENCE</span>
              </h3>
              <div className="mc-panel p-4 print:border print:p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-white print:text-black text-sm sm:text-base">Data Analyst Intern</h4>
                    <p className="text-xs text-cyan-300 print:text-gray-700">Bluestock Fintech</p>
                  </div>
                  <span className="text-xs font-vt text-stone-400 print:text-black">Apr 2026 – May 2026</span>
                </div>
                <ul className="list-disc list-inside text-xs text-stone-300 print:text-gray-800 space-y-1">
                  <li>Analyzed financial datasets using Python, SQL, EDA, and Data Visualization to generate actionable business insights.</li>
                  <li>Performed data cleaning, preprocessing, dashboard creation, and reporting to support data-driven decision making.</li>
                  <li>Collaborated with teams to support business analytics and strategic decisions.</li>
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-3 uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-400 print:hidden" />
                <span>ACHIEVEMENTS</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="mc-panel p-3 print:border print:p-2">
                  <div className="flex justify-between font-bold text-amber-300 print:text-black mb-1">
                    <span>Smart India Hackathon (SIH 2025 - Pre-Qualifier)</span>
                    <span>2025</span>
                  </div>
                  <p className="text-stone-300 print:text-gray-800">Secured <strong>Top 10 Rank (Pre-Qualifier Round)</strong> in SIH 2025 with the Indian Carbon Registry prototype. Designed scalable workflows using Python, SQL, Flask, and Database Modeling.</p>
                </div>

                <div className="mc-panel p-3 print:border print:p-2">
                  <div className="flex justify-between font-bold text-teal-300 print:text-black mb-1">
                    <span>NVIDIA AI Workshop Participant</span>
                    <span>2026</span>
                  </div>
                  <p className="text-stone-300 print:text-gray-800">Participated in workshops focused on Artificial Intelligence, Deep Learning, and GPU Computing.</p>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-3 uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-purple-400 print:hidden" />
                <span>FEATURED PROJECTS</span>
              </h3>
              <div className="space-y-4 text-xs">
                <div className="border-l-2 border-purple-500 pl-3">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-white print:text-black text-sm">CENTINELA – Secure LLM Red-Team Evaluation Platform</h4>
                    <a href="https://github.com/Tanishqyadav937/Bayora" target="_blank" rel="noreferrer" className="text-purple-300 hover:underline print:text-black font-vt">GitHub Link</a>
                  </div>
                  <ul className="list-disc list-inside text-stone-300 print:text-gray-800 space-y-1">
                    <li>Built a containerized LLM red-team evaluation platform with asynchronous FastAPI services for adversarial testing, orchestration, verdict evaluation, and audit logging.</li>
                    <li>Implemented secure orchestration with session management, budget enforcement, API-key lifecycle control, retries, rate limiting, and timing jitter.</li>
                    <li>Designed prompt isolation where the Blue Agent never receives the original attack prompt; implemented SHA-256 Merkle chains and Ed25519-signed reports, achieving 83/83 passing tests.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-white print:text-black text-sm">Interactive Road Mapping Interface (AI Pathfinding)</h4>
                    <span className="text-emerald-300 font-vt print:text-black">GitHub Link</span>
                  </div>
                  <ul className="list-disc list-inside text-stone-300 print:text-gray-800 space-y-1">
                    <li>Developed an AI-based road detection system using PyTorch, U-Net, Computer Vision, and Satellite Imagery.</li>
                    <li>Implemented shortest-path routing using NetworkX, A* Algorithm, and Graph Theory.</li>
                    <li>Built an interactive web application using Flask, React, and REST APIs.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-amber-500 pl-3">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-white print:text-black text-sm">Indian Carbon Registry – Smart India Hackathon</h4>
                    <a href="https://github.com/Tanishqyadav937/INDIAN-CARBON-RAGISTRY-PROTOTYPE" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline print:text-black font-vt">Live Demo / Repo</a>
                  </div>
                  <ul className="list-disc list-inside text-stone-300 print:text-gray-800 space-y-1">
                    <li>Built a full-stack carbon-credit platform using React, TypeScript, Node.js, Express, and MongoDB for registration, verification, trading, and credit retirement.</li>
                    <li>Implemented a custom blockchain ledger with hash-based integrity verification and tamper-evident audit trails.</li>
                    <li>Secured the platform with JWT, bcrypt, rate limiting, Helmet.js, input validation, and email verification.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coding Profile */}
            <div>
              <h3 className="font-pixel text-xs sm:text-sm text-[#00ffcc] print:text-black mb-2 uppercase tracking-wider flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-emerald-400 print:hidden" />
                <span>CODING PROFILE & PROBLEM SOLVING</span>
              </h3>
              <ul className="list-disc list-inside text-xs text-stone-300 print:text-gray-800 space-y-1">
                <li>Solved <strong>216+ problems on LeetCode</strong>, covering Arrays, Strings, Linked Lists, Trees, Graphs, Recursion, Greedy Algorithms, and Dynamic Programming.</li>
                <li>Actively participate in Competitive Programming across Codeforces, CodeChef, GeeksforGeeks, HackerRank, and LeetCode.</li>
                <li>Strong foundation in Data Structures, Algorithms, Time Complexity, and Optimization, primarily using C++ / Java.</li>
              </ul>
            </div>

          </div>

          {/* Footer controls */}
          <div className="sticky bottom-0 bg-[#252a30] p-4 border-t-4 border-[#121518] flex items-center justify-between print:hidden">
            <span className="font-vt text-stone-400 text-sm">TANISHQ YADAV RESUME LOG • VERIFIED DATA SCIENCE & FULL-STACK CV</span>
            <button
              onClick={handleClose}
              className="mc-button mc-button-teal px-4 py-2 text-xs font-pixel"
            >
              CLOSE RESUME
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
