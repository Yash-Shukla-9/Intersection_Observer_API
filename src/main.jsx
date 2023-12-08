import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import HomePage from "./Lazyload/Home.Page.jsx";
// import AboutPage from "./Lazyload/About.Page.jsx";
// import ContactPage from "./Lazyload/Contact.Page.jsx";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./Lazyload/Home.Page.jsx"));
const AboutPage = lazy(() => import("./Lazyload/About.Page.jsx"));
const ContactPage = lazy(() => import("./Lazyload/Contact.Page.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: (
          <Suspense fallback={<div>Loading home....</div>}>
            <HomePage />
          </Suspense>
        ),
      },

      {
        path: "/About",
        element: (
          <Suspense fallback={<div>loading about ....</div>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: (
          <Suspense fallback={<div>loading contact.... </div>}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
