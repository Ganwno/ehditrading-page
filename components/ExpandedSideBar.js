import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function ExpandedSideBar(props) {
  return (
    <div className="w-[400px] shadow-xl absolute left-full top-0 z-10 h-full bg-slate-700 max-md:h-auto max-md:static max-md:w-full max-md:py-6 max-md:mx-auto">
      <div className="flex px-6 py-3 justify-between items-center">
      <h2 className="text-white font-bold text-lg">{props.title}</h2>
        <button onClick={props.onClose}><FontAwesomeIcon className="text-2xl text-white" icon={faClose} /></button>

      </div>
      <hr />
      {props.children}
    </div>
  );
}
