import { api } from "@/lib/api";
import ErrorState from "@/components/ui/ErrorState";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

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
  let product = null;

  try {
    product = await api.getProductById(Number(id));
  } catch (error) {
    console.error(`Server-side fetch for product ${id} failed:`, error);
  }

  return <ProductDetailClient product={product} productId={Number(id)} />;
}
