import { render, screen } from "@testing-library/svelte";

import Ruler from "./ruler.svelte";

test("works", () => {
  render(Ruler, { visibleHours: [6, 7, 8] });
  expect(screen.getByText("6")).toBeVisible();
});
