"use client";
import Image from "next/image";
import React from "react";

const User = ({ data }) => {
  let user = data?.users.map((el) => (
    <div key={el.id} className="users-right-infos">
      <div className="products-right-info-img">
        <Image src={el.image} alt="img" width={50} height={50} />
        <div className="user-title">
          <p>{el.address.city}</p>
          <span>Updated {el.id} day ago</span>
        </div>
      </div>
      <div className="user-name">
        <p>
          {el.firstName} {el.lastName}
        </p>
        <span>on {el.birthDate}</span>
      </div>
      <div className="user-date">
        <p>{el.phone}</p>
      </div>
      <p
        className="priority"
        style={{ backgroundColor: el.eyeColor ? el.eyeColor : "yellow" }}
      >
        {el.eyeColor}
      </p>
    </div>
  ));
  return <>{user}</>;
};

export default User;
