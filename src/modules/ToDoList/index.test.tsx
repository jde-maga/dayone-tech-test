import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { TodoTypes } from "../../__generated__/graphql";

import { GET_TODOLIST } from "./graphql/queries";

import ToDoList from ".";

describe("<TodoList />", () => {
  it("should render properly", async () => {
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
        <ToDoList />
      </MockedProvider>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("No todos")).toBeInTheDocument();
  });

  it("should render an error", async () => {
    const apolloMock = [
      {
        request: {
          query: GET_TODOLIST,
          variables: { orderBy: undefined, filters: {} },
        },
        error: new Error("err"),
      },
    ];

    render(
      <MockedProvider mocks={apolloMock} addTypename={false}>
        <ToDoList />
      </MockedProvider>
    );

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("Error")).toBeInTheDocument();
  });

  it("should send queries depending on filters", () => {
    const useContextMock = (React.useContext = jest.fn());
    useContextMock.mockReturnValue({
      setFilters: jest.fn(),
      filters: {
        types: [TodoTypes.Rh],
        isDone: true,
        orderBy: undefined,
      },
    });

    const apolloMock = [
      {
        request: {
          query: GET_TODOLIST,
          variables: {
            orderBy: undefined,
            filters: {
              types: [TodoTypes.Rh],
              isDone: true,
              orderBy: undefined,
            },
          },
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
        <ToDoList />
      </MockedProvider>
    );
  });
});
