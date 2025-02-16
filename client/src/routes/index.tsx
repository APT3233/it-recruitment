import { useRoutes } from "react-router-dom";
import LayoutDefault from "../components/Layout/DefaultLayout/DefaultLayout";
import Error404 from "../pages/Error404";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import Home from "../pages/Home";
import Company from "../pages/Company";
import Search from "../pages/Search";
import Job from "../pages/Job";
import AdminLayout from "../components/Layout/AdminLayout/AdminLayout";

const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/company/:id",
        element: <Company />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error404 />,
  },

  // private router
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [],
  },
];

export default function AllRoute() {
  const router = useRoutes(routes);
  return <>{router}</>;
}
