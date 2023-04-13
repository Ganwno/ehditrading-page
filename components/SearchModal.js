import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

export default function SearchModal(props) {
  return (
    <>
      <SearchInput />
      {/* symbol list */}
      <ul className="space-y-2">
        {props.symbols.map((symbol) => {
          return (
            <li key={symbol.id} className="w-full flex justify-between">
              <h4>{symbol.name}</h4>
              <button
                onClick={() => {
                  props.onAddSymbol(symbol.id);
                }}
                className="w-8 h-8 rounded-full bg-slate-900"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
