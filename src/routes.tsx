import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import GameDetail from "./pages/GameDetail";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
   path:"/",
   element: <App/>, 
   errorElement:<ErrorPage/>,
   children:[
    {path:"", element: <HomePage/>},
    {path:"game/:slug", element: <GameDetail/>}]},
])

export default router