import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What domains do you specialize in as a developer?',
      answer: 'My primary focus lies at the intersection of Data Science, Machine Learning / Artificial Intelligence, and Secure Full-Stack Web Systems. I build end-to-end applications that leverage intelligent predictive models backed by clean, secure backend architectures.',
    },
    {
      question: 'What is your core tech stack & tooling?',
      answer: 'For Data Science & AI: Python, PyTorch, TensorFlow, Scikit-Learn, Pandas, NumPy, OpenCV, and Jupyter. For Web Engineering: React.js, Tailwind CSS, JavaScript (ES6+), Java Servlets / MVC, REST APIs, SQL (MySQL, PostgreSQL), and Git.',
    },
    {
      question: 'Can you share details about your Smart India Hackathon (SIH 2025) result?',
      answer: 'Out of thousands of national engineering teams across India, my team achieved a Top 10 Standing in the Pre-Qualifier round of SIH 2025. We engineered the Indian Carbon Registry real-time prototype addressing high-impact national sustainability problem statements.',
    },
    {
      question: 'What were your key responsibilities at Bluestock Fintech?',
      answer: 'As a Data Analyst Intern, I developed automated Python data cleaning scripts, conducted exploratory data analysis on financial stock data, engineered custom metrics, and built interactive dashboards to assist analysts with real-time decision making.',
    },
    {
      question: 'Are you available for full-time software, data science, or ML roles?',
      answer: 'Yes! I am actively open for full-time Software Engineer, Data Analyst, Machine Learning Engineer, and Full-Stack Developer opportunities. Feel free to contact me via email or LinkedIn.',
    },
  ];

  const handleToggle = (idx) => {
    playClickSound();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-[#1f2429] px-4 py-1.5 border-2 border-[#5d9c3f] font-pixel text-xs text-[#00ffcc] uppercase tracking-wider mb-3">
          INVENTORY Q&A MANUAL
        </div>
        <h2 className="font-pixel text-2xl sm:text-4xl text-white drop-shadow-[3px_3px_0_#000]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      {/* Accordion Stack */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`mc-panel transition-all ${
                isOpen ? 'border-[#00ffcc]' : 'border-[#17191d]'
              }`}
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-3 pr-4">
                  <div className="w-8 h-8 bg-[#181c20] border border-stone-700 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="font-pixel text-sm sm:text-base text-white hover:text-[#00ffcc] transition-colors">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-[#00ffcc]' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t-2 border-[#16191c] bg-[#1a1d21] p-5 sm:p-6"
                  >
                    <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
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
