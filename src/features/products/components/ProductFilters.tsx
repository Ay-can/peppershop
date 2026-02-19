import type React from "react";
import type { ProductFilters } from "../types/product.types";
import style from "./ProductFilters.module.css";
import { SearchInput } from "./SearchInput";
import { ColorFilter } from "./ColorFilter";
import { ScovilleSlider } from "./ScovilleSlider";
import { FilterSection } from "./FilterSection/Filtersection";

interface Props {
  filters: ProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilters>>;
}

export function ProductFilters({ filters, setFilters }: Props) {
  return (
    <div className={style.filters}>
      <FilterSection title="Zoek op naam">
        <SearchInput
          value={filters.searchTerm}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, searchTerm: value }))
          }
        />
      </FilterSection>

      <FilterSection title="Maximale pittigheid (Scoville)">
        <ScovilleSlider
          value={filters.maxScoville}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, maxScoville: value }))
          }
        />
      </FilterSection>

      <FilterSection title="Kleur">
        <ColorFilter
          value={filters.selectedColor}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, selectedColor: value }))
          }
        />
      </FilterSection>
    </div>
  );
}
