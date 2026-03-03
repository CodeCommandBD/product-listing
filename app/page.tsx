import ProductListGrid from "@/components/product/ProductListGrid";
import { api } from "@/lib/api";

export default async function HomePage() {
  // Fetch initial data on the server to enable loading.tsx skeletons
  const [initialProducts, initialCategories] = await Promise.all([
    api.getProducts(),
    api.getCategories(),
  ]);

  return (
    <ProductListGrid 
      initialProducts={initialProducts} 
      initialCategories={initialCategories} 
    />
  );
}
