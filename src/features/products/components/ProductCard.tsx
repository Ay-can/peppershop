import { Colordot } from "../../../shared/components/Colordot/Colordot";
import type { Product } from "../types/product.types";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className={style.card}>
      <img src={product.image} alt={product.name} className={style.image} />
      <div className={style.cardContent}>
        <div className={style.productDescriptionContainer}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className={style.filterInfo}>
          <p>Scoville: {product.scoville}</p>
          <div className={style.colorContainer}>
            <Colordot color={product.color} />
            <p>{product.color}</p>
          </div>
        </div>
        <p className={style.price}>€{product.price.toFixed(2)}</p>
        <button className={style.button}>Toevoegen aan winkelwagen</button>
      </div>
    </div>
  );
}
