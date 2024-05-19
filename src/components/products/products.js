import Image from "next/image";
import React from "react";

const Product = ({ data }) => {
  let product = data?.products.map((el) => (
    <div key={el.id} className="products-right-infos">
      <div className="products-right-info-img">
        <Image src={el.thumbnail} alt="img" width={50} height={50} />
        <p>{el.title}</p>
      </div>
      <p>1/15/12</p>
      <p>${el.price}</p>
      <p>${el.price * 2}</p>
      <p>(603) 555-0123</p>
    </div>
  ));
  return <>{product}</>;
};

export default Product;
