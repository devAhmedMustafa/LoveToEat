import Foodcard from "../components/food-content/Foodcard";
import FoodContent from "../containers/FoodContent";
import Navbar from "../containers/Navbar";
import FoodCard from "../components/food-content/Foodcard";

const Foodlist = ()=>{
    return (
        <>
            <Navbar/>
            <FoodContent padding={{padding:8}} title="بيتزا">
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
                <FoodCard/>
            </FoodContent>
        </>
    )
}

export default Foodlist;