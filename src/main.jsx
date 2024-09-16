import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./pages/Resume.jsx";
import ErrorPage from "./error.jsx";
import App from "./App.jsx";
import Projects from "./pages/projects.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "resume",
      element: <Resume />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
  ],
  {
    basename: "/portfolio",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
