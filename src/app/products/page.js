import Dashboard from "@/components/dashboard/dashboard";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Products = () => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
