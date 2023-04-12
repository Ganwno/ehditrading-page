import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SideBarItem(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        props.onExpand(props.id);
        setActive(!active);
      }}
      className={
        "text-center flex h-20 border-b border-slate-500 items-center justify-center cursor-pointer hover:text-cyan-500 "
        +(props.activeId === props.id ? 'text-cyan-500 bg-slate-600' : 'text-white')
      }
    >
      <div>
        <FontAwesomeIcon icon={props.icon} size="1x" />
        <h1 className="text-sm">{props.text}</h1>
      </div>
    </div>
  );
}
