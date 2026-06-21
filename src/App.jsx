import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Outfits from './Pages/Outfits'
import GroceriesPage from './Pages/GroceriesPage'
import Jewellery from './Pages/Jewellery'
import BeautyProducts from './Pages/BeautyProducts'
import Footer from './Components/Footer'
import CheckAddToCart from './Pages/CheckAddToCart'
import LoginPage from './Pages/LoginPage'


function App() {
  const [cart, setCart] = useState([]);
   const RemoveFromCart=(id)=>{
    const updateCart= cart.filter(item => item.id !== id);
     setCart(updateCart);
   }

  return (
    <>
      <Navbar cart={cart} ></Navbar>
      <Routes>
        <Route path='/' element={<Home cart={cart} setCart={setCart} RemoveFromCart={RemoveFromCart}/>}></Route>
        <Route path='outfits' element={<Outfits/>}></Route>
         <Route path='/groceries' element={<GroceriesPage cart={cart} setCart={setCart}/>}></Route>
          <Route path='/beauty' element={<BeautyProducts/>}></Route>
          <Route path='/jewellery' element={<Jewellery cart={cart} setCart={setCart}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/checkaddtocart' element={<CheckAddToCart cart={cart} setCart={setCart} RemoveFromCart={RemoveFromCart}/>}></Route>
          <Route path='/loginform' element={<LoginPage/>}></Route>
      </Routes> 
      <Footer></Footer>
      

    </>
  )
}

export default App
