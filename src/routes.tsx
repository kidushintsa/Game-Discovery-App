import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";
import GameDetail from "./pages/GameDetail";

const router = createBrowserRouter([
  {
    path:"/",
   element: <App/>, 
   children:[
    {path:"", element: <HomePage/>},
    {path:"game/:id", element: <GameDetail/>}]},
])

export default router