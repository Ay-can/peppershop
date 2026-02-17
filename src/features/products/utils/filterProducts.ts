// For filtering the products based on search, scoville and color
import type { Product, ProductFilters } from "../types/product.types";

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  return products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    const matchesScoville = product.scoville <= filters.maxScoville;

    const matchesColor =
      filters.selectedColor === "all" ||
      product.color === filters.selectedColor;

    return matchesSearch && matchesScoville && matchesColor;
  });
}
