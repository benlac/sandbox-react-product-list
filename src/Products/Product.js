import React from "react";
import PropTypes from "prop-types";

const Product = ({ name, price }) => (
  <li>
    {name} - {price}{" "}
  </li>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Product;
