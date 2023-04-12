import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar(props) {
  return (
    <nav className="w-full h-[10%] flex items-center justify-between bg-slate-600">
      <h1 className="px-12 text-2xl font-bold text-cyan-500 max-md:hidden">
        logo
      </h1>
      <button onClick={()=>{
        props.onMenu()
      }} className="px-4 md:hidden">
        <FontAwesomeIcon className="text-2xl text-cyan-500" icon={props.showMenu ? faClose : faBars} />
      </button>
      <div className="h-20 bg-slate-600 gap-6 px-3 flex justify-between items-center">
        <p className="text-xl text-white">
          <strong>$500.00</strong> USD
        </p>
        <button className="border-2 text-cyan-500 rounded-lg border-cyan-500 px-3 py-2">
          Deposit
        </button>
      </div>
    </nav>
  );
}
