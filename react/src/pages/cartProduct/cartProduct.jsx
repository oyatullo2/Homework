import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../../context/main-cntext";

export const CartProduct = () => {
  const navigator = useNavigate();
  const { cart } = useContext(MainContext);
  const [cartItems, setCartItems] = useState(
    cart.map((item) => ({ ...item, count: 1, checked: false }))
  );

  useEffect(() => {
    if (cart.length === 0) {
      navigator("/home");
    }
  }, [cart, navigator]);

  const handleAddNumber = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleMinusNumber = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleChecked = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="">
      <div className="mt-[2px] flex flex-col gap-[20px] w-full max-w-[600px] mx-auto items-center h-[82vh] overflow-scroll">
        <p className="text-[25px] text-[#704A24]">Products Basket</p>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex w-full rounded-[10px] border-[3px] border-[#704A24] p-[5px] items-center justify-between "
          >
            <div className="flex gap-[20px]">
              <img
                className="rounded-[10px] w-[100px] justify-start object-cover"
                src={item.image}
                alt="Rasm bor"
              />
              <div className="flex flex-col">
                <p className="text-[18px] text-[#704A24]">{item.name}</p>
                <p className="text-[17px] text-[#704A24]">${item.price}</p>
                <div className="flex gap-[5px]">
                  {Array.from({ length: item?.rating }).map((_, index) => (
                    <i
                      key={index}
                      className="fa-solid fa-star text-[#FFD700]"
                    ></i>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <div className="flex mt-[2px] flex-col items-center justify-center">
                <button onClick={() => handleAddNumber(item.id)}>
                  <i className="fa-solid fa-circle-chevron-up"></i>
                </button>
                <p className="text-[20px] text-[#704A24]">{item.count}</p>
                <button onClick={() => handleMinusNumber(item.id)}>
                  <i className="fa-solid fa-circle-chevron-down"></i>
                </button>
              </div>
              <input
                type="checkbox"
                className="hidden"
                id={`check-${item.id}`}
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />
              <label
                className="cursor-pointer text-[23px] mr-[5px]"
                htmlFor={`check-${item.id}`}
              >
                {item.checked ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square-check"></i>
                )}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full justify-center items-center flex">
        <Link
          to={"/card"}
          className="w-full mx-auto max-w-[350px] flex justify-center items-center"
        >
          <button className="bg-[#FBA651] mt-[10px] py-[14px] max-w-[350px] w-full rounded-[30px] font-[500] text-[18px]">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};
