import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import SideBar from "../components/SideBar.jsx";

const CommonLayout = () => {
  return (
    <>
      <div id="common-main">
        <Header />
        <section className="flex justify-between ">
          <div className="w-64">
            <SideBar />
          </div>
          <div className="w-10/12 p-3 border-1 bg-[#f5f5f5]">
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default CommonLayout;
