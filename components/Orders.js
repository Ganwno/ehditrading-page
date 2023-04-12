import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Orders(){
    return(
        <div className="w-full bg-slate-700 h-[30%] py-5 px-10 max-md:hidden">
            <div className="flex gap-7 text-white">
                <div className="py-2">Orders</div>
                <div className="py-2">Pending</div>
                <div className="py-2">Closed</div>
            </div>
            <hr />
            <div className="flex items-center h-full justify-center">
                <div className="space-y-3 text-slate-400 text-center">
                    <FontAwesomeIcon icon={faClose} className="text-6xl" />
                    <p>no open orders</p>

                </div>
            </div>
        </div>
    )
}