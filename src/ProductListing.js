import { useState, useEffect } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { PRODUCT_API } from "./constants";
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
    const updateData = allProductData.filter((item) => {
      return Object.keys(filterKeys).filter((filterKey) => {
        return filterKeys[filterKey].some(
          (subkey) => item[filterKey] === subkey
        );
      }).length;
    });
    setFilterData(updateData);
  };

  useEffect(() => {
    async function fetching() {
      const response = await fetchData(PRODUCT_API);
      setAllProductData(response);
      setFilterData(response);
      setCategories(getCategories(response));
    }
    fetching();
  }, []);

  useEffect(() => {
    console.log("pro", filterData);
  }, [filterData]);

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
