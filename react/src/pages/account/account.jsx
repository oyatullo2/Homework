import { AccountSection } from "./section/section"
import { AccountSideBar } from "./sidebar/sidebar"
export const Account = () => {
    return(
        <>
        <div className="flex w-full h-[92vh]">
            <div className="flex w-full max-w-[330px] bg-[#FAFAFA]">
                <AccountSideBar/>
            </div>
            <div className="w-full bg-[#FFF6EE]">
                <AccountSection/>
            </div>
        </div>
        </>
    )
}