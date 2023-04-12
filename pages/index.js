import SideBar from "@/components/SideBar";
import SideBarItem from "@/components/SideBarItem";
import WatchList from "@/components/WatchList";
import Navbar from "@/components/Navbar";
import Chart from "@/components/Chart";
import Orders from "@/components/Orders";
import BuySell from "@/components/BuySell";
import Footer from "@/components/Footer";
import {
  faBars,
  faHistory,
  faMessage,
  faAreaChart,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import MobileNav from "@/components/MobileNav";
import ExpandedSideBar from "@/components/ExpandedSideBar";
import { createChart } from "lightweight-charts";

export default function TradingPage() {
  const sideBarItems = [
    { id: 1, icon: faBars, text: "watch list" },
    { id: 2, icon: faHistory, text: "History" },
    { id: 3, icon: faAreaChart, text: "Meta Trader terminal" },
    { id: 4, icon: faMessage, text: "Support" },
    { id: 5, icon: faSignOut, text: "Logout" },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSideBarItem, setSelectedSideBarItem] = useState(null);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function handleExpand(id) {
    setIsExpanded(true);
    setActiveButtonId(id);
    setSelectedSideBarItem(sideBarItems.filter((item) => item.id === id)[0]);
  }
  function handleClose() {
    setIsExpanded(false);
    setActiveButtonId(null);
  }

  return (
    <>
      <Navbar onMenu={handleShowMenu} showMenu={showMenu} />
      <div className="grid grid-cols-12 w-full h-[90%] max-md:grid-cols-1">
        <SideBar isExpanded={isExpanded}>
          {sideBarItems.map((sideBarItem) => (
            <SideBarItem
              showMenu={showMenu}
              activeId={activeButtonId}
              onExpand={handleExpand}
              key={sideBarItem.id}
              id={sideBarItem.id}
              icon={sideBarItem.icon}
              text={sideBarItem.text}
            />
          ))}
        </SideBar>
        {isExpanded && (
          <ExpandedSideBar
            title={selectedSideBarItem.text}
            onClose={handleClose}
          >
            <WatchList />
          </ExpandedSideBar>
        )}
        <div className="w-full h-full col-span-9">
          <Chart />
          <Orders />
          <Footer />
        </div>
        <div className="col-span-2">
          <BuySell />
        </div>
      </div>
    </>
  );
}
