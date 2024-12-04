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
import { Account } from "./pages/account/account";
import { Notification } from "./pages/notification/notification";

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
                <Route path="product/:productId" element={<Product/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="/notification" element={<Notification/>}/>
            </Route>
            </Route>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>
)
}
