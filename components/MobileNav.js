import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function MobileNav(){
    return(
        <nav className="min-w-full flex items-center px-4 h-20 bg-slate-600 md:hidden">
            
                <button><FontAwesomeIcon icon={faBars} className="text-2xl text-cyan-400" /></button>
            
        </nav>
    )
}