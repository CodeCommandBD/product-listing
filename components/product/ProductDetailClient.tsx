"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/ui/StarRating";
import { type Product } from "@/lib/api";

interface Props {
  product: Product;
}

function ProductDetailSkeleton() {
  return (
    <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-8 md:py-16 animate-pulse">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <div className="h-3 w-12 bg-slate-100 rounded" />
        <div className="h-3 w-3 bg-slate-100 rounded" />
        <div className="h-3 w-20 bg-slate-100 rounded" />
        <div className="h-3 w-3 bg-slate-100 rounded" />
        <div className="h-3 w-40 bg-slate-100 rounded" />
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Image Skeleton */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square w-full bg-slate-100 rounded-[40px]" />
        </div>

        {/* Info Skeleton */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <div className="h-5 w-28 bg-slate-100 rounded-full" />
            <div className="space-y-3">
              <div className="h-10 w-full bg-slate-100 rounded-xl" />
              <div className="h-10 w-3/4 bg-slate-100 rounded-xl" />
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="h-4 w-4 bg-slate-100 rounded-full" />)}
            </div>
          </div>

          <div className="py-6 border-y border-slate-100 space-y-2">
            <div className="h-10 w-32 bg-slate-100 rounded-xl" />
            <div className="h-4 w-36 bg-slate-100 rounded" />
          </div>

          <div className="space-y-3">
            <div className="h-3 w-20 bg-slate-100 rounded" />
            <div className="h-4 w-full bg-slate-100 rounded" />
            <div className="h-4 w-full bg-slate-100 rounded" />
            <div className="h-4 w-2/3 bg-slate-100 rounded" />
          </div>

          <div className="flex gap-4 pt-4">
            <div className="flex-1 h-14 bg-slate-100 rounded-2xl" />
            <div className="w-14 h-14 bg-slate-100 rounded-2xl" />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-slate-100 rounded-full" />
              <div className="h-3 w-24 bg-slate-100 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-slate-100 rounded-full" />
              <div className="h-3 w-24 bg-slate-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductDetailClient({ product }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for icon font to load before showing real content
    document.fonts.ready.then(() => {
      setIsMounted(true);
    });
  }, []);

  if (!isMounted) {
    return <ProductDetailSkeleton />;
  }

  return (
    <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 py-8 md:py-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-3 text-xs uppercase tracking-widest font-black text-slate-400 mb-8 md:mb-12">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="capitalize hover:text-primary transition-colors cursor-pointer">{product.category}</span>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="text-slate-900 truncate max-w-[150px] md:max-w-none">{product.title}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Image */}
        <div className="w-full md:w-1/2 group">
          <div className="relative aspect-square w-full bg-white rounded-[40px] border border-slate-100 overflow-hidden p-12 md:p-20 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: "contain" }}
              className="group-hover:scale-105 transition-transform duration-700 p-8"
              priority
            />
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col gap-6">
            <span className="inline-block self-start px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              {product.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {product.title}
            </h1>

            <StarRating rate={product.rating.rate} count={product.rating.count} size="lg" />

            <div className="py-6 border-y border-slate-100">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-primary tracking-tight">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-slate-400">Included Tax &amp; Duties</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-slate-400">Description</h4>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-auto">
              <button className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary hover:shadow-2xl transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Collection
              </button>
              <button className="px-6 py-5 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors active:scale-95">
                <span className="material-symbols-outlined text-slate-400">favorite</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-10 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50">
                  <span className="material-symbols-outlined text-slate-400 text-xl">local_shipping</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Concierge Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50">
                  <span className="material-symbols-outlined text-slate-400 text-xl">verified</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Authentic Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
