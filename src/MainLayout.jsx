
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar ";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar ></Navbar>
      <main className="flex-grow container mx-auto ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
