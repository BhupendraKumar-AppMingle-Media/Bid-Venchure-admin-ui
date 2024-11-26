import { useState } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaMoneyBillWave, FaUserCircle } from "react-icons/fa";
import { FaCartShopping, FaUsers } from "react-icons/fa6";
// import { GrProductHunt } from "react-icons/gr";
// import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
// import { MdNotificationsOff } from "react-icons/md";
import {
  MdDashboard,
  // MdOutlineSupportAgent,
  MdRateReview,
} from "react-icons/md";
import { RiCouponFill, RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import "./SideBar.css";
const SideBar = () => {
  const navigate = useNavigate();
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isDeliveryDropdownOpen, setDeliveryDropdownOpen] = useState(false);
  const [isCustomersDropdownOpen, setCustomersDropdownOpen] = useState(false); // State for Customers Management dropdown

  const sideBarDatas = [
    {
      icon: <MdDashboard style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Dashboard",
      link: "/",
    },
    // {
    //   icon: <GrProductHunt style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
    //   title: "Products Management",
    //   link: "/products",
    //   dropdown: [
    //     { title: "Add Products", link: "/add-product" },
    //     { title: "All Product", link: "/products-list" },
    //     { title: "Categories", link: "/categories" },
    //     { title: "Inventory", link: "/product-inventory" },
    //   ],
    //},
    {
      icon: <FaCartShopping style={{ fontSize: "1.25rem" , color: "#EF8120" }} />,
      title: "Users Management",
      link: "/users-management",
    },
    {
      icon: <FaCartShopping style={{ fontSize: "1.25rem" , color: "#EF8120" }} />,
      title: "Events Management",
      link: "/events-management",
    },
    {
      icon: <FaCartShopping style={{ fontSize: "1.25rem" , color: "#EF8120" }} />,
      title: "Bidding Management",
      link: "/bidding-management",
    },
   
    {
      icon: <FaCartShopping style={{ fontSize: "1.25rem" , color: "#EF8120" }} />,
      title: "Restaurant Management",
      link: "/restaurant-management",
    },
   
    {
      icon: <MdRateReview style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Reviews And Rating",
      link: "/reviews",
    },
    
    {
      icon: <AiOutlineAreaChart style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Analytics",
      link: "/analytics",
    },
    {
      icon: <IoNotificationsSharp style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: " Notification And Alert",
      link: "/push-notifications",
    },
    
    {
      icon: <FaMoneyBillWave style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Earning Report",
      link: "/earning-report",
    },
    
    {
      icon: <RiCouponFill style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Referal Management",
      link: "/referal-management",
    },
   
    {
      icon: <IoMdSettings style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Slider and Promotion",
      link: "/settings",
    },
    {
      icon: <FaUserCircle style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: <RiLogoutBoxFill style={{ fontSize: "1.25rem" , color: "#EF8120"}} />,
      title: "Login",
      link: "/login",
    },
  ];

  const handleProductsDropdownToggle = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleDeliveryDropdownToggle = () => {
    setDeliveryDropdownOpen(!isDeliveryDropdownOpen);
  };

  const handleCustomersDropdownToggle = () => {
    setCustomersDropdownOpen(!isCustomersDropdownOpen);
  };

  return (
    <div className="w-61 h-[calc(100vh-84px)] bg-[#81687b]  shadow-lg fixed top-[84px] left-0 overflow-y-auto custom-scrollbar"
    style={{ color: "#ffffff" }}>
      <section className="w-61 h-full">
        <ul className="rounded-xl flex flex-col">
          {sideBarDatas.map((sideBarData, idx) => (
            <li key={idx}>
              {sideBarData.title === "Products Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-[#ffffff] cursor-pointer"
                    onClick={handleProductsDropdownToggle}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>



                    <span className="ml-auto">


                                          
                    {isProductsDropdownOpen ? (
                      <IoMdArrowDropdown
                        style={{ transform: "rotate(180deg)" }}
                      />
                    ) : (
                      <IoMdArrowDropdown />
                    )}

                </span> 


                  </div>
                  {isProductsDropdownOpen && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : sideBarData.title === "Delivery Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-blue-950 cursor-pointer"
                    onClick={handleDeliveryDropdownToggle}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                  </div>
                  {isDeliveryDropdownOpen && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : sideBarData.title === "Customers Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-4 text-blue-950 cursor-pointer"
                    onClick={handleCustomersDropdownToggle}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                  </div>
                  {isCustomersDropdownOpen && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-blue-950 cursor-pointer"
                  onClick={() => navigate(sideBarData.link)}
                >
                  <span>{sideBarData.icon}</span>
                  <span className="text-base">{sideBarData.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
