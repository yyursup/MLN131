import React, { useState, useEffect } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

export const AudioPlayer: React.FC<{ textToRead: string; title: string }> = ({ textToRead, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95; // Speech speed suitable for presentations

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else if (!isPlaying && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [isPlaying, textToRead]);

  if (!speechSupported) return null;

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gold-100/80 dark:bg-parchment-900 border border-gold-400/80 text-xs font-sans">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex items-center gap-1.5 px-3 py-1 rounded bg-maroon-800 text-gold-100 font-bold hover:bg-maroon-900 transition-colors cursor-pointer"
        title="Nghe tóm tắt giọng đọc thuyết trình"
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5" /> Dừng đọc
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5" /> Nghe thuyết trình
          </>
        )}
      </button>

      <div className="flex items-center gap-1 text-ink-700 dark:text-gold-300 font-serif italic text-[11px] truncate max-w-[200px] md:max-w-[300px]">
        <Volume2 className={`w-3.5 h-3.5 shrink-0 ${isPlaying ? 'animate-pulse text-maroon-700 dark:text-gold-400' : ''}`} />
        <span className="truncate">{title}</span>
      </div>
    </div>
  );
};
