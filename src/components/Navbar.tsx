import React, { useState } from 'react';
import { Presentation, BookOpen, Award, Moon, Sun, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  viewMode: 'slide' | 'editorial';
  setViewMode: (mode: 'slide' | 'editorial') => void;
  onOpenQuiz: () => void;
  onOpenReferences: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  setViewMode,
  onOpenQuiz,
  onOpenReferences,
  isDarkMode,
  setIsDarkMode
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold font-serif text-lg shadow-sm">
            ☭
          </div>
          <div>
            <h1 className="font-sans font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Tư Tưởng Liên Minh Giai Cấp
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              V.I. Lênin & Sự Vận Dụng Tại Việt Nam (MLN131)
            </p>
          </div>
        </div>

        {/* Desktop Navigation Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Mode Switcher */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode('slide')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'slide'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <Presentation className="w-4 h-4" /> Slide Trình Chiếu
            </button>

            <button
              onClick={() => setViewMode('editorial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'editorial'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Bài Đọc Chi Tiết
            </button>
          </div>

          {/* Action Modals */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <Award className="w-4 h-4 text-red-600" /> Trắc Nghiệm
          </button>

          <button
            onClick={onOpenReferences}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-blue-600" /> Tài Liệu Tham Khảo
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            title="Đổi Giao diện Sáng/Tối"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 space-y-2 font-sans text-xs">
          <button
            onClick={() => {
              setViewMode('slide');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 p-2 rounded font-semibold ${
              viewMode === 'slide' ? 'bg-red-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
            }`}
          >
            <Presentation className="w-4 h-4" /> Slide Trình Chiếu
          </button>

          <button
            onClick={() => {
              setViewMode('editorial');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-2 p-2 rounded font-semibold ${
              viewMode === 'editorial' ? 'bg-red-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Bài Đọc Chi Tiết
          </button>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-1.5">
            <button
              onClick={() => {
                onOpenQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold"
            >
              <Award className="w-4 h-4 text-red-600" /> Trắc Nghiệm Củng Cố
            </button>

            <button
              onClick={() => {
                onOpenReferences();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold"
            >
              <Compass className="w-4 h-4 text-blue-600" /> Tài Liệu Tham Khảo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
