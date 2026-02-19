import { products } from "../../features/products/data/products.ts";
import { useProductFilters } from "../../features/products/hooks/useProductFilters.ts";
import { ProductFilters } from "../../features/products/components/ProductFilters/ProductFilters.tsx";
import { ProductGrid } from "../../features/products/components/ProductGrid/ProductGrid.tsx";
import style from "./ProductSearchPage.module.css";

const ProductSearchPage = () => {
  const { filters, setFilters, filteredProducts } = useProductFilters(products);

  return (
    <>
      <div className={style.filtersSectionContainer}>
        <ProductFilters filters={filters} setFilters={setFilters} />
      </div>
      <ProductGrid products={filteredProducts} />
    </>
  );
};

export default ProductSearchPage;
