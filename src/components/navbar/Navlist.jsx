import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navlist = ()=>{

    const [menu, menuTab] = useState(false);

    return (
        <div className="relative">
            <button onClick={()=>{

                let MenuList = document.querySelector('.menu');
                let menu_btn = document.querySelector('.menu_btn');
                if(!menu){
                    MenuList.style.display = 'flex';
                    menu_btn.style.rotate = '90deg';
                    menuTab(true);

                }
                else{
                    let MenuList = document.querySelector('.menu');
                    let menu_btn = document.querySelector('.menu_btn');
                    MenuList.style.display = 'none';
                    menu_btn.style.rotate = '0deg';
                    menuTab(false);
                }
            }} className="m-6 bg-inherit border-none text-2xl text-black transition-all menu_btn md:hidden">
                <i className="fa-solid fa-bars"></i>
            </button>

            <ul className="text-[#1f1f1f] hidden bg-white border-2 border-solid border-dark_red list-none text-3xl absolute top-4 left-20 flex-row gap-8 p-1 rounded-md menu md:flex md:relative md:bg-inherit md:border-none md:text-white md:left-0 md:top-0">
                <li><Link to='/'><i className="fa-solid fa-house"></i></Link></li>
                <li><i className="fa-solid fa-cart-shopping"></i></li>
                <li><i className="fa-solid fa-receipt"></i></li>
                <li><i className="fa-solid fa-handshake-angle"></i></li>
            </ul>
        </div>
        
    )
}

export default Navlist;