import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function ExpandedSideBar(props) {
  return (
    <div className="w-[400px] absolute left-0 top-0 z-10 translate-x-32 h-full bg-slate-700">
      <div className="flex px-6 py-3 justify-between items-center">
      <h2 className="text-white font-bold text-lg">{props.title}</h2>
        <button onClick={props.onClose}><FontAwesomeIcon className="text-2xl text-white" icon={faClose} /></button>

      </div>
      <hr />
      {props.children}
    </div>
  );
}
