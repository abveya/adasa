import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Privacy from "./Components/Privacy/Privacy";
import Terms from "./Components/Terms/Terms";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:title", element: <ArticleDetails /> },
        { path: "about", element: <About /> },
        { path: "privacy", element: <Privacy /> },
        { path: "terms", element: <Terms /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
