import { memo } from "react";

interface FilterPanelProps {
  categories: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onReset: () => void;
}

const FilterPanel = memo(function FilterPanel({
  categories,
  selectedCategories,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onReset,
}: FilterPanelProps) {
  return (
    <aside className="w-[280px] shrink-0">
      <div className="sticky top-24 space-y-8">
        {/* Price Range */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
            Price Range
          </h3>
          <div className="px-2 space-y-4">
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRange[1]}
              onChange={(e) =>
                onPriceChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm font-medium text-slate-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
            Categories
          </h3>
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => onCategoryChange(cat)}
                    className="rounded border-slate-300 accent-primary w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm capitalize text-slate-600 group-hover:text-slate-900 transition-colors">
                    {cat}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Reset */}
        <div className="pt-4 border-t border-slate-200">
          <button
            onClick={onReset}
            className="w-full py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">filter_alt_off</span>
            Reset All Filters
          </button>
        </div>
      </div>
    </aside>
  );
});

export default FilterPanel;
