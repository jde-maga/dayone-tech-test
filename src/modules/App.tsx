import { Outlet } from "react-router-dom";

import { styles } from "./App.style";

const App = () => {
  return (
    <div css={styles}>
      <Outlet />
    </div>
  );
};

export default App;
