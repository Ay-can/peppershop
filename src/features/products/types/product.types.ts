export type ProductCategory =
  | "Kruiden en specerijen"
  | "Sauzen en dressings"
  | "Pittige snacks"
  | "Exotische pepers"
  | "Chilisaus";

export type ProductColor = "rood" | "oranje" | "groen" | "geel";

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  description: string;
  price: number;
  scoville: number;
  color: ProductColor;
  image: string;
}

export interface ProductFilters {
  searchTerm: string;
  maxScoville: number;
  selectedColor: ProductColor | "alle";
}
