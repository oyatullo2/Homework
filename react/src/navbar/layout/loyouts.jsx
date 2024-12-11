import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";
import { MainHeader } from "../mainHeader/mainHeader";
import { useState } from "react";

export const Layout = () => {
  const { pathname } = useLocation();
  const pathNames =
    pathname !== "/" &&
    pathname !== "/register" &&
    pathname !== "/login" &&
    pathname !== "/error" &&
    pathname !== "/card" &&
    !pathname.startsWith("/product/") &&
    pathname !== "/account" &&
    pathname !== "/cartproduct" &&
    pathname !== "/notification";

  const [translateY, setTranslateY] = useState("100%");
  const [opacity, setOpacity] = useState(0);
  const interval = setTimeout(() => {
    setTranslateY("0%");
    setOpacity(1);
    return () => clearInterval(interval);
  }, 1500);

  return (
    <>
      <MainHeader />
      <div className="w-full h-[92vh]">
        <div className="flex w-full justify-between ">
          {pathNames && <Sidebar />}
          <div
            className="bg-[#FFF6EE] font-[450] h-[92vh] w-full transition-all duration-1000"
            style={{ transform: `translateY(${translateY})`, opacity: opacity }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
