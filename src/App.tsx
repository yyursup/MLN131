import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SlideView } from './components/SlideView';
import { EditorialView } from './components/EditorialView';
import { QuizModal } from './components/QuizModal';
import { ReferenceModal } from './components/ReferenceModal';

export const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'slide' | 'editorial'>('slide');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Header Navbar */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenReferences={() => setIsReferencesOpen(true)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-12">
        {viewMode === 'slide' ? <SlideView /> : <EditorialView />}
      </main>

      {/* Basic Clean Footer */}
      <footer className="bg-white dark:bg-slate-900 py-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-sans">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <div className="font-bold text-slate-800 dark:text-slate-200">
              TƯ TƯỞNG LIÊN MINH GIAI CẤP V.I. LÊNIN VÀ SỰ VẬN DỤNG Ở VIỆT NAM HIỆN NAY
            </div>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Kế thừa nguyên tắc – Không sao chép mô hình
            </p>
          </div>

          <div className="text-[11px] text-slate-400">
            © 2026 Nhóm Nghiên cứu Triết học MLN131
          </div>
        </div>
      </footer>

      {/* Modals */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <ReferenceModal isOpen={isReferencesOpen} onClose={() => setIsReferencesOpen(false)} />
    </div>
  );
};

export default App;
