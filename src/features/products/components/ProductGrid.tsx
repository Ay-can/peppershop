import type { Product } from "../types/product.types";
import { ProductCard } from "./ProductCard";
import style from "./ProductGrid.module.css";

interface Props {
  products: Product[];
}

export function ProductGrid({ products }: Props) {
  return (
    <div className={style.gridContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
