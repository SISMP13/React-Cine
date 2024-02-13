import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="lg:pl-[100px] text-white p-8 pt-36">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
