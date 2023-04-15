import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import HistoryItem from "./HistoryItem";

export default function History(props) {
  return (
    <div className="px-6 py-3 space-y-4">
      <SearchInput />
        <HistoryItem />
    </div>
  );
}
