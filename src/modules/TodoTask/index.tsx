import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { GET_TODO_BY_ID } from "./graphql/queries";
import { UPDATE_TODO_STATUS_BY_ID } from "../../graphql/queries";

const TodoTask = () => {
  const { todoId } = useParams();
  const { loading, error, data } = useQuery(GET_TODO_BY_ID, {
    variables: {
      id: todoId ?? "",
    },
  });
  const [updateTodoByStatusId, { loading: mutLoading }] = useMutation(
    UPDATE_TODO_STATUS_BY_ID,
    { refetchQueries: [GET_TODO_BY_ID] }
  );

  if (loading || mutLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return (
      <div>
        <div>Error !</div>
        <Link to="/">Back to main</Link>
      </div>
    );
  }

  const {
    getTodoById: { id, isDone, title, type, text, createdAt },
  } = data;

  const onUpdateIsDone = () => {
    updateTodoByStatusId({
      variables: { id, isDone: !isDone },
    });
  };

  return (
    <div>
      <div>
        {title} - {id}
      </div>
      <div>{type}</div>
      <div>{text}</div>
      <div>{createdAt}</div>
      <div>
        <input
          disabled={loading}
          onChange={onUpdateIsDone}
          checked={isDone}
          id={`${id}-isDone`}
          type="checkbox"
        />
        <label htmlFor={`${id}-isDone`}>isDone</label>
      </div>
      <Link to="/">Back to main</Link>
    </div>
  );
};

export default TodoTask;
