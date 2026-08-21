import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Megaphone, TrendingUp, Check } from 'lucide-react';

export const StudentActionHub: React.FC = () => {
  const [activeCareer, setActiveCareer] = useState<'tech' | 'media' | 'biz'>('tech');

  const careerDetails = {
    tech: {
      title: "Sinh viên Công nghệ & Kỹ thuật",
      icon: Code,
      color: "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100",
      actions: [
        "Phát triển phần mềm nông nghiệp thông minh IoT theo dõi thời tiết, độ ẩm.",
        "Ứng dụng trí tuệ nhân tạo (AI) dự báo dịch bệnh nông sản.",
        "Xây dựng sàn thương mại điện tử giúp nông dân tiếp cận tiêu dùng trực tiếp."
      ],
      impact: "Kết nối tri thức công nghệ tiên tiến với sản xuất của nông dân và chế biến của công nhân."
    },
    media: {
      title: "Sinh viên Truyền thông & Báo chí",
      icon: Megaphone,
      color: "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100",
      actions: [
        "Hỗ trợ xây dựng thương hiệu nông sản địa phương.",
        "Sản xuất video clip giới thiệu nông sản sạch trên mạng xã hội.",
        "Nâng cao nhận thức xã hội về tầm quan trọng của Khối Đại đoàn kết toàn dân tộc."
      ],
      impact: "Đưa hình ảnh sản phẩm Việt Nam vươn xa và gia tăng niềm tin cho thị trường."
    },
    biz: {
      title: "Sinh viên Kinh doanh & Quản trị",
      icon: TrendingUp,
      color: "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100",
      actions: [
        "Xây dựng mô hình khởi nghiệp kết nối nông trại với nhà hàng, siêu thị.",
        "Quản trị chuỗi cung ứng tối ưu hóa chi phí logistics cho doanh nghiệp.",
        "Nghiên cứu thị trường xuất khẩu và tiêu chuẩn kiểm định hàng hóa quốc tế."
      ],
      impact: "Tạo dòng lưu thông hàng hóa hiệu quả, gia tăng thu nhập cho cả công nhân và nông dân."
    }
  };

  const current = careerDetails[activeCareer];
  const IconComp = current.icon;

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-4 font-sans text-xs">
      <div className="flex items-center gap-3 mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
            Hành Động Cụ Thể Của Sinh Viên Trong Khối Liên Minh
          </h4>
          <p className="text-xs text-slate-500">
            Sinh viên là nguồn nhân lực tương lai nối liền tri thức chuyên môn với nhu cầu thực tiễn
          </p>
        </div>
      </div>

      {/* Role Selection Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveCareer('tech')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer ${
            activeCareer === 'tech'
              ? 'bg-red-700 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          Sinh viên Công nghệ
        </button>

        <button
          onClick={() => setActiveCareer('media')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer ${
            activeCareer === 'media'
              ? 'bg-red-700 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <Megaphone className="w-3.5 h-3.5" />
          Sinh viên Truyền thông
        </button>

        <button
          onClick={() => setActiveCareer('biz')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-sans text-xs font-semibold transition-all cursor-pointer ${
            activeCareer === 'biz'
              ? 'bg-red-700 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Sinh viên Kinh doanh
        </button>
      </div>

      {/* Detail Card */}
      <motion.div
        key={activeCareer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`p-4 rounded-lg border shadow-sm ${current.color}`}
      >
        <div className="flex items-center gap-2 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
          <IconComp className="w-4 h-4 text-red-700 dark:text-red-400" />
          <h5 className="font-bold text-sm">{current.title}</h5>
        </div>

        <div className="space-y-2 mb-3">
          {current.actions.map((act, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-sans">
              <Check className="w-3.5 h-3.5 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
              <span>{act}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-sans">
          <span className="font-bold text-slate-900 dark:text-slate-100">Tác động thực tiễn: </span>
          <span className="text-slate-700 dark:text-slate-300">{current.impact}</span>
        </div>
      </motion.div>
    </div>
  );
};
