
const FoodContent = (props)=>{
    return (
        <div className="bg-white py-4 flex gap-5 flex-col rounded-sm w-full">
            <h1 className="border-solid border-red border-0 border-r-4 pr-4">{props.title}</h1>
            <div style={props.padding} className="flex flex-row flex-wrap justify-center items-center gap-5">
                {props.children}
            </div>
        </div>
    )
}

export default FoodContent