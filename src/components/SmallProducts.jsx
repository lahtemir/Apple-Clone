import React from "react";
import { products } from "./data";

function SmallProduct() {
  return (
    <article className="smallProduct">
      {products.map((product) => {
        return (
          <div className={product.className}>
            <h1>{product.h1}</h1>
            <h2>{product.h2}</h2>
            <a href="">{product.link1}</a>
            <a href="">{product.link2}</a>
          </div>
        );
      })}
    </article>
  );
}

export default SmallProduct;
