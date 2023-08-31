import FoodContent from "../containers/FoodContent"
import Navbar from "../containers/Navbar"
import FoodCategory from "../components/food-content/FoodCategory"
import FoodOffer from "../components/food-content/FoodOffer"
import ScrollToNavbar from "../components/ScrollToNavbar"

const Home = ()=>{
    return (
        <>
            <Navbar/>
            <div className="flex flex-col gap-1 justify-center items-center">
            
                <FoodContent padding={{padding: 10}} title="الأصناف">
                    <FoodCategory url="https://www.nicepng.com/png/full/1012-10121380_pizza-png-free-commercial-use-images-pizzeria-stadium.png" title="بيتزا"/>
                    <FoodCategory url="https://www.freepnglogos.com/uploads/pasta-png/pasta-seasonings-product-poddar-foods-13.png" title="مكرونة"/>
                    <FoodCategory url="https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-juicy-burgers-with-a-transparent-background-png-image_6603069.png" title="برجر"/>
                    <FoodCategory url="https://upload.wikimedia.org/wikipedia/commons/4/48/Seafood_Platter.png" title="أكل بحري"/>
                </FoodContent>

                <FoodContent padding={{padding: 10}} title="العروض">
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    <FoodOffer url="https://www.pngplay.com/wp-content/uploads/2/Burger-Download-Free-PNG.png" title="تريبل بيف برجر"/>
                    
                </FoodContent>

                <ScrollToNavbar/>

            </div>
        </>
    )
}

export default Home