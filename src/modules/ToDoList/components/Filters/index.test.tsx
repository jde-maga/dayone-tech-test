import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Filter } from "../../../../types/Filter";

import Filters from ".";

describe("<Filters />", () => {
  const filters: Filter = {
    types: [],
    isDone: undefined,
    orderBy: undefined,
  };

  it("should render properly", () => {
    render(<Filters filters={filters} setFilters={() => {}} />);

    expect(screen.getByText("Not Ordered")).toBeInTheDocument();
    expect(screen.getByText("Filters :")).toBeInTheDocument();
  });

  it("should send actions when clicking on filter actions", async () => {
    const setFilters = jest.fn();

    render(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("RH"));
    await userEvent.click(screen.getByText("Marketing"));
    await userEvent.click(screen.getByText("Communication"));
    await userEvent.click(screen.getByText("Tech"));
    await userEvent.click(screen.getByText("Not Ordered"));
    await userEvent.click(screen.getByText("isDone"));
    await userEvent.click(screen.getByText("isNotDone"));
    await userEvent.click(screen.getByText("Business Only"));
    await userEvent.click(screen.getByText("Reset filters"));

    expect(setFilters).toHaveBeenCalledTimes(9);
  });
});
