import image1 from '../../assets/images/delfina-cocciardi-NDPBK-d-03M-unsplash.jpg';
import image2 from '../../assets/images/fernando-andrade-kyZ2WhdSuYs-unsplash.jpg';
import image3 from '../../assets/images/ivana-cajina-qvQdLikf7wk-unsplash.jpg';
import image4 from '../../assets/images/mae-mu-Pvclb-iHHYY-unsplash.jpg';
import image5 from '../../assets/images/masimo-grabar-NzHRSLhc6Cs-unsplash.jpg';

const BackGround = ()=>{
    return (
        <div className='w-full absolute top-0 left-0 hidden md:block' style={{zIndex: -1}}>
            <div className='w-full h-[400px] overflow-hidden flex flex-row'>
                <Img asset={image1}/>
                <Img asset={image2}/>
                <Img asset={image3}/>
                <Img asset={image4}/>
                <Img asset={image5}/>
            </div>

            <div className='bg-[#00000065] absolute top-0 left-0 w-full h-full'></div>

            
        </div>
    )
}

const Img = (props)=>{
    return (
        <div className='w-[25%]'>
            <img className="w-[100%] h-[100%] object-cover" src={props.asset}/>
        </div>
    )
}

export default BackGround