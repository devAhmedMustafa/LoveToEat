const Rating = (props)=>{
    const rating = props.rating;
    let rating_color;
    let rating_border = 'none';
    if ( rating < 2 ){
        rating_color = '#dc2626';
    }
    else if ( rating < 3 ){
        rating_color = '#fb923c'
    }
    else if ( rating < 5 ){
        rating_color = '#22c55e';
    }
    else if ( rating == 5 ){
        rating_color = '#fbbf24';
        rating_border = '2px solid #fbbf24'
    }
    return (
        <div className="w-full flex items-center justify-between">
            <h3 className="">تقييم</h3>
            
            <section style={{color: rating_color}} className="flex gap-2 items-center">
                <i class="fa-solid fa-star text-[#fbbf24]"></i>
                <h2 style={{border: rating_border}} className="w-9 h-9 justify-center items-center rounded-full flex">{rating}
                </h2>
                {rating == 5 && <h4>ينصح به</h4>}
            </section>

            
        </div>
    )
}

export default Rating;