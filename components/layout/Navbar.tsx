"use client";

import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex w-8 h-8 bg-gradient-to-br from-primary to-indigo-600 rounded-lg items-center justify-center text-white">
              <span className="material-symbols-outlined text-lg">storefront</span>
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight">LuxeStore</h1>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">
              search
            </span>
            <input
              type="text"
              placeholder="Search for fashion, jewelry, electronics..."
              className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary/50 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-4">
          <button className="p-2 text-slate-600 md:hidden">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 relative text-slate-600 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button className="hidden md:flex p-2 text-slate-600 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}
