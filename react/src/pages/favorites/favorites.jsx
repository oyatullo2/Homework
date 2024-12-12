import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/main-cntext";

export const Favorites = () => {
  const { favorites = [], setFavorites } = useContext(MainContext);

  const handleUnFavorite = (id) => () => {
    setFavorites((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="w-full h-[82vh] flex justify-center items-center">
        <p className="text-[#704A24] font-[600] text-[20px]">
          Favorites is empty !
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="mt-[2px] flex  gap-[20px] w-full  mx-auto justify-center items-center h-[82vh] overflow-scroll">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-full max-w-[350px] bg-white rounded-[30px]"
          >
            <div className="flex relative flex-col">
              <button
                onClick={handleUnFavorite(product.id)}
                className="absolute top-[10px] right-[10px] bg-white w-10 h-10 flex justify-center items-center rounded-full text-[#704A24] font-[600] text-[20px] transition-all duration-500 ease-in-out"
              >
                <i className="fa-solid fa-heart"></i>
              </button>
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                state={product}
              >
                <img src="/src/assets/boxImg.svg" alt="Rasm bor" />
              </Link>
              {/* {!addedToCart[product.id] && ( */}
              <button className="transition-opacity duration-500 ease-in-out absolute bottom-[10px] right-[10px] bg-white px-[15px] py-[6px] rounded-[30px]">
                Add to cart <i className="fa-brands fa-cc-visa"></i>
              </button>
              {/* )} */}
            </div>
            <div className="flex flex-col max-w-[300px] w-full mx-auto">
              <div className="flex w-full justify-between mb-1 mt-4">
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: product.rating }).map((_, index) => (
                  <i
                    key={index}
                    className="fa-solid fa-star text-[#FBA651]"
                  ></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
