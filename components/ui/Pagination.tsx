"use client";

import { memo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = memo(function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-16 px-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all active:scale-95"
      >
        <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 flex items-center justify-center rounded-xl font-bold text-xs transition-all active:scale-95 ${
              currentPage === page
                ? "bg-primary text-white shadow-lg shadow-primary/25 translate-y-[-2px]"
                : "border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary hover:bg-slate-50"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-10 w-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition-all active:scale-95"
      >
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
    </div>
  );
});

export default Pagination;
