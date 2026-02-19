import { products } from "../data/products";
import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFilters } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";
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
