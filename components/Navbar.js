import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export default function Navbar(props) {
  return (
    <nav className="w-full h-[95px] grid grid-cols-12 bg-slate-600 max-md:hidden">
      <div className="flex px-2 items-center justify-center max-md:hidden">
        <Image className="rounded-xl" src={"/images/logo.png"} width={60} height={60} />
      </div>

      <button
        onClick={() => {
          props.onMenu();
        }}
        className="px-4 md:hidden"
      >
        <FontAwesomeIcon
          className="text-2xl text-cyan-500"
          icon={props.showMenu ? faClose : faBars}
        />
      </button>
      {props.children}
      <div className="h-full col-span-2 bg-slate-600 gap-6 px-3 flex justify-center items-center">
      <div className="flex px-3 items-center gap-5">
      <p className="text-sm text-white">
          <strong>$500.00</strong> USD
        </p>
        <button className="border-2 text-cyan-500 rounded-lg border-cyan-500 px-3 py-2">
          Deposit
        </button>
      </div>

      </div>
    </nav>
  );
}
