import React, { useState } from 'react';
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

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
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
  );
}
