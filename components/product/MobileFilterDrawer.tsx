"use client";

import FilterPanel from "./FilterPanel";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onCategoryChange: (cat: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onReset: () => void;
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  categories,
  selectedCategories,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onReset,
}: MobileFilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-[85%] max-w-[340px] h-full bg-white shadow-2xl overflow-y-auto p-8 animate-in slide-in-from-left duration-300">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Refine</h2>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Collection</p>
          </div>
          <button 
            onClick={onClose}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <FilterPanel
          categories={categories}
          selectedCategories={selectedCategories}
          priceRange={priceRange}
          onCategoryChange={onCategoryChange}
          onPriceChange={onPriceChange}
          onReset={onReset}
        />
        
        <button 
          onClick={onClose}
          className="w-full bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest py-4 rounded-2xl mt-12 shadow-xl active:scale-[0.98] transition-all"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
}
