import { Link, useLocation } from "react-router-dom"
import { useState } from "react";

export const Product = () => {
    const location = useLocation();
    const state = location.state;
    const [count, setCount] = useState(1);
    const [like, setLike] = useState(false);
    const [image, setImage] = useState(false);

    const likeCodes = () => {
        setLike((prev) => !prev)
    } 

    const imageFunction = () => {
        setImage((prev) => !prev)
    }

    return(
        <>
        <div className="transition-all duration-500 ease-in-out w-full mt-[20px] gap-[20px] h-[9vh] flex items-start justify-center">
            <div className="w-full max-w-fit relative" >
                <Link to={'/home'}><button className="text-[#996531] absolute left-[25px] top-[15px] bg-white w-10 h-10 flex justify-center items-center rounded-full text-[20px]"><i className="fa-solid fa-chevron-left"></i></button></Link>
                <button  onClick={likeCodes} className="text-[#996531] absolute right-[25px] top-[15px] bg-white w-10 h-10 flex justify-center items-center rounded-full text-[20px]">{like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</button>
                <img onClick={imageFunction} className="cursor-pointer max-w-[400px] object-fill rounded-[30px] h-[300px]" src={state.image} alt="Rasm bor" />
            </div>
            <div className="flex flex-col mt-[20px]" >
                <div className="flex gap-[225px] mb-[7px]">
                    <p className="text-[25px] font-[500]">{state.name}</p>
                    <p className="text-[25px] font-[500]">${state.price}</p>
                </div>
                <div className="flex mb-[17px]">
                    {Array.from({ length: state?.rating }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star text-[#FBA651]"></i>
                    ))}
                </div>
                <div className="flex flex-col mb-[20px]">
                    <p className="w-full max-w-[510px] font-[400] mb-[20px]">Indulge in the delightful goodness of our freshly baked cookies with rich, melt-in-your-mouth chocolate chips. Each pack contains three perfectly-sized cookies.</p>
                    <p className="font-[500]">Allergens:</p>
                    <p className="font-[400] mb-[15px]">Cashews, eggs, milk.</p>
                    <img className="max-h-[28px] max-w-[320px] mb-[00px]" src="/src/assets/Allergenslist.svg" alt="Rasm bor" />
                </div>
                <div className="flex flex-col">
                    <p className="font-[500] text-[20px] mb-[5px]">Savor</p>
                    <div className="flex gap-[10px] mb-[30px]">
                        <button className="text-[#704A24] border-2 border-[#704A24] py-[5px] px-[20px] rounded-[20px]">Vanilla</button>
                        <button className="text-[#704A24] border-2 border-[#704A24] py-[5px] px-[20px] rounded-[20px]">Chocolate</button>
                        <button className="text-[#704A24] border-2 border-[#704A24] py-[5px] px-[20px] rounded-[20px]">Coconut</button>
                        <button className="text-[#704A24] border-2 border-[#704A24] py-[5px] px-[20px] rounded-[20px]">Coffee</button>
                        <button className="text-[#704A24] border-2 border-[#704A24] py-[5px] px-[20px] rounded-[20px]">Straweberry</button>
                    </div>
                </div>
                <div className="flex flex-col mb-[40px]">
                    <p className="font-[500] text-[20px] mb-[5px]">Add Extras</p>
                    <div className="flex gap-[10px] max-w-[510px] flex-wrap">
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra1"/>
                            <label htmlFor="extra1">Espresso</label>
                        </div>
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra2"/>
                            <label htmlFor="extra2">Dried Fruit</label>
                        </div>
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra3" />
                            <label htmlFor="extra3">Dried</label>
                        </div>
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra4" />
                            <label htmlFor="extra4">Sea Salt</label>
                        </div>
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra5" />
                            <label htmlFor="extra5">Butter Swirl</label>
                        </div>
                        <div className="cursor-pointer flex border-2 border-[#704A24] py-[3px] px-[15px] rounded-[20px] text-[#704A24]">
                            <input type="checkbox" id="extra6" />
                            <label htmlFor="extra6">Coconut Flakes</label>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-start items-start flex gap-[20px]">
                    <Link className="w-full max-w-[300px]" to={'/card'}><button className="bg-[#FBA651] py-[10px] max-w-[300px] w-full rounded-[20px] flex items-center justify-center gap-3 font-[500] text-[19px]">Add to cart {count}<i className="fa-brands fa-cc-visa"></i></button></Link>
                    <div className="flex flex-col items-center justify-center max-h-[10px] mt-[22px]">
                        <button className="bg-[#FBA651] rounded-xl px-[5px]" onClick={()=>setCount(count + 1)}><i className="fa-solid fa-chevron-up"></i></button>
                        {count}
                        <button className="bg-[#FBA651] rounded-xl px-[5px]" onClick={()=>setCount(count > 1 ? count - 1 : 1)}><i className="fa-solid fa-chevron-down"></i></button>
                    </div>
                </div>
            </div>
        <div  className="bg-[#cbcbcb] w-screen h-[92vh] absolute mt-[-20px] transition-all duration-500 ease-in-out" onClick={()=>setImage(false)} style={{display : image ? 'block' : 'none'}}>
        <div id="image" className="w-full absolute max-w-[900px] mt-[20px]  mx-[20%]" >
                <img src={state.image} alt="Rasm bor!" className="cursor-pointer rounded-[20px]" onClick={()=>setImage(false)}/>
        </div>
        </div>
        </div>
        </>
    )
}