import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import Card from ".";
import { UPDATE_TODO_STATUS_BY_ID } from "../../../../../../graphql/queries";
import { GET_TODOLIST } from "../../../../graphql/queries";

const mocks = [
  {
    request: {
      query: UPDATE_TODO_STATUS_BY_ID,
      variables: {
        id: "1",
        isDone: true,
      },
    },
  },
  {
    request: {
      query: GET_TODOLIST,
      variables: {
        id: "1",
        isDone: true,
      },
    },
  },
];

describe("<Card />", () => {
  it("should render properly", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["Page", "/1"]}>
          <Card id="1" title="Card" createdAt="Now" type="Tech" isDone />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(screen.getByText("Card")).toBeInTheDocument();
  });
});
