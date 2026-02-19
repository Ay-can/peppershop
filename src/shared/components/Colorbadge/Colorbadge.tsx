import type { ProductColor } from "../../../features/products/types/product.types";
import { Colordot } from "../Colordot/Colordot";
import style from "./Colorbadge.module.css";

interface Props {
  color: ProductColor | "all";
  selected?: boolean;
  onClick?: () => void;
}

const colorLabels: Record<ProductColor | "all", string> = {
  all: "Alle",
  rood: "Rood",
  groen: "Groen",
  geel: "Geel",
  oranje: "Oranje",
};

export function ColorBadge({ color, selected = false, onClick }: Props) {
  return (
    <div
      className={`${style.badge} ${selected ? style.selected : ""}`}
      onClick={onClick}
    >
      <Colordot className={selected ? "selected" : ""} color={color} />
      <span className={color !== "all" ? style[color] : ""}>
        {colorLabels[color]}
      </span>
    </div>
  );
}
