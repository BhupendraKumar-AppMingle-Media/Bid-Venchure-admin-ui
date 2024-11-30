import { useState } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import {
  FaUserFriends,
  FaRegCalendarAlt,
  FaGavel,
  FaUtensils,
  FaUserCircle,
} from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdDashboard, MdRateReview, MdAttachMoney } from "react-icons/md";
import { RiCouponFill, RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active item index
  const [dropdownOpen, setDropdownOpen] = useState({
    notifications: false,
  }); // Track dropdowns (only for notifications)

  const sideBarDatas = [
    { icon: <MdDashboard />, title: "Dashboard", link: "/" },
    { icon: <FaUserFriends />, title: "Users Management", link: "/users-management" },
    { icon: <FaUtensils />, title: "Restaurant Management", link: "/restaurant-management" },
    { icon: <FaRegCalendarAlt />, title: "Events Management", link: "/events-management" },
    { icon: <FaGavel />, title: "Bidding Management", link: "/bidding-management" },
    { icon: <MdRateReview />, title: "Reviews And Rating", link: "/reviews" },
    { icon: <AiOutlineAreaChart />, title: "Analytics", link: "/analytics" },
    { icon: <MdAttachMoney />, title: "Earning Report", link: "/earning-report" },
    { icon: <FaWallet />, title: "Wallet and Incentive", link: "/wallet-incentive" },
    { icon: <RiCouponFill />, title: "Referral Management", link: "/referral-management" },
    {
      icon: <IoNotificationsSharp />,
      title: "Notification And Alert",
      dropdownKey: "notifications",
      dropdownItems: [
        { title: "User Notifications", link: "/notifications/users" },
        { title: "Restaurant Notifications", link: "/notifications/restaurants" },
      ],
    },
    { icon: <FaImage />, title: "Slider and Promotion", link: "/slider-promotion" },
    { icon: <FaUserCircle />, title: "Profile", link: "/profile" },
    { icon: <RiLogoutBoxFill />, title: "Logout", link: "/logout" },
  ];

  const handleNavigation = (link, idx) => {
    setActiveIndex(idx); // Set the clicked item as active
    navigate(link); // Navigate to the clicked item's route
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="w-64 h-[calc(100vh-84px)] bg-[#81687b] shadow-lg fixed top-[84px] left-0 overflow-y-auto custom-scrollbar">
      <section className="w-64 h-full">
        <ul className="rounded-xl flex flex-col mt-4">
          {sideBarDatas.map((sideBarData, idx) => (
            <li key={idx} className="relative group">
              {/* If the item has a dropdown */}
              {sideBarData.dropdownKey ? (
                <>
                  <div
                    className={`w-full p-4 flex justify-between items-center gap-4 text-[#ffffff] cursor-pointer transition-all duration-300 rounded-md ${
                      dropdownOpen[sideBarData.dropdownKey]
                        ? "bg-[#e17288] text-white shadow-md"
                        : "hover:bg-[#f1a8db] hover:shadow-lg"
                    }`}
                    onClick={() => toggleDropdown(sideBarData.dropdownKey)}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        style={{
                          fontSize: "1.5rem",
                          color: dropdownOpen[sideBarData.dropdownKey] ? "white" : "#D2405D",
                        }}
                      >
                        {sideBarData.icon}
                      </span>
                      <span className="text-base font-medium">{sideBarData.title}</span>
                    </div>
                    <span className="text-lg font-bold">
                      {dropdownOpen[sideBarData.dropdownKey] ? "-" : "+"}
                    </span>
                  </div>

                  {/* Dropdown Items */}
                  {dropdownOpen[sideBarData.dropdownKey] && (
                    <ul className="ml-6 mt-2">
                      {sideBarData.dropdownItems.map((item, subIdx) => (
                        <li key={subIdx}>
                          <div
                            className="p-2 text-[#ffffff] cursor-pointer hover:bg-[#f1a8db] hover:shadow-lg rounded-md"
                            onClick={() => handleNavigation(item.link, idx)}
                          >
                            {item.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Regular Sidebar Items
                <div
                  className={`w-full p-4 flex justify-start items-center gap-4 text-[#ffffff] cursor-pointer transition-all duration-300 rounded-md ${
                    activeIndex === idx
                      ? "bg-[#D2405D] text-white shadow-md"
                      : "hover:bg-[#f1a8db] hover:shadow-lg"
                  }`}
                  onClick={() => handleNavigation(sideBarData.link, idx)}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 rounded-md transition-all ${
                      activeIndex === idx ? "bg-white" : "bg-transparent group-hover:bg-[#D2405D]"
                    }`}
                  ></div>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      color: activeIndex === idx ? "white" : "#D2405D",
                    }}
                  >
                    {sideBarData.icon}
                  </span>
                  <span className="text-base font-medium">{sideBarData.title}</span>
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
