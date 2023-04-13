import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav(props) {
  return (
    <>
      <nav className="min-w-full flex justify-between items-center px-4 h-20 bg-slate-600 md:hidden">
        <button onClick={props.onShowMenu}>
          <FontAwesomeIcon icon={faBars} className="text-2xl text-cyan-400" />
        </button>
        <div className="flex gap-4 items-center">
        <p className="text-md text-white">
          <strong>$500.00</strong> USD
        </p>
        <button className="border-2 text-cyan-500 rounded-lg border-cyan-500 px-3 py-2">
          Deposit
        </button>
        </div>
      </nav>
      {props.children}
    </>
  );
}
