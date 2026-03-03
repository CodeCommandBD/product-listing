"use client";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col gap-5 animate-pulse">
      {/* Image Skeleton */}
      <div className="relative aspect-square w-full bg-slate-100 rounded-2xl overflow-hidden" />

      <div className="flex flex-col gap-4 flex-1">
        {/* Category & Title Skeleton */}
        <div className="space-y-3">
          <div className="h-3 w-20 bg-slate-100 rounded-full" />
          <div className="space-y-2">
            <div className="h-5 w-full bg-slate-100 rounded-lg" />
            <div className="h-5 w-2/3 bg-slate-100 rounded-lg" />
          </div>
        </div>

        {/* Rating Skeleton */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-4 bg-slate-100 rounded-full" />
          ))}
        </div>

        {/* Price & Description Skeleton */}
        <div className="space-y-3 pt-2">
          <div className="h-6 w-24 bg-slate-100 rounded-lg" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-slate-100 rounded-full" />
            <div className="h-3 w-4/5 bg-slate-100 rounded-full" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-auto pt-4">
          <div className="h-12 w-full bg-slate-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
