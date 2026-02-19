import { ColorBadge } from "../../../../shared/components/Colorbadge/Colorbadge.tsx";
import type { ProductColor } from "../../types/product.types.ts";
import style from "./ColorFilter.module.css";

interface Props {
  value: ProductColor | "alle";
  onChange: (value: ProductColor | "alle") => void;
}

export function ColorFilter({ value, onChange }: Props) {
  const colors: (ProductColor | "alle")[] = [
    "alle",
    "rood",
    "groen",
    "geel",
    "oranje",
  ];

  return (
    <div className={style.container}>
      {colors.map((color) => (
        <label key={color} className={style.colorLabel}>
          <input
            type="radio"
            checked={value === color}
            onChange={() => onChange(color)}
            className={style.colorInput}
          />
          <ColorBadge color={color} selected={value === color} />
        </label>
      ))}
    </div>
  );
}
