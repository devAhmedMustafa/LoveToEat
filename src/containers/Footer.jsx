import { useState } from "react"

const Footer = ()=>{
    const [branchesTab, tabOpen] = useState(false);
    return (
        <div style={{bottom: 'auto'}} className="bg-black text-gray p-5 flex flex-col gap-2 md:gap-10 md:flex-row justify-center">

            <div className="branches md:w-[25%]">
                <div className="flex flex-row justify-between" onClick={()=>{
                        switch(branchesTab){
                            case false:
                                document.querySelector('.branches-list').style.height = 'fit-content';
                                document.querySelector('.fa-caret-down').style.transform = 'rotate(180deg)';
                                tabOpen(true);
                                break;
                            case true:
                                document.querySelector('.branches-list').style.height = 0;
                                tabOpen(false);
                                document.querySelector('.fa-caret-down').style.transform = 'rotate(0deg)';
                                break;
                        }
                    }}>
                    <h2>الفروع</h2>
                    <i className="fa-solid fa-caret-down h-fit text-gray text-xl transition-all duration-[0.2s] md:hidden"></i>
                </div>
                <ul className="text-sm h-0 overflow-hidden flex flex-col gap-2 text-[#bdbdbd] px-3 py-1 branches-list md:h-fit md:flex-row md:justify-between">
                    <li>الهرم</li>
                    <li>المهندسين</li>
                    <li>الشيخ زايد</li>
                    <li>مصر الجديدة</li>
                </ul>
            </div>

            <hr className="opacity-20"/>

            <div className="social-media flex items-center justify-between md:w-[25%]">
                <h2>تابعنا علي</h2>
                <ul className="text-2xl flex flex-row gap-4">
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-x-twitter"></i></li>
                    <li><i className="fa-brands fa-tiktok"></i></li>
                </ul>
            </div>

            <hr className="opacity-20"/>

            <div className="customer-services flex justify-around text- md:w-[25%] md:items-center">
                <p>اتصل بنا <i className="fa-solid fa-phone"></i></p>
                <p>ارسل شكوي <i className="fa-solid fa-envelope"></i></p>
                <p>خدمة العملاء <i className="fa-solid fa-headset"></i></p>
            </div>

        </div>
    )
}

export default Footer