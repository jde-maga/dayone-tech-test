import { TodoTask } from "../../../../types/TodoTask";
import Card from "./components/Card";

type Props = {
  todoList: TodoTask[];
};

const List = ({ todoList }: Props) => {
  if (!todoList.length) {
    return "No todos";
  }

  return (
    <div>
      {todoList.map((todo) => (
        <Card
          key={todo.id}
          id={todo.id}
          title={todo.title}
          type={todo.type}
          createdAt={todo.createdAt}
          isDone={todo.isDone}
        />
      ))}
    </div>
  );
};

export default List;
