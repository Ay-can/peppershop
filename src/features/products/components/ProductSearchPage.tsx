import { products } from "../data/products";
import style from "./ProductSearchPage.module.css";

const ProductSearchPage = () => {
  return (
    <>
      <h1>Test</h1>
      <div className={style.gridContainer}>
        {products.map((product) => (
          <div className={style.gridItem}>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.scoville}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSearchPage;
