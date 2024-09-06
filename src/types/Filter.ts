import { Ordering, TodoTypes } from "../__generated__/graphql";

export type Filter = {
  types: TodoTypes[];
  isDone: boolean | undefined;
  orderBy?: Ordering.DateAsc | Ordering.DateDesc;
};
