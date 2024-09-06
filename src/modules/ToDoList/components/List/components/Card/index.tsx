import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { GET_TODOLIST } from "../../../../graphql/queries";
import { UPDATE_TODO_STATUS_BY_ID } from "../../../../../../graphql/queries";

import { cardStyle, titleStyle } from "./index.styles";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  type: string;
  isDone: boolean;
};

const Card = ({ id, title, createdAt, type, isDone }: Props) => {
  const [updateTodoByStatusId, { loading }] = useMutation(
    UPDATE_TODO_STATUS_BY_ID,
    { refetchQueries: [GET_TODOLIST, "UpdateTodoStatusById"] }
  );

  const updateIsDone = () => {
    updateTodoByStatusId({ variables: { id, isDone: !isDone } });
  };

  return (
    <div css={cardStyle}>
      <Link to={String(id)} css={titleStyle}>
        {title}
      </Link>
      <div>{type}</div>
      <div>{createdAt}</div>
      <div>
        <input
          disabled={loading}
          onChange={updateIsDone}
          checked={isDone}
          id={`${id}-isDone`}
          type="checkbox"
        />
        <label htmlFor={`${id}-isDone`}>isDone</label>
      </div>
    </div>
  );
};

export default Card;
