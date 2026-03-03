"use client";

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import FilterPanel from "@/components/product/FilterPanel";
import ProductCard from "@/components/product/ProductCard";
import ProductCardSkeleton from "@/components/product/ProductCardSkeleton";
import HeroSection from "@/components/product/HeroSection";
import dynamic from "next/dynamic";
const MobileFilterDrawer = dynamic(() => import("@/components/product/MobileFilterDrawer"), {
  ssr: false,
});
import Pagination from "@/components/ui/Pagination";
import { api, type Product } from "@/lib/api";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import EmptyState from "@/components/ui/EmptyState";

const SORT_OPTIONS = [
  "New Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
];

const ITEMS_PER_PAGE = 6;

interface ProductListGridProps {
  initialProducts: Product[];
  initialCategories: string[];
}

export default function ProductListGrid({ initialProducts, initialCategories }: ProductListGridProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  // Show skeleton until client has hydrated — prevents blank flash
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for icon font to load before showing real content
    // This prevents "fav", "star", "ad" plain text from briefly appearing
    document.fonts.ready.then(() => {
      setIsMounted(true);
    });
  }, []);

  // Use TanStack Query with initialData to avoid refetch on mount if data exists
  const { data: products = initialProducts, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: api.getProducts,
    initialData: initialProducts.length > 0 ? initialProducts : undefined,
    // If no initial data (server failed), fetch on client
    enabled: true, 
  });

  const { data: categories = initialCategories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
    initialData: initialCategories.length > 0 ? initialCategories : undefined,
    enabled: true,
  });

  // Use the custom hook for all filter/sort/pagination logic
  const {
    selectedCategories,
    priceRange,
    sortBy,
    currentPage,
    activeFilters,
    filteredAndSorted,
    paginatedProducts,
    totalPages,
    setSortBy,
    setCurrentPage,
    setPriceRange,
    handleCategoryChange,
    handleReset,
  } = useProductsFilter({
    products,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isMounted) {
    return (
      <main className="flex-1 max-w-[1440px] w-full mx-auto pb-24 lg:pb-12 px-6 lg:px-8 animate-pulse">
        {/* Hero bar skeleton */}
        <section className="py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
          <div className="space-y-3">
            <div className="h-3 w-40 bg-slate-200 rounded-full" />
            <div className="h-8 w-72 bg-slate-200 rounded-xl" />
          </div>
          <div className="h-10 w-40 bg-slate-200 rounded-full" />
        </section>

        <div className="flex lg:gap-10">
          {/* Sidebar skeleton */}
          <aside className="hidden lg:flex flex-col w-72 gap-8 shrink-0">
            {/* Categories */}
            <div className="space-y-4">
              <div className="h-3 w-24 bg-slate-200 rounded" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-slate-200 rounded" />
                  <div className="h-3 bg-slate-200 rounded" style={{ width: `${55 + i * 15}px` }} />
                </div>
              ))}
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="h-3 w-28 bg-slate-200 rounded" />
              <div className="h-2 w-full bg-slate-200 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 bg-slate-300 rounded-full" />
              </div>
              <div className="flex justify-between">
                <div className="h-3 w-8 bg-slate-200 rounded" />
                <div className="h-3 w-12 bg-slate-200 rounded" />
              </div>
            </div>

            {/* Reset button */}
            <div className="h-10 w-full bg-slate-200 rounded-full" />
          </aside>

          {/* Grid area */}
          <div className="flex-1">
            {/* Count bar */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <div className="h-4 w-56 bg-slate-200 rounded" />
            </div>

            {/* Product card skeletons */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => <ProductCardSkeleton key={i} />)}
            </div>

            {/* Pagination skeleton */}
            <div className="flex justify-center items-center gap-3 mt-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    i === 3
                      ? "h-10 w-10 bg-primary/30"
                      : "h-8 w-8 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-[1440px] w-full mx-auto pb-24 lg:pb-12 px-6 lg:px-8">
      <HeroSection 
        sortBy={sortBy} 
        onSortChange={setSortBy} 
        sortOptions={SORT_OPTIONS}
        activeFiltersCount={activeFilters.length}
      />

      {/* Filter Badges */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {activeFilters.map((f) => (
            <div key={f.label} className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md">
              {f.label}
              <button onClick={() => f.type === "category" ? handleCategoryChange(f.label) : setPriceRange([0, 1000])}>
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            </div>
          ))}
          <button onClick={handleReset} className="text-[10px] text-red-500 font-black uppercase tracking-widest hover:underline ml-2">Clear Everything</button>
        </div>
      )}

      <div className="flex lg:gap-10">
        <aside className="hidden lg:block w-72">
          <FilterPanel
            categories={categories}
            selectedCategories={selectedCategories}
            priceRange={priceRange}
            onCategoryChange={handleCategoryChange}
            onPriceChange={setPriceRange}
            onReset={handleReset}
          />
        </aside>

        <div className="flex-1">
          <div className="hidden lg:flex items-center justify-between mb-8">
            <p className="text-sm text-slate-500 font-semibold tracking-wide">
              DISCOVERING <span className="text-slate-900 font-black">{filteredAndSorted.length}</span> EXQUISITE PIECES
            </p>
          </div>
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {paginatedProducts.map((p, index) => (
                  <ProductCard key={p.id} product={p} priority={index < 3} />
                ))}
              </div>
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </>
          ) : (
            <EmptyState 
              onReset={handleReset} 
              popularCategories={categories.slice(0, 4)}
              onCategorySelect={(category) => {
                handleReset();
                handleCategoryChange(category);
              }}
            />
          )}
        </div>
      </div>

      <MobileFilterDrawer 
        isOpen={isMobileFilterOpen} 
        onClose={() => setIsMobileFilterOpen(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        priceRange={priceRange}
        onCategoryChange={handleCategoryChange}
        onPriceChange={setPriceRange}
        onReset={handleReset}
      />

      {/* Floating Filter Button */}
      {!isMobileFilterOpen && (
        <div className="lg:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
          <button onClick={() => setIsMobileFilterOpen(true)} className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl font-black uppercase text-[10px] tracking-widest border border-slate-800">
            <span className="material-symbols-outlined text-sm">tune</span>
            <span>Filter Collection</span>
          </button>
        </div>
      )}
    </main>
  );
}
