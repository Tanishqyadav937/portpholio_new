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
    role: "Data Science • ML/AI • Secure Full-Stack Systems Engineer",
    brand: "TANISHQ_DEV",
    tagline: "Building intelligent machine learning models and secure full-stack applications.",
    about: "B.Tech CSE (Data Science) student at Galgotias University (CGPA 8.56/10). Top 10 Rank in Smart India Hackathon 2025 (Pre-Qualifier Round) & Former Data Analyst Intern at Bluestock Fintech.",
    aboutExtended: "Specializing in Data Structures, Machine Learning, Python, PyTorch, SQL, React, and full-stack enterprise web development with 216+ LeetCode problems solved across Trees, Graphs, DP, and System Design.",
    resumeUrl: "#resume",
    year: 2026,
  },
  stats: [
    { label: "CGPA 8.56 / 10", value: 86 },
    { label: "LeetCode 216+", value: 94 },
    { label: "SIH Pre-Qual Top 10", value: 95 },
    { label: "Bluestock Intern", value: 90 },
    { label: "Python & PyTorch", value: 96 },
    { label: "Full-Stack Dev", value: 92 },
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  projects: [
    {
      title: "INGRIS AI",
      description: "Intelligent Groundwater Virtual Assistant & Hydrological Analytics with RAG query processing, spatial groundwater analysis, and natural language report synthesis.",
      tags: ["Python", "LangChain", "RAG / LLM", "Streamlit", "GeoJSON", "Pandas"],
      href: "https://github.com/Tanishqyadav937/Intelligent-Groundwater-Virtual-Assistant",
      accent: "linear-gradient(135deg, #10b981, #059669)",
      emoji: "🌊",
    },
    {
      title: "Indian Carbon Registry",
      description: "Transparent Carbon Credit Tracking & Environmental Audit Platform (SIH 2025 Pre-Qualifier Top 10 Project) for logging carbon credit issuances and emissions audits.",
      tags: ["React", "Python", "PostgreSQL", "Tailwind CSS", "REST API"],
      href: "https://github.com/Tanishqyadav937/INDIAN-CARBON-RAGISTRY-PROTOTYPE",
      accent: "linear-gradient(135deg, #34d399, #059669)",
      emoji: "🌿",
    },
    {
      title: "Centinela (Bayora)",
      description: "AI-Powered Real-Time Security & Anomaly Detection System analyzing live streams for zero-day intrusions using PyTorch and OpenCV.",
      tags: ["Python", "PyTorch", "OpenCV", "FastAPI", "React", "Tailwind CSS"],
      href: "https://github.com/Tanishqyadav937/Bayora",
      accent: "linear-gradient(135deg, #c084fc, #7e22ce)",
      emoji: "🛡️",
    },
    {
      title: "Disaster Management & Relief",
      description: "Real-Time Emergency Dispatch & Resource Coordination Network with offline syncing and GPS victim locator mapping.",
      tags: ["React", "Python", "Node.js", "Tailwind CSS", "WebSockets", "GeoJSON"],
      href: "https://github.com/Tanishqyadav937/Disastermanagment",
      accent: "linear-gradient(135deg, #f87171, #dc2626)",
      emoji: "🚨",
    },
    {
      title: "Conversational Voice Agent",
      description: "Real-Time Interactive AI Voice & Speech Processing Agent capable of speech-to-text parsing, natural language reasoning, and low-latency synthesis.",
      tags: ["Python", "SpeechRecognition", "TTS Engine", "OpenAI API", "FastAPI"],
      href: "https://github.com/Tanishqyadav937/agent",
      accent: "linear-gradient(135deg, #38bdf8, #0284c7)",
      emoji: "🗣️",
    },
    {
      title: "Fake News Detection Engine",
      description: "Machine Learning NLP Classifier analyzing news content to detect authentic vs. deceptive articles using TF-IDF features.",
      tags: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "Pandas", "Flask"],
      href: "https://github.com/Tanishqyadav937/fakenewsdetaction",
      accent: "linear-gradient(135deg, #fbbf24, #d97706)",
      emoji: "📰",
    },
  ],
  skills: [
    { name: "Python & PyTorch", colors: ["#3776AB", "#1E415F"], icon: "🐍" },
    { name: "Machine Learning & AI", colors: ["#EE4C2C", "#9A2E1A"], icon: "🤖" },
    { name: "React.js & Frontend Stack", colors: ["#61DAFB", "#21A1C4"], icon: "⚛️" },
    { name: "Java Servlet MVC Backend", colors: ["#ED8B00", "#9B5B00"], icon: "☕" },
    { name: "Data Structures & DSA (216+)", colors: ["#10B981", "#047857"], icon: "🧩" },
    { name: "SQL & Databases", colors: ["#336791", "#1E3D56"], icon: "💾" },
    { name: "Tailwind CSS & UI", colors: ["#38BDF8", "#0369A1"], icon: "🎨" },
    { name: "Security & Auth Systems", colors: ["#A855F7", "#6B21A8"], icon: "🛡️" },
  ],
  experiences: [
    {
      title: "B.Tech CSE (Data Science) - Galgotias University",
      detail: "AUG 2024 – MAY 2028 | CGPA: 8.56 / 10 | Specialization in Data Science, Machine Learning, Systems Engineering, & DSA.",
      icon: "🎓",
    },
    {
      title: "Data Analyst Intern - Bluestock Fintech",
      detail: "APR 2026 – MAY 2026 | Financial EDA, automated Python data cleaning, dashboard creation, & reporting.",
      icon: "💼",
    },
    {
      title: "SIH 2025 Pre-Qualifier Top 10 Rank",
      detail: "2025 | Smart India Hackathon (Government of India) | Built Indian Carbon Registry real-time prototype.",
      icon: "🏆",
    },
    {
      title: "NVIDIA AI Workshop Participant",
      detail: "2026 | NVIDIA AI & Deep Learning Institute | Deep Learning architectures & GPU computing.",
      icon: "⚡",
    },
    {
      title: "Senior Secondary & High School - LPS",
      detail: "2021 – 2023 | Lucknow Public School | Class XII: 80%, Class X: 87% (Physics, Chemistry, Mathematics).",
      icon: "🏫",
    },
  ],
  hotbar: [
    { icon: "⚔️" },
    { icon: "💎", count: 216 },
    { icon: "🏆", count: 10 },
    { icon: "🛡️" },
    { icon: "📚", count: 856 },
  ],
  contactLinks: [
    { label: "View / Print Full Resume", href: "#resume", icon: "📄" },
    { label: "GitHub Profile", href: "https://github.com/Tanishqyadav937", icon: "🐙" },
    { label: "Email Contact", href: "mailto:tanishqyadav937@gmail.com", icon: "✉️" },
  ],
};

const craftfolioOptions = {
  defaultTheme: "day",
  enable3D: true,
  showThemeToggle: true,
  sections: ["hero", "about", "projects", "skills", "experience", "contact"],
};

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <CraftfolioToggle data={craftfolioData} options={craftfolioOptions} position="bottom-right" persist>
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
