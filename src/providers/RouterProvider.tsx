import {
  createBrowserRouter,
  Link,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

import App from "../modules/App";
import ToDoList from "../modules/ToDoList";
import TodoTask from "../modules/TodoTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ToDoList />,
      },
      {
        path: ":todoId",
        element: <TodoTask />,
      },
    ],
    errorElement: (
      <div>
        Wrong URL. <Link to="/">Go to main</Link>
      </div>
    ),
  },
]);

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
