import type { Product } from "../types/product.types";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className={style.card}>
      <img src={product.image} alt={product.name} className={style.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.scoville}</p>
      <p>€{product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button>Add to cart</button>
    </div>
  );
}
