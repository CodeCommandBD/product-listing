"use client";

interface HeroSectionProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  sortOptions: string[];
  activeFiltersCount: number;
}

export default function HeroSection({
  sortBy,
  onSortChange,
  sortOptions,
  activeFiltersCount,
}: HeroSectionProps) {
  return (
    <>
      {/* Mobile/Tablet Header */}
      <div className="px-6 py-4 lg:py-8 flex items-center justify-between lg:hidden border-b border-slate-100 mb-4">
        <h2 className="text-xl font-bold tracking-tight">New Arrivals</h2>
        <div className="flex items-center gap-1 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-transparent border-none text-xs font-bold focus:ring-0 cursor-pointer outline-none pl-0 pr-6 py-0 appearance-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <span className="material-symbols-outlined text-sm -ml-5 pointer-events-none">swap_vert</span>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex flex-col gap-6 mb-8 px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-slate-900">Collections</span>
        </nav>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">LuxeStore Collections</h2>
            <p className="text-slate-500 mt-1 font-medium">Explore our handpicked selection of exceptional lifestyle products.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent border-none text-sm font-black text-primary focus:ring-0 cursor-pointer outline-none appearance-none pr-6"
            >
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <span className="material-symbols-outlined text-primary text-sm -ml-8 pointer-events-none">expand_more</span>
          </div>
        </div>
      </div>
    </>
  );
}
