import { Outlet } from "react-router-dom"

export const Header = () => {
    return(
        <>
        <div className=" w-full bg-white mt-1 px-[10px]">
        <div className="flex justify-between w-full items-center max-w-[1460px] mx-auto ">
            <div className="">
                <img className="hover:scale-[1.05] cursor-pointer transition-all duration-500 ease-in-out active:scale-[0.90]" src="src/assets/header-logo.svg" alt="Rasm bor !" />
            </div>
        <div className="flex w-[456px] justify-between font-[450] text-[#704A24] text-[17px] cursor-pointer">
            <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-bell"></i>
                <p>Notification</p>
            </div>                
            <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Go to Cart</p>
            </div>
            <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-user"></i>
                <p>Account</p>
            </div>
        </div>
        </div>
        </div>
        <Outlet/>
        </>
    )
}