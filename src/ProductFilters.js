import { useEffect } from "react";
import { PRICE, RATING } from "./constants";
import "./index.css";

const ProductFilters = ({ categories = [], updateProductData }) => {
  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <div className="filter-container">
      <div>Filter</div>
      <div>Categories</div>
      {categories.map((category) => {
        return (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              name="category"
              onChange={(e) =>
                updateProductData("category", category, e.target.checked)
              }
            />
            <label>{category}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilters;
