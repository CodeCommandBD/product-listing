"use client";

import Link from "next/link";

interface ErrorStateProps {
  onRetry?: () => void;
  title?: string;
  description?: string;
  statusLink?: string;
}

export default function ErrorState({
  onRetry,
  title = "Failed to load products",
  description = "We're having trouble connecting to our servers. Please check your internet connection and try again.",
  statusLink = "#",
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="relative mb-10">
        <div className="h-32 w-32 bg-red-50 rounded-full flex items-center justify-center text-red-500 shadow-inner">
          <span className="material-symbols-outlined text-7xl animate-pulse">warning</span>
        </div>
        <div className="absolute top-0 right-0 h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-lg text-red-600 border border-red-100">
          <span className="material-symbols-outlined text-xl font-bold">priority_high</span>
        </div>
      </div>

      <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">{title}</h2>
      
      <p className="max-w-md text-slate-500 font-medium leading-relaxed mb-12">
        {description}
      </p>

      <div className="flex flex-col items-center gap-8">
        {onRetry && (
          <button
            onClick={onRetry}
            className="group flex items-center gap-3 px-10 py-4 bg-primary text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-full shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_25px_50px_rgba(var(--primary-rgb),0.4)] hover:-translate-y-1 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-500">refresh</span>
            Try Again
          </button>
        )}
        
        <Link
          href={statusLink}
          className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2"
        >
          Visit our Status Page
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </Link>
      </div>
    </div>
  );
}
