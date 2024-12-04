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
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 2,
          "name": "Chocolate Croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 3,
          "name": "Almond Croissant",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 4,
          "name": "Butter Croissant",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 5,
          "name": "Cinnamon Roll",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7480_960_720.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 6,
          "name": "Plain Croissant",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 7,
          "name": "Peach Muffin",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 4
        },
        {
          "id": 8,
          "name": "Carrot Cake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Popular",
          "rating": 5
        },
        {
          "id": 9,
          "name": "Chocolate Cake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 10,
          "name": "Strawberry Cake",
          "price": 4.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 11,
          "name": "Vanilla Cake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 12,
          "name": "Red Velvet Cake",
          "price": 5.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpge-5630502_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 13,
          "name": "Lemon Cake",
          "price": 4.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 14,
          "name": "Carrot Cake",
          "price": 4.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 15,
          "name": "Apple Pie",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg9523_960_720.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 16,
          "name": "Lemon Pie",
          "price": 4.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 4
        },
        {
          "id": 17,
          "name": "Cherry Pie",
          "price": 4.3,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Favorites",
          "rating": 5
        },
        {
          "id": 18,
          "name": "French Bread",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg2922_960_720.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 19,
          "name": "Baguette",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 20,
          "name": "Sourdough Bread",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 21,
          "name": "Whole Wheat Bread",
          "price": 2.7,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 22,
          "name": "Ciabatta",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 23,
          "name": "Multigrain Bread",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 24,
          "name": "Garlic Bread",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 25,
          "name": "Focaccia",
          "price": 3.3,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 4
        },
        {
          "id": 26,
          "name": "Pita Bread",
          "price": 2.9,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Bread",
          "rating": 5
        },
        {
          "id": 27,
          "name": "Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 28,
          "name": "Oatmeal Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 29,
          "name": "Peanut Butter Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 30,
          "name": "Gingerbread Cookies",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 31,
          "name": "Snickerdoodle Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 32,
          "name": "Sugar Cookies",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 33,
          "name": "Molasses Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 34,
          "name": "Chocolate Shortbread Cookies",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 4
        },
        {
          "id": 35,
          "name": "Double Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cookie",
          "rating": 5
        },
        {
          "id": 36,
          "name": "Croissant",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 37,
          "name": "Pain au Chocolat",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 38,
          "name": "Almond Croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 39,
          "name": "Chocolate Croissant",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 40,
          "name": "Butter Croissant",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 41,
          "name": "Cinnamon Croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 42,
          "name": "Plain Croissant",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 43,
          "name": "French Croissant",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 4
        },
        {
          "id": 44,
          "name": "Mini Croissant",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Croissant",
          "rating": 5
        },
        {
          "id": 45,
          "name": "Cupcake",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 46,
          "name": "Chocolate Cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 47,
          "name": "Vanilla Cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 48,
          "name": "Red Velvet Cupcake",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 49,
          "name": "Strawberry Cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 50,
          "name": "Lemon Cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 51,
          "name": "Chocolate Mint Cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 52,
          "name": "Cookies and Cream Cupcake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 5
        },
        {
          "id": 53,
          "name": "Carrot Cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Cupcake",
          "rating": 4
        },
        {
          "id": 54,
          "name": "Apple Pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg0141_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 55,
          "name": "Cherry Pie",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7382_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 56,
          "name": "Peach Pie",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7372_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 57,
          "name": "Blueberry Pie",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7380_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 58,
          "name": "Pumpkin Pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7370_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 59,
          "name": "Lemon Pie",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7381_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 60,
          "name": "Pecan Pie",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7378_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 61,
          "name": "Chocolate Pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
          "category": "Pie",
          "rating": 4
        },
        {
          "id": 62,
          "name": "Banoffee Pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7385_960_720.jpg",
          "category": "Pie",
          "rating": 5
        },
        {
          "id": 63,
          "name": "Glazed Donut",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 64,
          "name": "Chocolate Donut",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 65,
          "name": "Jelly Donut",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 66,
          "name": "Apple Cider Donut",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 67,
          "name": "Cinnamon Sugar Donut",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 68,
          "name": "Maple Bacon Donut",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 69,
          "name": "Pumpkin Donut",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 70,
          "name": "Chocolate Glazed Donut",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 4
        },
        {
          "id": 71,
          "name": "Strawberry Donut",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Donut",
          "rating": 5
        },
        {
          "id": 72,
          "name": "Latte",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 73,
          "name": "Espresso",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 74,
          "name": "Americano",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 75,
          "name": "Cappuccino",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 76,
          "name": "Macchiato",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 77,
          "name": "Flat White",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 78,
          "name": "Mocha",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 79,
          "name": "Iced Coffee",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 5
        },
        {
          "id": 80,
          "name": "Black Coffee",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 81,
          "name": "Cold Brew",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 4
        },
        {
          "id": 82,
          "name": "Iced Latte",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "Coffee",
          "rating": 5
        },
          {
            "id": 83,
            "name": "Vanilla Cake",
            "price": 4.0,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 4
          },
          {
            "id": 84,
            "name": "Strawberry Cake",
            "price": 4.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 5
          },
          {
            "id": 85,
            "name": "Chocolate Cake",
            "price": 5.0,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 4
          },
          {
            "id": 86,
            "name": "Carrot Cake",
            "price": 4.2,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 5
          },
          {
            "id": 87,
            "name": "Red Velvet Cake",
            "price": 5.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 4
          },
          {
            "id": 88,
            "name": "Lemon Cake",
            "price": 3.8,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 4
          },
          {
            "id": 89,
            "name": "Pineapple Cake",
            "price": 4.2,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 5
          },
          {
            "id": 90,
            "name": "Coffee Cake",
            "price": 4.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "Cake",
            "rating": 4
          }
    ]
    
      const filterData = data.filter((item) => {
        if(categorys === 'popular') return item.category === 'Popular' 
        if(categorys === 'favorites') return item.category === 'Favorites'
        if(categorys === 'bread') return item.category === 'Bread'
        if(categorys === 'cookie') return item.category === 'Cookie'
        if(categorys === 'cupcake') return item.category === 'Cupcake'
        if(categorys === 'pie') return item.category === 'Pie'
        if(categorys === 'croissant') return item.category === 'Croissant'
        if(categorys === 'donut') return item.category === 'Donut'
        if(categorys === 'coffee') return item.category === 'Coffee'
        if(categorys === 'cake') return item.category === 'Cake'

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
            <Link to={'/home?q=bread'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>Bread</p>
            </div>
            </Link>
            <Link to={'/home?q=cookie'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cookie"></i>
                <p>Cookie</p>
            </div>
            </Link>
            <Link to={'/home?q=croissant'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>Croissant</p>
            </div>
            </Link>
            <Link to={'/home?q=cupcake'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cake-candles"></i>
                <p>Cupcake</p>
            </div>
            </Link>
            <Link to={'/home?q=pie'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-pizza-slice"></i>
                <p>Custard pie</p>
            </div>
            </Link>
            <Link to={'/home?q=donut'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-certificate"></i>
                <p>Donut</p>
            </div>
            </Link>
            <Link to={'/home?q=coffee'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-coffee"></i>
                <p>Coffe</p>
            </div>
            </Link>
            <Link to={'/home?q=cake'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cake-candles"></i>
                <p>Cake</p>
            </div>
            </Link>
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