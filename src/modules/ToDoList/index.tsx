import { useContext } from "react";
import { useQuery } from "@apollo/client";

import { FiltersContext } from "../../providers/FiltersProvider";

import { GET_TODOLIST } from "./graphql/queries";

import List from "./components/List";
import Filters from "./components/Filters";

import { TodoListStyle } from "./index.style";

const ToDoList = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  const { loading, error, data } = useQuery(GET_TODOLIST, {
    variables: {
      orderBy: filters.orderBy,
      filters: {
        ...(filters.types.length && {
          types: filters.types,
        }),
        ...(filters.isDone !== undefined && { isDone: filters.isDone }),
      },
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <div css={TodoListStyle}>
      <Filters setFilters={setFilters} filters={filters} />
      <List todoList={data.getTodoList} />
    </div>
  );
};

export default ToDoList;
