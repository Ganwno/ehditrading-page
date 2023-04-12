import { useState } from "react";

export default function SideBar(props) {

  return (
    
      <nav className={"bg-slate-800 flex-col  w-full h-full max-md:hidden"}>
        {props.children}
      </nav>
    
    
  );
}
