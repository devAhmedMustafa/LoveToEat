import { useState } from "react";
import NavBar from "../containers/NavBar";
import FoodPreview from "../containers/FoodPreview";


const FoodPage = ()=>{

    return (
        <div className="">
            <NavBar/>
            <div className="py-5">   
                <FoodPreview/>    
            </div>
        </div>
    )
}

export default FoodPage;