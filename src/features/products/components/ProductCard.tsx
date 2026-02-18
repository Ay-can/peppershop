import { Colordot } from "../../../shared/components/Colordot/Colordot";
import type { Product } from "../types/product.types";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className={style.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={style.productImage}
      />
      <div className={style.productInfo}>
        <div className={style.productDetails}>
          <h3 className={style.productName}>{product.name}</h3>
          <p className={style.productDescription}>{product.description}</p>
        </div>
        <div className={style.productMeta}>
          <p>Scoville: {product.scoville.toLocaleString("nl-NL")}</p>
          <div className={style.colorContainer}>
            <Colordot color={product.color} />
            <p>{product.color}</p>
          </div>
        </div>
        <p className={style.price}>€{product.price.toFixed(2)}</p>
        <button className={style.addButton}>Toevoegen aan winkelwagen</button>
      </div>
    </div>
  );
}
