import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Box = (item) => {
    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState({});
    const likeCodes = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id],  // Toggle like for the specific item by its ID
        }));
    }
    return(
        <>
        {item.item.map((datas) => (
            <div key={datas.id} className="flex flex-col w-full max-w-[350px] bg-white rounded-[30px]">
                <div className="flex relative flex-col">
                    <button onClick={() => likeCodes(datas.id)} className="absolute top-[10px] right-[10px] bg-white w-10 h-10 flex justify-center items-center rounded-full text-[#704A24] font-[600] text-[20px] transition-all duration-500 ease-in-out">{likes[datas.id] ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
                <Link key={datas.id} to={`/product/${datas.id}`}>
                    <img src="/src/assets/boxImg.svg" alt="Rasm bor" />
                </Link>
                    <Link to={'/card'}><button className="absolute bottom-[10px] right-[10px] bg-white px-[15px] py-[6px] rounded-[30px]">Add to Cart <i className="fa-brands fa-cc-visa"></i></button></Link>
                </div>
                <div className="flex flex-col max-w-[300px] w-full mx-auto">
                    <div className="flex w-full justify-between mb-1 mt-4">
                        <p>{datas.name}</p>
                        <p>${datas.price}</p>
                    </div>
                    <div className="flex gap-1 mb-4">
                    {Array.from({ length: datas.rating }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star text-[#FBA651]"></i>
                    ))}
                    </div>
                </div>
            </div>
        ))}

        <Outlet/>
        </>
    )
}