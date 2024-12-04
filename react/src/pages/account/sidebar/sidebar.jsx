export const AccountSideBar = () => {
    return(
        <>
        <div className="mt-[30px] w-full max-w-[250px] mx-auto max-h-[200px]">
            <div className="flex flex-col gap-[10px]">
                <p className="flex items-center gap-[10px]"><i className="fa-solid fa-leaf text-[#704A24]"></i> Dietary preferences</p>
                <p className="flex items-center gap-[10px]"><i className="fa-solid fa-ticket text-[#704A24]"></i> Coupons and Promotions</p>
                <p className="flex items-center gap-[10px]"><i className="fa-solid fa-info text-[#704A24]"></i> Help</p>
                <p className="flex items-center gap-[10px]"><i className="fa-solid fa-leaf text-[#704A24]"></i> Accessibility</p>
            </div>
        </div>
        </>
    )
}