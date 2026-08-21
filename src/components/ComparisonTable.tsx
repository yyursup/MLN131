import React, { useState } from 'react';
import { COMPARISON_DATA } from '../data/scriptData';
import { Table, Search } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredData = COMPARISON_DATA.filter((item) => {
    const matchesSearch =
      item.criterion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.leninVal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vietnamApp.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterStatus === 'all') return matchesSearch;
    return matchesSearch && item.assessment === filterStatus;
  });

  const getStatusBadge = (status: string, assessment: string) => {
    switch (status) {
      case 'success':
        return (
          <span className="px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 inline-block">
            {assessment}
          </span>
        );
      case 'warning':
        return (
          <span className="px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800 inline-block">
            {assessment}
          </span>
        );
      case 'info':
        return (
          <span className="px-3 py-1 rounded-md text-xs font-bold whitespace-nowrap bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-300 dark:border-blue-800 inline-block">
            {assessment}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 my-5 font-sans text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div>
          <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Table className="w-4 h-4 text-red-700" />
            Bảng Đối Chiếu Tư Tưởng Lênin & Sự Vận Dụng Tại Việt Nam
          </h4>
          <p className="text-xs text-slate-500">
            Đối chiếu giữa nguyên tắc lý luận kinh điển và biểu hiện thực tiễn ở Việt Nam
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm tiêu chí..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-red-700"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-red-700"
          >
            <option value="all">Tất cả đánh giá</option>
            <option value="Còn phù hợp">Còn phù hợp</option>
            <option value="Được phát triển">Được phát triển</option>
            <option value="Cần vận dụng linh hoạt">Cần vận dụng linh hoạt</option>
          </select>
        </div>
      </div>

      {/* Table for Desktop */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-xs border-b border-slate-200 dark:border-slate-700">
              <th className="p-3 w-1/5">Tiêu chí đối chiếu</th>
              <th className="p-3 w-1/3">Giá trị từ Tư tưởng V.I. Lênin</th>
              <th className="p-3 w-1/3">Biểu hiện ở Việt Nam hiện nay</th>
              <th className="p-3 text-center w-40 whitespace-nowrap">Đánh giá</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm text-slate-800 dark:text-slate-200">
            {filteredData.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-3.5 font-bold text-slate-900 dark:text-slate-100 text-xs md:text-sm">{item.criterion}</td>
                <td className="p-3.5 leading-relaxed text-xs md:text-sm">{item.leninVal}</td>
                <td className="p-3.5 leading-relaxed text-xs md:text-sm">{item.vietnamApp}</td>
                <td className="p-3.5 text-center whitespace-nowrap">{getStatusBadge(item.status, item.assessment)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-4 text-slate-400 italic">
          Không tìm thấy tiêu chí phù hợp.
        </div>
      )}
    </div>
  );
};
