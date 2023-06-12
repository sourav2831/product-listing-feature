import Card from "./Card";
import "./index.css";

const ProductCard = ({ productData }) => {
  return (
    <div className="productList">
      {productData.map((card) => (
        <Card cardData={card} />
      ))}
    </div>
  );
};
export default ProductCard;
