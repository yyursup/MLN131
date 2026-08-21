import React from 'react';
import { SCRIPT_SECTIONS } from '../data/scriptData';
import { TransformDiagram } from './TransformDiagram';
import { CaseStudyWidget } from './CaseStudyWidget';
import { ComparisonTable } from './ComparisonTable';
import { StudentActionHub } from './StudentActionHub';
import { List, Printer } from 'lucide-react';

export const EditorialView: React.FC = () => {
  const scrollToSection = (id: number) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8 font-sans">
      {/* Sticky Table of Contents Sidebar */}
      <aside className="lg:col-span-1 hidden lg:block no-print">
        <div className="sticky top-20 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-xs">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2.5 mb-3 font-bold text-slate-900 dark:text-slate-100">
            <List className="w-4 h-4 text-red-700" />
            <span>Mục Lục Bài Thuyết Trình</span>
          </div>

          <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
            {SCRIPT_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="w-full text-left py-2 px-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400 transition-colors font-semibold leading-normal cursor-pointer block break-words"
              >
                {sec.title}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => window.print()}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" /> In / Tải PDF Bài Viết
            </button>
          </div>
        </div>
      </aside>

      {/* Main Clean Editorial Article Container */}
      <main className="lg:col-span-3 space-y-8">
        {/* Article Cover Header */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <span className="px-3.5 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 inline-block mb-3">
            CHỦ NGHĨA XÃ HỘI KHOA HỌC — MLN131
          </span>

          <h1 className="font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
            TƯ TƯỞNG LIÊN MINH GIAI CẤP CỦA V.I. LÊNIN VÀ SỰ VẬN DỤNG Ở VIỆT NAM HIỆN NAY
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Phân tích lý luận kinh điển của Lênin, sự thay đổi cơ cấu xã hội hiện đại và định hướng vận dụng sáng tạo ở Việt Nam: "Kế thừa nguyên tắc – Không sao chép mô hình".
          </p>
        </div>

        {/* Sections Listing */}
        {SCRIPT_SECTIONS.map((sec) => (
          <article
            key={sec.id}
            id={`section-${sec.id}`}
            className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {sec.badgeText || `Mục ${sec.id}`}
              </span>
              <span className="text-xs font-medium text-slate-500 font-sans">
                {sec.subtitle}
              </span>
            </div>

            <h2 className="font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white leading-tight">
              {sec.title}
            </h2>

            {/* Lenin Quote Banner */}
            {sec.quote && (
              <div className="my-4 p-5 rounded-r-xl bg-slate-100/80 dark:bg-slate-800/80 border-l-4 border-slate-700 text-slate-900 dark:text-slate-100 font-sans">
                <p className="text-base md:text-lg italic font-medium leading-relaxed">
                  "{sec.quote.text}"
                </p>
                <p className="text-right text-xs font-bold text-slate-700 dark:text-slate-300 mt-2 tracking-wide uppercase">
                  — {sec.quote.author}
                </p>
              </div>
            )}

            {/* Paragraphs - Maximum Legibility */}
            <div className="space-y-4 font-sans text-base md:text-[17px] text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {sec.contentParagraphs.map((para, pIdx) => (
                <p key={pIdx} className={`leading-7 ${sec.id === 1 && pIdx === 0 ? 'drop-cap' : ''}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Key Points Grid */}
            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                {sec.keyPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50"
                  >
                    <h4 className="font-bold text-sm text-red-800 dark:text-red-400 mb-1.5">
                      {pt.title}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Components Embed */}
            {sec.interactiveType === 'transform_mindmap' && <TransformDiagram />}
            {sec.interactiveType === 'case_study' && <CaseStudyWidget />}
            {sec.interactiveType === 'comparison_table' && <ComparisonTable />}
            {sec.interactiveType === 'student_hub' && <StudentActionHub />}
          </article>
        ))}
      </main>
    </div>
  );
};
