"use client";

interface StarRatingProps {
  rate: number;
  count: number;
  size?: "sm" | "lg";
  showCount?: boolean;
}

export default function StarRating({ 
  rate, 
  count, 
  size = "sm", 
  showCount = true 
}: StarRatingProps) {
  return (
    <div className={`flex items-center gap-2 ${size === "lg" ? "mt-4" : "mt-2"}`}>
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => {
          const diff = rate - star + 1;
          let icon = "star_border";
          if (diff >= 1) icon = "star";
          else if (diff >= 0.5) icon = "star_half";

          return (
            <span 
              key={star} 
              className={`material-symbols-outlined ${size === "lg" ? "text-lg" : "text-sm"} ${icon === "star" ? "fill-current" : ""}`}
            >
              {icon}
            </span>
          );
        })}
      </div>
      {showCount && (
        <span className={`${size === "lg" ? "text-sm font-bold" : "text-xs"} text-slate-400`}>
          ({count} {size === "lg" ? "Verified Reviews" : "reviews"})
        </span>
      )}
    </div>
  );
}
