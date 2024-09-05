import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage";
import { NotFoundPage } from "./pages/notFoundPage";

function App() {
  const router = createBrowserRouter(
    [
      { path: "/", element: <LandingPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
    { basename: "/Bstation-Clone" },
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
