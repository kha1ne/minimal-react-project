import { RootLayout } from "@layouts/index";
import { AboutPage, HomePage } from "@pages/index";
import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

const App: FC = () => <RouterProvider router={router} />;

export default App;
