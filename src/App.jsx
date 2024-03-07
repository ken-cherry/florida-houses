import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import {
  ErrorPage,
  LandingPage,
  LayoutPage,
  OrlandoPage,
  PoincianaPage,
} from "./Pages";
import { FooterComponent, NavbarComponent, HouseComponent } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/orlando",
        element: <OrlandoPage />,
      },
      {
        path: "/poinciana",
        element: <PoincianaPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
