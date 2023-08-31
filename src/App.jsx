import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./containers/Footer";
import Foodlist from './pages/Foodlist';
import FoodPage from './pages/FoodPage';


function App() {


  return (
    <BrowserRouter>
      <div className='main-container'>
        <Routes>  
          <Route path='/' exact Component={Home}/>
          <Route path='/:category' Component={Foodlist}/>
          <Route path='/:category/:food' Component={FoodPage}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  )
}

export default App
