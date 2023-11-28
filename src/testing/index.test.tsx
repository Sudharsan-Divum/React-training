import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Query } from "../pages/react-query";

test("render @tanstack-Query Screen", () => {
  render(<Query />);
  const load = screen.getByText(/....loading data/i);
  expect(load).toBeInTheDocument();
});
