import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <div className="bg-gray-900">
      <NavBar/>
      <Outlet/>
    </div>
  );
};
export default App;
