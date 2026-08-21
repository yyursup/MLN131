import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCRIPT_SECTIONS, type ScriptSection } from '../data/scriptData';
import { TransformDiagram } from './TransformDiagram';
import { CaseStudyWidget } from './CaseStudyWidget';
import { ComparisonTable } from './ComparisonTable';
import { StudentActionHub } from './StudentActionHub';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Clock,
  LayoutGrid
} from 'lucide-react';

export const SlideView: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [showOverviewMenu, setShowOverviewMenu] = useState(false);

  const currentSection: ScriptSection = SCRIPT_SECTIONS[currentIdx];

  // Presentation Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        setCurrentIdx((prev) => Math.min(prev + 1, SCRIPT_SECTIONS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentIdx((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Presentation Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm font-sans text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowOverviewMenu(!showOverviewMenu)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <LayoutGrid className="w-4 h-4 text-slate-600" />
            <span>Danh mục Slide ({currentIdx + 1}/{SCRIPT_SECTIONS.length})</span>
          </button>

          <div className="flex items-center gap-1 font-mono text-slate-600 dark:text-slate-400 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTimer(secondsElapsed)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 cursor-pointer"
            title="Bật/Tắt Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide Thumbnail Drawer */}
      {showOverviewMenu && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-60 overflow-y-auto"
        >
          {SCRIPT_SECTIONS.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => {
                setCurrentIdx(idx);
                setShowOverviewMenu(false);
              }}
              className={`p-2.5 rounded-lg text-left border transition-all text-xs font-sans ${
                currentIdx === idx
                  ? 'border-red-700 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 font-bold'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <div className="text-[10px] text-slate-400 font-medium mb-0.5">Slide {idx + 1}</div>
              <div className="font-semibold leading-snug break-words">{sec.title}</div>
            </button>
          ))}
        </motion.div>
      )}

      {/* MAIN BASIC SLIDE CONTAINER */}
      <div className="clean-paper rounded-2xl p-6 md:p-10 min-h-[500px] flex flex-col justify-between border border-slate-200 dark:border-slate-800 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              {/* Badge & Subtitle */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 font-sans tracking-wide">
                  {currentSection.badgeText || `Slide ${currentSection.id}`}
                </span>

                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-sans">
                  {currentSection.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
                {currentSection.title}
              </h2>

              <hr className="border-slate-200 dark:border-slate-800 my-5" />

              {/* Quote Banner */}
              {currentSection.quote && (
                <div className="my-5 p-5 rounded-r-xl bg-red-50/70 dark:bg-slate-800/70 border-l-4 border-red-700 text-slate-900 dark:text-slate-100 font-sans">
                  <p className="text-base md:text-lg italic font-medium leading-relaxed">
                    "{currentSection.quote.text}"
                  </p>
                  <p className="text-right text-xs font-bold text-red-700 dark:text-red-400 mt-2 tracking-wide uppercase">
                    — {currentSection.quote.author}
                  </p>
                </div>
              )}

              {/* Body Paragraphs - Formatted for maximum legibility */}
              <div className="space-y-4 font-sans text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                {currentSection.contentParagraphs.map((para, i) => (
                  <p key={i} className="leading-7">{para}</p>
                ))}
              </div>

              {/* Key Points Cards */}
              {currentSection.keyPoints && currentSection.keyPoints.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {currentSection.keyPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80"
                    >
                      <h4 className="font-sans font-bold text-base text-red-800 dark:text-red-400 mb-1.5">
                        {pt.title}
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-normal">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Embedded Interactive Components */}
              {currentSection.interactiveType === 'transform_mindmap' && <TransformDiagram />}
              {currentSection.interactiveType === 'case_study' && <CaseStudyWidget />}
              {currentSection.interactiveType === 'comparison_table' && <ComparisonTable />}
              {currentSection.interactiveType === 'student_hub' && <StudentActionHub />}
            </div>

            {/* Slide Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-sans">
              <div>
                <span>Dùng phím <strong>Trái / Phải</strong> hoặc <strong>Space</strong> để đổi slide</span>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-2 w-48">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-700 transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / SCRIPT_SECTIONS.length) * 100}%` }}
                  ></div>
                </div>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                  {currentIdx + 1}/{SCRIPT_SECTIONS.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-4 font-sans">
        <button
          onClick={() => setCurrentIdx((prev) => Math.max(prev - 1, 0))}
          disabled={currentIdx === 0}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 disabled:opacity-40 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Slide Trước
        </button>

        <button
          onClick={() => setCurrentIdx((prev) => Math.min(prev + 1, SCRIPT_SECTIONS.length - 1))}
          disabled={currentIdx === SCRIPT_SECTIONS.length - 1}
          className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-red-700 text-white font-bold text-xs hover:bg-red-800 disabled:opacity-40 transition-colors cursor-pointer shadow-sm"
        >
          Slide Tiếp theo <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
