import { useState } from 'react';
import './navbar.css';
import CartWidget from './CartWidget';


function Navbar() {

  return (
    <nav>
      <ul>
        <li><img className='logo' src="/images/logotrp.png" alt="logo" /></li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Dama</a></li>
        <li><a href="#">Caballero</a></li>
        <li><a href="#">Accesorios</a></li>
        <li> 
          <a href="">
            <CartWidget />
          </a></li>
      </ul>
    </nav>
  );
}

export default Navbar;