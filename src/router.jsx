import { createBrowserRouter } from "react-router-dom";
import Logo from "./components/logo";

const router = createBrowserRouter([
  {
    index: true,
    element: <Logo />,
  },
]);

export default router;
