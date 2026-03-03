import { api } from "@/lib/api";
import ErrorState from "@/components/ui/ErrorState";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const product = await api.getProductById(Number(id));
    return {
      title: `${product.title} — LuxeStore`,
      description: product.description,
    };
  } catch {
    return { title: "Product Not Found — LuxeStore" };
  }
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  let product;
  let isError = false;

  try {
    product = await api.getProductById(Number(id));
  } catch {
    isError = true;
  }

  if (isError || !product) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50">
        <ErrorState
          title={!product ? "Product Not Found" : "Failed to load product"}
          description={
            !product
              ? "The product you're looking for doesn't exist or has been removed."
              : "We're having trouble connecting. Please check your connection and try again."
          }
          statusLink="/"
        />
      </main>
    );
  }

  return <ProductDetailClient product={product} />;
}
