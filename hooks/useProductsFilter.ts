import { useState, useMemo, useEffect } from "react";
import { type Product } from "@/lib/api";

interface UseProductsFilterOptions {
  products: Product[];
  initialPriceRange?: [number, number];
  itemsPerPage: number;
}

export function useProductsFilter({
  products,
  initialPriceRange = [0, 1000],
  itemsPerPage,
}: UseProductsFilterOptions) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>(initialPriceRange);
  const [sortBy, setSortBy] = useState("New Arrivals");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, priceRange, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setPriceRange(initialPriceRange);
    setSortBy("New Arrivals");
    setCurrentPage(1);
  };

  const filteredAndSorted = useMemo(() => {
    let result = products.filter((p) => {
      const inCategory =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return inCategory && inPrice;
    });

    if (sortBy === "Price: Low to High") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [products, selectedCategories, priceRange, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSorted.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSorted, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSorted.length / itemsPerPage);

  const activeFilters = useMemo(() => [
    ...selectedCategories.map((c) => ({ label: c, type: "category" as const })),
    ...(priceRange[1] < initialPriceRange[1]
      ? [{ label: `$0 – $${priceRange[1]}`, type: "price" as const }]
      : []),
  ], [selectedCategories, priceRange, initialPriceRange]);

  return {
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
  };
}
