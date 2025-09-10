import { useState } from "react";

export const useWalletBalances = () => {
  const [balances] = useState([
    { currency: "BTC", amount: 1.5, blockchain: "Ethereum" },
    { currency: "ETH", amount: 10, blockchain: "Ethereum" },
    { currency: "OSMO", amount: 50, blockchain: "Osmosis" },
  ]);

  return balances;
};
