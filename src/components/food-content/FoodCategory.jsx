import "./foodCategory.css"
import { Link } from "react-router-dom"

const FoodCategory = (props)=>{
    return (
        <Link to='/pizza'>
            <div className="w-[130px] h-[130px] flex flex-col items-center category-box">
                <div className="w-full h-[80%] flex items-center justify-center bg-gray"><img loading="lazy" className="max-w-[80%] p-2 rounded-md object-contain" src={props.url}/></div>
                <h4 className="text-[#646464]">{props.title}</h4>
            </div>
        </Link>
    )
}

export default FoodCategory