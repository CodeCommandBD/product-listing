import ProductListGrid from "@/components/product/ProductListGrid";
import { type Product, api } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let initialProducts: Product[] = [];
  let initialCategories: string[] = [];

  try {
    // Fetch initial data on the server; if fails (e.g., 403 on Vercel), client will fallback
    const [products, categories] = await Promise.all([
      api.getProducts(),
      api.getCategories(),
    ]);
    initialProducts = products;
    initialCategories = categories;
  } catch (error) {
    console.error("Server-side fetch failed, falling back to client-side:", error);
  }

  return (
    <ProductListGrid 
      initialProducts={initialProducts} 
      initialCategories={initialCategories} 
    />
  );
}
