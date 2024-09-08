import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import Card from ".";
import { UPDATE_TODO_STATUS_BY_ID } from "../../../../../../graphql/queries";
import { GET_TODOLIST } from "../../../../graphql/queries";
import userEvent from "@testing-library/user-event";

describe("<Card />", () => {
  it("should render properly", () => {
    const apolloMock = [
      {
        request: {
          query: GET_TODOLIST,
          variables: { orderBy: undefined, filters: {} },
        },
        result: {
          data: {
            getTodoList: [],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={apolloMock} addTypename={false}>
        <MemoryRouter initialEntries={["/"]}>
          <Card id="1" title="Card" createdAt="Now" type="Tech" isDone />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(screen.getByText("Card")).toBeInTheDocument();
  });

  it("should update the isDone properly", async () => {
    const apolloMock = [
      {
        request: {
          query: UPDATE_TODO_STATUS_BY_ID,
          variables: { id: "1", isDone: false },
        },
        result: {
          data: {
            updateTodoStatusById: {
              isDone: false,
            },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={apolloMock} addTypename={false}>
        <MemoryRouter initialEntries={["/"]}>
          <Card id="1" title="Card" createdAt="Now" type="Tech" isDone />
        </MemoryRouter>
      </MockedProvider>
    );

    await userEvent.click(screen.getByText("isDone"));
  });
});
