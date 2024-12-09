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
          "category": "popular",
          "rating": 4
        },
        {
          "id": 2,
          "name": "Chocolate croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 5
        },
        {
          "id": 3,
          "name": "Almond croissant",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 4
        },
        {
          "id": 4,
          "name": "Butter croissant",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 5
        },
        {
          "id": 5,
          "name": "Cinnamon Roll",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7480_960_720.jpg",
          "category": "popular",
          "rating": 5
        },
        {
          "id": 6,
          "name": "Plain croissant",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 4
        },
        {
          "id": 7,
          "name": "Peach Muffin",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 4
        },
        {
          "id": 8,
          "name": "Carrot cake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "popular",
          "rating": 5
        },
        {
          "id": 9,
          "name": "Chocolate cake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 4
        },
        {
          "id": 10,
          "name": "Strawberry cake",
          "price": 4.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 4
        },
        {
          "id": 11,
          "name": "Vanilla cake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 4
        },
        {
          "id": 12,
          "name": "Red Velvet cake",
          "price": 5.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpge-5630502_960_720.jpg",
          "category": "favorites",
          "rating": 5
        },
        {
          "id": 13,
          "name": "Lemon cake",
          "price": 4.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 4
        },
        {
          "id": 14,
          "name": "Carrot cake",
          "price": 4.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 5
        },
        {
          "id": 15,
          "name": "Apple pie",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg9523_960_720.jpg",
          "category": "favorites",
          "rating": 5
        },
        {
          "id": 16,
          "name": "Lemon pie",
          "price": 4.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 4
        },
        {
          "id": 17,
          "name": "Cherry pie",
          "price": 4.3,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "favorites",
          "rating": 5
        },
        {
          "id": 18,
          "name": "French Bread",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg2922_960_720.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 19,
          "name": "Baguette",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 4
        },
        {
          "id": 20,
          "name": "Sourdough Bread",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 21,
          "name": "Whole Wheat Bread",
          "price": 2.7,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 22,
          "name": "Ciabatta",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 23,
          "name": "Multigrain bread",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 4
        },
        {
          "id": 24,
          "name": "Garlic Bread",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 25,
          "name": "Focaccia",
          "price": 3.3,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 4
        },
        {
          "id": 26,
          "name": "Pita Bread",
          "price": 2.9,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "bread",
          "rating": 5
        },
        {
          "id": 27,
          "name": "Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 5
        },
        {
          "id": 28,
          "name": "Oatmeal Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 4
        },
        {
          "id": 29,
          "name": "Peanut Butter Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 4
        },
        {
          "id": 30,
          "name": "Gingerbread Cookies",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 5
        },
        {
          "id": 31,
          "name": "Snickerdoodle Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 5
        },
        {
          "id": 32,
          "name": "Sugar Cookies",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 4
        },
        {
          "id": 33,
          "name": "Molasses Cookies",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 5
        },
        {
          "id": 34,
          "name": "Chocolate Shortbread Cookies",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 4
        },
        {
          "id": 35,
          "name": "Double Chocolate Chip Cookies",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cookie",
          "rating": 5
        },
        {
          "id": 36,
          "name": "croissant",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 4
        },
        {
          "id": 37,
          "name": "Pain au Chocolat",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 5
        },
        {
          "id": 38,
          "name": "Almond croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 4
        },
        {
          "id": 39,
          "name": "Chocolate croissant",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 5
        },
        {
          "id": 40,
          "name": "Butter croissant",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 4
        },
        {
          "id": 41,
          "name": "Cinnamon croissant",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 5
        },
        {
          "id": 42,
          "name": "Plain croissant",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 4
        },
        {
          "id": 43,
          "name": "French croissant",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 4
        },
        {
          "id": 44,
          "name": "Mini croissant",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "croissant",
          "rating": 5
        },
        {
          "id": 45,
          "name": "cupcake",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 5
        },
        {
          "id": 46,
          "name": "Chocolate cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 4
        },
        {
          "id": 47,
          "name": "Vanilla cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 5
        },
        {
          "id": 48,
          "name": "Red Velvet cupcake",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 4
        },
        {
          "id": 49,
          "name": "Strawberry cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 5
        },
        {
          "id": 50,
          "name": "Lemon cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 4
        },
        {
          "id": 51,
          "name": "Chocolate Mint cupcake",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 5
        },
        {
          "id": 52,
          "name": "Cookies and Cream cupcake",
          "price": 4.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 5
        },
        {
          "id": 53,
          "name": "Carrot cupcake",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "cupcake",
          "rating": 4
        },
        {
          "id": 54,
          "name": "Apple pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg0141_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 55,
          "name": "Cherry pie",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7382_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 56,
          "name": "Peach pie",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7372_960_720.jpg",
          "category": "pie",
          "rating": 4
        },
        {
          "id": 57,
          "name": "Blueberry pie",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7380_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 58,
          "name": "Pumpkin pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7370_960_720.jpg",
          "category": "pie",
          "rating": 4
        },
        {
          "id": 59,
          "name": "Lemon pie",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7381_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 60,
          "name": "Pecan pie",
          "price": 3.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7378_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 61,
          "name": "Chocolate pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
          "category": "pie",
          "rating": 4
        },
        {
          "id": 62,
          "name": "Banoffee pie",
          "price": 3.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7385_960_720.jpg",
          "category": "pie",
          "rating": 5
        },
        {
          "id": 63,
          "name": "Glazed donut",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 5
        },
        {
          "id": 64,
          "name": "Chocolate donut",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 4
        },
        {
          "id": 65,
          "name": "Jelly donut",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 5
        },
        {
          "id": 66,
          "name": "Apple Cider donut",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 4
        },
        {
          "id": 67,
          "name": "Cinnamon Sugar donut",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 5
        },
        {
          "id": 68,
          "name": "Maple Bacon donut",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 4
        },
        {
          "id": 69,
          "name": "Pumpkin donut",
          "price": 2.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 5
        },
        {
          "id": 70,
          "name": "Chocolate Glazed donut",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 4
        },
        {
          "id": 71,
          "name": "Strawberry donut",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "donut",
          "rating": 5
        },
        {
          "id": 72,
          "name": "Latte",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 73,
          "name": "Espresso",
          "price": 1.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 5
        },
        {
          "id": 74,
          "name": "Americano",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 75,
          "name": "Cappuccino",
          "price": 2.8,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 5
        },
        {
          "id": 76,
          "name": "Macchiato",
          "price": 2.5,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 77,
          "name": "Flat White",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 5
        },
        {
          "id": 78,
          "name": "Mocha",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 79,
          "name": "Iced coffee",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 5
        },
        {
          "id": 80,
          "name": "Black coffee",
          "price": 2.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 81,
          "name": "Cold Brew",
          "price": 3.2,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 4
        },
        {
          "id": 82,
          "name": "Iced Latte",
          "price": 3.0,
          "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg",
          "category": "coffee",
          "rating": 5
        },
          {
            "id": 83,
            "name": "Vanilla cake",
            "price": 4.0,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 4
          },
          {
            "id": 84,
            "name": "Strawberry cake",
            "price": 4.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 5
          },
          {
            "id": 85,
            "name": "Chocolate cake",
            "price": 5.0,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 4
          },
          {
            "id": 86,
            "name": "Carrot cake",
            "price": 4.2,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 5
          },
          {
            "id": 87,
            "name": "Red Velvet cake",
            "price": 5.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 4
          },
          {
            "id": 88,
            "name": "Lemon cake",
            "price": 3.8,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 4
          },
          {
            "id": 89,
            "name": "Pineapple cake",
            "price": 4.2,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 5
          },
          {
            "id": 90,
            "name": "coffee cake",
            "price": 4.5,
            "image": "https://i.pinimg.com/originals/40/78/ee/4078ee63a3887d6b06f064368f2baceb.jpg7383_960_720.jpg",
            "category": "cake",
            "rating": 4
          }
    ]
    
      const filterData = categorys ? data.filter((item) => item.category === categorys) : (data);

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
                <p>favorites</p>
            </div>
            </Link>
            <Link to={'/home?q=bread'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>bread</p>
            </div>
            </Link>
            <Link to={'/home?q=cookie'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cookie"></i>
                <p>cookie</p>
            </div>
            </Link>
            <Link to={'/home?q=croissant'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-bread-slice"></i>
                <p>croissant</p>
            </div>
            </Link>
            <Link to={'/home?q=cupcake'}>
            <div className="cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 border-transparent hover:text-[#996531] flex items-center text-[#1C140C]">
                <i className="fa-solid fa-cake-candles"></i>
                <p>cupcake</p>
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
                <p>donut</p>
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
                <p>cake</p>
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