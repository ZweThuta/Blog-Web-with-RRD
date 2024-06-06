import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Error from "./pages/Error";
import Posts, { loader as postsLoader } from "./pages/Posts";
import { action as postCreateAction } from "./components/PostForm";
import { action as postUpdateAction } from "./components/PostForm";
import Create from "./pages/Create";
import Details, {
  loader as detailLoader,
  action as deleteAction,
} from "./pages/Details";
import Edit from "./pages/Edit";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
          action: postCreateAction,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: postUpdateAction,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
