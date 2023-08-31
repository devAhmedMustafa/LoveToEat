import { useState, useEffect } from "react";
import "./food-options.css";
import pepsiIcon from "../../assets/icons/pepsi.png";
import friesIcon from "../../assets/icons/french-fries.png";

const FoodOptions = ()=>{

    const [small, setSmall] = useState(true);
    const [med, setMed] = useState(false);
    const [large, setLarge] = useState(false);
    const [pepsi, setPepsi] = useState(false);
    const [fries, setFries] = useState(false);

    useEffect(()=>{
        const pepsiCan = document.querySelector('.can');
        const friesBox = document.querySelector('.friesBox');

        if (pepsi){
            document.querySelector('.pepsi').style.backgroundColor = '#1b1b1b';
            pepsiCan.style.left = '5px';
            pepsiCan.style.transform = 'rotate(-15deg)';

        } else {
            document.querySelector(".pepsi").style.backgroundColor= '#f6f6f6';
            pepsiCan.style.left = '-150px';
            pepsiCan.style.transform = 'rotate(-180deg)';
        }
        if (fries){
            document.querySelector('.fries').style.backgroundColor = '#1b1b1b';
            friesBox.style.right = '5px';
            friesBox.style.transform = 'rotate(45deg)';
        } else {
            document.querySelector(".fries").style.backgroundColor= '#f6f6f6';
            friesBox.style.right = '-150px';
            friesBox.style.transform = 'rotate(180deg)';
        }
    })

    useEffect(()=>{

        const smallS = document.querySelector('.small');
        const medS = document.querySelector('.medium');
        const largeS = document.querySelector('.large');

        if (small){
            smallS.style.backgroundColor = '#1b1b1b'; smallS.style.color = 'white';
            medS.style.backgroundColor = '#f6f6f6'; medS.style.color = 'black';
            largeS.style.backgroundColor = '#f6f6f6'; largeS.style.color = 'black';
            document.querySelector('.foodImg').style.width = '70%';
        }
        else if(med){
            smallS.style.backgroundColor = '#f6f6f6'; smallS.style.color = 'black';
            medS.style.backgroundColor = '#1b1b1b'; medS.style.color = 'white';
            largeS.style.backgroundColor = '#f6f6f6'; largeS.style.color = 'black';
            document.querySelector('.foodImg').style.width = '85%';
        }
        else if(large){
            smallS.style.backgroundColor = '#f6f6f6'; smallS.style.color = 'black';
            medS.style.backgroundColor = '#f6f6f6'; medS.style.color = 'black'; 
            largeS.style.backgroundColor = '#1b1b1b'; largeS.style.color = 'white';
            document.querySelector('.foodImg').style.width = '100%';
        }
    }, [small, med, large])

    return (
        <div className="flex flex-col gap-1 options">
            <ul className="sizes">
                <li className="small" onClick={()=>{
                    setSmall(true);
                    setMed(false);
                    setLarge(false);
                }}>S</li>
                <li className="medium" onClick={()=>{
                    setSmall(false);
                    setMed(true);
                    setLarge(false);
                }}>M</li>
                <li className="large" onClick={()=>{
                    setSmall(false);
                    setMed(false);
                    setLarge(true);
                }}>L</li>
            </ul>
            <ul>
                <li className='pepsi' onClick={()=>{
                    setPepsi(!pepsi)
                }}><img className="m-auto w-5" src={pepsiIcon} alt="Pepsi Can"/></li>

                <li className='fries' onClick={()=>{
                    setFries(!fries)
                }}><img className="m-auto w-5" src={friesIcon} alt="Pepsi Can"/></li>
            </ul>
        </div>
    )
}

export default FoodOptions