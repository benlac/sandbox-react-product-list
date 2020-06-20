import React from "react";
import PropTypes from "prop-types";

import Product from "./Product";
import Category from "./Category";

const Products = ({ products, filter, inStock }) => {
  let lastCategory = null;
  const rows = [];

  products.forEach(product => {
    if ((inStock && !product.stocked) || product.name.indexOf(filter) === -1) {
      return;
    }
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<Category {...product} key={product.category} />);
    }
    rows.push(<Product {...product} key={product.name} />);
  });

  return <div>{rows}</div>;
};

Products.propTypes = {
  filter: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Products;
