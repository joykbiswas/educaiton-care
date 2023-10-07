import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root/Root";
import Home from "../Component/Page/Home";
import Login from "../Component/Page/Login/Login";
import Register from "../Component/Page/Register/Register";
import Author from "../Component/Page/Author/Author";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/categories.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/",
          element:<Author></Author>,
          loader:()=>fetch('/author.json')
        }
      ]
    },
  ]);

export default router;