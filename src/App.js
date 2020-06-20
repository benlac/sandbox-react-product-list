import React, { useState } from "react";
import "./app.scss";

import SearchBar from "./SearchBar";
import Products from "./Products";

import datas from "./datas/datas";

export default function App() {
  const [value, setValue] = useState("");
  const [product] = useState(datas);
  const [stockChecked, setStockChecked] = useState(false);

  return (
    <>
      <SearchBar
        value={value}
        handleChange={setValue}
        done={stockChecked}
        setDone={setStockChecked}
      />
      <Products products={product} filter={value} inStock={stockChecked} />
    </>
  );
}
