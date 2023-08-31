const ScrollToNavbar = ()=>{
    return (
        <button className="scroll-to w-12 h-12 rounded-full fixed cursor-pointer border-none hidden bg-red bottom-10 left-10 md:block" onClick={()=>{
            window.scrollTo({top:0, behavior: "auto"})
        }}>
            <i className="fa-solid fa-magnifying-glass text-white text-xl"></i>
        </button>
    )
}

export default ScrollToNavbar