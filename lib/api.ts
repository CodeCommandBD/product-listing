const API_BASE_URL = "https://fakestoreapi.com";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchWithCache<T>(
  url: string,
  revalidate: number = 300,
  retries: number = 2
): Promise<T> {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Referer: "https://fakestoreapi.com/",
  };

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate },
    });

    if (res.status === 403 || res.status === 429) {
      if (retries > 0) {
        // Exponential backoff: wait a bit before retrying
        const delay = (3 - retries) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithCache<T>(url, revalidate, retries - 1);
      }
    }

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  } catch (error) {
    if (retries > 0) {
      return fetchWithCache<T>(url, revalidate, retries - 1);
    }
    throw error;
  }
}

export const api = {
  /**
   * Fetch all products — cached for 5 minutes
   */
  getProducts: (): Promise<Product[]> =>
    fetchWithCache<Product[]>(`${API_BASE_URL}/products`, 300),

  /**
   * Fetch a single product by ID — cached for 5 minutes
   */
  getProductById: (id: number): Promise<Product> =>
    fetchWithCache<Product>(`${API_BASE_URL}/products/${id}`, 300),

  /**
   * Fetch all product categories — cached for 10 minutes
   */
  getCategories: (): Promise<string[]> =>
    fetchWithCache<string[]>(`${API_BASE_URL}/products/categories`, 600),

  /**
   * Fetch products by a specific category — cached for 5 minutes
   */
  getProductsByCategory: (category: string): Promise<Product[]> =>
    fetchWithCache<Product[]>(`${API_BASE_URL}/products/category/${category}`, 300),
};
