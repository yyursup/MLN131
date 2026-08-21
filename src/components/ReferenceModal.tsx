import React from 'react';
import { motion } from 'framer-motion';
import { REFERENCE_SOURCES } from '../data/scriptData';
import { BookOpen, ExternalLink, X, BookmarkCheck } from 'lucide-react';

export const ReferenceModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans text-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 max-w-xl w-full rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 shrink-0">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Nguồn Tài Liệu Tham Khảo Chính Thức</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-3">
          <p className="text-xs text-slate-500 mb-2">
            Các văn kiện, giáo trình và nguồn trích dẫn uy tín làm cơ sở lý luận cho bài thuyết trình:
          </p>

          {REFERENCE_SOURCES.map((source) => (
            <div
              key={source.id}
              className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <BookmarkCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    {source.title}
                  </h4>
                  {source.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                      {source.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                  {source.description}
                </p>
              </div>

              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline self-start"
                >
                  Xem tư liệu gốc <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-100 dark:bg-slate-800 p-3 border-t border-slate-200 dark:border-slate-700 text-center shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded bg-slate-800 text-white font-bold text-xs hover:bg-slate-900 cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </motion.div>
    </div>
  );
};
