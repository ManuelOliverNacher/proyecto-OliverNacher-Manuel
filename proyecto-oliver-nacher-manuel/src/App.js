import React from "react";
import NavBar from "./components/NavBar"
import Logo from "./components/Logo"
import CartWidget from "./components/CartWidget"

import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
      <div> 
      <div className="Header">
          <header className="Navbar-contenido">
          <div className="Navbar-logo">
                    <Logo />
              </div>
              <div>
                    <NavBar />
              </div>
              <div className="Navbar-cart ">
                    <CartWidget />
              </div>
          </header>
          </div>
         <>
         <ItemListContainer
           />
         </> 
         
          </div>
      
  );

}

export default App;

