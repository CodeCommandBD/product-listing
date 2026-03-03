import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

import StarRating from "@/components/ui/StarRating";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = memo(function ProductCard({ product, priority = false }: ProductCardProps) {
  // Mock sale logic for visual variety
  const isSale = product.id % 3 === 0;
  const oldPrice = isSale ? (product.price * 1.3).toFixed(2) : null;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-slate-100 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="relative aspect-square w-full bg-white p-6 overflow-hidden block">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            className="group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-slate-900 hover:text-red-500 hover:bg-white transition-colors shadow-sm z-10"
        >
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
        {isSale && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider z-10">
            Sale
          </div>
        )}
      </Link>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start gap-2">
            <Link href={`/product/${product.id}`} className="hover:text-primary transition-colors flex-1 min-w-0">
              <h3 className="font-bold text-base md:text-lg leading-tight line-clamp-2">
                {product.title}
              </h3>
            </Link>
            <span className="font-bold text-primary whitespace-nowrap shrink-0">
              ${product.price.toFixed(2)}
            </span>
          </div>
          {oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              ${oldPrice}
            </span>
          )}
        </div>

        <p className="text-[13px] leading-relaxed text-slate-400 font-medium line-clamp-2 mb-2">
          {product.description}
        </p>

        <StarRating rate={product.rating.rate} count={product.rating.count} />

        <button className="mt-4 w-full bg-primary/10 text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
});

export default ProductCard;

export type { Product };
