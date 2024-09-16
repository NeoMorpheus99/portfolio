import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./pages/Resume.jsx";
import ErrorPage from "./error.jsx";
import App from "./App.jsx";
import Projects from "./pages/projects.jsx";
import ImageStack from "./pages/Certificates.jsx";

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
    {
      path: "certificates",
      element: <ImageStack />,
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
