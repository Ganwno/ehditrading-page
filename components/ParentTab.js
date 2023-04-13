import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ParentTab(props) {
  return (
    <div className="col-span-9 bg-slate-700 relative">
      <div className="tabs absolute bottom-0 max-md:static">
        {props.children}
        <div
          onClick={props.onShowModal}
          className="tab tab-lg tab-lifted tab-active"
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
}
