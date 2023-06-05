import { useState, useEffect } from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { PRODUCT_API } from "./constants";
import { fetchData } from "./util";
import "./index.css";

const ProductListing = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = (data) => {
    const set = new Set();
    data.map((item) => set.add(item.category));
    return [...set];
  };

  useEffect(() => {
    async function fetching() {
      const response = await fetchData(PRODUCT_API);
      setProductData(response);
      setCategories(getCategories(response));
    }
    fetching();
  }, []);

  return (
    <div className="container">
      <ProductFilters categories={categories} />
      <ProductCard productData={productData} />
    </div>
  );
};

export default ProductListing;
