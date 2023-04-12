import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp, faSearch } from "@fortawesome/free-solid-svg-icons"

export default function WatchList(props){
    return(
        <div className="px-6">
            <div className="flex py-3 justify-center items-center">
                <button className="bg-slate-500 rounded-l-xl"><FontAwesomeIcon icon={faSearch} className="text-white text-xl p-2" /></button>
                <input type="search" className=" w-full text-white focus:outline-none bg-slate-500 px-3 py-2 rounded-r-xl" placeholder="search" />
        
            </div>
            <div className="flex py-3">
            <select className="w-full bg-slate-500 text-white px-3 py-2 rounded-xl">
                <option value="">Favorite</option>
            </select>
            </div>
            <table className="w-full text-white border border-collapse ">
                <tr className="py-2">
                    <th>Symbol</th>
                    <th>Signal</th>
                    <th>Bid</th>
                    <th>Ask</th>
                </tr>
                <tr className="text-center border">
                    <td>icon</td>
                    <td className="py-3">
                        <FontAwesomeIcon className="p-2 bg-red-600 rounded-lg" icon={faArrowDown} />
                    </td>
                    <td>
                        <span className="bg-red-600 px-3 rounded-lg">29,159</span>
                    </td>
                    <td>
                        <span  className="bg-green-600 px-3 rounded-lg">29,159</span>
                    </td>
                </tr>
                <tr className="text-center border">
                    <td>icon</td>
                    <td className="py-3">
                        <FontAwesomeIcon className="p-2 bg-green-600 rounded-lg" icon={faArrowUp} />
                    </td>
                    <td>
                        <span className="bg-green-600 px-3 rounded-lg">29,159</span>
                    </td>
                    <td>
                        <span  className="bg-green-600 px-3 rounded-lg">29,159</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}