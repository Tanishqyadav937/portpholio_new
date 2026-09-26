import React, { useState } from 'react';
import { CraftfolioToggle } from 'craftfolio';
import 'craftfolio/styles.css';
import TerrainLoader from './components/TerrainLoader';
import Navbar from './components/Navbar';
import MarqueeBanner from './components/MarqueeBanner';
import Hero from './components/Hero';
import About from './components/About';
import SkillTrack from './components/SkillTrack';
import ProjectChest from './components/ProjectChest';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

const craftfolioData = {
  profile: {
    name: "Tanishq Yadav",
    firstName: "Tanishq",
    lastName: "Yadav",
    role: "Data Science & Full-Stack Systems Engineer",
    brand: "TANISHQ_DEV",
    tagline: "Building intelligent machine learning models and secure full-stack applications.",
    about: "B.Tech CSE (Data Science) student at Galgotias University. Top 10 SIH 2025 Pre-Qualifier & Bluestock Fintech Intern.",
    aboutExtended: "Specializing in Data Structures, Machine Learning, Python, SQL, React, and full-stack web development with 216+ LeetCode problems solved.",
    year: 2026,
  },
  stats: [
    { label: "CGPA (8.56)", value: 86 },
    { label: "LeetCode (216+)", value: 92 },
    { label: "SIH Pre-Qual", value: 95 },
    { label: "Python & ML", value: 98 },
  ],
  projects: [
    {
      title: "Indian Carbon Registry",
      description: "SIH 2025 Pre-Qualifier Top 10 project - Real-time carbon credit registry prototype.",
      tags: ["Python", "Flask", "SQL", "Database"],
      href: "https://github.com/Tanishqyadav937",
      accent: "linear-gradient(135deg, #10b981, #059669)",
      emoji: "🌿",
    },
    {
      title: "Bluestock Analytics Dashboard",
      description: "Data Analyst internship project - Cleaning financial datasets and interactive data dashboards.",
      tags: ["Data Analytics", "Python", "EDA"],
      href: "https://github.com/Tanishqyadav937",
      accent: "linear-gradient(135deg, #0284c7, #0369a1)",
      emoji: "📊",
    }
  ],
  skills: [
    { name: "Python", colors: ["#3776AB", "#1E415F"], icon: "🐍" },
    { name: "React", colors: ["#61DAFB", "#21A1C4"], icon: "⚛️" },
    { name: "SQL", colors: ["#4479A1", "#284A63"], icon: "🛢️" },
    { name: "Machine Learning", colors: ["#FF6F61", "#C43D32"], icon: "🤖" },
    { name: "Tailwind CSS", colors: ["#38BDF8", "#0369A1"], icon: "🎨" },
  ],
  contactLinks: [
    { label: "GitHub Profile", href: "https://github.com/Tanishqyadav937", icon: "🐙" },
  ]
};

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <CraftfolioToggle data={craftfolioData} position="bottom-right" persist>
      <div className="min-h-screen bg-[#101418] text-[#e2e8f0] font-sans antialiased selection:bg-[#00ffcc] selection:text-[#0f1215]">
        {/* Terrain Generator Loader */}
        {!loadingComplete && (
          <TerrainLoader onComplete={() => setLoadingComplete(true)} />
        )}

        {/* Main Minecraft Portfolio Content */}
        <div className={loadingComplete ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
          <MarqueeBanner />
          <Navbar onOpenResume={() => setResumeOpen(true)} />
          <main>
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <SkillTrack />
            <ProjectChest />
            <Timeline />
            <Achievements />
            <FAQAccordion />
          </main>
          <Footer onOpenResume={() => setResumeOpen(true)} />
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        </div>
      </div>
    </CraftfolioToggle>
  );
}
