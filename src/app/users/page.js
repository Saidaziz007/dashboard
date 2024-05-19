import Dashboard from "@/components/dashboard/dashboard";
import Image from "next/image";
import React from "react";
import photo from "@/assets/photo.jpg";
import { FiMenu } from "react-icons/fi";
import User from "@/components/users/user";

async function getData() {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Users = async () => {
  let data = await getData();
  return (
    <div className="users">
      <div className="container">
        <div className="users-all">
          <div className="users-left">
            <Dashboard />
          </div>
          <div className="users-right">
            <div className="products-right-top">
              <FiMenu />
              <div className="products-login">
                <p>Jones Ferdinand</p>
                <Image src={photo} alt="photo" width={50} height={50} />
              </div>
            </div>
            <div className="products-right-title">
              <h1>Tickets</h1>
              <div className="products-btns">
                <button className="btn-1">...</button>
                <button className="btn-2">Add</button>
              </div>
            </div>
            <div className="users-right-titles">
              <p>Ticket details</p>
              <p>Customer name</p>
              <p>Date</p>
              <p>Priority</p>
            </div>
            <User data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
