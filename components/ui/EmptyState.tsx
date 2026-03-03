"use client";

import Link from "next/link";

interface EmptyStateProps {
  onReset: () => void;
  onCategorySelect: (category: string) => void;
  popularCategories?: string[];
}

export default function EmptyState({
  onReset,
  onCategorySelect,
  popularCategories = [],
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
      <div className="relative mb-8">
        <div className="h-28 w-28 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
          <span className="material-symbols-outlined text-6xl tracking-normal">search_off</span>
        </div>
        <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md text-slate-400">
          <span className="material-symbols-outlined text-xl">close</span>
        </div>
      </div>

      <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">No products found</h2>
      
      <p className="max-w-md text-slate-500 font-medium leading-relaxed mb-10">
        Try adjusting your filters or search terms to find what you're looking for. 
        We couldn't find any matches for your current selection.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-8 py-3.5 border-2 border-red-100 text-red-500 font-bold rounded-full hover:bg-red-50 hover:border-red-200 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-lg">filter_alt_off</span>
          Reset All Filters
        </button>
        
        <button
          onClick={onReset}
          className="px-8 py-3.5 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
        >
          Browse Popular
        </button>
      </div>

      {popularCategories.length > 0 && (
        <div className="w-full max-w-lg">
          <div className="h-px bg-slate-100 w-full mb-8" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            Popular categories you might like
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategorySelect(cat)}
                className="px-6 py-2.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all uppercase tracking-wider"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
