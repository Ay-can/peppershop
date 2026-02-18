import type { ProductColor } from "../../../features/products/types/product.types";
import style from "./Colordot.module.css";

interface Props {
  color: ProductColor | "all";
  size?: number;
  className?: string;
}

export function Colordot({ color, size = 18, className = "" }: Props) {
  return (
    <span
      className={`${style.dot} ${style[color]} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
