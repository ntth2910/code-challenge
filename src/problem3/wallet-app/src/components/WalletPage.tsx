import React, { useMemo } from "react";
import { usePrices } from "../hooks/usePrices";
import { useWalletBalances } from "../hooks/useWalletBalances";
import WalletRow from "./WalletRow";

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

type ProcessedBalance = WalletBalance & {
  priority: number;
  formatted: string;
};

const PRIORITY_MAP: Record<string, number> = {
  Osmosis: 100,
  Ethereum: 50,
  Arbitrum: 30,
  Zilliqa: 20,
  Neo: 20
};

const getPriority = (blockchain: string) => PRIORITY_MAP[blockchain] ?? -99;

const WalletPage: React.FC = () => {
  const balances: WalletBalance[] = useWalletBalances();
  const prices = usePrices();

  const processedBalances: ProcessedBalance[] = useMemo(() => {
    return balances
      .map((b: WalletBalance): ProcessedBalance => ({
        ...b,
        priority: getPriority(b.blockchain),
        formatted: b.amount.toFixed()
      }))
      .filter((b: ProcessedBalance) => b.priority > -99 && b.amount > 0)
      .sort((a: ProcessedBalance, b: ProcessedBalance) => b.priority - a.priority);
  }, [balances]);

  const rows = processedBalances.map((b: ProcessedBalance) => (
    <WalletRow
      key={b.currency}
      amount={b.amount}
      usdValue={(prices[b.currency] ?? 0) * b.amount}
      formattedAmount={b.formatted}
    />
  ));

  return <div>{rows}</div>;
};

export default WalletPage;
