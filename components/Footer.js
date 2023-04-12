import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWifi } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (<footer className="w-full h-[10%] max-md:hidden z-20 text-white p-5 bottom-0 flex items-center justify-between bg-slate-950">
    <p>Equity: <strong>500.00USD</strong></p>
    <p>Free Margin: <strong>500.00USD</strong></p>
    <p>Balance: <strong>500.00USD</strong></p>
    <p>Margin: <strong>0.00USD</strong></p>
    <p>Margin Level: <strong>-</strong></p>
    <p>Leverage: <strong>1:2000</strong></p>
    <FontAwesomeIcon icon={faWifi} className="text-green-500" />
  </footer>)
}
