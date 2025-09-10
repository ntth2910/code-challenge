import { useState, useEffect } from "react";

export function usePrices(url) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pricesObj = {};
        data.forEach((item) => {
          pricesObj[item.currency] = item.price;
        });
        setPrices(pricesObj);
      })
      .catch((err) => console.error("Error fetching prices:", err));
  }, [url]);

  return prices;
}
