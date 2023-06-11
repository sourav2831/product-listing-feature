export const PRODUCT_API = "https://fakestoreapi.com/products/";

export const RATING = [
  { text: "1-2", max: 2, min: 1 },
  { text: "2-3", max: 3, min: 2 },
  { text: "3-4", max: 4, min: 3 },
  { text: "4+", max: Infinity, min: 4 },
];

export const PRICE = [
  { text: "<10", max: 10, min: 0 },
  { text: "10-50", max: 50, min: 10 },
  { text: "50-100", max: 100, min: 50 },
  { text: "100-500", max: 500, min: 100 },
  { text: "500+", max: Infinity, min: 500 },
];
