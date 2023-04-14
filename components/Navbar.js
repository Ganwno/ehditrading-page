import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export default function Navbar(props) {
  return (
    <nav className="w-full h-[95px] grid grid-cols-12 bg-secondary max-md:hidden">
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
      <div className=" px-3 items-center gap-5 py-1 col-span-2 text-center my-auto space-y-2">
      <p className="text-sm text-primary">
      <span className="font-bold">Balance: </span>
          <strong>$500.00</strong> USD
        </p>
        <button className=" w-full text-white bg-primary rounded-lg  px-3 py-1">
          Deposit
        </button>
      </div>

      
    </nav>
  );
}
