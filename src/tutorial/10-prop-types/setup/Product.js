import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  // console.log("image", image);
  // let url = image && image.url ? image.url : null;
  // console.log(url);
  return (
    <article className="product">
      {
        <div>
          <h4>{name}</h4>
          <p>${price}</p>
          <img alt={name} src={image.url} />
        </div>
      }
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
Product.defaultProps = {
  image: "default name",
  price: 3.99,
  image: { url: defaultImage }
};
export default Product;
