import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { GET_TODOLIST } from "./graphql/queries";

import ToDoList from ".";

const mocks = [
  {
    request: {
      query: GET_TODOLIST,
      variables: {},
    },
  },
];

describe("<TodoList />", () => {
  it("should render properly", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ToDoList />
      </MockedProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
