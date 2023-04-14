import { useState } from "react";

export default function BuySell() {
  const [lots, setLots] = useState(0.01);

  return (
    <div className="h-full w-auto bg-slate-700">
      <div className="px-3 py-3 text-sm space-y-4">
        <select className="select w-full">
          <option>Volume in lots</option>
        </select>
        {/* amount */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="0.01"
              className="input input-bordered w-full"
            />
            <span>BTC</span>
          </label>
        </div>
      </div>
      <div className="px-3 py-5 space-y-3">
        <div className="w-ful py-2 px-3 rounded-lg bg-slate-950 flex items-center gap-3">
          <input type="checkbox" className="toggle toggle-success" />
          <p>Auto close</p>
        </div>
        <button className="w-full py-2 bg-[#089981] rounded-lg text-lg text-white max-md:px-3 max-md:py-2 max-md:text-lg">
          Buy
        </button>
        <button className="w-full py-2 bg-[#F23645] rounded-lg text-lg text-white max-md:px-3 max-md:py-2 max-md:text-lg">
          Sell
        </button>
        <button className="w-full py-2 border-2 text-secondary border-secondary rounded-lg text-lg  max-md:px-3 max-md:py-2 max-md:text-lg">
          Advanced Order
        </button>
      </div>
    </div>
  );
}
