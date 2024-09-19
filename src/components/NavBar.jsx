import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
            <Link to={'/'}>
              <button>Marca 👕</button>
            </Link>
        </div>
        <div>
          <Link to={'/'}>
            <button>Inicio</button>
          </Link>
          <Link to={'/category/verano'}>
            <button>Verano</button>
          </Link>
          <Link to={'/category/invierno'}>
            <button>Invierno</button>
          </Link>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  )
}