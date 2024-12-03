import { Link, useSearchParams } from "react-router-dom";
import { Box } from "../box/box";

export const HomeSection = () => {
    const [params] = useSearchParams();
    const categorys = params.get('q');

    const data = [
        {
          "id": 1,
          "name": "Macarons (12pcs)",
          "price": 15.0,
          "image": "https://cdn.pixabay.com/photo/2017/05/23/17/12/macarons-2338463_960_720.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 2,
          "name": "Chocolate Croissant",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/06/19/16/11/croissant-2414760_960_720.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 3,
          "name": "Almond Croissant",
          "price": 4.0,
          "image": "https://cdn.pixabay.com/photo/2017/06/19/16/11/croissant-2414757_960_720.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 4,
          "name": "Butter Croissant",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2017/06/19/16/11/croissant-2414759_960_720.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 5,
          "name": "Cinnamon Roll",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/11/29/11/58/cinnamon-roll-1867480_960_720.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 6,
          "name": "Plain Croissant",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2017/06/19/16/12/croissant-2414761_960_720.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 7,
          "name": "Peach Muffin",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2016/07/15/00/52/muffin-1516349_960_720.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 8,
          "name": "Carrot Cake",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2016/11/20/05/01/cake-1834870_960_720.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 9,
          "name": "Chocolate Cake",
          "price": 4.0,
          "image": "https://cdn.pixabay.com/photo/2015/09/18/19/03/chocolate-cake-940550_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 10,
          "name": "Strawberry Cake",
          "price": 4.5,
          "image": "https://cdn.pixabay.com/photo/2017/08/30/05/48/cake-2691195_960_720.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 11,
          "name": "Vanilla Cake",
          "price": 4.0,
          "image": "https://cdn.pixabay.com/photo/2016/05/02/19/32/cake-1438297_960_720.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 12,
          "name": "Red Velvet Cake",
          "price": 5.5,
          "image": "https://cdn.pixabay.com/photo/2020/11/13/04/43/red-velvet-cake-5630502_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 13,
          "name": "Lemon Cake",
          "price": 4.2,
          "image": "https://cdn.pixabay.com/photo/2017/01/26/17/27/cake-2015894_960_720.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 14,
          "name": "Carrot Cake",
          "price": 4.5,
          "image": "https://cdn.pixabay.com/photo/2018/07/21/14/29/cake-3556141_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 15,
          "name": "Apple Pie",
          "price": 4.0,
          "image": "https://cdn.pixabay.com/photo/2015/11/06/16/35/apple-pie-1029523_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 16,
          "name": "Lemon Pie",
          "price": 4.2,
          "image": "https://cdn.pixabay.com/photo/2020/05/29/10/24/pie-5241463_960_720.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 17,
          "name": "Cherry Pie",
          "price": 4.3,
          "image": "https://cdn.pixabay.com/photo/2016/10/28/08/54/pie-1770653_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 18,
          "name": "French Bread",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2017/05/07/13/53/french-bread-2292922_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 19,
          "name": "Baguette",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2017/05/21/19/51/baguette-2338397_960_720.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 20,
          "name": "Sourdough Bread",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2015/11/29/12/00/bread-1069344_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 21,
          "name": "Whole Wheat Bread",
          "price": 2.7,
          "image": "https://cdn.pixabay.com/photo/2016/05/18/12/47/bread-1402485_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 22,
          "name": "Ciabatta",
          "price": 3.2,
          "image": "https://cdn.pixabay.com/photo/2018/11/19/12/01/ciabatta-3827477_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 23,
          "name": "Multigrain Bread",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/05/07/10/06/bread-1376766_960_720.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 24,
          "name": "Garlic Bread",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2016/06/06/19/00/bread-1447234_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 25,
          "name": "Focaccia",
          "price": 3.3,
          "image": "https://cdn.pixabay.com/photo/2016/03/05/19/08/bread-1235504_960_720.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 26,
          "name": "Pita Bread",
          "price": 2.9,
          "image": "https://cdn.pixabay.com/photo/2017/06/14/13/36/bread-2403124_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 27,
          "name": "Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2015/11/04/19/38/cookie-1028151_960_720.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 28,
          "name": "Oatmeal Cookies",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/11/29/15/28/cookie-1867462_960_720.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 29,
          "name": "Peanut Butter Cookies",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/11/29/16/29/cookie-1867490_960_720.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 30,
          "name": "Gingerbread Cookies",
          "price": 3.2,
          "image": "https://cdn.pixabay.com/photo/2017/01/20/16/13/gingerbread-1995167_960_720.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 31,
          "name": "Snickerdoodle Cookies",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2016/06/22/22/46/cookie-1477019_960_720.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 32,
          "name": "Sugar Cookies",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2016/09/05/00/35/cookies-1648124_960_720.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 33,
          "name": "Molasses Cookies",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/08/18/19/10/cookie-1606647_960_720.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 34,
          "name": "Chocolate Shortbread Cookies",
          "price": 3.8,
          "image": "https://cdn.pixabay.com/photo/2015/12/21/01/21/cookies-1093801_960_720.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 35,
          "name": "Double Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2015/09/21/21/35/cookies-946595_960_720.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 36,
          "name": "Croissant",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2016/11/29/12/47/croissant-1867472_960_720.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 37,
          "name": "Pain au Chocolat",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2016/09/01/11/14/pain-1637130_960_720.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 38,
          "name": "Almond Croissant",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2016/12/15/16/29/croissant-1916025_960_720.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 39,
          "name": "Chocolate Croissant",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/08/10/06/57/croissant-1580571_960_720.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 40,
          "name": "Butter Croissant",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2017/06/19/16/12/croissant-2414762_960_720.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 41,
          "name": "Cinnamon Croissant",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/03/28/06/54/cinnamon-2174762_960_720.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 42,
          "name": "Plain Croissant",
          "price": 2.2,
          "image": "https://cdn.pixabay.com/photo/2016/09/03/03/54/croissant-1637126_960_720.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 43,
          "name": "French Croissant",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/09/02/09/30/croissant-1637116_960_720.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 44,
          "name": "Mini Croissant",
          "price": 1.8,
          "image": "https://cdn.pixabay.com/photo/2016/12/07/10/36/croissant-1891041_960_720.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 45,
          "name": "Cupcake",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2017/04/13/10/01/cupcake-2221229_960_720.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 46,
          "name": "Chocolate Cupcake",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/02/14/08/38/cupcake-2065401_960_720.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 47,
          "name": "Vanilla Cupcake",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/15/16/47/cupcake-2066559_960_720.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 48,
          "name": "Red Velvet Cupcake",
          "price": 3.8,
          "image": "https://cdn.pixabay.com/photo/2017/01/10/16/29/cupcake-1969269_960_720.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 49,
          "name": "Strawberry Cupcake",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/04/01/19/02/cupcake-2191990_960_720.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 50,
          "name": "Lemon Cupcake",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/03/01/11/51/cupcake-2100249_960_720.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 51,
          "name": "Chocolate Mint Cupcake",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/04/13/10/01/cupcake-2221230_960_720.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 52,
          "name": "Cookies and Cream Cupcake",
          "price": 4.0,
          "image": "https://cdn.pixabay.com/photo/2017/01/23/17/21/cupcake-1970481_960_720.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 53,
          "name": "Carrot Cupcake",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2016/06/22/12/16/cupcake-1477074_960_720.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 54,
          "name": "Apple Pie",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/06/13/11/37/apple-pie-2410141_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 55,
          "name": "Cherry Pie",
          "price": 3.8,
          "image": "https://cdn.pixabay.com/photo/2017/07/19/06/32/cherry-pie-2437382_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 56,
          "name": "Peach Pie",
          "price": 3.2,
          "image": "https://cdn.pixabay.com/photo/2017/07/18/12/42/peach-pie-2437372_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 57,
          "name": "Blueberry Pie",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/07/20/17/09/blueberry-pie-2437380_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 58,
          "name": "Pumpkin Pie",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/07/19/08/32/pumpkin-pie-2437370_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 59,
          "name": "Lemon Pie",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/07/19/06/25/lemon-pie-2437381_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 60,
          "name": "Pecan Pie",
          "price": 3.8,
          "image": "https://cdn.pixabay.com/photo/2017/07/21/18/19/pecan-pie-2437378_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 61,
          "name": "Chocolate Pie",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/07/20/17/08/chocolate-pie-2437383_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 62,
          "name": "Banoffee Pie",
          "price": 3.5,
          "image": "https://cdn.pixabay.com/photo/2017/07/19/06/30/banoffee-pie-2437385_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 63,
          "name": "Glazed Donut",
          "price": 1.8,
          "image": "https://cdn.pixabay.com/photo/2015/08/27/16/05/donut-912792_960_720.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 64,
          "name": "Chocolate Donut",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2015/08/24/15/42/donut-912795_960_720.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 65,
          "name": "Jelly Donut",
          "price": 2.2,
          "image": "https://cdn.pixabay.com/photo/2015/08/25/20/42/donut-912794_960_720.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 66,
          "name": "Apple Cider Donut",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2015/08/27/15/43/donut-912791_960_720.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 67,
          "name": "Cinnamon Sugar Donut",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2015/08/28/01/15/donut-912788_960_720.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 68,
          "name": "Maple Bacon Donut",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2015/08/27/15/36/donut-912789_960_720.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 69,
          "name": "Pumpkin Donut",
          "price": 2.2,
          "image": "https://cdn.pixabay.com/photo/2015/08/27/15/24/donut-912790_960_720.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 70,
          "name": "Chocolate Glazed Donut",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2015/08/27/15/49/donut-912786_960_720.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 71,
          "name": "Strawberry Donut",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2015/08/25/20/42/donut-912787_960_720.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 72,
          "name": "Latte",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/34/latte-2065289_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 73,
          "name": "Espresso",
          "price": 1.8,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/43/latte-2065288_960_720.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 74,
          "name": "Americano",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/46/latte-2065290_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 75,
          "name": "Cappuccino",
          "price": 2.8,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/47/latte-2065287_960_720.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 76,
          "name": "Macchiato",
          "price": 2.5,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/45/latte-2065286_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 77,
          "name": "Flat White",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/49/latte-2065292_960_720.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 78,
          "name": "Mocha",
          "price": 3.2,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/47/latte-2065291_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 79,
          "name": "Iced Coffee",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/38/latte-2065285_960_720.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 80,
          "name": "Black Coffee",
          "price": 2.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/40/latte-2065284_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 81,
          "name": "Cold Brew",
          "price": 3.2,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/39/latte-2065283_960_720.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 82,
          "name": "Iced Latte",
          "price": 3.0,
          "image": "https://cdn.pixabay.com/photo/2017/02/13/15/34/latte-2065289_960_720.jpg",
          "category": "Coffee",
          "rating": 5
        }
    ]
    
      const filterData = data.filter((item) => {
        if(categorys === 'popular') return item.category === 'Popular' 
        if(categorys === 'favorites') return item.category === 'favorites'
      })

    return(
        <>
        <div className="w-full flex flex-col">
        <div className="flex w-full justify-evenly max-w-[1092px] mt-[30px] mx-auto mb-[40px]">
            <Link to={'/home?q=popular'}>
            <div className="flex items-center hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] cursor-pointer">
                <i className="fa-solid fa-fire"></i>
                <p>Most popular</p>
            </div>
            </Link>
            <Link to={'/home?q=favorites'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-regular fa-heart"></i>
                <p>Favorites</p>
            </div>
            </Link>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>Bread</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cookie"></i>
                <p>Cookie</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>Croissant</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cake-candles"></i>
                <p>Cupcake</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-pizza-slice"></i>
                <p>Custard pie</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-certificate"></i>
                <p>Donut</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-coffee"></i>
                <p>Coffe</p>
            </div>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cake-candles"></i>
                <p>Cake</p>
            </div>
        </div>
        <div className="w-full gap-[20px] flex flex-wrap justify-center max-w-[1100px] mx-auto overflow-y-scroll max-h-[78.2vh]">
           {filterData.map((item) => (
               <Box key={item.id} item={filterData} />
           ))}
        </div>
        </div>
        </>
    )
}