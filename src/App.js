import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/404";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/products",
        element: <ProductsPage/>
      },
      {
        path: "/products/:productId",
        element: <ProductDetailsPage/>
      }
    ]
  },
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App;
