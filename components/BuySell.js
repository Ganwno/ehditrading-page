import { useState } from "react";

export default function BuySell() {
    const [lots, setLots] = useState(0.01)

  return <div className="h-full w-auto bg-slate-800">

    <div className="px-3 py-3 space-y-4">
    <div className="bg-slate-950 px-3 py-3 space-y-3 rounded-lg">
        <select className="w-full px-3 py-2 bg-slate-500 text-white rounded-lg">
            <option value="">Volume in lots</option>
        </select>
        <input className="w-full px-3 py-2 text-white rounded-lg bg-slate-500 focus:outline-none" type="number" defaultValue={lots} min={0.01} step={0.01} />
        </div>
        <button className="w-full py-7 border-2 border-green-500 rounded-lg text-2xl text-green-500 max-md:px-3 max-md:py-2 max-md:text-lg">Buy</button>
        <button className="w-full py-7 border-2 border-red-500 rounded-lg text-2xl text-red-500 max-md:px-3 max-md:py-2 max-md:text-lg">Sell</button>
    </div>
  </div>;
}
