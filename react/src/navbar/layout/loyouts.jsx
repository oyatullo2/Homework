import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";
import { MainHeader } from "../mainHeader/mainHeader";

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
    pathname !== "/notification" &&
    pathname !== "/favorites";

  return (
    <>
      <MainHeader />
      <div className="w-full h-[92vh]">
        <div className="flex w-full justify-between ">
          {pathNames && <Sidebar />}
          <div className="bg-[#FFF6EE] font-[450] h-[92vh] w-full transition-all duration-1000 delay-[1500ms] animate-[slideFromBottom_1.5s_ease_forwards]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
