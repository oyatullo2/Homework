import { Link } from "react-router-dom"

export const Error = () => {
    const location = document.referrer;
    return(
        <>
        <div className="w-full h-[100vh] items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center h-[100vh] max-w-[500px] mx-auto max-h-[500px] mt-[100px] rounded-[10px] shadow-[0px_0px_10px_5px_red]">
                <p className="text-[40px] font-roboto font-[500] text-red-500">Error 404</p>
                <p className="text-[30px] font-roboto font-[500] text-red-500">Page not found</p>
                <p className="text-[20px] font-roboto font-[500] text-red-500">The page you are looking for does not exist</p>
                <Link to={location+'/home'}><p className="text-[20px] font-roboto font-[500] text-green-500">Go back to the previous page</p></Link>
            </div>
        </div>
        </>
    )
}