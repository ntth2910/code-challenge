/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import SwapForm from "../src/components/SwapForm";

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify([
    { currency: "BTC", price: 100 },
    { currency: "ETH", price: 2000 },
    { currency: "USDT", price: 1 }
  ]));
});

test("Form có input Amount và nút Swap", async () => {
  render(<SwapForm />);
  const amountInput = await screen.findByPlaceholderText("Amount");
  expect(amountInput).toBeInTheDocument();

  const swapButton = screen.getByText("Swap");
  expect(swapButton).toBeInTheDocument();
});
