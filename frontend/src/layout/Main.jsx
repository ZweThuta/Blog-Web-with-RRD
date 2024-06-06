import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const Main = () => {
  return (
    <section className="main">
      <NavBar/>
      <Outlet/>
    </section>
  );
};

export default Main;
