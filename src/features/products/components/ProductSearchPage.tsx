import { products } from "../data/products";
import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFilters } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

const ProductSearchPage = () => {
  const { filters, setFilters, filteredProducts } = useProductFilters(products);

  return (
    <div>
      <ProductFilters filters={filters} setFilters={setFilters} />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductSearchPage;
