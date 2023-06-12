import "./index.css";

const Card = ({ cardData }) => {
  const { title, image, price } = cardData;
  return (
    <div className="cardContainer">
      <div>
        <img src={image} className="imageContainer" alt={title} />
        <div className="productDesc">
          <div>{title}</div>
          <div>₹{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
