import Logo from "../components/Logo"
import SearchBar from "../components/navbar/SearchBar2"

const MiniNav = ()=>{
    return (
        <div className="flex justify-between flex-row items-center p-4 rounded-full bg-[#131313b4]">
            <SearchBar/>
            <Logo width="60"/>
        </div>
    )
}

export default MiniNav