import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Topics from "../../Pages/Topics/Topics";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },

      {
        path: "/topics",
        element: <Topics></Topics>,
        loader: () => fetch("http://localhost:5000/topics"),
      },
    ],
  },
]);
