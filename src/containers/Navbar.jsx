import { useEffect, useState } from "react";
import Navlist from "../components/navbar/Navlist";
import SearchBar from "../components/navbar/SearchBar";
import BackGround from "../components/navbar/background";
import Title from "../components/navbar/title";
import "./navbar.css";

const Navbar = ()=>{

    return (
        <div className="navbar w-full overflow-hidden flex md:gap-12 md:p-10 sticky top-0 z-10 items-center flex-row flex-wrap justify-between md:flex-col bg-white transition-all md:relative">

            <Title/>
            <Navlist/>
            <SearchBar/>
            <BackGround/>
            
        </div>
    )
}

export default Navbar