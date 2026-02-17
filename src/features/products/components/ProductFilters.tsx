import type React from "react";
import type { ProductFilters } from "../types/product.types";
import style from "./ProductFilters.module.css";
import { SearchInput } from "./SearchInput";
import { ColorFilter } from "./ColorFilter";
import { ScovilleSlider } from "./ScovilleSlider";

interface Props {
  filters: ProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilters>>;
}

export function ProductFilters({ filters, setFilters }: Props) {
  return (
    <div className={style.filters}>
      <div className={style.filter}>
        <h3>Zoek op naam: </h3>
        <SearchInput
          value={filters.searchTerm}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, searchTerm: value }))
          }
        />
      </div>
      <div className={style.filter}>
        <ScovilleSlider
          value={filters.maxScoville}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, maxScoville: value }))
          }
        />
      </div>
      <div className={style.filter}>
        <ColorFilter
          value={filters.selectedColor}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, selectedColor: value }))
          }
        />
      </div>
    </div>
  );
}
