import { useState } from "react";
import TokenSelect from "./TokenSelect";
import { convert } from "../utils/convert";
import { usePrices } from "../hooks/usePrices";

export default function SwapForm() {
  const [fromToken, setFromToken] = useState("BTC");
  const [toToken, setToToken] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const prices = usePrices("https://interview.switcheo.com/prices.json");

  const validTokens = Object.keys(prices);
  const converted =
    amount && prices[fromToken] && prices[toToken]
      ? convert(amount, prices[fromToken], prices[toToken])
      : 0;

  const handleSwap = () => {
    if (!amount || amount <= 0) return;
    setLoading(true);
    setTimeout(() => {
      alert(`Swapped ${amount} ${fromToken} → ${converted.toFixed(4)} ${toToken}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-primaryBrown shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-lightBrown">Currency Swap</h2>

      <div className="mb-4">
        <label className="block font-semibold text-lightBrown">From</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="border rounded p-2 flex-1 bg-lightBrown text-primaryBrown placeholder-primaryBrown"
            placeholder="Amount"
          />
          <TokenSelect token={fromToken} tokens={validTokens} onChange={e => setFromToken(e.target.value)} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-lightBrown">To</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={converted.toFixed(4)}
            readOnly
            className="border rounded p-2 flex-1 bg-lightBrown text-primaryBrown"
          />
          <TokenSelect token={toToken} tokens={validTokens} onChange={e => setToToken(e.target.value)} />
        </div>
      </div>

      <button
        onClick={handleSwap}
        disabled={loading || !amount || amount <= 0}
        className="w-full bg-secondaryBrown text-lightBrown py-2 rounded hover:bg-primaryBrown disabled:bg-gray-400"
      >
        {loading ? "Swapping..." : "Swap"}
      </button>

      {amount && prices[fromToken] && prices[toToken] && (
        <p className="mt-2 text-lightBrown text-sm">
          Rate: 1 {fromToken} = {(prices[fromToken]/prices[toToken]).toFixed(4)} {toToken}
        </p>
      )}
    </div>
  );
}
