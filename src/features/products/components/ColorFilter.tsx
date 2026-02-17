import type { ProductColor } from "../types/product.types";

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
    <div>
      {colors.map((color) => (
        <label key={color}>
          <input
            type="radio"
            value={color}
            checked={value === color}
            onChange={() => onChange(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
}
