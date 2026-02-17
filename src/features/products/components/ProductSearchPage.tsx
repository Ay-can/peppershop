import { products } from "../data/products";
import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFilters } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";
import style from "./ProductSearchPage.module.css";

const ProductSearchPage = () => {
  const { filters, setFilters, filteredProducts } = useProductFilters(products);

  return (
    <>
      <div className={style.filtersSection}>
        <h2>PepperShop</h2>
        <ProductFilters filters={filters} setFilters={setFilters} />
      </div>
      <ProductGrid products={filteredProducts} />
    </>
  );
};

export default ProductSearchPage;
