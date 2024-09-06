import { gql } from "../../../__generated__";

export const GET_TODOLIST = gql(`
  query GetTodoList($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      type
      title
      createdAt
      isDone
    }
  }
`);
