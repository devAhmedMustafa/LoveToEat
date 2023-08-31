import "./rate-food.css";
import { useEffect, useState } from "react";

const RateFood = ()=>{

    const [stars, setStars] = useState(0);

    useEffect(()=>{
        console.log(stars);
    }, [stars])

    return (
        <div className="rating w-full flex justify-center lg:w-fit">
            <input type="radio" id="star-1" name="star-radio" value="star-1"/>
            <label htmlFor="star-1" onClick={()=> setStars(5)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value="star-1"/>
            <label htmlFor="star-2" onClick={()=> setStars(4)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value="star-1"/>
            <label htmlFor="star-3" onClick={()=> setStars(3)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-4" name="star-radio" value="star-1"/>
            <label htmlFor="star-4" onClick={()=> setStars(2)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
            <input type="radio" id="star-5" name="star-radio" value="star-1"/>
            <label htmlFor="star-5" onClick={()=> setStars(1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
            </label>
        </div>
    )
}

export default RateFood