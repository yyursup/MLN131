import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QUIZ_QUESTIONS } from '../data/scriptData';
import { Award, X, CheckCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOpt(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOpt === null) return;
    setIsSubmitted(true);
    if (selectedOpt === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOpt(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      if (score + (selectedOpt === currentQ.correctAnswer ? 1 : 0) >= 4) {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setIsSubmitted(false);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans text-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 max-w-lg w-full rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800"
      >
        {/* Header */}
        <div className="bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
            <Award className="w-4 h-4 text-red-700" />
            <span>Trắc Nghiệm Củng Cố Kiến Thức</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5">
          {!isFinished ? (
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between font-semibold text-slate-600 dark:text-slate-400 mb-2">
                <span>Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}</span>
                <span>Điểm: {score}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-red-700 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Text */}
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-4 leading-snug">
                {currentQ.question}
              </h4>

              {/* Options */}
              <div className="space-y-2 mb-5">
                {currentQ.options.map((opt, i) => {
                  let optStyle = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50";
                  if (selectedOpt === i) {
                    optStyle = "border-red-700 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 font-semibold";
                  }
                  if (isSubmitted) {
                    if (i === currentQ.correctAnswer) {
                      optStyle = "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold";
                    } else if (selectedOpt === i) {
                      optStyle = "border-red-600 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && i === currentQ.correctAnswer && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {isSubmitted && (
                <div className="p-3 mb-5 rounded bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-slate-100 block mb-1">Giải thích lý luận:</strong>
                  {currentQ.explanation}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-2">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOpt === null}
                    className="px-4 py-1.5 rounded bg-red-700 text-white font-bold text-xs hover:bg-red-800 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    Xác nhận Đáp án
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-4 py-1.5 rounded bg-slate-800 text-white font-bold text-xs hover:bg-slate-900 transition-colors cursor-pointer"
                  >
                    {currentIdx + 1 === QUIZ_QUESTIONS.length ? 'Xem Kết Quả' : 'Câu kế tiếp'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                Hoàn Thành Bài Trắc Nghiệm
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Kết quả đạt được: <strong>{score} / {QUIZ_QUESTIONS.length}</strong> điểm.
              </p>

              <div className="p-3 rounded bg-slate-100 dark:bg-slate-800 mb-5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {score >= 4
                  ? "Xuất sắc! Bạn đã nắm vững bản chất tư tưởng Lênin và sự vận dụng ở Việt Nam."
                  : "Khá tốt! Bạn có thể xem lại các mục 3, 7 và 10 để ôn lại kiến thức."}
              </div>

              <div className="flex justify-center gap-2">
                <button
                  onClick={handleRestart}
                  className="px-4 py-1.5 rounded border border-slate-300 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-100 cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Làm lại bài
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 rounded bg-red-700 text-white font-bold hover:bg-red-800 cursor-pointer"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
