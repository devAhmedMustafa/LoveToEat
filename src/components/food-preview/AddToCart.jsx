import { useState } from "react";

const AddToCart = ()=>{

    const [quantity, increaseQ] = useState(1);
    const [added, addToCart] = useState(false);

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between w-full">
                <h3>الكمية: {quantity}</h3>
                <button className="bg-[transparent] border-none cursor-pointer" onClick={()=>{increaseQ(quantity+1)}}>
                    <i className="fa-solid fa-plus text-xl"></i>
                </button>
            </div>
            <div className="w-full rounded-md overflow-hidden">
                {!added ?
                <button onClick={()=>{
                    addToCart(true);
                }} className="w-full bg-[transparent] border-none text-lg text-white bg-red p-2 cursor-pointer">اضف للسلة <i className="fa-solid fa-cart-plus"></i></button>:
                <button className="w-full  bg-[transparent] border-none text-lg text-white bg-green-700 p-2 cursor-pointer">اضيفت <i className="fa-solid fa-check"></i></button>}
            </div>
        </div>
    )
}

export default AddToCart;