import { useMemo, useState } from "react";
import type { Product, ProductFilters } from "../types/product.types";
import { filterProducts } from "../utils/filterProducts";

export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<ProductFilters>({
    searchTerm: "",
    maxScoville: 2_500_000,
    selectedColor: "alle",
  });

  const filteredProducts = useMemo(() => {
    return filterProducts(products, filters);
  }, [products, filters]);

  return {
    filters,
    setFilters,
    filteredProducts,
  };
}
