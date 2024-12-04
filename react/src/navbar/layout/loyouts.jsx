import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "../sidebar/sidebar"
import { MainHeader } from "../mainHeader/mainHeader"

export const Layout = () => {
    const {pathname} = useLocation()
    const pathNames = pathname !== '/' && pathname !== '/register' && pathname !== '/login' && pathname !== '/error' && pathname !== '/card' && !pathname.startsWith('/product/') && pathname !== '/account' && pathname !== '/notification';    

    return(
        <>
        <MainHeader/>
           <div className="bg-blue-600 w-full h-[92vh]">
            <div className="flex w-full justify-between bg-red-600 ">
                {pathNames && <Sidebar/>}
            <div className="bg-[#FFF6EE] font-[450] h-[92vh] w-full">
                <Outlet/>
            </div>
            </div>
        </div>
        </>
    )
}