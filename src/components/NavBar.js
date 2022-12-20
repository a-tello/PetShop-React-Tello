import logo from '../logo-adopciones-quilmes.png'
import CartWidget from './CartWidget'

export default function NavBar() {
    return(
    <nav>
        <div className='navBarLogo'>
            <img src={logo} alt='logo Adopciones Quilmes' />
        </div>
        <div>
            <ul className='navBarItems'>
                <li><a href='#' data-item='Accesorios'>Accesorios</a></li>
                <li><a href='#' data-item='Alimentos'>Alimentos</a></li>
                <li><a href='#' data-item='Estética e Higiene'>Estética e Higiene</a></li>
                <li><a href='#' data-item='Juguetes'>Juguetes</a></li>
                <li><a href='#' data-item='Salud'>Salud</a></li>
            </ul>
        </div>
        <CartWidget quantity={5} />
    </nav>
    )
}