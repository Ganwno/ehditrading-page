import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";

export default function WatchList(props) {
  return (
    <div className="px-6 py-3 space-y-4">
      <SearchInput />
      <select className="select w-full">
        <option disabled selected>
          Favorite
        </option>
        <option>item1</option>
        <option>item2</option>
      </select>
      <div className="overflow-x-auto">
        <table className="table table-compact text-center w-full">
          {/* head */}
          <thead>
            <tr>
              
              <th>Symbol</th>
              <th>Signal</th>
              <th>Bid</th>
              <th>Ask</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>icon</td>
              <td className="text-[#089981]">
                <FontAwesomeIcon icon={faArrowUp} />
              </td>
              <td className="text-[#089981]">29,000</td>
              <td className="text-[#F23645]">29,343</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>icon</td>
              <td className="text-[#F23645]">
                <FontAwesomeIcon icon={faArrowDown} />
              </td>
              <td className="text-[#F23645]">28,800</td>
              <td className="text-[#F23645]">29,343</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
