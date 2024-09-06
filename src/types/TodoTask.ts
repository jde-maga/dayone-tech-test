import { TodoTypes } from "../__generated__/graphql";

export type TodoTask = {
  id: string;
  createdAt: string;
  type: TodoTypes;
  isDone: boolean;
  text?: string;
  title: string;
};
