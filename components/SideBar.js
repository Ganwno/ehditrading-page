import { useState } from "react";

export default function SideBar(props) {

  return (
    
      <nav className={"bg-primary flex-col relative w-full h-full max-md:hidden"}>
        {props.children}
      </nav>
    
    
  );
}
