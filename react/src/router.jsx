import { Route, Routes } from "react-router-dom";
import { MainRouter } from "./mainRouter";
import { Welcome } from "./pages/welocme/welcome";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Card } from "./pages/card/card";
import { Layout } from "./navbar/layout/loyouts";
import { Product } from "./pages/product/product";
import { Error } from "./pages/error/error";

export const Router = () => {
return(
    <>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<MainRouter/>}>
            <Route element={<Layout/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="card" element={<Card/>}/>
            </Route>
                <Route path="product/:productId" element={<Product/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>
)
}
