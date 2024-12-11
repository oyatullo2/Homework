import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainContext } from "../../context/main-cntext";
import { useNavigate } from "react-router-dom";

export const MainHeader = () => {
  const { cart, favorites } = useContext(MainContext);
  const { pathname } = useLocation();
  const navigate = useNavigate("");

  const handleGoToCartProduct = () => {
    if (cart.length === 0) {
      alert("Your cart is empty !");
    } else {
      navigate("/cartproduct");
    }
  };

  return (
    <>
      <div className="w-full bg-white mt-1 px-[10px] translate-x-[-100%] animate-[slideFromTop_0.5s_ease_forwards]">
        <div className="flex w-full items-center max-w-[1460px] mx-auto ">
          <div className="w-full  max-w-[300px]">
            <img
              className="hover:scale-[1.05] cursor-pointer transition-all duration-500 ease-in-out active:scale-[0.90]"
              src="/src/assets/header-logo.svg"
              alt="Rasm bor !"
            />
          </div>
          <div className="flex w-full items-center justify-between font-[450] text-[#704A24] text-[17px] cursor-pointer">
            <div className="">
              <Link to={"/home"}>
                <p className="text-[22px] font-[500] hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                  Home
                </p>
              </Link>
            </div>
            <div className="flex w-full max-w-[456px] justify-between">
              <div className="gap-1 relative flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                {!!favorites?.length && pathname !== "/favorites" && (
                  <div className="bg-red-500 w-2 h-2 rounded-full absolute top-0 -left-1"></div>
                )}
                <i className="fa-solid fa-heart"></i>
                <Link to={"/favorites"}>
                  <p>Favorites</p>
                </Link>
              </div>
              <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-bell"></i>
                <Link to={"/notification"}>
                  <p>Notification</p>
                </Link>
              </div>
              <div
                onClick={handleGoToCartProduct}
                className="gap-1 flex items-center hover:scale-[1.05] relative transition-all duration-500 ease-in-out active:scale-[0.90]"
              >
                {!!cart?.length && pathname !== "/cartproduct" && (
                  <div className="bg-red-500 w-2 h-2 rounded-full absolute top-0 -left-1"></div>
                )}
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Go to Cart</p>
              </div>
              <div className="gap-1 flex items-center hover:scale-[1.05] transition-all duration-500 ease-in-out active:scale-[0.90]">
                <i className="fa-solid fa-user"></i>
                <Link to={"/account"}>
                  <p>Account</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
