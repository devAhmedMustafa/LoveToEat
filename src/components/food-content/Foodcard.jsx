import { Link } from "react-router-dom"
import "./Foodcard.css"

const FoodCard = ()=>{
    return (
        <Link to='/pizza/chiken_spicy' className="card w-full flex items-center relative overflow-hidden justify-between bg-gray rounded-lg shadow-lg transition-all md:max-w-[45%]">
            <div className="w-[30%] h-[110px] ">
                <img className="max-w-full object-cover" src="https://sallysbakingaddiction.com/wp-content/uploads/2014/03/Homemade-BBQ-Chicken-Pizza.jpg" alt="" />
            </div>
            <div>
                <h3>بيتزا تشيكن سبايسي</h3>
                <p className="text-[#646464] underline">بيتزا</p>
            </div>
            <div className="p-3">
                <p><span className="text-green-700 font-extrabold">$15.98</span></p>
                <p>
                    <span className="font-semibold">4.7</span>
                    <i class="fa-solid fa-star text-amber-400"></i>
                </p>
            </div>
            <button className="absolute bg-black bottom-2 right-2 border-none p-1 h-7 w-7 rounded-full flex justify-center items-center hover:bg-red transition-all duration-[0.3s]">
                <i class="fa-solid fa-heart text-white text-lg"></i>
            </button>
        </Link>
    )
}

export default FoodCard