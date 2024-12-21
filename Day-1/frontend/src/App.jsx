import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/send",
          element: <Send />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
