import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, handleChange, done, setDone }) => (
  <>
    <input
      type="text"
      placeholder="Rechercher..."
      value={value}
      onChange={e => {
        handleChange(e.target.value);
      }}
    />
    <p>
      <input
        type="checkbox"
        checked={done}
        onChange={e => {
          setDone(e.target.checked);
        }}
      />
      Seulement les produits en stock
    </p>
  </>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired
};

export default SearchBar;
