import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Orders() {
  const orderTabs = [
    { id: 1, name: "Order" },
    { id: 2, name: "Pending" },
    { id: 3, name: "Closed" },
  ];
  
  const [active, setActive] = useState(1)
  let text
  switch(active){
    case 1:
        text ='No Open Orders'
        break
    case 2:
        text ='No Pending Order'
        break
    default:
        text = 'No Closed Order'
  }
  function handleActiveTab(id){
    setActive(id)
  }
  return (
    <div className="w-full bg-[#2A303C] h-[30%] py-5 px-10 max-md:hidden">
      <div className="tabs">
        {orderTabs.map((tab) => (
          <div key={tab.id} onClick={()=>{
            handleActiveTab(tab.id)
          }} className={"tab tab-bordered " + (tab.id === active && 'tab-active')}>{tab.name}</div>
        ))}
      </div>
      <div className="flex items-center h-full justify-center">
        <div className="space-y-3 text-slate-400 text-center">
          <FontAwesomeIcon icon={faClose} className="text-6xl" />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
