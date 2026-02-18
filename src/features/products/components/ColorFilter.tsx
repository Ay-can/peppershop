import { Colordot } from "../../../shared/components/Colordot/Colordot";
import type { ProductColor } from "../types/product.types";
import style from "./ColorFilter.module.css";

interface Props {
  value: ProductColor | "all";
  onChange: (value: ProductColor | "all") => void;
}

export function ColorFilter({ value, onChange }: Props) {
  const colors: (ProductColor | "all")[] = [
    "all",
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
            value={color}
            checked={value === color}
            onChange={() => onChange(color)}
            className={style.colorInput}
          />
          <Colordot
            className={value === color ? style.selected : ""}
            color={color}
          />
          {color}
        </label>
      ))}
    </div>
  );
}
