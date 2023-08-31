import { useEffect } from 'react';
import title from '../../assets/title.png';
import titleRed from '../../assets/titleRed.png';

const Title = ()=>{

    const backwarded = {top: -150};

    useEffect(()=>{
        document.querySelector('.head_logo').style.top = 0;
    }, [])


    return (
        <div className='head_logo relative transition-all duration-[2s]' style={backwarded}>
            <img src={title} className='mb-6 w-[420px] hidden md:block'/>
            <img src={titleRed} className='m-6 w-[150px] block md:hidden'/>
        </div>
    )
}

export default Title