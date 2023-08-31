import FoodOptions from "../components/food-preview/FoodOptions";
import Rating from "../components/food-preview/Rating";
import './food-preview.css';
import AddToCart from "../components/food-preview/AddToCart";
import RateFood from "../components/food-preview/RateFood";
import Comments from "../components/food-preview/Comments";

const FoodPreview = ()=>{
    return (
        <div className="flex justify-center lg:flex-row lg:justify-between w-full flex-wrap preview-container lg:items-center bg-white p-10">
            <h1 className="text-center w-full lg:text-right mb-8">بيتزا تشيكن سبايسي</h1>
            <div className="relative max-w-[250px] overflow-hidden h-[250px] flex items-center justify-center preview lg:max-w-[520px] lg:h-fit m-2">
                <img className="foodImg transition-all w-[70%] z-1" src="https://png.pngtree.com/png-clipart/20230411/original/pngtree-modern-kitchen-food-box-italian-pizza-png-image_9047468.png" alt="" />

                <img className="w-16 lg:w-28 absolute z-10 bottom-5 -left-30 can transition-all duration-[.8s] -rotate-180" src="https://pngimg.com/d/pepsi_PNG8.png" alt="" />

                <img className="w-20 lg:w-36 absolute z-10 bottom-7 -right-30 friesBox transition-all duration-[.8s] rotate-180" src="https://static.vecteezy.com/system/resources/previews/013/442/145/original/crispy-and-delicious-french-fries-free-png.png" alt="" />

            </div>
            <div className="flex lg:gap-8 flex-col lg:w-[50%] gap-6 w-full">
                <FoodOptions/>
                <Rating rating='5'/>
                <AddToCart/>
                <RateFood/>
            </div>

            <Comments/>
            
        </div>
    )
}

export default FoodPreview