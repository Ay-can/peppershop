import type { ProductColor } from "../../../features/products/types/product.types";
import style from "./Colordot.module.css";

interface Props {
  color: ProductColor | "all";
  size?: number;
}

export function Colordot({ color, size = 18 }: Props) {
  return (
    <span
      className={`${style.dot} ${style[color]}`}
      style={{ width: size, height: size }}
    />
  );
}
