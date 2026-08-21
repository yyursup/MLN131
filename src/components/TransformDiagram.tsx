import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TransformDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'lenin' | 'vietnam'>('vietnam');
  const [selectedNode, setSelectedNode] = useState<string | null>('tri-thuc');

  const leninNodes = [
    {
      id: 'cong-nhan-lenin',
      name: 'Giai cấp Công nhân',
      role: 'Lực lượng lãnh đạo cách mạng',
      desc: 'Giữ vai trò tiên phong lãnh đạo nhưng chiếm tỉ lệ nhỏ trong dân số nước Nga (cuối thế kỷ XIX - đầu thế kỷ XX).'
    },
    {
      id: 'nong-dan-lenin',
      name: 'Giai cấp Nông dân',
      role: 'Lực lượng quần chúng đông đảo',
      desc: 'Chiếm đa số tuyệt đối dân cư. Liên minh giúp giai cấp vô sản mở rộng cơ sở xã hội và không bị cô lập.'
    }
  ];

  const vietnamNodes = [
    {
      id: 'cong-nhan',
      name: 'Giai cấp Công nhân',
      role: 'Nền tảng Liên minh',
      desc: 'Lao động công nghiệp, công nghệ cao, dịch vụ hiện đại. Lực lượng nòng cốt trong sự nghiệp công nghiệp hóa - hiện đại hóa.'
    },
    {
      id: 'nong-dan',
      name: 'Giai cấp Nông dân',
      role: 'Nền tảng Liên minh',
      desc: 'Gắn liền với sản xuất nông nghiệp sinh thái, chuỗi cung ứng, thương mại điện tử và nông nghiệp công nghệ cao.'
    },
    {
      id: 'tri-thuc',
      name: 'Đội ngũ Trí thức',
      role: 'Nền tảng Liên minh (Mới bổ sung)',
      desc: 'Giữ vai trò đặc biệt quan trọng trong khoa học - công nghệ, giáo dục, đổi mới sáng tạo, chuyển đổi số và kinh tế tri thức.'
    },
    {
      id: 'doanh-nhan',
      name: 'Đội ngũ Doanh nhân',
      role: 'Động lực kết nối phát triển',
      desc: 'Hợp tác cùng nền tảng Công-Nông-Trí; đầu tư, tổ chức sản xuất kinh doanh, giải quyết việc làm và đưa thương hiệu ra thế giới.'
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-4 font-sans text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div>
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
            Sự Biến Đổi Cơ Cấu Liên Minh Xã Hội
          </h4>
          <p className="text-xs text-slate-500">
            So sánh mô hình Lênin (2 Giai cấp) và Mô hình Việt Nam (3 Nền tảng + Doanh nhân)
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-lg border border-slate-300 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('lenin')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              activeTab === 'lenin'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Thời Lênin (Nga)
          </button>
          <button
            onClick={() => setActiveTab('vietnam')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              activeTab === 'vietnam'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Việt Nam Hiện Nay
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'lenin' ? (
          <motion.div
            key="lenin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <strong>Mô hình Lênin:</strong> Liên minh song phương giữa Giai cấp Công nhân và Giai cấp Nông dân.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {leninNodes.map((node) => (
                <div key={node.id} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                  <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-0.5">{node.name}</h5>
                  <span className="text-[10px] text-slate-500 font-semibold block mb-2">{node.role}</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{node.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="vietnam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <strong>Việt Nam hiện nay:</strong> Công nhân – Nông dân – Trí thức (Nền tảng Khối Đại đoàn kết) + Doanh nhân.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {vietnamNodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer bg-white dark:bg-slate-900 ${
                      isSelected
                        ? 'border-red-700 ring-1 ring-red-700 font-medium'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <h5 className="font-bold text-xs text-slate-900 dark:text-slate-100 mb-1">{node.name}</h5>
                    <span className="text-[10px] text-slate-500 font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 inline-block mb-2">
                      {node.role}
                    </span>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{node.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Details */}
            {selectedNode && (
              <div className="p-3.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Chi tiết: {vietnamNodes.find((n) => n.id === selectedNode)?.name}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {vietnamNodes.find((n) => n.id === selectedNode)?.desc}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
