import { useEffect } from "react";
import "./index.css";

const ProductFilters = ({ categories }) => {
  useEffect(() => {}, [categories]);
  return (
    <div className="filter-container">
      <div>Filter</div>
      <div>Categories</div>
      {categories.map((category) => {
        return (
          <div key={category.category}>
            <input
              type="checkbox"
              onChange={() => (category.isActive = !category.isActive)}
            />
            <label>{category.category}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilters;
