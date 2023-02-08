import * as React from 'react';
import logo from '../../logo-adopciones-quilmes.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css'


function NavBar() {


  return (
    <nav className='navBar'>
        <Link to='/' className='container-logo'>
            <img className='logo' src={logo} alt=' logo Adopciones Quilmes' />
            <span className='logo-name'>AQ PetShop</span>
        </Link>
        <ul className='options-menu'>
            <li>
                <NavLink to='/category/accesorios'>ACCESORIOS</NavLink>
            </li>
            <li>
                <NavLink to='/category/alimentos'>ALIMENTOS</NavLink>
            </li>
            <li>
                <NavLink to='/category/higiene'>HIGIENE</NavLink>
            </li>
            <li>
                <NavLink to='/category/juguetes'>JUGUETES</NavLink>
            </li>
            <li>
                <NavLink to='/category/salud'>SALUD</NavLink>
            </li>
        </ul>
        <CartWidget />

    </nav>
    
  );
}
export default NavBar;
