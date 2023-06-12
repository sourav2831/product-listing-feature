import { PRICE, RATING } from "./constants";
import "./index.css";

const ProductFilters = ({ categories = [], updateProductData }) => {
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
      <div>Price</div>
      {PRICE.map((price) => {
        return (
          <div key={price.text}>
            <input
              type="checkbox"
              id={price.text}
              value={price.text}
              name="price"
              onChange={(e) =>
                updateProductData("priceRange", price.text, e.target.checked)
              }
            />
            <label>{price.text}</label>
            <br />
          </div>
        );
      })}
      <div>Rating</div>
      {RATING.map((rating) => {
        return (
          <div key={rating.text}>
            <input
              type="checkbox"
              id={rating.text}
              value={rating.text}
              name="rating"
              onChange={(e) =>
                updateProductData("ratingRange", rating.text, e.target.checked)
              }
            />
            <label>{rating.text}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilters;
