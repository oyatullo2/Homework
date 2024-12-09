import {useNavigate} from 'react-router-dom'
import { useState } from "react";
export const Card = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cvv, setCvv] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');

   const handReset = () => {
        if(cardNumber.length === 19 && cardHolder.length === 5 && cvv.length === 3){
                setLoading(true);
                setCardNumber('')
                setCardHolder('')
                setCvv('')
                    const time = setTimeout(() => {
                        setLoading(false);
                        navigate('/home')
                    }, 3000);

                    return () => clearTimeout(time);
        }
        else{
            alert('Please fill all the fields !')
        }
   }

    return(
        <>
        <div className="w-full flex-col h-[92vh] flex items-center justify-center" style={{display : loading ? 'none' : 'flex'}}>
            <div className="border-2 border-[#704A24] w-[600px] h-[300px] rounded-xl bg-white shadow-[0px_0px_10px_3px_rgb(0,0,0,0.3)]">
                <div className="flex flex-col">
                    <div className="flex flex-col w-full max-w-[500px] mx-auto gap-[10px] mt-[40px]">
                        <p>Card number : {cardNumber.length ? cardNumber : '0123 4567 8901 2345'}</p>
                        <div className="flex w-full max-w-[500px] justify-between mx-auto">
                            <p className="w-full">Card Date : {cardHolder || '10/26'}</p>
                            <p className="w-full">CVV : {cvv || '123'}</p>
                        </div>
                    </div>
                    <div className="flex flex-col h-[20.2vh] w-full max-w-[500px] mx-auto gap-[10px] items-end justify-end">
                        <input type="tel" maxLength={19} onChange={(e) => setCardNumber(e.target.value)} className="w-full py-[7px] pl-[10px] rounded-md border-2 border-[#704A24]" placeholder="Card number"/>
                        <div className="flex w-full justify-between gap-[10px]">
                            <input type="tel" maxLength={5} onChange={(e) => setCardHolder(e.target.value)} className="w-full py-[7px] pl-[10px] rounded-md border-2 border-[#704A24]" placeholder="Expiry date"/>
                            <input maxLength={3} type="tel" onChange={(e) => setCvv(e.target.value)} className="w-full py-[7px] pl-[10px] rounded-md border-2 border-[#704A24]" placeholder="CVV"/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handReset} className="mt-[50px] bg-[#FBA651] text-white py-[8px] w-full max-w-[300px] rounded-[10px] font-[500] text-[20px] flex items-center justify-center gap-[10px]">Pay <i className="fa-brands fa-cc-visa"></i></button>
        </div>
        <div className="w-full h-[92vh] items-center justify-center flex" style={{display : loading ? 'flex' : 'none'}}>
            <p className="text-[40px] font-[600] text-green-500">Payment verification ...</p>
        </div>
        </>
    )
}