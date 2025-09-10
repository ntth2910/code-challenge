import { useState } from "react";

export const usePrices = () => {
  const [prices] = useState<{ [key: string]: number }>({
    BTC: 26000,
    ETH: 1600,
    OSMO: 0.38,
  });

  return prices;
};
