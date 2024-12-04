export const AccountSection = () => {
    return(
        <>
        <div className="w-full justify-center flex flex-col mt-[30px]">
            <div className="flex">
                <img src="/src/assets/Picture.svg" alt="Rasm bor" />
                <div className="flex flex-col">
                    <p>Olivia Anderson</p>
                    <p>oliviaanderson@example.com</p>
                    <p>924.0446</p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <i className="fa-regular fa-heart"></i>
                    <p>Favourites</p>
                </div>
                <div className="flex flex-col">
                    <i className="fa-solid fa-wallet"></i>
                    <p>Wallet</p>
                </div>
                <div className="flex flex-col">
                    <i class="fa-brands fa-first-order"></i>
                    <p>Orders</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <p>Saved delivery addresses</p>
                    <div className="flex">
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}