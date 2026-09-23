import React from 'react';

export default function MarqueeBanner() {
  const announcements = [
    '🏆 TOP 10 RANK — SMART INDIA HACKATHON 2025',
    '⚡ 216+ LEETCODE PROBLEMS SOLVED',
    '💼 DATA ANALYST INTERN @ BLUESTOCK FINTECH',
    '🎓 B.TECH CSE (DATA SCIENCE) — CGPA 8.56 / 10',
    '🤖 AI/ML & SECURE FULL-STACK SYSTEMS SPECIALIST',
    '🛠️ STACK: PYTHON • PYTORCH • REACT • TAILWIND • JAVA MVC • SQL',
  ];

  return (
    <div className="w-full bg-[#181d21] border-b-4 border-[#0b0d0f] py-2 px-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center space-x-8 font-vt text-lg md:text-xl text-[#00ffcc] tracking-widest uppercase">
          {announcements.concat(announcements).map((item, idx) => (
            <span key={idx} className="flex items-center space-x-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#f59e0b] border border-[#000]" />
              <span className="text-stone-200 drop-shadow-[1px_1px_0_#000]">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
