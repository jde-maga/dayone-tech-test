import { render, screen } from "@testing-library/react";
import List from ".";
import { TodoTypes } from "../../../../__generated__/graphql";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

describe("<List />", () => {
  it("should render nothing if list is empty", () => {
    render(<List todoList={[]} />);

    expect(screen.getByText("No todos")).toBeInTheDocument();
  });

  it("should render a list of cards", async () => {
    render(
      <MockedProvider addTypename={false}>
        <MemoryRouter initialEntries={["/"]}>
          <List
            todoList={[
              {
                id: "1",
                title: "Title",
                type: TodoTypes.Communication,
                createdAt: "Now",
                isDone: true,
              },
            ]}
          />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(screen.queryByText("No todos")).not.toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
