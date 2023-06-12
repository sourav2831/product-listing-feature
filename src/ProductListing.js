import { useState, useEffect } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { PRODUCT_API, RATING, PRICE } from "./constants";
import { fetchData } from "./util";
import "./index.css";

const filterKeys = {};

const ProductListing = () => {
  const [allProductData, setAllProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const getCategories = (data) => {
    const set = new Set();
    data.map((item) => set.add(item.category));
    return Array.from(set);
  };

  const updateProductData = (key, value, isChecked) => {
    if (!filterKeys[key]) filterKeys[key] = [];
    if (isChecked) filterKeys[key].push(value);
    else filterKeys[key] = filterKeys[key].filter((item) => item !== value);
    if (!filterKeys[key].length) delete filterKeys[key];
    const updateData = allProductData.filter((item) => {
      return Object.keys(filterKeys).every((filterKey) => {
        return filterKeys[filterKey].some(
          (subkey) => item[filterKey] === subkey
        );
      });
    });
    setFilterData(updateData);
  };

  useEffect(() => {
    async function fetching() {
      const response = await fetchData(PRODUCT_API);
      const updatedReponse = response.map((item) => {
        let priceRange = "";
        let ratingRange = "";
        PRICE.forEach((price) => {
          if (price.max > item.price && item.price >= price.min)
            priceRange = price.text;
        });
        RATING.forEach((rating) => {
          if (rating.max > item.rating.rate && item.rating.rate >= rating.min)
            ratingRange = rating.text;
        });
        return { ...item, priceRange, ratingRange };
      });
      setAllProductData(updatedReponse);
      setFilterData(updatedReponse);
      setCategories(getCategories(updatedReponse));
    }
    fetching();
  }, []);

  return (
    <div className="container">
      <ProductFilters
        categories={categories}
        updateProductData={updateProductData}
      />
      <ProductCard productData={filterData} />
    </div>
  );
};

export default ProductListing;
