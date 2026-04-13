import { RootLayout } from "@layouts/index";
import { About, Home } from "@pages/index";
import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
