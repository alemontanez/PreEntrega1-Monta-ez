import ButtonComponent from "./ButtonComponent"
import CartWidget from "./CartWidget"
import './NavBar.css'

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div>
                <ButtonComponent name='Marca'/>
            </div>
            <div>
                <ButtonComponent name='Inicio'/>
                <ButtonComponent name='Sobre Nosotros'/>
                <ButtonComponent name='Contacto'/>
            </div>
            <div>
                <CartWidget/>   
            </div>
        </nav>
        </>
    )
}