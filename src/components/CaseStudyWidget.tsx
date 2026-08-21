import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CaseStudyWidget: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: "1. Đội ngũ Trí thức (R&D & Chuyển giao)",
      role: "Nhiệm vụ: Nghiên cứu & Sáng tạo",
      actions: [
        "Nghiên cứu giống cây trồng chịu hạn, chống sâu bệnh.",
        "Ứng dụng công nghệ sinh học & cảm biến IoT giám sát độ ẩm.",
        "Chuyển giao phần mềm truy xuất nguồn gốc và quy trình canh tác VietGAP/GlobalGAP."
      ]
    },
    {
      id: 1,
      title: "2. Giai cấp Nông dân (Trực tiếp sản xuất)",
      role: "Nhiệm vụ: Canh tác & Quản lý ruộng đồng",
      actions: [
        "Trực tiếp quản lý nông trại, hợp tác xã nông nghiệp.",
        "Đổi mới tư duy từ 'sản xuất nông nghiệp' sang 'kinh tế nông nghiệp'.",
        "Tuân thủ nghiêm ngặt quy trình kỹ thuật do trí thức chuyển giao."
      ]
    },
    {
      id: 2,
      title: "3. Giai cấp Công nhân & Kỹ thuật viên (Chế biến & Logistics)",
      role: "Nhiệm vụ: Chế biến tinh & Hậu cần",
      actions: [
        "Vận hành máy móc thu hoạch tự động, kho lạnh bảo quản nông sản.",
        "Chế biến sâu (sấy dẻo, đóng hộp, chiết xuất) gia tăng giá trị sản phẩm.",
        "Vận tải chuỗi cung ứng lạnh (cold-chain logistics) xuất khẩu."
      ]
    },
    {
      id: 3,
      title: "4. Đội ngũ Doanh nghiệp (Đầu tư & Thị trường)",
      role: "Nhiệm vụ: Vốn, Thương hiệu & Đầu ra",
      actions: [
        "Rót vốn đầu tư cơ sở hạ tầng nông nghiệp công nghệ cao.",
        "Xây dựng thương hiệu nông sản Việt Nam đạt chuẩn quốc tế.",
        "Bao tiêu đầu ra, đưa sản phẩm vào siêu thị lớn & xuất khẩu sang EU, Mỹ, Nhật."
      ]
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-4 font-sans text-xs">
      <div className="mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <h4 className="font-bold text-base text-slate-900 dark:text-slate-100">
          Case Thực Tế: Chuỗi Giá Trị Nông Nghiệp Công Nghệ Cao
        </h4>
        <p className="text-xs text-slate-500">
          Minh chứng thực tiễn sự phối hợp giữa Công nhân - Nông dân - Trí thức & Doanh nhân
        </p>
      </div>

      {/* Steps Navigation Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg text-left transition-all border cursor-pointer ${
                isActive
                  ? 'border-red-700 bg-red-700 text-white shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded inline-block mb-1.5 ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
              }`}>
                Khâu {idx + 1}
              </span>
              <div className="font-bold text-xs leading-normal break-words">{step.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
      >
        <div className="flex items-center justify-between mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">
          <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100">{steps[activeStep].title}</h5>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {steps[activeStep].role}
          </span>
        </div>

        <div className="space-y-2 mt-2">
          {steps[activeStep].actions.map((act, i) => (
            <div key={i} className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              • {act}
            </div>
          ))}
        </div>

        <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-[11px] text-slate-500">
            Nếu thiếu bất kỳ lực lượng nào, chuỗi giá trị sẽ bị đứt gãy.
          </span>
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="font-bold text-red-700 dark:text-red-400 hover:underline cursor-pointer"
          >
            Khâu tiếp theo &rarr;
          </button>
        </div>
      </motion.div>
    </div>
  );
};
