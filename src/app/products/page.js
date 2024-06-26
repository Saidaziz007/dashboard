import Dashboard from "@/components/dashboard/dashboard";
import React from "react";
import { FiMenu } from "react-icons/fi";
import photo from "@/assets/photo.jpg";
import Image from "next/image";
import Product from "@/components/products/products";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Products = async () => {
  let data = await getData();
  return (
    <div className="products">
      <div className="container">
        <div className="products-all">
          <div className="products-left">
            <Dashboard />
          </div>
          <div className="products-right">
            <div className="products-right-top">
              <FiMenu />
              <div className="products-login">
                <p>Jones Ferdinand</p>
                <Image src={photo} alt="photo" width={50} height={50} />
              </div>
            </div>
            <div className="products-right-title">
              <h1>Overview</h1>
              <div className="products-btns">
                <button className="btn-1">...</button>
                <button className="btn-2">Add</button>
              </div>
            </div>
            <div className="products-right-titles">
              <p>Owner</p>
              <p>End date</p>
              <p>Profits</p>
              <p>Losses</p>
              <p>Phone</p>
            </div>
            <Product data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
