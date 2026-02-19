import type { ProductColor } from "../../../features/products/types/product.types.ts";
import style from "./Colorbadge.module.css";

interface Props {
  color: ProductColor | "alle";
  selected?: boolean;
  onClick?: () => void;
}

export function ColorBadge({ color, selected = false, onClick }: Props) {
  return (
    <div
      className={`${style.badge} ${selected ? style.selected : ""}`}
      onClick={onClick}
    >
      <span className={`${style.dot} ${style[color]}`} />
      <span className={`${style.label} ${style[color]}`}>{color}</span>
    </div>
  );
}
