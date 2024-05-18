import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaTicketAlt, FaBook } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";
import { FaUsers, FaUserTie } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="dashboard-top-1">
          <Image src={logo} alt="logo" />
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-top-2">
          <div className="dashboard-top-3">
            <BiSolidPieChartAlt2 />
            <Link href={"/products"}>
              <p>Products</p>
            </Link>
          </div>
          <div className="dashboard-top-3">
            <FaTicketAlt />
            <p>Users</p>
          </div>
          <div className="dashboard-top-3">
            <LuLamp />
            <p>Posts</p>
          </div>
          <div className="dashboard-top-3">
            <FaUsers />
            <p>Contacts</p>
          </div>
          <div className="dashboard-top-3">
            <FaUserTie />
            <p>Agents</p>
          </div>
          <div className="dashboard-top-3">
            <FaBook />
            <p>Articles</p>
          </div>
        </div>
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-1">
          <VscColorMode />
          <p>Change mode</p>
        </div>
        <div className="dashboard-bottom-1">
          <IoLogOutOutline />
          <Link href={"/"}>
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
