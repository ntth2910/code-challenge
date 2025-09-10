import React from "react";

interface Props {
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

const WalletRow: React.FC<Props> = ({  usdValue, formattedAmount }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{formattedAmount}</span>
      <span>${usdValue.toFixed(2)}</span>
    </div>
  );
};

export default WalletRow;
