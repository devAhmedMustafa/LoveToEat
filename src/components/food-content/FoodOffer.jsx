import "./foodOffer.css"

const FoodOffer = (props)=>{
    return (
        <div className="relative w-[100%] h-[130px] flex items-center justify-between offer_box rounded-lg p-5 flex-wrap text-white md:w-[30%]">

            <h2 className="">{props.title}
                <br/>
                <span className="text-xl">ب 40ج <span className="text-sm text-[#e0e0e0] line-through">100ج</span></span>
            </h2>
            <img loading="lazy" className="max-w-[40%] top-[50%] left-0" src={props.url}/>
        </div>
    )
}

export default FoodOffer;