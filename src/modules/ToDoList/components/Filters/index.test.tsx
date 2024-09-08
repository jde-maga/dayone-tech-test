import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Filter } from "../../../../types/Filter";

import Filters from ".";
import { Ordering, TodoTypes } from "../../../../__generated__/graphql";

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

  it("should add Types with the Types filter", async () => {
    const filters = {
      types: [],
      isDone: undefined,
      orderBy: undefined,
    };
    const setFilters = jest.fn();

    render(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("RH"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["RH"],
    });
    await userEvent.click(screen.getByText("Marketing"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["Marketing"],
    });
    await userEvent.click(screen.getByText("Communication"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["Communication"],
    });
    await userEvent.click(screen.getByText("Tech"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["Tech"],
    });
  });

  it("should remove Type from the type filter", async () => {
    const filters = {
      types: [
        TodoTypes.Rh,
        TodoTypes.Marketing,
        TodoTypes.Communication,
        TodoTypes.Tech,
      ],
      isDone: undefined,
      orderBy: undefined,
    };
    const setFilters = jest.fn();

    render(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("RH"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["Marketing", "Communication", "Tech"],
    });
    await userEvent.click(screen.getByText("Marketing"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["RH", "Communication", "Tech"],
    });
    await userEvent.click(screen.getByText("Communication"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["RH", "Marketing", "Tech"],
    });
    await userEvent.click(screen.getByText("Tech"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: undefined,
      types: ["RH", "Marketing", "Communication"],
    });
  });

  it("should sort properly", async () => {
    const filters: Filter = {
      types: [],
      isDone: undefined,
      orderBy: undefined,
    };
    const setFilters = jest.fn();

    const { rerender } = render(
      <Filters filters={filters} setFilters={setFilters} />
    );

    await userEvent.click(screen.getByText("Not Ordered"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: "DATE_ASC",
      types: [],
    });

    filters.orderBy = Ordering.DateAsc;
    rerender(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("Ordered by DATE_ASC"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: "DATE_DESC",
      types: [],
    });

    filters.orderBy = Ordering.DateDesc;
    rerender(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("Ordered by DATE_DESC"));
    expect(setFilters).toHaveBeenLastCalledWith({
      isDone: undefined,
      orderBy: "DATE_ASC",
      types: [],
    });
  });

  it("should update the done state", async () => {
    const filters: Filter = {
      types: [],
      isDone: undefined,
      orderBy: undefined,
    };
    const setFilters = jest.fn();

    const { rerender } = render(
      <Filters filters={filters} setFilters={setFilters} />
    );

    await userEvent.click(screen.getByText("isDone"));
    expect(setFilters).toHaveBeenLastCalledWith({
      types: [],
      isDone: true,
      orderBy: undefined,
    });

    await userEvent.click(screen.getByText("isNotDone"));
    expect(setFilters).toHaveBeenLastCalledWith({
      types: [],
      isDone: false,
      orderBy: undefined,
    });

    filters.isDone = true;
    rerender(<Filters filters={filters} setFilters={setFilters} />);
    await userEvent.click(screen.getByText("Any"));
    expect(setFilters).toHaveBeenLastCalledWith({
      types: [],
      isDone: undefined,
      orderBy: undefined,
    });
  });

  it("should set business properly", async () => {
    const filters: Filter = {
      types: [],
      isDone: undefined,
      orderBy: undefined,
    };
    const setFilters = jest.fn();

    render(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("Business Only"));
    expect(setFilters).toHaveBeenLastCalledWith({
      types: ["Marketing", "Communication"],
      isDone: undefined,
      orderBy: undefined,
    });
  });

  it("should reset the filter", async () => {
    const filters: Filter = {
      types: [TodoTypes.Communication],
      isDone: true,
      orderBy: Ordering.DateAsc,
    };
    const setFilters = jest.fn();

    render(<Filters filters={filters} setFilters={setFilters} />);

    await userEvent.click(screen.getByText("Reset filters"));
    expect(setFilters).toHaveBeenLastCalledWith({
      types: [],
      isDone: undefined,
      orderBy: undefined,
    });
  });
});
